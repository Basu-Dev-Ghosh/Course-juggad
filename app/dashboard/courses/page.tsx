import Courses from "@/components/Dashboard/Courses/Courses";
import { logger } from "@/logger";
import React from "react";

const page = () => {
  console.log("Courses Page called ");
  return <Courses />;
};

export default page;
