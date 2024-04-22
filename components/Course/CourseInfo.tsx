import React from "react";
import CourseImage from "./CourseImage";
import CourseTitle from "./CourseTitle";

const CourseInfo = () => {
  return (
    <section className="max-w-7xl  w-full text-white rounded-md grid grid-cols-1 md:grid-cols-2">
      <CourseImage />
      <CourseTitle />
    </section>
  );
};

export default CourseInfo;
