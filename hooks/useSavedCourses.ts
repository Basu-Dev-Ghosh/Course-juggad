import { getAllSavedCourse } from "@/app/__actions__/course";
import { useEffect, useState } from "react";

export function useSavedCourses() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [savedCourses, setSavedCourses] = useState<Course[] | null>([]);

  async function getCourses() {
    const courses = await getAllSavedCourse();
    setSavedCourses(courses);
    setIsLoading(false);
  }
  useEffect(() => {
    getCourses();
  }, []);
  return {
    savedCourses,
    isLoading,
  };
}
