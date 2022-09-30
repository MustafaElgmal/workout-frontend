import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import React, { useState } from "react";
import Table from "../../../../components/table";
import { AppProps } from "../../../../types";
import { prisma } from "../../../../lib/prisma";
import Layout from "../../../../components/layout";
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
    include: { workoutlines: {where:{workoutId:+params?.workout!}} },
  });
  const otherExercises = await prisma.exercise.findMany({
    where: {
      workoutlines: {
        some: {
          workoutId: +params?.workout!,
          exerciseId: { not: +params?.exercise! },
        },
      },
    },
    include: { workoutlines: {where:{workoutId:+params?.workout!}} },
  });

  return { props: { exercise, otherExercises } };
};

const ExercieceDetails = ({ exercise, otherExercises }: AppProps) => {
  return (
    <Layout>
      <div className="container mx-auto sm:px-6 lg:px-8 bg-zinc-100 py-10 min-h-screen">
        <div className="flex lg:flex-nowrap flex-wrap">
          <div className="md:w-full w-1/2 mx-3">
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
          <div className="text-xl md:w-full w/1/2 mx-3 ">
            <h1 className="font-extrabold text-2xl">{exercise?.name}</h1>
            <p className="mt-2">{`${exercise?.workoutlines[0].recSets} sets X ${exercise?.workoutlines[0].recWeights} reps `}</p>
            <p className="mt-2">{exercise?.description}</p>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="font-bold text-xl">Log exerciece</h2>
          <div className="flex   items-center flex-wrap lg:flex-nowrap items-center space-y-5 justify-center">
            <div className="w-full  lg:w-2/3 mx-10 ">
            <Table workoutline={exercise?.workoutlines[0]} />
            </div>
            <div className="text-center md:w-1/3 w-full mx-10  ">
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
