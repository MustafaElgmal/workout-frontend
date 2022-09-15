import { NextPage } from "next";
import Exercises from "../components/exercises";

const Workouts = () =>{
    return(
        <div className="container mx-auto sm:px-6 lg:px-8 bg-zinc-100	py-10">
            <div className="text-center font-bold	">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 ">
                Browse our carefully curated exercises
                </h1>
                <p className="mx-auto mt-4 max-w-3xl text-base text-gray-500">
                Thoughtfully designed exercises meant to push you to the absolute limits.
                </p>
            </div>
            <div>
                <Exercises/>
            </div>
        </div>
    )
}

export default Workouts