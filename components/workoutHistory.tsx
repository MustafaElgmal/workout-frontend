import Link from "next/link";
import React from "react";
import { AppProps } from "../types";


const WorkoutHistory = ({logs}:AppProps) => {
  return (
    <>
      {logs?.map((log) => (
        <div className="bg-[#F9FAFB] flex space-x-10 mt-6" key={log.id}>
          <div className="w-1/3">
            <img className="imgbackexer" src={log.workoutline.exercise.imageUrl} />
          </div>
          <div className="w-3/5">
            <h2 className="font-bold">{log.workoutline.exercise.name}</h2>
            <p>{log.workoutline.exercise.description}</p>
            <Link href={log.workoutline.exercise.href}>
              <a className="font-bold">View Exercise</a>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default WorkoutHistory;
