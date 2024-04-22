"use client";
import React from "react";
import { Accordion } from "@/components/ui/accordion";
import CourseTopic from "./CourseTopic";
import CourseSubTopic from "./CourseSubTopic";
import VideoBox from "./VideoBox";
import { IoIosPlayCircle } from "react-icons/io";
import useCourseStore from "@/store/course/course-store";
function CourseContents() {
  const data = useCourseStore((state) => state.data);

  return (
    <Accordion
      type="multiple"
      className="w-full mx-auto md:mx-0 my-6 md:w-[90%]"
    >
      {data &&
        data.map((course, index) => {
          return (
            <CourseTopic
              key={index}
              value={course.topic_name}
              index={(index + 1).toString()}
              text={course.topic_name}
              description={`${course.subtopics.length} Chapters`}
            >
              {course.subtopics &&
                course.subtopics.map((subTopic, i) => {
                  return (
                    <CourseSubTopic
                      key={i}
                      value={subTopic.subtopic_name}
                      index={(index + 1).toString() + "." + (i + 1).toString()}
                      text={subTopic.subtopic_name}
                      description={`${subTopic.youtube_links.length} Videos`}
                    >
                      <div className="flex items-center flex-wrap">
                        {subTopic.youtube_links &&
                          subTopic?.youtube_links?.map((link: any, id) => {
                            return (
                              <VideoBox key={id} link={link}>
                                <IoIosPlayCircle size={20} className="mr-2" />
                                <p>Video {id + 1}</p>
                              </VideoBox>
                            );
                          })}
                      </div>
                    </CourseSubTopic>
                  );
                })}
            </CourseTopic>
          );
        })}
    </Accordion>
  );
}

export default CourseContents;
