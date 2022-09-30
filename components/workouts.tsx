import Link from "next/link";
import { AppProps } from "../types";

export default function Workouts({ workouts }: AppProps) {
  return (
    <div>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {workouts?.map((workout) => (
            <Link key={workout.id} href={workout.href}>
              <a className="group">
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                  <img
                    src={workout.imageUrl}
                    alt={workout.imageAlt}
                    className=" h-css  object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                  <h3>{workout.name}</h3>
                </div>
                <p className="mt-1 text-sm italic text-gray-500">
                  {workout.description}
                </p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
