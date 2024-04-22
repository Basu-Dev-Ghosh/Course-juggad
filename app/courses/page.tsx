import CourseList from "@/components/Courses/CourseList/CourseList";
import Pagination from "@/components/Courses/CourseList/Pagination";
import CoursesHeading from "@/components/Courses/Heading/CoursesHeading";
import CourseSearch from "@/components/Courses/Search/CourseSearch";
import CourseSuggestions from "@/components/Courses/Search/CourseSuggestions";
import ResultCount from "@/components/Courses/Search/ResultCount";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { logger } from "@/logger";
import React from "react";

const page = () => {
  logger.info("Root Courses Page called ");
  return (
    <>
      <Header />
      <main className="flex my-12 flex-col max-w-6xl mx-auto  justify-between overflow-x-hidden">
        <CoursesHeading />
        <CourseSearch />
        <CourseSuggestions />
        <ResultCount />
        <CourseList />
        {/* <Pagination /> */}
      </main>

      <Footer />
    </>
  );
};

export default page;
