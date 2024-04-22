import { navigate } from "@/app/__actions__/auth";
import { createClient } from "@/lib/supabase.client";
import useCourseStore from "@/store/course/course-store";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export function useCourseCover() {
  const [cover, setCover] = useState<string | null>(null);
  const params = useParams();
  async function getAndSetCourseData() {
    try {
      const supabase = createClient();
      const { data, error } = await supabase
        .from("courses")
        .select("*")
        .eq(
          "id",
          typeof params.id === "string"
            ? decodeURIComponent(params.id)
            : decodeURIComponent(params.id[0])
        );
      if (data) {
        useCourseStore.setState({
          data: JSON.parse(data[0].course_data),
          skill_name: data[0].skill_name,
        });
        setCover(data[0].course_cover);
      }
    } catch (err) {
      logger.info(err);
    }
  }

  useEffect(() => {
    if (params.id === "new") {
      navigate("/dashboard/ai");
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

  return { cover, setCover };
}
