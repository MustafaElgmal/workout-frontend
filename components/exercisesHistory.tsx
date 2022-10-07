/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AppProps, historyType } from "../types";
import { logsUniqe } from "../utils/functions";


const ExerciseHistory = ({logs}:AppProps) => {
  const [uniqeLogs,setUniqeLogs]=useState<{ name: string; logs: historyType[]}[]>([])
  useEffect(()=>{
    logsUniqe(logs!,setUniqeLogs)
  },[])
  return (
    <>
      {uniqeLogs?.map((log) => (
        <div className="bg-[#F9FAFB] flex space-x-10 mt-6" key={log.name}>
          <div className="w-1/3" >
            <img className="imgbackexer" src={log.logs[0].workoutline.exercise.imageUrl} />
          </div>
          <div className="w-3/5">
            <h2 className="font-bold">{log.name}</h2>
            {log.logs.map((user)=>(<p key={user.id}>{`${user.userReps} reps . ${user.userWeights} kg`}</p>))}
            <Link href={log.logs[0].workoutline.exercise.href}>
              <a className="font-bold">View Exercise</a>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default ExerciseHistory ;
