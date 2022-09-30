import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { AppProps } from "../types";
import ExerciseHistory from "./exercisesHistory";

const WorkoutHistory = ({ logGroups, selectedDay }: AppProps) => {
  const [open, setOpen] = useState<Boolean>(false);


  useEffect(() => {
    if(logGroups?.length!>0){
      setOpen(true)
    }else{
      setOpen(false)
    }
  }, [logGroups]);
  return (
    <>
      {open ? (
        <>
          {logGroups?.map((group) => (
            <ol
              className="m-5 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-7"
              key={group.name}
            >
              <div className="sticky top-20 bg-[#F9FAFB] p-5 flex w-1\2">
                <div className="w-1/2">
                  <h2 className="font-semibold ">Workout</h2>
                  <span>{group.name}</span>
                </div>
                <div className="w-1/2">
                  <h2 className="font-semibold ">Date</h2>
                  <span>{format(selectedDay!, "MMMM d yyyy")}</span>
                </div>
              </div>
              <ExerciseHistory logs={group.logs} />
            </ol>
          ))}
        </>
      ) : (
        <ol className="m-5 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-7">
          <div className="sticky top-20 bg-[#F9FAFB] p-5 flex w-1\2">
            <div className="w-1/2">
              <h2 className="font-semibold ">Workout</h2>
              <span>------</span>
            </div>
            <div className="w-1/2">
              <h2 className="font-semibold ">Date</h2>
              <span>{format(selectedDay!, "MMMM d yyyy")}</span>
            </div>
          </div>
        </ol>
      )}
    </>
  );
};

export default WorkoutHistory;
