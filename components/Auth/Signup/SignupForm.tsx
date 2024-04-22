"use client";
import React from "react";
import GoToLogin from "./GoToLogin";
import { signUp } from "@/app/__actions__/auth";
import { useServerAction } from "@/hooks/useServerAction";

const SignupForm = () => {
  const { formAction, message, isPending } = useServerAction(signUp);
  return (
    <section>
      <div className="flex bg-white items-center justify-center  py-10 sm:px-6 sm:py-10 lg:px-2 lg:py-8">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center" />
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Create a new account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 ">
            Already have an account? <GoToLogin />
          </p>
          <form className="mt-8" action={formAction}>
            <div className="space-y-5">
              <div>
                <label className="text-base font-medium text-gray-900">
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    placeholder="Full name"
                    type="text"
                    name="fullname"
                    required
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-base font-medium text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    placeholder="Password"
                    type="password"
                    required
                    name="password"
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-base font-medium text-gray-900">
                    Confirm Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    placeholder="Confirm Password"
                    type="password"
                    name="cpassword"
                    required
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </div>
              </div>
              {message && <p className="text-red-400 text-sm">{message}</p>}
              <div>
                <button
                  disabled={isPending}
                  className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 hover:bg-indigo-700 px-3.5 py-2.5 font-semibold leading-7 text-white transition-all duration-200 focus:outline-none "
                  type="submit"
                >
                  {isPending ? "Creating..." : "Create an account"}
                </button>
              </div>
            </div>
          </form>
          {/* <div className="mt-3 space-y-3">
            <button
              onClick={async () => await signUpWithGoogle()}
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              type="button"
            >
              <span className="mr-2 inline-block">
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-rose-500"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z" />
                </svg>
              </span>
              Sign up with Google
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SignupForm;
