// This hook for getting course data when user clicks on the AI course button
// It is used in components/Dashboard/Ai/CourseButtons.tsx

import { navigate } from "@/app/__actions__/auth";
import { isValidURL } from "@/app/__helpers__";
import { createClient } from "@/lib/supabase.client";
import useCourseStore from "@/store/course/course-store";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useRef, useState } from "react";

//Loading texts that will be shown when Getting course

export function useAiCourse() {
  //-----------States--------------

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
  // State for showing form
  const [showForm, setShowForm] = useState<boolean>(false);
  // State for skill name
  const [skillName, setSkillName] = useState<string | null>(null);
  // State for loading text
  const [loadingText, setLoadingText] = useState<string>(loadingTexts[0]);
  // Ref for loading text index
  const loadingTextIndex = useRef(0);

  async function getCourseFromServer(skillName: string | null) {
    // Check if skill name is provided
    if (!skillName) throw new Error("Skill name is required");
    try {
      // Supabase configuration

      const supabase = createClient();

      // Getting current user session
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      // If user is not logged in or not able to getting session, throw an error
      if (error) throw new Error("User not logged in");

      let url;
      const isUrl = isValidURL(skillName);
      url = isUrl
        ? `/skill/udemy/?url=${encodeURIComponent(skillName)}`
        : `/skill/?skill_name=${skillName}`;
      // Fetching course data from server with token
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}${url}`, {
        headers: {
          Authorization: `Bearer ${session?.access_token}`, // Include token in headers
        },
      });

      // If response is not ok, throw an error
      if (!res.ok) throw new Error("Failed to fetch course");

      // Convert response to json
      const data = await res.json();

      // Return data
      return data;
    } catch (err) {
      // If error occurs, log it and throw it
      console.log(err);
      throw err;
    }
  }

  function calculateTotalVideos(data: any) {
    let totalVideos = 0;
    data.forEach((topic: any) => {
      topic.subtopics.forEach((subtopic: any) => {
        totalVideos += subtopic.youtube_links.length;
      });
    });
    return totalVideos;
  }

  //-----------Mutations--------------

  // Use mutation for getting course from the server
  const {
    mutate: getCourse,
    isError,
    isPending: isLoading,
  } = useMutation({
    mutationFn: async () => await getCourseFromServer(skillName),
    onSettled(data, error, variables, context) {
      if (error) {
        console.log(error);
        alert(error);
        return;
      }
      useCourseStore.setState({
        data,
        progress: 0,
        skill_name: skillName,
        active_link: data[0].subtopics[0].youtube_links[0],
        total_videos: calculateTotalVideos(data),
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
