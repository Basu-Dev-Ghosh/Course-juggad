import { createClient } from "@/lib/supabase.client";
import { logger } from "@/logger";

export async function getAllPublishedCourse() {
  const supabase = createClient();
  let { data, error } = await supabase
    .from("courses")
    .select("skill_name,id")
    .eq("is_published", true);
  if (error) {
    console.log(error);
    return null;
  }
  return data;
}

export async function getAllSavedCourse() {
  const supabase = createClient();
  let { data: saved_courses, error } = await supabase
    .from("saved_courses")
    .select(
      `
    *,
    courses (
      skill_name
    )
  `
    );
  if (error) {
    console.log(error);
    return null;
  }

  if (!saved_courses || saved_courses.length === 0) return null;
  return saved_courses.map((c) => c.courses);
}
export async function getAllUsers() {
  const supabase = createClient();
  let { data, error } = await supabase.from("users").select("id");

  if (error) {
    console.log(error);
    return null;
  }
  return data;
}
export async function getCreatedCourses() {
  const supabase = createClient();
  let { data, error } = await supabase.from("courses").select("skill_name");

  if (error) {
    console.log(error);
    return null;
  }
  return data;
}
