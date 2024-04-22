import { getAllSavedCourse, getCreatedCourses } from "@/app/__helpers__";
import Course from "@/components/Dashboard/Course/Course";
import { logger } from "@/logger";
import React from "react";

const page = () => {
  console.log("Course Page called ");
  return <Course />;
};

export default page;
