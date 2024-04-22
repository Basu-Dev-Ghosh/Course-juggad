import React from "react";
import Courses from "./Courses";
import CoursesHeading from "./CoursesHeading";
import { getAllPublishedCourse } from "@/app/__actions__/course";

const TrendingCourses = async () => {
  const courses: Course[] | null = await getAllPublishedCourse();
  return (
    <section className="max-w-[80rem] mx-auto w-full grid grid-cols-1 md:grid-cols-2 h-auto my-10 md:my-16 px-10 py-6 md:py-10  rounded-xl">
      <CoursesHeading />
      <Courses courses={courses} />
    </section>
  );
};

export default TrendingCourses;
