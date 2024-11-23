"use server";

import { createClient } from "@/lib/supabase.server";
import { cookies } from "next/headers";
import { getCurrentUserData } from "./auth";
import { formatTimeSpent, getTotalSubtopics, isValidURL } from "../__helpers__";
import { RiSkipLeftLine } from "react-icons/ri";

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
      .eq("id", skillName)
      .eq("user_id", user.id);

    // If error occurs, log it and return null
    if (error) {
      throw new Error(error.message);
    }

    // If data is not available, return null
    if (!data) throw new Error("No data available");

    // Return course data
    return data as Course[];
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

    const is_duplicate = isValidURL(skillName);

    let course_cover = null;

    var thumbnail = await youtubeThumbnail(
      data[0].subtopics[0].youtube_links[0]
    );
    course_cover = thumbnail.default.url;

    const total_subtopics: number = getTotalSubtopics(data);
    // Saving course to database
    let { error } = await supabase.from("courses").upsert([
      {
        skill_name: removeSpacesAndLowerCase(skillName),
        course_data: JSON.stringify(data),
        user_id: user.id,
        total_subtopics: total_subtopics,
        course_cover,
        is_duplicate: is_duplicate ? 1 : 0,
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
    .eq("is_published", true)
    .order("created_at", { ascending: false });
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
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });
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

export async function updateSubtopicStatus(
  course_id: string,
  subtopic_name: string
) {
  try {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const user = await getCurrentUserData();
    console.log("Adding to db", course_id, subtopic_name);

    const { data, error } = await supabase
      .from("subtopic_status")
      .insert([
        {
          course_id: course_id,
          name: subtopic_name,
          user_id: user?.id,
          is_done: 1,
        },
      ])
      .select();

    if (error) console.log(error);
    if (data) console.log(data);
  } catch (err) {
    console.log(err);
  }
}

async function getOverallProgress(userId: string) {
  // Getting supabase instance
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  // Fetch all courses created by the user
  const { data: courses, error: coursesError } = await supabase
    .from("courses")
    .select("id, progress")
    .eq("user_id", userId);

  if (coursesError) {
    console.error("Error fetching courses:", coursesError);
    return null;
  }

  if (courses.length === 0) {
    return 0;
  }

  // Calculate the overall progress as a weighted average
  const totalCourses = courses.length;
  const totalProgress = courses.reduce(
    (acc: number, course: any) => acc + course.progress,
    0
  );
  const averageProgress = totalProgress / totalCourses;

  return averageProgress;
}

export async function getTimeSpent(userId: string) {
  try {
    // Getting supabase instance
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    // Fetch time spent for different periods
    const { data: todayData, error: todayError } = await supabase.rpc(
      "time_spent_today",
      { p_user_id: userId }
    );
    const { data: yesterdayData, error: yesterdayError } = await supabase.rpc(
      "time_spent_yesterday",
      { p_user_id: userId }
    );
    const { data: thisWeekData, error: thisWeekError } = await supabase.rpc(
      "time_spent_this_week",
      { p_user_id: userId }
    );
    const { data: lastMonthData, error: lastMonthError } = await supabase.rpc(
      "time_spent_last_month",
      { p_user_id: userId }
    );
    const { data: thisYearData, error: thisYearError } = await supabase.rpc(
      "time_spent_this_year",
      { p_user_id: userId }
    );
    const { data: overallData, error: overallError } = await supabase.rpc(
      "time_spent_overall",
      { p_user_id: userId }
    );

    // Error handling
    if (
      todayError ||
      yesterdayError ||
      thisWeekError ||
      lastMonthError ||
      thisYearError ||
      overallError
    ) {
      console.error("Error fetching time spent data:", {
        todayError,
        yesterdayError,
        thisWeekError,
        lastMonthError,
        thisYearError,
        overallError,
      });
      return null;
    }

    console.log("Today data", todayData);

    // Format time spent
    return {
      today: formatTimeSpent(todayData || 0),
      yesterday: formatTimeSpent(yesterdayData || 0),
      thisWeek: formatTimeSpent(thisWeekData || 0),
      last30Days: formatTimeSpent(lastMonthData || 0),
      lastYear: formatTimeSpent(thisYearData || 0),
      overall: formatTimeSpent(overallData || 0),
    };
  } catch (error) {
    console.error("Error fetching time spent:", error);
    return null;
  }
}

export async function getDashboardData() {
  // Getting supabase instance
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  // Getting current user data
  const user = await getCurrentUserData();

  // If user is not logged in, throw error
  if (!user) throw new Error("User not logged in");
  // getting total course created
  const course_created = user.courses?.length || 0;
  // Getting total course duplicated
  let { count: course_duplicated } = await supabase
    .from("courses")
    .select("id", { count: "exact" })
    .eq("is_duplicate", true);

  // Getting ongoing course
  let { count: course_ongoing } = await supabase
    .from("courses")
    .select("id", { count: "exact" })
    .gt("progress", 0)
    .lt("progress", 100);
  // Getting completed course
  let { count: course_completed } = await supabase
    .from("courses")
    .select("id", { count: "exact" })
    .eq("progress", 100);

  // current streaks

  let { data: current_streak, error } = await supabase
    .from("user_streaks")
    .select("current_streak")
    .eq("user_id", user.id)
    .order("last_active_date", { ascending: false })
    .limit(1)
    .single(); // Get a single record

  // Getting overall progress
  const overall_progress = await getOverallProgress(user.id);

  // Getting time spents
  // const time_spents = await getTimeSpent(user.id);
  const time_spents = {
    today: "0H20M",
    yesterday: "1H5M",
    thisWeek: "0H25M",
    last30Days: "0H25M",
    lastYear: "0H0M",
    overall: "1H25M",
  };

  // Getting skill progress
  const skill_progress = user.courses
    ?.filter((course) => !course.is_duplicate)
    .map((course) => {
      return { name: course.skill_name, progress: course.progress };
    });

  const courses = user.courses;

  return {
    username: user.full_name,
    courses,
    upcomingCourse: {
      title: "UX-Strategy: How to Reach The Next Level",
      instructor: "Rose Poole",
      time: "7:30 AM",
      date: "09. 08. 24",
    },
    stats: {
      udemyCoursesDuplicated: course_duplicated || 0,
      completedCourses: course_completed || 0,
      totalCoursesCreated: course_created || 0,
      ongoingCourses: course_ongoing || 0,
      totalWatchTime: time_spents?.overall || "NA",
      overallProgress: overall_progress || 0,
      ranking: course_completed || 0,
      timeSpent: time_spents,
    },
    skills: skill_progress,
    learningStreak: current_streak?.current_streak || 0,
  };
}
