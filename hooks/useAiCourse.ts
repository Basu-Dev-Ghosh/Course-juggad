// This hook for getting course data when user clicks on the AI course button
// It is used in components/Dashboard/Ai/CourseButtons.tsx

import { navigate } from "@/app/__actions__/auth";
import { getCourseFromServer } from "@/app/__actions__/course";
import useCourseStore from "@/store/course/course-store";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

//Loading texts that will be shown when Getting course
const loadingTexts = [
  "We are generating the course for you",
  "Checking our cached data",
  "We are almost there",
  "Generating course content...",
  "Please wait",
  "Getting videos from youtube",
  "We are almost there",
  "Please wait",
];
export function useAiCourse() {
  //-----------States--------------

  // State for showing form
  const [showForm, setShowForm] = useState<boolean>(false);
  // State for skill name
  const [skillName, setSkillName] = useState<string | null>(null);
  // State for loading text
  const [loadingText, setLoadingText] = useState<string>(loadingTexts[0]);
  // Ref for loading text index
  const loadingTextIndex = useRef(0);

  //-----------Mutations--------------

  // Use mutation for getting course from the server
  const {
    mutate: getCourse,
    isError,
    isPending: isLoading,
  } = useMutation({
    mutationFn: async () => await getCourseFromServer(skillName),
    onError(error) {
      console.log(error);
      alert(error.message);
    },
    onSuccess(data) {
      // Setting zustand global state with output
      useCourseStore.setState({
        data,
        skill_name: skillName,
        active_link: data[0].subtopics[0].youtube_links[0],
      });
      // Navigate to the course page
      navigate(`/dashboard/course/new`);
    },
    mutationKey: ["course", skillName], //Array according to Documentation
  });

  //-----------Effects--------------
  // Use effect for changing loading text
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
      //Logic for changing loading text
      interval = setInterval(() => {
        loadingTextIndex.current =
          (loadingTextIndex.current + 1) % loadingTexts.length;
        setLoadingText(loadingTexts[loadingTextIndex.current]);
      }, 10000); // Change text every 1 second
    }

    return () => {
      if (interval) {
        clearInterval(interval); // Clean up on every re-render
      }
    };
  }, [isLoading]);

  return {
    showForm,
    setShowForm,
    skillName,
    setSkillName,
    isLoading,
    isError,
    getCourse,
    loadingText,
  };
}
