"use client";
import Button from "@/components/ui-custom/Button";
import React from "react";
import UpcomingTag from "./UpcomingTag";
import { MdOutlineHandyman } from "react-icons/md";
import { BiSolidMagicWand } from "react-icons/bi";
import { useAiCourse } from "@/hooks/useAiCourse";

const CourseButtons = ({
  setIsButtonClicked,
}: {
  setIsButtonClicked: (value: boolean) => void;
}) => {
  const {
    showForm,
    setShowForm,
    setSkillName,
    isLoading,
    isError,
    getCourse,
    loadingText,
  } = useAiCourse();

  return (
    <>
      <div className="text-base md:text-xl text-gray-500 mt-3 md:mt-10 text-center max-w-xl mx-auto">
        {isError && (
          <p className="text-red-500">
            Oops! Something went wrong. Please try again.
          </p>
        )}
      </div>

      <div
        className={`flex justify-center md:items-center border-indigo-400 mt-10 md:mt-20 px-8 ${
          !showForm && "md:border-2"
        } border-dotted flex-col md:flex-row py-1 md:py-5 max-w-6xl md:max-w-4xl mx-auto`}
      >
        {showForm ? (
          <div className="flex flex-col justify-center items-center w-full">
            <div className="md:w-[470px] w-full h-[60px] bg-gray-100 rounded-lg flex px-4 md:px-10 items-center">
              <BiSolidMagicWand size={25} className="mr-3 text-indigo-600" />
              <input
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setIsButtonClicked(true);
                    getCourse();
                  }
                }}
                type="text"
                onChange={(e) => setSkillName(e.target.value)}
                placeholder="Enter skill name or paste Udemy course link..."
                className="w-full h-full bg-transparent focus:outline-none text-xs md:text-sm placeholder-gray-500"
                aria-label="Course input"
              />
            </div>

            <div className="mt-4 flex w-full items-center justify-center gap-4 md:gap-5">
              <Button
                onClick={() => {
                  setShowForm(false);
                }}
                className="bg-red-500 relative flex justify-center items-center w-[110px] text-white hover:bg-red-600 transition px-4 py-2 rounded-md"
              >
                <p>Cancel</p>
              </Button>
              {isLoading ? (
                <div className="three-body">
                  <div className="three-body__dot" />
                  <div className="three-body__dot" />
                  <div className="three-body__dot" />
                </div>
              ) : (
                <Button
                  onClick={() => {
                    setIsButtonClicked(true);
                    getCourse();
                  }}
                  className="bg-indigo-600 flex justify-center items-center w-[110px] text-white hover:bg-indigo-700 transition px-4 py-2 rounded-md"
                >
                  <p>Generate</p>
                </Button>
              )}
            </div>
          </div>
        ) : (
          <>
            <Button
              disabled={true}
              className="bg-gray-400 relative flex justify-center items-center w-[200px] text-white cursor-not-allowed hover:bg-gray-400 px-4 py-2 rounded-md"
              aria-label="Manual course creation coming soon"
            >
              <UpcomingTag />
              <MdOutlineHandyman size={20} className="mr-3" />
              <p>Manually</p>
            </Button>

            <Button
              onClick={() => setShowForm(true)}
              className="bg-indigo-600 flex justify-center mt-3 md:mt-0 items-center text-white w-[200px] hover:bg-indigo-700 transition px-4 py-2 rounded-md md:ml-6"
              aria-label="AI course generation"
            >
              <BiSolidMagicWand size={20} className="mr-3" />
              <p>AI Generate</p>
            </Button>
          </>
        )}
      </div>
    </>
  );
};

export default CourseButtons;
