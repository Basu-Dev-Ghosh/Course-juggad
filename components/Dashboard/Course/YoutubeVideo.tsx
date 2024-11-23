"use client";
import { updateSubtopicStatus } from "@/app/__actions__/course";
import VideoLoadingAnimation from "@/components/Animations/VideoLoadingAnimation";
import useCourseStore from "@/store/course/course-store";
import { useQueryClient } from "@tanstack/react-query";
import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import ReactPlayer from "react-player";
import { log } from "winston";
const YoutubeVideo = ({
  course_id,
  skill_name,
  onComplete,
}: {
  course_id?: string;
  skill_name?: string;
  onComplete?: () => void;
}) => {
  const queryClient = useQueryClient();
  const [active_link, data, active_subtopic] = useCourseStore((state) => [
    state.active_link,
    state.data,
    state.active_subtopic,
  ]);

  const handleProgress = async (state: any) => {
    if (state.played > 0.95) {
      console.log("handleProgress", course_id, active_subtopic);
      course_id &&
        active_subtopic &&
        (await updateSubtopicStatus(course_id, active_subtopic));
      onComplete && onComplete();
      const data: Course[] | undefined = queryClient.getQueryData([
        "getting_course",
        skill_name,
      ]);
    }
  };

  return (
    <div className="w-full h-full overflow-hidden md:px-16  rounded-lg">
      {data && data[0].subtopics[0].youtube_links[0] && (
        <ReactPlayer
          height={"100%"}
          controls
          fallback={<VideoLoadingAnimation type="video" />}
          onProgress={handleProgress}
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
