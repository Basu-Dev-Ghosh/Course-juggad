import CourseList from "@/components/Courses/CourseList/CourseList";
import CoursesHeading from "@/components/Courses/Heading/CoursesHeading";
import CourseSearch from "@/components/Courses/Search/CourseSearch";
import CourseSuggestions from "@/components/Courses/Search/CourseSuggestions";
import ResultCount from "@/components/Courses/Search/ResultCount";
import { logger } from "@/logger";
import React from "react";

const page = () => {
  logger.info("Courses hub Page called ");
  return (
    <div className="w-full md:max-w-6xl px-4 flex flex-col py-16 h-full md:h-auto ">
      <CoursesHeading />
      <CourseSearch />
      <CourseSuggestions />
      <ResultCount />
      <CourseList />
      {/* <Pagination /> */}
    </div>
  );
};

export default page;
