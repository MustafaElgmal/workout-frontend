import { NextPage } from "next";
import Workouts from "../../components/programs";
import { workouts } from '../../constants/index'
import { AppProps } from "../../types";
import { prisma } from '../../lib/prisma'
export async function getStaticProps() {
  const workouts = await prisma.workout.findMany()
  return {
    props: { workouts }
  }
}

const Workout = ({ workouts }: AppProps) => {
  return (
    <div className="container mx-auto sm:px-6 lg:px-8 bg-zinc-100 py-10 min-h-screen">
      <div className="text-center font-bold	">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 ">
          Browse our carefully curated Workouts
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
          Thoughtfully designed workouts meant to push you to the absolute
          limits.
        </p>
      </div>
      <div>
        <Workouts programs={workouts} isWorkout={true} />
      </div>
    </div>
  );
};

export default Workout;
