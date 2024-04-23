import { getCourseFromDatabaseById } from "@/app/__actions__/course";
import useCourseStore from "@/store/course/course-store";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export function useCourseCover() {
  const [cover, setCover] = useState<string | null>(null);
  const params = useParams();

  let course_id =
    typeof params.id === "string"
      ? decodeURIComponent(params.id)
      : decodeURIComponent(params.id[0]);

  // ------------------Queries------------------

  // Query for getting course data only if route params is not 'new' because 'new' means that come from generatig from server
  const {
    data: courseData,
    isLoading: courseDataLoading,
    isError: isCourseDataError,
    error: courseDataError,
  } = useQuery({
    enabled: params.id !== null,
    queryFn: async () => await getCourseFromDatabaseById(course_id),
    queryKey: ["getting_course", course_id], //Array according to Documentation
  });

  // ---------------Effects-----------------------
  useEffect(() => {
    if (courseData) {
      let data = JSON.parse(courseData[0].course_data);
      setCover(data[0].course_cover);
      useCourseStore.setState({
        id: courseData[0].id,
        data,
        skill_name: courseData[0].skill_name,
        active_link: data[0].subtopics[0].youtube_links[0],
      });
    }
  }, [courseData]);

  return { cover, setCover };
}
