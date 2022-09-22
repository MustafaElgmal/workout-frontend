import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import React, { useState } from "react";
import Table from "../../../../components/table";
import { AppProps } from "../../../../types";
import { prisma } from "../../../../lib/prisma";
import Layout from "../../../../components/layout";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Timer from "../../../../components/timer";

export const getStaticPaths: GetStaticPaths = async () => {
  const workoutlines = await prisma.workoutline.findMany();
  const paths = workoutlines.map((workoutline) => {
    return {
      params: {
        exercise: workoutline.exerciseId.toString(),
        workout: workoutline.workoutId.toString(),
      },
    };
  });
  return { paths, fallback: false };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {

  const exercise = await prisma.exercise.findFirst({
    where: {
      workoutlines: {
        some: { workoutId: +params?.workout!, exerciseId: +params?.exercise! },
      },
    },
    include: { workoutlines: true },
  });
  const otherExercises = await prisma.exercise.findMany({
    where: {
      workoutlines: {
        some: { workoutId: +params?.workout!, exerciseId: +params?.exercise! },
      },
    },
  });

  return { props: { exercise, otherExercises } };
};

const ExercieceDetails = ({ exercise, otherExercises }: AppProps) => {

  return (
    <Layout>
      <div className="container mx-auto sm:px-6 lg:px-8 bg-zinc-100 py-10 min-h-screen">
        <div className="flex space-x-5">
          <div>
            <iframe
              width="560"
              height="315"
              src={`${exercise?.videoUrl}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="text-xl">
            <h1 className="font-extrabold text-2xl">{exercise?.name}</h1>
            <p>{`${exercise?.workoutlines[0].recSets} sets X ${exercise?.workoutlines[0].recWeights} reps `}</p>
            <p>{exercise?.description}</p>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="font-bold text-xl">Log exerciece</h2>
          <div className="flex space-x-20 items-center">
            <Table workoutline={exercise?.workoutlines[0]} />
            <div className="text-center">

              <Timer />

            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="font-bold text-xl">Other exercieces</h2>
          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {otherExercises?.map((exercise) => (
              <Link key={exercise.id} href={exercise.href}>
                <a>
                  <div className="relative">
                    <div className="relative h-72 w-full overflow-hidden rounded-lg">
                      <img
                        src={exercise.imageUrl}
                        alt={exercise.imageAlt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                      <div
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                      />
                      <p className="relative text-lg font-semibold text-white">
                        {exercise.name}
                      </p>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExercieceDetails;
