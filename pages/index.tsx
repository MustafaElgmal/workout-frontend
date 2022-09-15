import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import type { NextPage } from "next";
import Layout from "../components/layout";
import Sidebar from "../components/layout";

const projects = [
  { name: 'rounded-md', lbs: 255, bgColor: 'bg-red-600	' },
  { name: 'Bicep Curl', lbs: 55, bgColor: 'bg-black' },
  { name: 'Bench Press', lbs: 150, bgColor: 'bg-blue-600' },
  { name: 'Overhead Press', lbs: 90, bgColor: 'bg-green-600' },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
const Home: NextPage = () => {
  return (
    <div className="container mx-auto sm:px-6 lg:px-8 bg-zinc-100	py-10	" >
      <div className="bg-white py-6 px-10 flex justify-between items-center">
        <div className="flex items-center">
          <img
            className="inline-block h-14 w-14 rounded-full "
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="p-2">
            <h2 className="text-xl	font-bold
">
              Good morning, Your Name

            </h2>
            <span>🔥10 Day Streak</span>
          </div>
        </div>
        <div className="space-x-2">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            Browse workouts
          </button>
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-gray-300 bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
            Start today's workout
          </button>
        </div>
      </div>
      <div className="py-6 px-10">
        <div>       
          Personal Records 🏆
        </div>

        <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">

          {projects.map((project) => (
            <li key={project.name} className={classNames(project.bgColor, "col-span-1 flex rounded-xl shadow-sm ")}>

              <div className="flex flex-1 items-center justify-between truncate rounded-xl border-t border-r border-b py-5">
                <div className="flex-1 truncate px-6 py-2 text-sm">
                  <div className="font-medium text-white ">
                    {project.name}
                  </div>
                  <p className="text-white text-lg font-bold">{project.lbs}  lbs</p>
                </div>

              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div className="py-6 px-10">
        Today's workout (Leg Day)

        </div>
      </div>
    </div>
  );
};

export default Home;
