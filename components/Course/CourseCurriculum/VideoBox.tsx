"use client";
import useCourseStore from "@/store/course/course-store";
import React from "react";

const VideoBox = ({
  link,
  children,
}: {
  link: string | null;
  children: React.ReactNode | string;
}) => {
  const set_active_link = useCourseStore((state) => state.set_active_link);
  return (
    <button
      onClick={() => set_active_link(link)}
      className="flex items-center justify-center px-3 py-2 text-xs cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 active:scale-90 mr-3 mt-2 md:mt-1  max-w-[200px] bg-[#7b7bd9] rounded-md text-white "
    >
      {children}
    </button>
  );
};

export default VideoBox;
