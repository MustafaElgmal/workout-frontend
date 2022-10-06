import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  eachDayOfInterval,
  endOfMonth,
  format,
  isEqual,
  isSameMonth,
  isToday,
  startOfToday,
  endOfWeek,
  parse,
  add,
  getDay,
  startOfWeek,
} from "date-fns";
import _ from "lodash";

import { classNames, colStartClass } from "../constants/index";
import Layout from "../components/layout";
import { getUser, withPageAuth } from "@supabase/auth-helpers-nextjs";
import { prisma } from "../lib/prisma";
import { AppProps, historyType } from "../types";
import { GetServerSideProps } from "next";
import { filterAllhistoryByDay } from "../utils/functions";
import WorkoutHistory from "../components/workoutHistory";
export const getServerSideProps: GetServerSideProps = withPageAuth({
  redirectTo: "/signin",
  async getServerSideProps(ctx) {
    const { user } = await getUser(ctx);
    const logs = await prisma.log.findMany({
      where: { userId: user.id },
      include: { workoutline: { include: { workout: true, exercise: true } } },
    });
    return { props: { logs: JSON.parse(JSON.stringify(logs)) } };
  },
});

const Calender = ({ logs }: AppProps) => {
  const [logsFilter, setLogs] =
    useState<{ name: string; logs: historyType[] }[]>();
  const [today, settoday] = useState<Date>(startOfToday());
  const [selectedDay, setSelectedDay] = useState<Date>(today);
  const [currentMonth, setCurrentMonth] = useState<string>(
    format(today, "MMM-yyyy")
  );
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());
  const newDays = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });

  console.log(logsFilter);
  function prevMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  useEffect(() => {
    filterAllhistoryByDay(logs!, selectedDay, setLogs);
  }, [selectedDay]);

  return (
    <Layout>
      <div className="container mx-auto sm:px-6 lg:px-8 bg-zinc-100 py-10 min-h-screen">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          Workout history
        </h1>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
          <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
            <div className="flex items-center text-gray-900">
              <button
                type="button"
                onClick={prevMonth}
                className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Previous month</span>
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              </button>
              <div className="flex-auto font-semibold">
                {format(firstDayCurrentMonth, "MMMM yyyy")}
              </div>
              <button
                onClick={nextMonth}
                type="button"
                className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Next month</span>
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className="mt-2 grid grid-cols-7 text-sm">
              {newDays.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(
                    dayIdx === 0 ? colStartClass[getDay(day)] : "",
                    "py-2"
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) ? "text-white" : "",
                      !isEqual(day, selectedDay) && isToday(day)
                        ? "text-red-500"
                        : "",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth)
                        ? "text-gray-900"
                        : "",
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth)
                        ? "text-gray-400"
                        : "",
                      isEqual(day, selectedDay) && isToday(day)
                        ? "bg-red-500"
                        : "",
                      isEqual(day, selectedDay) && !isToday(day)
                        ? "bg-gray-900"
                        : "",
                      !isEqual(day, selectedDay) ? "hover:bg-gray-200" : "",
                      isEqual(day, selectedDay) || isToday(day)
                        ? "font-semibold"
                        : "",
                      "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
                    )}
                  >
                    <time dateTime={format(day, "yyyy-MM-dd")}>
                      {format(day, "d")}
                    </time>
                  </button>
                </div>
              ))}
            </div>
          </div>
          <WorkoutHistory selectedDay={selectedDay} logGroups={logsFilter} />
        </div>
      </div>
    </Layout>
  );
};

export default Calender;
