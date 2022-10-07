import { userNavigationType } from "./../types";

import {
  BoltIcon,
  CalendarIcon,
  ChartBarIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";
import { MenuType } from "../types";

export const gender = [
  {
    id: 1,
    name: "Male",
    avatar:
      "https://vsehzqgmugndfzhsvknp.supabase.co/storage/v1/object/sign/images/boy.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvYm95LnBuZyIsImlhdCI6MTY2MzcxMjgzMiwiZXhwIjoxOTc5MDcyODMyfQ.iwkoXkEPZV7YkYxWaHkcGXM7tSLhcYs9mKQAMFNFRu8",
  },
  {
    id: 2,
    name: "Female",
    avatar:
      "https://vsehzqgmugndfzhsvknp.supabase.co/storage/v1/object/sign/images/girl.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJpbWFnZXMvZ2lybC5wbmciLCJpYXQiOjE2NjM3MTI5MDEsImV4cCI6MTk3OTA3MjkwMX0.5SePdRxSxEHVE9JVHCXwTvwT36aUbeUAXY2MHm8zIKo",
  },
];

export const progress = [
  { bgColor: "bg-red-600", name: "Squat", lbs: 0 },
  { bgColor: "bg-black", name: "Bicep Curl", lbs: 0 },
  { bgColor: "bg-blue-600", name: "Bench Press", lbs: 0 },
  { bgColor: "bg-green-600", name: "Triceps Curl", lbs: 0 },
];
export const navigation: MenuType[] = [
  { name: "Dashboard", href: "/", icon: HomeIcon, current: true },
  {
    name: "Browse Workouts",
    href: "/workouts",
    icon: BoltIcon,
    current: false,
  },
  { name: "Calendar", href: "/calendar", icon: CalendarIcon, current: false },
];
export const userNavigation: userNavigationType[] = [
  { name: "Sign out", href: "/signin" },
];

export const colStartClass: string[] = [
  "",
  "col-start-2",
  "col-start-3",
  "col-start-4",
  "col-start-5",
  "col-start-6",
  "col-start-7",
];

export const classNames = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};
export const data = {
  stockFullName: "SW Limited.",
  stockShortName: "ASX:SFW",
  price: {
    current: 2.32,
    open: 2.23,
    low: 2.215,
    high: 2.325,
    cap: 93765011,
    ratio: 20.1,
    dividend: 1.67,
  },
  chartData: {
    labels: ["January", "February", "March", "April", "May", "July"],
    data: [260, 90, 150, 200, 300, 200],
  },
};
