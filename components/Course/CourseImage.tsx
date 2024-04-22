"use client";
import Image from "next/image";
import React from "react";
import InViewAnimation from "../Animations/InViewAnimation";
import { useCourseCover } from "@/hooks/useCourseCover";

const CourseImage = () => {
  const { cover, setCover } = useCourseCover();
  return (
    <InViewAnimation
      initial={{ x: -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
    >
      {" "}
      <div className="course-image-card">
        <div className="circle" />
        <div className="circle" />

        <div className="card-inner">
          {cover && (
            <Image
              src={cover}
              fill
              className="w-full h-full object-fill rounded-md p-6"
              alt="course cover"
            />
          )}
        </div>
      </div>
    </InViewAnimation>
  );
};

export default CourseImage;
