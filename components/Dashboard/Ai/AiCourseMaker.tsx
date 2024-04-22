"use client";
import React, { useEffect } from "react";
import CourseButtons from "./CourseButtons";
import { createClient } from "@/lib/supabase.client";

const AiCourseMaker = () => {
  
  return (
    <div className="w-full px-4 flex flex-col py-16 h-full md:h-[94dvh] ">
      <h1 className="text-3xl md:text-5xl text-indigo-700 mb-4 text-center max-w-4xl mx-auto">
        Elevate your learning experience with AI-generated courses tailored just
        for you!
      </h1>
      
      <CourseButtons />
    </div>
  );
};

export default AiCourseMaker;
