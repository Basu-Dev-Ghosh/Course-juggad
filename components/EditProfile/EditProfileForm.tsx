"use client";
import React from "react";
import { signUp } from "@/app/__actions__/auth";
import { useServerAction } from "@/hooks/useServerAction";
import { FaImage } from "react-icons/fa6";
const EditProfileForm = () => {
  const { formAction, message, isPending } = useServerAction(signUp);
  return (
    <section>
      <div className="flex bg-white items-center justify-center  py-10 sm:px-6 sm:py-10 lg:px-2 lg:py-8">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center" />
          <h2 className="text-center text-2xl font-bold leading-tight text-black">
            Edit your profile
          </h2>
          <form className="mt-8" action={formAction}>
            <div className="space-y-5">
              <div>
                <label className="custum-file-upload" htmlFor="file">
                  <FaImage size={28} />
                  <input type="file" id="file" />
                </label>
              </div>
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

              {message && <p className="text-red-400 text-sm">{message}</p>}
              <div>
                <button
                  disabled={isPending}
                  className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 hover:bg-indigo-700 px-3.5 py-2.5 font-semibold leading-7 text-white transition-all duration-200 focus:outline-none "
                  type="submit"
                >
                  {isPending ? "Updating..." : "Update profile"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditProfileForm;
