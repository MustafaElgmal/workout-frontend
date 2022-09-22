import { Exercise, User, Workout, Workoutline } from "@prisma/client";
import { SVGProps } from "react";
export interface AppProps {
  programs?: Workout[] | Exercise[];
  isWorkout?: Boolean;
  workouts?: Workout[];
  exercise?: exercieceType;
  exercises?: Exercise[];
  otherExercises?: Exercise[];
  otherWorkouts?: Workout[];
  workoutline?: Workoutline 
}
export interface RecType{
  recSet:number,
   recReps: number,
   recWeights: number
  profile?:User
  children?:JSX.Element
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


export interface exercieceType extends Exercise {
  workoutlines: Workoutline[];
}
