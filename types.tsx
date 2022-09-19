import { SVGProps } from "react";

export interface AppProps {
  programs?:workoutType[] | exercieceType[],
  isWorkout?:Boolean
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
