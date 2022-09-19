import Link from "next/link";
import React from "react";
const exercises = [
  {
    id:4,
    workoutId:2,
    name: "Jumping jacks",
    description: "10 reps·20 Kg 10 reps·30 Kg 10 reps·30 Kg 100 reps·4 Kg",
    href: "/workouts/2/exercises/4",
    imageSrc:
      "https://images.unsplash.com/photo-1625199911408-9eb7580d8ed9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGp1bXBpbmd8ZW58MHx8MHx8",
      imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
      video:
      "https://www.youtube.com/embed/tx5rgpDAJRI"
  },
  {
    id:5,
    workoutId:2,
    name: "30 min run",
    description:
      "This durable double-walled insulated tumbler keeps your beverages at the perfect temperature all day long. Hot, cold, or even lukewarm if you &apos; re weird like that, this bottle is ready for your next adventure",
    href: "/workouts/2/exercises/5",
    imageSrc: "https://images.unsplash.com/photo-1483721310020-03333e577078?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHdvcmtvdXR8ZW58MHx8MHx8",
    imageAlt:
    "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
    video:
    "https://www.youtube.com/embed/tx5rgpDAJRI"
  },
  {
    id:6,
    workoutId:4,
    name: "Air Squat",
    description:
      "This durable double-walled insulated tumbler keeps your beverages at the perfect temperature all day long. Hot, cold, or even lukewarm if you &apos; re weird like that, this bottle is ready for your next adventure.",
    href: "/workouts/4/exercises/6",
    imageSrc:
      "https://images.unsplash.com/photo-1634788699029-b26c89ed32b4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3F1YXR8ZW58MHx8MHx8",
      imageAlt:
    "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
    video:
    "https://www.youtube.com/embed/tx5rgpDAJRI"
  },
];

const WorkoutHistory = () => {
  return (
    <>
      {exercises.map((exercise) => (
        <div className="bg-[#F9FAFB] flex space-x-10 mt-6" key={exercise.name}>
          <div className="w-1/3">
            <img className="imgbackexer" src={exercise.imageSrc} />
          </div>
          <div className="w-3/5">
            <h2 className="font-bold">{exercise.name}</h2>
            <p>{exercise.description}</p>
            <Link href={exercise.href}>
              <a className="font-bold">View Exercise</a>
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default WorkoutHistory;
