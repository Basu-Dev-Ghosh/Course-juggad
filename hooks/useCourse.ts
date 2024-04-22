import { getCurrentUserData, navigate } from "@/app/__actions__/auth";
import { createClient } from "@/lib/supabase.client";
import useCourseStore from "@/store/course/course-store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
var youtubeThumbnail = require("youtube-thumbnail");
var getYouTubeID = require("get-youtube-id");
var getYoutubeTitle = require("get-youtube-title");

export function useCourse() {
  const params = useParams();
  const [title, setTitle] = useState<string>("");
  const [isLoading, setisLoading] = useState<boolean>(true);
  const [isPublished, setIsPublished] = useState<boolean>(true);
  const [skill_name, data, active_link] = useCourseStore((state) => [
    state.skill_name,
    state.data,
    state.active_link,
  ]);

  async function saveCourseToDB() {
    try {
      const user = await getCurrentUserData();
      if (!user) {
        throw new Error("User not found");
      }
      const supabase = createClient();
      let course_cover = null;
      if (data) {
        var thumbnail = youtubeThumbnail(data[0].subtopics[0].youtube_links[0]);
        course_cover = thumbnail.default.url;
      }

      await supabase.from("courses").upsert([
        {
          skill_name,
          course_data: JSON.stringify(data),
          user_id: user.id,
          course_cover,
        },
      ]);
      alert("Course saved");
    } catch (err) {
      console.log(err);
      alert("Course saving failed");
    }
  }

  async function deleteCourse() {
    try {
      const user = await getCurrentUserData();
      if (!user) {
        throw new Error("User not found");
      }
      const supabase = createClient();
      await supabase
        .from("courses")
        .delete()
        .eq("skill_name", skill_name)
        .eq("user_id", user.id);
      navigate("/dashboard/ai");
    } catch (err) {
      console.log(err);
      alert("Course deleting failed");
    }
  }
  async function publishCourse() {
    try {
      const user = await getCurrentUserData();
      if (!user) {
        throw new Error("User not found");
      }
      const supabase = createClient();
      await supabase
        .from("courses")
        .update({ is_published: true })
        .eq("skill_name", skill_name)
        .eq("user_id", user.id);
      alert("Course published");
      await checkPublishOrNot();
    } catch (err) {
      console.log(err);
      alert("Course publishing failed");
    }
  }
  async function UnPublishCourse() {
    try {
      const user = await getCurrentUserData();
      if (!user) {
        throw new Error("User not found");
      }
      const supabase = createClient();
      await supabase
        .from("courses")
        .update({ is_published: false })
        .eq("skill_name", skill_name)
        .eq("user_id", user.id);
      alert("Course unpublished");
      await checkPublishOrNot();
    } catch (err) {
      console.log(err);
      alert("Course unpublishing failed");
    }
  }

  async function checkPublishOrNot() {
    try {
      const user = await getCurrentUserData();
      if (!user) {
        throw new Error("User not found");
      }
      const supabase = createClient();

      let { data, error } = await supabase
        .from("courses")
        .select("is_published")
        .eq(
          "skill_name",
          typeof params.id === "string"
            ? decodeURIComponent(params.id)
            : decodeURIComponent(params.id[0])
        )
        .eq("user_id", user.id)
        .single();

      if (error) {
        console.error(error);
        setIsPublished(false);
      }

      if (data) setIsPublished(data.is_published);
    } catch (err) {
      console.error(err);
      setIsPublished(false);
    }
  }

  async function getAndSetCourseData() {
    try {
      const supabase = createClient();
      const user = await getCurrentUserData();
      if (!user) {
        throw new Error("User not found");
      }
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .eq(
          "skill_name",
          typeof params.id === "string"
            ? decodeURIComponent(params.id)
            : decodeURIComponent(params.id[0])
        )
        .eq("user_id", user?.id);
      if (data) {
        useCourseStore.setState({
          data: JSON.parse(data[0].course_data),
          skill_name: data[0].skill_name,
        });
        await checkPublishOrNot();
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (params.id === "new") {
      if (!skill_name) {
        navigate("/dashboard/ai");
      }
    } else {
      useCourseStore.setState({
        skill_name: null,
        data: null,
        active_link: null,
      });
      getAndSetCourseData();
    }

    return () => {
      if (params.id !== "new")
        useCourseStore.setState({
          data: null,
          skill_name: null,
          active_link: null,
        });
    };
  }, []);

  useEffect(() => {
    var id;
    if (!active_link && data) {
      id = getYouTubeID(data[0].subtopics[0].youtube_links[0]);
    } else {
      id = getYouTubeID(active_link);
    }

    if (id) {
      getYoutubeTitle(
        id,
        process.env.NEXT_PUBLIC_GOOGLE_YOUTUBE_API_KEY,
        function (err: any, tl: string) {
          if (err) {
            setTitle(`Course juggad of ${skill_name}`);
          } else {
            setTitle(tl);
          }
        }
      );
    }

    if (data) {
      setisLoading(false);
    }
  }, [active_link, data, skill_name]);

  return {
    title,
    isLoading,
    isPublished,
    saveCourseToDB,
    deleteCourse,
    publishCourse,
    UnPublishCourse,
  };
}
