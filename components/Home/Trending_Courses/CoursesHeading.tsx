import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import InViewAnimation from "../../Animations/InViewAnimation";
import Link from "next/link";

const CoursesHeading = () => {
  return (
    <div className="flex flex-col justify-center ">
      <InViewAnimation
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <h1 className="max-w-4xl text-left font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
          New & Trending <br className="hidden md:block" />
          <span className="text-indigo-700">Courses</span>
        </h1>
      </InViewAnimation>

      <InViewAnimation
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <p className="max-w-lg  text-base font-normal leading-7 text-gray-500 mb-9">
          Dive into the hottest trends in education with our curated collection
          of trending courses! Stay ahead of the curve and explore cutting-edge
          topics handpicked by experts in the field.
        </p>
      </InViewAnimation>
      <InViewAnimation
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
      >
        <Link
          href={"/courses"}
          className="bg-indigo-600 py-2 cursor-pointer text-white hover:bg-indigo-700 w-full md:w-[40%] mt-1 rounded-xl flex items-center justify-between px-6 "
        >
          <p>Explore Courses</p>
          <IoIosArrowRoundForward size={30} />
        </Link>
      </InViewAnimation>
    </div>
  );
};

export default CoursesHeading;
