import { getCreatedCourses } from "@/app/__actions__/course";
import { useQuery } from "@tanstack/react-query";
export function useCreatedCourses() {
  // ------------------Queries------------------
  // Query for getting created courses from database
  const { data: createdCourses, isLoading } = useQuery({
    queryFn: async () => await getCreatedCourses(),
    queryKey: ["getting_created_courses"], //Array according to Documentation
  });

  return { createdCourses, isLoading };
}
