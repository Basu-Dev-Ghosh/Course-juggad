import React from "react";
import CourseContents from "./CourseContents";

const CourseCurriculum = () => {
  return (
    <div className=" md:col-span-5  w-full h-full">
      <h1 className="text-black text-2xl">Course contents</h1>
      <CourseContents />
    </div>
  );
};

export default CourseCurriculum;
