"use client";
import React from "react";
import InViewAnimation from "../Animations/InViewAnimation";
import SuggestionBox from "../Courses/Search/SuggestionBox";
import { AiOutlineSave } from "react-icons/ai";
import Button from "../ui-custom/Button";
import { useCourseDetails } from "@/hooks/useCourseDetails";

const CourseTitle = () => {
  const { skill_name, chapters, sections, videos, saveCourseToDb } =
    useCourseDetails();
  return (
    <div className="flex flex-col justify-center  mx-7 mt-6 md:mt-0">
      <InViewAnimation
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <h1 className="max-w-6xl text-left font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
          Course juggad of
          <br className="hidden md:block" />
          <span className="text-indigo-700">{skill_name}</span>
        </h1>
      </InViewAnimation>

      <div className="w-full flex items-center flex-wrap gap-2 mb-3">
        <InViewAnimation
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
        >
          <SuggestionBox name="Technology" />
        </InViewAnimation>
        <InViewAnimation
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
        >
          {" "}
          <SuggestionBox name="Programing" />
        </InViewAnimation>
        <InViewAnimation
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
        >
          <SuggestionBox name="Free" />
        </InViewAnimation>
      </div>
      <InViewAnimation
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <div className="flex w-full items-center gap-1 flex-wrap text-slate-500 text-sm  mb-3">
          <p>
            <span className="text-indigo-800 text-md mx-2 font-bold">
              {sections}
            </span>
            Sections
          </p>
          <p>
            <span className="text-indigo-800 text-md mx-2 font-bold">
              {chapters}
            </span>{" "}
            Chapters
          </p>
          <p>
            <span className="text-indigo-800 text-md mx-2 font-bold">
              {videos}
            </span>{" "}
            Videos
          </p>
        </div>
      </InViewAnimation>

      <InViewAnimation
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <div className="text-black text-4xl mb-4 font-bold">
          <span>$</span> FREE
        </div>
      </InViewAnimation>

      <InViewAnimation
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
      >
        <Button
          onClick={saveCourseToDb}
          className="bg-indigo-600 py-2 cursor-pointer text-white hover:bg-indigo-700 w-full md:w-[50%] transition-all duration-150 active:scale-90 hover:scale-95 ease-in-out mt-1 rounded-xl flex items-center justify-center px-6 "
        >
          <p>Save course</p>
          <AiOutlineSave className="ml-3" size={30} />
        </Button>
      </InViewAnimation>
    </div>
  );
};

export default CourseTitle;
