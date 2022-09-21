import { Exercise, Workout } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Exercises from '../../../../components/programs'
import { exercieceType, workoutType } from "../../../../types";
import { findExercieces,findOtherWorkouts,getCategoryIdFromPath } from "../../../../utils/functions";

const Exercise = () => {
  const [otherWorkouts, setOtherWorkouts] = useState<Workout[]>([]);
  const [exercises, setExercises] = useState<Exercise[]>();

  const router = useRouter();
  useEffect(() => {
    const id = getCategoryIdFromPath(router.asPath);
    findExercieces(setExercises, id);
    findOtherWorkouts(setOtherWorkouts,id)
  }, []);
  
  return (
    <div className="container mx-auto sm:px-6 lg:px-8 bg-zinc-100 py-10 min-h-screen">
      <div className="text-center font-bold	">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 ">
          Browse our carefully curated Exercises
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
          Thoughtfully designed exercises meant to push you to the absolute
          limits.
        </p>
      </div>
      <div>
        <Exercises programs={exercises} isWorkout={false} />
      </div>

      <div className="mt-10">
        <h2 className="font-bold text-xl">Other workouts</h2>
        <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {otherWorkouts.map((exerciece) => (
            <Link key={exerciece.id} href={exerciece.href}>
              <a>
                
                <div className="relative">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      src={exerciece.imageSrc}
                      alt={exerciece.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">
                      {exerciece.name}
                    </p>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Exercise;
