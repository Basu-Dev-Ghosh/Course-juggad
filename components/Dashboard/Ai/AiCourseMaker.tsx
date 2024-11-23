"use client";
import React, { useState } from "react";
import CourseButtons from "./CourseButtons";
import { useAiCourse } from "@/hooks/useAiCourse";
import VideoLoadingAnimation from "@/components/Animations/VideoLoadingAnimation";

const AiCourseMaker = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  if (isButtonClicked)
    return (
      <div className="w-full px-20">
        <VideoLoadingAnimation />
      </div>
    );
  return (
    <div className="w-full px-4 flex flex-col py-16 h-full md:h-[88dvh] ">
      <h1 className="text-3xl md:text-5xl text-indigo-700  text-center max-w-4xl mx-auto">
        Create AI-powered courses from any skill or replicate exact Udemy
        courses tailored just for you!
      </h1>

      <CourseButtons setIsButtonClicked={setIsButtonClicked} />
    </div>
  );
};

export default AiCourseMaker;
