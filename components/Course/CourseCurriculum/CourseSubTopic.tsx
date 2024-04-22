import React from "react";
import CourseTopic from "./CourseTopic";

const CourseSubTopic = ({
  value,
  index,
  text,
  children,
  description,
}: {
  value: string;
  index: string;
  text: string;
  children: React.ReactNode | string;
  description?: string;
}) => {
  return (
    <CourseTopic
      value={value}
      index={index}
      text={text}
      description={description}
    >
      {children}
    </CourseTopic>
  );
};

export default CourseSubTopic;
