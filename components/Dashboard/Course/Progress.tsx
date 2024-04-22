"use client";
import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
const Progress = () => {
  return (
    <ProgressBar
      className="w-[97%] text-center text-sm"
      bgColor="#0000FF"
      completed={10}
    />
  );
};

export default Progress;
