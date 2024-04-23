// This custom hook is used to get course data from database using parameters in link
// It is used in components/Dashboard/Course/Course.tsx

import { navigate } from "@/app/__actions__/auth";
import {
  UnPublishCourseToDatabase,
  checkPublishOrNotPublish,
  deleteCourseById,
  getCourseFromDatabase,
  publishCourseToDatabase,
  saveCourseToDatabase,
} from "@/app/__actions__/course";
import { getTitle } from "@/app/__actions__/video";
import useCourseStore from "@/store/course/course-store";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export function useCourse() {
  // Getting parameters from link
  const params = useParams();

  // Getting queryClient
  const queryClient = useQueryClient();

  // ---------------- Global States ------------------------------
  const [course_id, skill_name, data, active_link] = useCourseStore((state) => [
    state.id,
    state.skill_name,
    state.data,
    state.active_link,
  ]);

  // Getting skillname from params and decoding
  const skillName =
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
    enabled: skillName !== "new",
    queryFn: async () => await getCourseFromDatabase(skillName),
    queryKey: ["getting_course", skillName], //Array according to Documentation
  });

  // Query for getting the title of video only if active link is not null
  const {
    data: title,
    isLoading: titleLoading,
    isError: isTitleError,
    error: titleError,
  } = useQuery({
    enabled: data !== null,
    queryFn: async () => {
      if (active_link) {
        return await getTitle(active_link, skillName);
      } else {
        if (data) {
          return await getTitle(
            data[0].subtopics[0].youtube_links[0],
            skillName
          );
        }
        return "Title";
      }
    },
    queryKey: ["getting_title", active_link], //Array according to Documentation
  });

  // Query for getting a course is published or not only checking for stored courses
  const {
    data: isPublished,
    isLoading: isPublishedLoading,
    isError: isPublishedError,
    error: publishedCheckingError,
  } = useQuery({
    enabled: skillName !== "new",
    queryFn: async () => await checkPublishOrNotPublish(skillName),
    queryKey: ["is_published", skillName], //Array according to Documentation
  });

  // --------------------Mutations---------------------------

  // Mutation for deleting a course from database
  const {
    mutate: deleteCourse,
    isError: isCourseDeleteError,
    isPending: isCourseDeleting,
    error: courseDeleteError,
  } = useMutation({
    mutationFn: async () => await deleteCourseById(course_id),
    onError(error) {
      console.log(error);
      alert(error.message);
    },
    onSuccess(data) {
      // ReSetting zustand global state with null
      useCourseStore.setState({
        id: null,
        data: null,
        skill_name: null,
        active_link: null,
      });
      navigate(`/dashboard/ai`);
    },
    mutationKey: ["delte_course", course_id], //Array according to Documentation
  });

  // Mutation for saving a course to database
  const {
    mutate: saveCourseToDB,
    isError: isCourseSavingError,
    isPending: isCourseSaving,
    error: courseSavingError,
  } = useMutation({
    mutationFn: async () => await saveCourseToDatabase(skill_name, data),
    onError(error) {
      console.log(error);
      alert(error.message);
    },
    onSuccess(data) {
      // Alerting and redirecting
      alert("course saved successfully");
      navigate(`/dashboard/courses`);
    },
    mutationKey: ["save_course", skillName], //Array according to Documentation
  });

  // Mutation for publish a course
  const {
    mutate: publishCourse,
    isError: isCoursePublishingError,
    isPending: isCoursePublishing,
    error: coursePublishingError,
  } = useMutation({
    mutationFn: async () => await publishCourseToDatabase(course_id),
    onError(error) {
      console.log(error);
      alert(error.message);
    },
    onSuccess(data) {
      // Alerting and redirecting
      alert("course published successfully");

      // Invalidating the course published data
      queryClient.invalidateQueries({
        queryKey: ["is_published", skillName],
      });
    },
    mutationKey: ["publish_course", course_id], //Array according to Documentation
  });

  // Mutation for un publishing a course
  const {
    mutate: UnPublishCourse,
    isError: isCourseUnPublishingError,
    isPending: isCourseUnPublishing,
    error: courseUnPublishingError,
  } = useMutation({
    mutationFn: async () => await UnPublishCourseToDatabase(course_id),
    onError(error) {
      console.log(error);
      alert(error.message);
    },
    onSuccess(data) {
      // Alerting and redirecting
      alert("course unpublished successfully");

      // Invalidating the course published data
      queryClient.invalidateQueries({
        queryKey: ["is_published", skillName],
      });
    },
    mutationKey: ["unpublish_course", course_id], //Array according to Documentation
  });

  // ---------------Effects-----------------------
  useEffect(() => {
    if (courseData) {
      let data = JSON.parse(courseData[0].course_data);
      useCourseStore.setState({
        id: courseData[0].id,
        data,
        skill_name: courseData[0].skill_name,
        active_link: data[0].subtopics[0].youtube_links[0],
      });
    }
  }, [courseData]);

  return {
    title,
    loaders: {
      courseDataLoading,
      titleLoading,
      isPublishedLoading,
      isCourseSaving,
      isCourseDeleting,
      isCoursePublishing,
      isCourseUnPublishing,
    },
    isPublished,
    saveCourseToDB,
    deleteCourse,
    publishCourse,
    UnPublishCourse,
  };
}
