import Link from "next/link";
import React from "react";
const exercises = [
  {
    name: "Jumping jacks",
    details: "10 reps·20 Kg 10 reps·30 Kg 10 reps·30 Kg 100 reps·4 Kg",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1625199911408-9eb7580d8ed9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGp1bXBpbmd8ZW58MHx8MHx8",
  },
  {
    name: "30 min run",
    details:
      "This durable double-walled insulated tumbler keeps your beverages at the perfect temperature all day long. Hot, cold, or even lukewarm if you &apos; re weird like that, this bottle is ready for your next adventure",
    href: "#",
    image: "https://images.unsplash.com/photo-1483721310020-03333e577078?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fHdvcmtvdXR8ZW58MHx8MHx8",
  },
  {
    name: "Air Squat",
    details:
      "This durable double-walled insulated tumbler keeps your beverages at the perfect temperature all day long. Hot, cold, or even lukewarm if you &apos; re weird like that, this bottle is ready for your next adventure.",
    href: "#",
    image:
      "https://images.unsplash.com/photo-1634788699029-b26c89ed32b4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c3F1YXR8ZW58MHx8MHx8",
  },
];

const WorkoutHistory = () => {
  return (
    <>
      {exercises.map((exercise) => (
        <div className="bg-[#F9FAFB] flex space-x-10 mt-6" key={exercise.name}>
          <div className="w-1/3">
            <img className="imgbackexer" src={exercise.image} />
          </div>
          <div className="w-3/5">
            <h2 className="font-bold">{exercise.name}</h2>
            <p>{exercise.details}</p>
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
