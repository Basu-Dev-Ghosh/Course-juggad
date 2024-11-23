"use client";
import useCourseStore from "@/store/course/course-store";
import { navigate } from "./auth";

export async function getJobs(skill_name: string) {
  try {
    const res = await fetch(
      `http://localhost:8000/jobs/?skill_name=${skill_name}`
    );

    const data = await res.json();
    useCourseStore.setState({
      searchedJobs: data,
    });
    // Navigate to the course page
    navigate(`/dashboard/jobs`);
  } catch (err) {}
}
