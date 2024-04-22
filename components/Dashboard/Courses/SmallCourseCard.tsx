import Image from "next/image";
import Link from "next/link";
import React from "react";
import { formatDistanceToNow } from "date-fns";

function formatTimestamp(timestamp: string) {
  // Convert the timestamp to a Date object
  const date = new Date(timestamp);

  // Format the date
  const formattedDate = formatDistanceToNow(date, { addSuffix: true });

  return formattedDate;
}
const SmallCourseCard = ({ course }: { course: Course }) => {
  const courseData: CourseData = JSON.parse(course.course_data);
  const sections = courseData?.length || 0;
  const chapters =
    courseData?.reduce((acc, curr) => acc + curr.subtopics.length, 0) || 0;
  const videos =
    courseData?.reduce(
      (acc, curr) =>
        acc +
        curr.subtopics.reduce(
          (acc, curr) => acc + curr.youtube_links.length,
          0
        ),
      0
    ) || 0;

  return (
    <Link
      href={`/dashboard/course/${course.skill_name}`}
      className="small-course-card"
    >
      <div className="img">
        <Image
          className="w-full h-full object-cover rounded-xl"
          alt="course image"
          width={50}
          height={50}
          src={course.course_cover}
        />
      </div>
      <div className="textBox">
        <div className="textContent">
          <p className="h1 text-sm">
            {"Course juggad of " + course.skill_name}
          </p>
          <span className="span">
            {"Created  " + formatTimestamp(course.created_at) || ""}
          </span>
        </div>
        <div className="flex items-center text-[.6rem] md:text-xs mt-2 text-gray-500">
          <span className="mr-2">
            {sections} {sections > 1 ? "Sections" : "Section"}
          </span>
          <span className="mr-2">
            {chapters} {chapters > 1 ? "Chapters" : "Chapter"}
          </span>
          <span className="mr-2">
            {videos} {videos > 1 ? "Videos" : "Video"}
          </span>
        </div>
        <div />
      </div>
    </Link>
  );
};

export default SmallCourseCard;
