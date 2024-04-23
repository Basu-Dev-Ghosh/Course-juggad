import { getAllSavedCourse } from "@/app/__actions__/course";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export function useSavedCourses() {
  // ------------------Queries------------------
  // Query for getting created courses from database
  const { data: savedCourses, isLoading } = useQuery({
    queryFn: async () => await getAllSavedCourse(),
    queryKey: ["getting_saved_courses"], //Array according to Documentation
  });

  return {
    savedCourses,
    isLoading,
  };
}
