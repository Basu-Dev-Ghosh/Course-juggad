"use client";

import { getDashboardData } from "@/app/__actions__/course";
import { getJobs } from "@/app/__actions__/job";
import AnimatedSearchIcon, {
  SearchAnimation,
} from "@/components/Animations/SearchAnimation";
import Dashboard from "@/components/Dashboard/Profile/Dashboard";
import React, { Suspense, useEffect, useState } from "react";

const Page = () => {
  const [dashboardData, setDashboardData] = useState({});
  async function getData() {
    const data: any = await getDashboardData();
    data && setDashboardData(data);
  }

  useEffect(() => {
    getData();
  }, []);
  const [isJobFetching, setIsJobFetching] = useState(false);

  async function handleFetchJobsData(skill_name: string) {
    try {
      setIsJobFetching(true);
      await getJobs(skill_name);
    } catch (err) {
    } finally {
      setIsJobFetching(false);
    }
  }

  return (
    <section className="max-w-7xl w-full h-full relative">
      {/* Fix the loading icon to always be centered */}
      <div
        className={`z-50 w-full h-full fixed top-0 left-0 justify-center items-center ${
          isJobFetching ? "flex" : "hidden"
        }`}
      >
        <AnimatedSearchIcon />
      </div>

      {/* Use Suspense to display fallback spinner */}
      {dashboardData && (
        <Dashboard
          username={""}
          courses={null}
          upcomingCourse={{
            title: "",
            instructor: "",
            time: "",
            date: "",
          }}
          stats={{
            totalCoursesCreated: 0,
            udemyCoursesDuplicated: 0,
            ongoingCourses: 0,
            completedCourses: 0,
            totalWatchTime: "",
            overallProgress: 0,
            ranking: 0,
            timeSpent: null,
          }}
          learningStreak={0}
          {...dashboardData}
          isJobFetching={isJobFetching}
          handleFetchJobsData={handleFetchJobsData}
        />
      )}
    </section>
  );
};

export default Page;
const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div
        className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-indigo-500"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};
