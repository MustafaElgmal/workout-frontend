import { workoutType } from './../types';
import { exercieceType } from "../types";

export const gender = [
    {
      id: 1,
      name: "Male",
      avatar: "./assets/boy.png",
    },
    {
      id: 2,
      name: "Female",
      avatar: "./assets/girl.png",
    },
  ];

  export const projects = [
    { name: "rounded-md", lbs: 255, bgColor: "bg-red-600" },
    { name: "Bicep Curl", lbs: 55, bgColor: "bg-black" },
    { name: "Bench Press", lbs: 150, bgColor: "bg-blue-600" },
    { name: "Overhead Press", lbs: 90, bgColor: "bg-green-600" },
  ];

  export const exercises:exercieceType[] = [
    {
      id: 1,
      workoutId:2,
      name: "Knee High Jumps",
      href: "/workouts/exercises/1",
      description: "3 sets x 20 reps",
      imageSrc: "https://images.unsplash.com/photo-1599552683573-9dc48255fe85?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdvcmtvdXR8ZW58MHx8MHx8",
      imageAlt:
        "Person using a pen to cross a task off a productivity paper card.",
        video:
        "https://www.youtube.com/embed/tx5rgpDAJRI"
    },
    {
      id: 3,
      workoutId:4,
      name: "Soccer Jumps",
      href: "/workouts/exercises/3",
      description: "5 sets x 15 reps",
      imageSrc: "https://images.unsplash.com/photo-1618073194091-9b24230ddb2a?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fHdvcmtvdXR8ZW58MHx8MHx8",
      imageAlt:
        "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
        video:
        "https://www.youtube.com/embed/tx5rgpDAJRI"
    }
  
  ];
  export const workouts:workoutType[] = [
   
    {
      id: 2,
      name: "Ab Smasher",
      href:'/workouts/2/exercises',
      description: "5 sets x 15 reps",
      imageSrc: "https://images.unsplash.com/photo-1601986313624-28c11ac26334?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fHdvcmtvdXR8ZW58MHx8MHx8",
      imageAlt: "Paper card sitting upright in walnut card holder on desk.",

    },
    {
      id: 4,
      name: "Yoga",
      href:'/workouts/4/exercises',
      description: "Relax for 40 mins",
      imageSrc: "https://images.unsplash.com/photo-1566501206188-5dd0cf160a0e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHlvZ2F8ZW58MHx8MHx8",
      imageAlt:
        "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
    },
  ];

  export const classNames=(...classes: string[])=> {
    return classes.filter(Boolean).join(" ");
  }