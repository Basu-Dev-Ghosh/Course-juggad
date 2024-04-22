import { getCurrentUserData } from "@/app/__actions__/auth";
import { createClient } from "@/lib/supabase.client";
import useLoginStore from "@/store/auth/login-store";
import useCourseStore from "@/store/course/course-store";
import { useParams } from "next/navigation";

export function useCourseDetails() {
  const params = useParams();
  const [skill_name, data] = useCourseStore((state) => [
    state.skill_name,
    state.data,
  ]);
  let chapters = data?.reduce((acc, curr) => acc + curr.subtopics.length, 0);
  let sections = data?.length;
  let videos = data?.reduce(
    (acc, curr) =>
      acc +
      curr.subtopics.reduce((acc, curr) => acc + curr.youtube_links.length, 0),
    0
  );

  async function saveCourseToDb() {
    try {
      const user = await getCurrentUserData();
      if (!user) {
        useLoginStore.setState({ login_form_visible: true });
        return;
      }
      const supabase = createClient();
      const course_id = params.id;

      await supabase.from("saved_courses").upsert([
        {
          user_id: user.id,
          course_id: course_id,
        },
      ]);
      alert("Course saved");
    } catch (err) {
      console.log(err);
    }
  }

  return {
    skill_name,
    chapters,
    sections,
    videos,
    saveCourseToDb,
  };
}
