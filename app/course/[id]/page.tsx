import CourseContent from "@/components/Course/CourseContent";
import CourseInfo from "@/components/Course/CourseInfo";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

import { logger } from "@/logger";
import React from "react";

const page = () => {
  console.log("Root course Page called ");
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-between overflow-x-hidden">
        <CourseInfo />
        <CourseContent />
      </main>
      <Footer />
    </>
  );
};

export default page;
