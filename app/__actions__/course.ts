"use server";

import { createClient } from "@/lib/supabase.server";
import { cookies } from "next/headers";
import { getCurrentUserData } from "./auth";
var youtubeThumbnail = require("youtube-thumbnail");

// Helper function for removing spaces and converting tolowercase
function removeSpacesAndLowerCase(input: string | null) {
  if (input) return input.replace(/\s+/g, "").toLowerCase();
}



export async function getCourseFromDatabase(skillName: string | null) {
  // Check if skill name is provided
  if (!skillName) throw new Error("Skill name is required");
  try {
    // Getting supabase instance
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    // Getting current user data
    const user = await getCurrentUserData();

    // If user is not logged in, return null
    if (!user) throw new Error("User not logged in");

    // Fetching course data from database
    let { data, error } = await supabase
      .from("courses")
      .select("*")
      .eq("skill_name", skillName)
      .eq("user_id", user.id);

    // If error occurs, log it and return null
    if (error) {
      throw new Error(error.message);
    }

    // If data is not available, return null
    if (!data) throw new Error("No data available");

    // Return course data
    return data;
  } catch (err) {
    // If error occurs, log it and throw it
    console.log(err);
    throw err;
  }
}
export async function getCourseFromDatabaseById(course_id: string | null) {
  // Check if course id is provided
  if (!course_id) throw new Error("Skill name is required");
  try {
    // Getting supabase instance
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    // Fetching course data from database
    let { data, error } = await supabase
      .from("courses")
      .select("*")
      .eq("id", course_id);

    // If error occurs, log it and return null
    if (error) {
      throw new Error(error.message);
    }

    // If data is not available, return null
    if (!data) throw new Error("No data available");

    // Return course data
    return data;
  } catch (err) {
    // If error occurs, log it and throw it
    console.log(err);
    throw err;
  }
}

export async function checkPublishOrNotPublish(skillName: string | null) {
  // Check if skill name is provided
  if (!skillName) throw new Error("Skill name is required");

  try {
    // Getting supabase instance
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    // Getting current user data
    const user = await getCurrentUserData();

    // If user is not logged in, return null
    if (!user) throw new Error("User not logged in");

    // Fetching course published data from database
    let { data, error } = await supabase
      .from("courses")
      .select("is_published")
      .eq("skill_name", skillName)
      .eq("user_id", user.id)
      .single();

    // If error occurs, log it and return null
    if (error) {
      throw new Error(error.message);
    }

    // If data is not available, return null
    if (!data) throw new Error("No data available");

    return data.is_published;
  } catch (err) {
    // If error occurs, log it and throw it
    console.log(err);
    throw err;
  }
}

export async function deleteCourseById(courseId: string | null) {
  // Check if course id is provided
  if (!courseId) throw new Error("Course id is required");

  try {
    // Getting supabase instance
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    // Getting current user data
    const user = await getCurrentUserData();

    // If user is not logged in, return null
    if (!user) throw new Error("User not logged in");

    // Deleting course from database
    await supabase.from("courses").delete().eq("id", courseId);

    return true;
  } catch (err) {
    // If error occurs, log it and throw it
    console.log(err);
    throw err;
  }
}

export async function saveCourseToDatabase(
  skillName: string | null,
  data: CourseData | null
) {
  // Check if skill name and data is provided
  if (!skillName) throw new Error("Skill name is required");
  if (!data) throw new Error("Skill data is required");

  try {
    // Getting supabase instance
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    // Getting current user data
    const user = await getCurrentUserData();

    // If user is not logged in, throw error
    if (!user) throw new Error("User not logged in");

    let course_cover = null;

    var thumbnail = await youtubeThumbnail(
      data[0].subtopics[0].youtube_links[0]
    );
    course_cover = thumbnail.default.url;

    // Saving course to database
    let { error } = await supabase.from("courses").upsert([
      {
        skill_name: removeSpacesAndLowerCase(skillName),
        course_data: JSON.stringify(data),
        user_id: user.id,
        course_cover,
      },
    ]);

    if (error) throw new Error(error.message);

    return true;
  } catch (err) {
    // If error occurs, log it and throw it
    console.log(err);
    throw err;
  }
}

export async function publishCourseToDatabase(course_id: string | null) {
  // Check if course id is provided
  if (!course_id) throw new Error("Course id is required");
  try {
    // Getting supabase instance
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    // Getting current user data
    const user = await getCurrentUserData();

    // If user is not logged in, throw error
    if (!user) throw new Error("User not logged in");

    // Saving course to database
    await supabase
      .from("courses")
      .update({ is_published: true })
      .eq("id", course_id)
      .eq("user_id", user.id);
    return true;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function UnPublishCourseToDatabase(course_id: string | null) {
  if (!course_id) throw new Error("Course id is required");
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const user = await getCurrentUserData();
    if (!user) throw new Error("User not logged in");
    await supabase
      .from("courses")
      .update({ is_published: false })
      .eq("id", course_id)
      .eq("user_id", user.id);
    return true;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

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

export async function getCreatedCourses() {
  const user = await getCurrentUserData();
  if (!user) {
    return null;
  }
  return user.courses;
}

export async function grtCourseCoverById(course_id: string | null) {
  if (!course_id) throw new Error("Course id is required");
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const { data, error } = await supabase
      .from("courses")
      .select("course_cover")
      .eq("id", course_id)
      .single();
    if (error) throw new Error(error.message);
    return data.course_cover;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
