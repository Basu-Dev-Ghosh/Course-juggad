import React from "react";
import CourseCurriculum from "./CourseCurriculum/CourseCurriculum";
import Author from "./Author";

const CourseContent = () => {
  return (
    <div className="max-w-7xl mt-12 px-7 w-full mx-auto grid grid-cols-1 md:grid-cols-7">
      <CourseCurriculum />
      <Author />
    </div>
  );
};

export default CourseContent;
