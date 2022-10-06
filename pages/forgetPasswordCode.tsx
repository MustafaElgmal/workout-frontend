import axios from "axios";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import * as Yup from "yup";

const ForgetPasswordCode = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Email is required!"),
    }),
    onSubmit: async (values) => {
      const res = await axios.post("/api/sendGride", values);
      if (res.status === 201) {
        router.push("/signin");
      }
      formik.resetForm();
    },
  });
  return (
    <>
      <div className="flex min-h-full">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div className="mt-8">
              <div className="mt-6">
                <div className="px-8 mb-4 text-center">
                  <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
                  <p className="mb-4 text-sm text-gray-700">
                    We get it, stuff happens. Just enter your email address
                    below and we&apos;ll send you a link to reset your password!
                  </p>
                </div>
                <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      name="email"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      placeholder="Enter Email Address..."
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <p className="text-red-500">{formik.errors.email}</p>
                    ) : null}
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="flex w-full justify-center rounded-md border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                      type="button"
                      onClick={() => formik.handleSubmit()}
                    >
                      Reset Password
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <Link href="/signup">
                      <a className="inline-block text-sm text-black-500 align-baseline hover:text-blue-800">
                        Create an Account!
                      </a>
                    </Link>
                  </div>
                  <div className="text-center">
                    <Link href="/signin">
                      <a className="inline-block text-sm text-black-500 align-baseline hover:text-blue-800">
                        Already have an account? Login!
                      </a>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block bg-forgetPassword"></div>
      </div>
    </>
  );
};

export default ForgetPasswordCode;
