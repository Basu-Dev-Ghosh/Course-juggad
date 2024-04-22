import Courses from "@/components/Dashboard/Courses/Courses";
import { logger } from "@/logger";
import React from "react";

const page = () => {
  logger.info("Courses Page called ");
  return <Courses />;
};

export default page;
