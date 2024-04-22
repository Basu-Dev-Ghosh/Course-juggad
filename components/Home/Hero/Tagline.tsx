import React from "react";
import CreateAnAccount from "./CreateAnAccount";

const Tagline = () => {
  return (
    <>
      <h1 className="max-w-2xl mx-auto text-center font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
        AI-Generated Courses, Personalized Learning, And Certification with
        <span className="text-indigo-600"> Course Juggad</span>
      </h1>
      <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
        Personalized AI courses meet user-generated content for a dynamic
        learning experience.
      </p>

      <CreateAnAccount />
    </>
  );
};

export default Tagline;
