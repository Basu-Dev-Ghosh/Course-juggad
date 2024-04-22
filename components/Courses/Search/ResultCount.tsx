import { getAllPublishedCourse } from "@/app/__actions__/course";
import React from "react";

const ResultCount = async () => {
  const courses: Course[] | null = await getAllPublishedCourse();
  return (
    <p className="px-3 mx-8 md:mx-0 text-sm text-slate-400 my-6">
      {courses?.length || 0} results found
    </p>
  );
};

export default ResultCount;
