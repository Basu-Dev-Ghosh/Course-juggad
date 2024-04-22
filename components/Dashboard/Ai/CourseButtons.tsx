"use client";
import Button from "@/components/ui-custom/Button";
import React from "react";
import UpcomingTag from "./UpcomingTag";
import { MdOutlineHandyman } from "react-icons/md";
import { BiSolidMagicWand } from "react-icons/bi";
import { useAiCourse } from "@/hooks/useAiCourse";

const CourseButtons = () => {
  const {
    showForm,
    setShowForm,
    skillName,
    setSkillName,
    isLoading,
    setIsLoading,
    getCourse,
    loadingText,
    controller,
  } = useAiCourse();

  return (
    <>
      <div className="text-base md:text-xl text-gray-400 mt-3 md:mt-10 text-center max-w-xl mx-auto">
        {isLoading ? (
          <div className="text-loader">
            <p className="heading">{loadingText}</p>
            <div className="loading">
              <div className="load" />
              <div className="load" />
              <div className="load" />
              <div className="load" />
            </div>
          </div>
        ) : (
          " Choose your path: Craft courses manually or let our AI do the heavy lifting. Your learning journey, your way."
        )}
      </div>
      <div
        className={`flex justify-center md:items-center border-indigo-400 mt-10 md:mt-20 px-8 ${
          !showForm && "md:border-2"
        } border-dotted flex-col md:flex-row py-1 md:py-5 max-w-6xl md:max-w-4xl mx-auto`}
      >
        {showForm ? (
          <div className="flex flex-col justify-center">
            <div className="md:w-[470px] h-[60px] bg-gray-100 rounded-lg flex px-10 items-center">
              <BiSolidMagicWand size={25} className="mr-3" color="blue" />
              <input
                onKeyDown={(e) => {
                  e.key === "Enter" && getCourse();
                }}
                type="text"
                onChange={(e) => setSkillName(e.target.value)}
                placeholder="Enter topic name you want to learn"
                className=" w-full h-full hover:outline-none hover:bg-transparent bg-transparent hover:border-0 hover:shadow-none focus:outline-none focus:shadow-none focus:border-0 text-xs md:text-sm"
              />
            </div>
            <div className="mt-4 flex w-full items-center justify-center gap-5 ">
              <Button
                onClick={() => {
                  controller.abort();
                  setShowForm(false);
                  setIsLoading(false);
                }}
                className="bg-red-700 relative flex justify-center items-center w-[110px] text-white hover:bg-indigo-700 px-4 py-2 rounded-md"
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
                  onClick={getCourse}
                  className="bg-indigo-700 flex justify-center  md:mt-0 items-center text-white w-[110px] hover:bg-indigo-700 px-4 py-2 rounded-md md:ml-6"
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
              className="bg-indigo-700 relative flex justify-center items-center w-[200px] text-white hover:bg-indigo-700 px-4 py-2 rounded-md"
            >
              <UpcomingTag />
              <MdOutlineHandyman size={20} className="mr-3" />
              <p>Manually</p>
            </Button>
            <Button
              onClick={() => setShowForm(true)}
              className="bg-indigo-700 flex justify-center mt-3 md:mt-0 items-center text-white w-[200px] hover:bg-indigo-700 px-4 py-2 rounded-md md:ml-6"
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
