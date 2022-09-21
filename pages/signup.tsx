import { Person } from "../types";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { gender } from "../constants/index";
import { classNames } from "../constants/index";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createUser } from "../utils/apis";
import { useRouter } from "next/router";

const Signup = () => {
  const [people, setPeople] = useState<Person[]>(gender);
  const [selected, setSelected] = useState<Person>(people[0]);
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      age: "",
      height: "",
      weight: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("FirstName is required!"),
      lastName: Yup.string().required("LastName is required!"),
      email: Yup.string()
        .email("Email is not vaild!")
        .required("Email is required!"),
      password: Yup.string().required("Password is required!"),
      age: Yup.string().required("age is required!"),
      height: Yup.string().required("Height is required!"),
      weight: Yup.string().required("Weight is required!"),

    }),
    onSubmit: async (values) => {

      const res = await createUser(
        {
          ...values, height: +values.height, age: +values.age, weight: +values.weight, gender: selected.name
        },
        router
      );
      formik.resetForm();
    },
  });
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
                <form className="space-y-6">
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
                          value={formik.values.firstName}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          type="text"
                          autoComplete="firstName"
                          required
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                        <p className="text-red-600">
                          {formik.errors.firstName && formik.touched.firstName
                            ? formik.errors.firstName
                            : null}
                        </p>
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
                          value={formik.values.lastName}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          type="text"
                          autoComplete="lastName"
                          required
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                        <p className="text-red-600">
                          {formik.errors.lastName && formik.touched.lastName
                            ? formik.errors.lastName
                            : null}
                        </p>
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
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                      <p className="text-red-600">
                        {formik.errors.email && formik.touched.email
                          ? formik.errors.email
                          : null}
                      </p>
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
                        value={formik.values.password}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                      <p className="text-red-600">
                        {formik.errors.password && formik.touched.password
                          ? formik.errors.password
                          : null}
                      </p>
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
                                  value={person}
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
                          value={formik.values.age}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          type="text"
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
                          value={formik.values.weight}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          type="text"
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
                          value={formik.values.height}
                          onBlur={formik.handleBlur}
                          onChange={formik.handleChange}
                          type="text"
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
                  <span className="text-red-600">
                    {formik.errors.age &&
                      formik.touched.age
                      ? formik.errors.age
                      : null}
                  </span>
                  <span className="text-red-600">
                    {formik.errors.weight && formik.touched.weight
                      ? formik.errors.weight
                      : null}
                  </span>
                  <span className="text-red-600">
                    {formik.errors.height && formik.touched.height
                      ? formik.errors.height
                      : null}
                  </span>

                  <div>
                    <button
                      type="button"
                      onClick={() => formik.handleSubmit()}
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
