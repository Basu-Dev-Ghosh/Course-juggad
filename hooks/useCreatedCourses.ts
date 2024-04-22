import { getCreatedCourses } from "@/app/__actions__/auth";
import { useEffect, useState } from "react";

export function useCreatedCourses() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [createdCourses, setCreatedCourses] = useState<Course[] | null>([]);

  async function getCourses() {
    const courses = await getCreatedCourses();
    setCreatedCourses(courses);
    setIsLoading(false);
  }
  useEffect(() => {
    getCourses();
  }, []);

  return { createdCourses, isLoading };
}
