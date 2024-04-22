import ProfileCover from "@/components/Dashboard/Profile/ProfileCover";
import ProfileImage from "@/components/Dashboard/Profile/ProfileImage";
import TopCourses from "@/components/Dashboard/Profile/TopCourses";
import { logger } from "@/logger";
import React from "react";

const page = () => {
  console.log("Profile Page called ");
  return (
    <section className="max-w-7xl w-full ">
      <ProfileCover />
      {/* @ts-expect-error Async Server Component */}
      <ProfileImage />
      <TopCourses />
    </section>
  );
};

export default page;
