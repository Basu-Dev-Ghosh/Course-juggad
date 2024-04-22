"use client";
import React from "react";
import SmallCourseCard from "./SmallCourseCard";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";
import { useCreatedCourses } from "@/hooks/useCreatedCourses";

const CreatedCourses = () => {
  const { createdCourses, isLoading } = useCreatedCourses();
  return (
    <div className="w-full flex flex-col space-y-4 mt-6 md:px-16 ">
      <div className="w-full px-2 flex items-center justify-between">
        <p className="text-gray-600 text-md">
          {createdCourses?.length || 0} totals
        </p>
        <Link
          href="/dashboard/ai"
          className="bg-indigo-700 hover:bg-indigo-800 text-white px-4 text-sm py-2 rounded-md flex justify-center items-center"
        >
          <FaPlus className="mr-2" size={16} /> <p>Create</p>
        </Link>
      </div>
      {isLoading ? (
        <>
          <div className="w-[94%] mx-auto h-[60px] my-6 bg-slate-400 rounded-lg animate-pulse"></div>
          <div className="w-[94%] mx-auto h-[60px] my-6 bg-slate-400 rounded-lg animate-pulse"></div>
          <div className="w-[94%] mx-auto h-[60px] my-6 bg-slate-400 rounded-lg animate-pulse"></div>
        </>
      ) : !createdCourses || createdCourses.length === 0 ? (
        <div className="w-full h-96 flex items-center justify-center">
          <p className="text-gray-500">No courses created yet</p>
        </div>
      ) : (
        createdCourses.map((course) => (
          <SmallCourseCard key={course.id} course={course} />
        ))
      )}
    </div>
  );
};

export default CreatedCourses;
