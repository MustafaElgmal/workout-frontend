import React from "react";
import { Fragment } from "react";
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  MapPinIcon,
} from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import WorkoutHistory from "../components/workoutHistory";
import { classNames } from "../constants/index";

const days = [
  { date: "2022-01-01", isCurrentMonth: true, isSelected: true, isToday: true },
  {
    date: "2022-01-02",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-03",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-04",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-05",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-06",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-07",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-08",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-09",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-10",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-11",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-12",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-13",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-14",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-15",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-16",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-17",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-18",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-19",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-20",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-21",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-22",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-23",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-24",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-25",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-26",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-27",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-28",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-29",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-30",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
  {
    date: "2022-01-31",
    isCurrentMonth: true,
    isSelected: false,
    isToday: false,
  },
];

const Calender = () => {
  return (
    <div className="container mx-auto sm:px-6 lg:px-8 bg-zinc-100 py-10 min-h-screen">
      <h1 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
        Workout history
      </h1>
      <div className="lg:grid lg:grid-cols-12 lg:gap-x-16">
        <div className="mt-10 text-center lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:mt-9 xl:col-start-9">
          <div className="flex items-center text-gray-900">
            <button
              type="button"
              className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="flex-auto font-semibold">January</div>
            <button
              type="button"
              className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Next month</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 grid grid-cols-7 text-xs leading-6 text-gray-500">
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
            <div>S</div>
          </div>
          <div className="isolate mt-2 grid grid-cols-7 gap-px rounded-lg bg-gray-200 text-sm shadow ring-1 ring-gray-200">
            {days.map((day, dayIdx) => (
              <button
                key={day.date}
                type="button"
                className={classNames(
                  "py-1.5 hover:bg-gray-100 focus:z-10",
                  day.isCurrentMonth ? "bg-white" : "bg-gray-50",
                  day.isSelected || day.isToday ? "font-semibold" : "",
                  day.isSelected ? "text-white" : "",
                  !day.isSelected && day.isCurrentMonth && !day.isToday
                    ? "text-gray-900"
                    : "first-letter:",
                  !day.isSelected && !day.isCurrentMonth && !day.isToday
                    ? "text-gray-400"
                    : "",
                  day.isToday && !day.isSelected ? "text-red-600" : "",
                  dayIdx === 0 ? "rounded-tl-lg" : "",
                  dayIdx === 6 ? "rounded-tr-lg" : "",
                  dayIdx === days.length - 7 ? "rounded-bl-lg" : "",
                  dayIdx === days.length - 1 ? "rounded-br-lg" : ""
                )}
              >
                <time
                  dateTime={day.date}
                  className={classNames(
                    "mx-auto flex h-7 w-7 items-center justify-center rounded-full",
                    day.isSelected && day.isToday ? "bg-red-600" : "",
                    day.isSelected && !day.isToday ? "bg-gray-900" : ""
                  )}
                >
                  {day.date.split("-").pop()?.replace(/^0/, "")}
                </time>
              </button>
            ))}
          </div>
        </div>
        <ol className="m-5 divide-y divide-gray-100 text-sm leading-6 lg:col-span-7 xl:col-span-8">
          <div className="sticky bg-[#F9FAFB] p-5 flex w-1\2">
            <div className="w-1/2">
              <h2 className="font-semibold ">Workout</h2>
              <span>Cardio Day</span>
            </div>
            <div className="w-1/2">
              <h2 className="font-semibold ">Date</h2>
              <span>January 14, 2021</span>
            </div>
          </div>
          <WorkoutHistory />
        </ol>
      </div>
    </div>
  );
};

export default Calender;
