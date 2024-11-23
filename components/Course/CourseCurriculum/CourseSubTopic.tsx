import React from "react";
import CourseTopic from "./CourseTopic";

const CourseSubTopic = ({
  onOpen,
  value,
  index,
  text,
  children,
  description,
}: {
  onOpen?: () => void;
  value: string;
  index: string;
  text: string;
  children: React.ReactNode | string;
  description?: string;
}) => {
  return (
    <CourseTopic
      onOpen={onOpen}
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
