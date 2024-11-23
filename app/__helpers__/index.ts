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
export function getTotalSubtopics(data: CourseData): number {
  let totalSubtopics = 0;
  data?.forEach((topic) => {
    totalSubtopics += topic.subtopics.length;
  });
  return totalSubtopics;
}

export function isValidURL(str: string) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol (http or https)
      "((([a-zA-Z0-9\\-]+\\.)+[a-zA-Z]{2,})|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR IP (v4) address
      "(\\:\\d+)?" + // port (optional)
      "(\\/[-a-zA-Z0-9@:%._\\+~#=]*)*" + // path (optional)
      "(\\?[;&a-zA-Z0-9%_\\+=-]*)?" + // query string (optional)
      "(\\#[-a-zA-Z0-9_]*)?$" // fragment (optional)
  );

  return pattern.test(str);
}

export function formatTimeSpent(interval: any) {
  // Convert PostgreSQL interval string to total seconds
  const totalSeconds = interval ? parseIntervalToSeconds(interval) : 0;

  // Calculate hours, minutes, and seconds
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);

  // Format time spent
  return `${hours}h ${minutes}m`;
}

export function parseIntervalToSeconds(interval: any) {
  const match = interval.match(/(\d+):(\d+):(\d+)/);
  if (match) {
    const [, hours, minutes, seconds] = match;
    return Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);
  }
  return 0;
}
