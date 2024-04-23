"use client";
import useCourseStore from "@/store/course/course-store";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import ReactPlayer from "react-player";
const YoutubeVideo = () => {
  const [active_link, data] = useCourseStore((state) => [
    state.active_link,
    state.data,
  ]);

  return (
    <div className="w-full h-full overflow-hidden md:px-16  rounded-lg">
      {data && data[0].subtopics[0].youtube_links[0] && (
        <ReactPlayer
          height={"100%"}
          controls
          fallback={
            <div className="w-full  h-full bg-slate-400 rounded-lg animate-pulse  md:mx-auto"></div>
          }
          key={active_link}
          playIcon={<FaCirclePlay size={52} color="blue" />}
          width={"100%"}
          url={
            active_link || (data ? data[0].subtopics[0].youtube_links[0] : "")
          }
        />
      )}
    </div>
  );
};

export default YoutubeVideo;
