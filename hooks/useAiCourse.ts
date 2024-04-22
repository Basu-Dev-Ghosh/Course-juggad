import { navigate } from "@/app/__actions__/auth";
import { createClient } from "@/lib/supabase.client";
import useCourseStore from "@/store/course/course-store";
import { useEffect, useRef, useState } from "react";
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
  let controller = new AbortController();
  let signal = controller.signal;
  const [showForm, setShowForm] = useState<boolean>(false);
  const [skillName, setSkillName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loadingText, setLoadingText] = useState<string>(loadingTexts[0]);

  const loadingTextIndex = useRef(0);
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isLoading) {
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

  async function getCourse() {
    try {
      const supabase = createClient();
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error) throw new Error("User not logged in");
      setIsLoading(true);
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/skill/${skillName}`,
        {
          signal: signal,
          headers: {
            Authorization: `Bearer ${session?.access_token}`, // Include token in headers
          },
        }
      );
      const data = await res.json();
      useCourseStore.setState({ data, skill_name: skillName });
      navigate(`/dashboard/course/new`);
    } catch (err) {
      logger.info(err);
      setIsLoading(false);
    }
  }

  return {
    showForm,
    setShowForm,
    skillName,
    setSkillName,
    isLoading,
    setIsLoading,
    getCourse,
    loadingText,
    controller,
  };
}
