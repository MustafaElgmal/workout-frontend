import { Person } from "../types";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const gender = [
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
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Signup = () => {
  const [people, setPeople] = useState<Person[]>(gender);
  const [selected, setSelected] = useState<Person>(people[0]);

  return (
    <>
      <div className="flex min-h-full">
        <div className="flex flex-1 flex-col justify-center py-8 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className=" ">
              <div>
                <img width={"180px"} src="./assets/logo-4.png" alt="logo" />
              </div>
            </div>
            <h2 className=" text-3xl font-bold tracking-tight text-gray-900">
              Create a New Account
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Or{" "}
              <a
                href="#"
                className="font-medium text-black hover:text-indigo-500"
              >
                sign in to an existing account
              </a>
            </p>

            <div className="mt-8">
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <div className="flex space-x-5">
                    <div className=" ">
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Frist Name
                      </label>
                      <div className="mt-1">
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          autoComplete="firstName"
                          required
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last Name
                      </label>
                      <div className="mt-1">
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          autoComplete="lastName"
                          required
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <Listbox value={selected} onChange={setSelected}>
                    {({ open }) => (
                      <>
                        <div className="relative ">
                          <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Gender
                          </label>
                          <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                            <span className="flex items-center">
                              <img
                                src={selected.avatar}
                                alt=""
                                className="h-6 w-6 flex-shrink-0 rounded-full"
                              />
                              <span className="ml-3 block truncate">
                                {selected.name}
                              </span>
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                              <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                            </span>
                          </Listbox.Button>

                          <Transition
                            show={open}
                            as={Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                              {people.map((person) => (
                                <Listbox.Option
                                  key={person.id}
                                  className={({ active }) =>
                                    classNames(
                                      active
                                        ? "text-white bg-indigo-600"
                                        : "text-gray-900",
                                      "relative cursor-default select-none py-2 pl-3 pr-9"
                                    )
                                  }
                                  value={`${person}`}
                                >
                                  {({ selected, active }) => (
                                    <>
                                      <div className="flex items-center">
                                        <img
                                          src={person.avatar}
                                          alt=""
                                          className="h-6 w-6 flex-shrink-0 rounded-full"
                                        />
                                        <span
                                          className={classNames(
                                            selected
                                              ? "font-semibold"
                                              : "font-normal",
                                            "ml-3 block truncate"
                                          )}
                                        >
                                          {person.name}
                                        </span>
                                      </div>

                                      {selected ? (
                                        <span
                                          className={classNames(
                                            active
                                              ? "text-white"
                                              : "text-indigo-600",
                                            "absolute inset-y-0 right-0 flex items-center pr-4"
                                          )}
                                        >
                                          <CheckIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                          />
                                        </span>
                                      ) : null}
                                    </>
                                  )}
                                </Listbox.Option>
                              ))}
                            </Listbox.Options>
                          </Transition>
                        </div>
                      </>
                    )}
                  </Listbox>
                  <div className="flex items-center justify-between space-x-5">
                    <div>
                      <label
                        htmlFor="age"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Age
                      </label>
                      <div className="relative mt-1 flex items-center">
                        <input
                          id="age"
                          name="age"
                          type="number"
                          autoComplete="age"
                          required
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                          <kbd className="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400">
                            years
                          </kbd>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="weight"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Weight
                      </label>
                      <div className="relative mt-1 flex items-center">
                        <input
                          id="weight"
                          name="weight"
                          type="number"
                          autoComplete="weight"
                          required
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                          <kbd className="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400">
                            kgs
                          </kbd>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="height"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Height
                      </label>
                      <div className="relative mt-1 flex items-center">
                        <input
                          id="height"
                          name="height"
                          type="number"
                          autoComplete="height"
                          required
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                          <kbd className="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400">
                            cm
                          </kbd>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <div className="bg-signup"></div>
        </div>
      </div>
    </>
  );
};

export default Signup;
