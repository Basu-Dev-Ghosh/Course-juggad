import AiCourseMaker from "@/components/Dashboard/Ai/AiCourseMaker";
import { logger } from "@/logger";
import React from "react";

const page = () => {
  logger.info("AI Page called ");
  return <AiCourseMaker />;
};

export default page;
