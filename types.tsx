import { Exercise, Log, User, Workout, Workoutline } from "@prisma/client";
import { SVGProps } from "react";
export interface AppProps {
  isWorkout?: Boolean;
  workouts?: Workout[];
  exercise?: exercieceType;
  exercises?: exercieceType[];
  otherExercises?: Exercise[];
  otherWorkouts?: Workout[];
  workoutline?: Workoutline;
  profile?: User;
  children?: JSX.Element;
  logs?: historyType[];
  logGroups?: { name: string; logs: historyType[]}[];
  selectedDay?: Date;
}
export interface RecType {
  recSet: number;
  recReps: number;
  recWeights: number;
}
export interface userCreate {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  age: number;
  height: number;
  weight: number;
  gender: string;
  id?: string;
}

export interface Person {
  id: number;
  name: string;
  avatar: string;
}
export interface MenuType {
  name: string;
  href: string;
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  current: Boolean;
}
export interface userNavigationType {
  name: string;
  href: string;
}

export interface LogCreateType {
  step: number;
  userReps: number;
  userWeights: number;
  workoutlineId: number;
  userId: string;
}

export interface exercieceType extends Exercise {
  workoutlines: Workoutline[];
}
export interface workoutlineType extends Workoutline {
  workout: Workout;
  exercise: Exercise;
}

export interface historyType extends Log {
  workoutline: workoutlineType;
}
export interface progressType {
  bgColor: string;
  name: string;
  lbs: number;
}

