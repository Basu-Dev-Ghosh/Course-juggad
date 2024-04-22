"use server";

import { createClient } from "@/lib/supabase.server";
import { cookies } from "next/headers";
import { getCurrentUserData } from "./auth";

export async function getAllPublishedCourse() {
  // Getting supabase instance
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  let { data, error } = await supabase
    .from("courses")
    .select("*")
    .eq("is_published", true);
  if (error) {
    console.log(error);
    return null;
  }
  return data;
}
export async function getAllSavedCourse() {
  // Getting supabase instance
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const user = await getCurrentUserData();
  if (!user) return null;
  let { data: saved_courses, error } = await supabase
    .from("saved_courses")
    .select(
      `
    *,
    courses (
      *
    )
  `
    )
    .eq("user_id", user.id);
  if (error) {
    console.log(error);
    return null;
  }

  if (!saved_courses || saved_courses.length === 0) return null;
  return saved_courses.map((c) => c.courses);
}
