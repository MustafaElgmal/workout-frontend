import Link from "next/link";
import { AppProps } from "../types";

export default function Programs({ programs, isWorkout }: AppProps) {
  return (
    <div>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {programs?.map((program) => (
            <Link key={program.id} href={program.href}>
              <a className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                  <img
                    src={program.imageSrc}
                    alt={program.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                  <h3>{program.name}</h3>
                </div>
                {!isWorkout ? (
                  <p className="mt-1 text-sm italic text-gray-500">
                    {program.description}
                  </p>
                ) : null}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
