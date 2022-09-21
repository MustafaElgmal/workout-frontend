import { Exercise, Workout } from "@prisma/client";
import { SVGProps } from "react";
export interface AppProps {
  programs?:Workout[] |Exercise[],
  isWorkout?:Boolean
  workouts?:Workout[]
}
export interface userCreate{
  firstName:string
  lastName:string
  email:string
  password:string
  age:number
  height:number
  weight:number 
  gender : string
}
export interface userType extends userCreate{
  id:number 
  imageUrl?:string
  imageAlt?:string
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
export interface workoutType {
  id: number;
  name: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}
export interface  exercieceType extends workoutType {
  video: string;
  workoutId:number
}
