"use client";

import React from "react";
import YoutubeVideo from "./YoutubeVideo";
import SuggestionBox from "@/components/Courses/Search/SuggestionBox";
import CourseCurriculum from "@/components/Course/CourseCurriculum/CourseCurriculum";
import Button from "@/components/ui-custom/Button";
import { MdSave } from "react-icons/md";
import { useParams } from "next/navigation";
import UpcomingTag from "../Ai/UpcomingTag";
import { IoMdTrash } from "react-icons/io";
import CourseLoading from "./CourseLoading";
import { CommonAlertDialog } from "@/components/Dialogs/CommonAlertDialog";
import { BiEdit } from "react-icons/bi";
import { RiGlobalFill } from "react-icons/ri";
import { useCourse } from "@/hooks/useCourse";

const Course = () => {
  const params = useParams();
  const {
    title,
    loaders: {
      courseDataLoading,
      titleLoading,
      isPublishedLoading,
      isCourseSaving,
      isCourseDeleting,
      isCoursePublishing,
      isCourseUnPublishing,
    },
    isPublished,
    saveCourseToDB,
    deleteCourse,
    publishCourse,
    UnPublishCourse,
  } = useCourse();

  if (courseDataLoading && titleLoading && isPublishedLoading)
    return <CourseLoading />;

  return (
    <div className=" w-full mx-auto md:ml-20 max-w-[90rem]  h-fit gap-3 grid grid-cols-12 ">
      <div className="md:col-span-12 col-span-12 mx-1 md:mx-7  md:mt-0 md:mb-0 rounded-xl h-[50px]  flex items-center justify-end gap-4">
        {params.id === "new" ? (
          <>
            <Button
              disabled={true}
              onClick={() => {}}
              className=" px-3 md:px-4 py-2 relative text-sm md:text-base bg-indigo-500 rounded-md flex justify-center items-center"
            >
              <UpcomingTag />
              <BiEdit size={20} className="mr-3" />
              Edit
            </Button>
            <CommonAlertDialog
              dialogTrigger={
                <Button
                  disabled={isCourseSaving}
                  className="px-3 md:px-4 disabled:cursor-not-allowed disabled:bg-gray-400 py-2 bg-indigo-500  text-sm md:text-base rounded-md flex  ml-1  justify-center items-center"
                >
                  <MdSave size={20} className="mr-3" />
                  Save
                </Button>
              }
              description="Are you sure you want to save this course?"
              onConfirm={saveCourseToDB}
            />
          </>
        ) : (
          <>
            {!isPublishedLoading && (
              <CommonAlertDialog
                dialogTrigger={
                  <Button
                    disabled={isCoursePublishing || isCourseUnPublishing}
                    className="px-3 md:px-4 disabled:cursor-not-allowed disabled:bg-gray-400 py-2 relative bg-indigo-500  text-sm md:text-base rounded-md flex justify-center items-center"
                  >
                    <RiGlobalFill size={20} className="mr-3" />
                    {isPublished ? "Unpublish" : "Publish"}
                  </Button>
                }
                description={`Are you sure you want to ${
                  isPublished ? "unpublish" : "publish"
                } this course?`}
                onConfirm={isPublished ? UnPublishCourse : publishCourse}
              />
            )}

            <CommonAlertDialog
              type="delete"
              dialogTrigger={
                <Button
                  disabled={isCourseDeleting}
                  className="px-3 md:px-4  py-2 disabled:cursor-not-allowed disabled:bg-gray-400 bg-red-500 ml-1 rounded-md text-sm md:text-base flex justify-center items-center"
                >
                  <IoMdTrash size={20} className="mr-3" />
                  Delete
                </Button>
              }
              description="Are you sure you want to delete this course?"
              onConfirm={deleteCourse}
            />
          </>
        )}
        {/* <Button className="px-4 py-2 bg-gray-500 rounded-md flex justify-center items-center">
          <RiRestartLine size={20} className="mr-3" />
          Regenerate
        </Button> */}
      </div>

      <div className="  h-full md:h-full col-span-12 md:col-span-8 grid md:sticky top-0 left-0">
        <div className="min-h-[240px] md:min-h-[450px]  col-span-8   md:static z-[100] md:z-0">
          <YoutubeVideo />
        </div>
        <div className="col-span-8 px-3 md:px-16 py-3">
          {titleLoading ? (
            <>
              <div className="w-full h-[24px] mt-6 bg-slate-400 rounded-lg animate-pulse"></div>
              <div className="w-full h-[18px] mt-1 bg-slate-400 rounded-lg animate-pulse"></div>
            </>
          ) : (
            <p className="text-2xl font-semibold">{title || ""}</p>
          )}

          <div className="flex items-center gap-2 mt-2">
            <SuggestionBox name="Technology" />
            <SuggestionBox name="AI" />
          </div>
          <div className="md:hidden w-full  pb-36 mt-7">
            <CourseCurriculum />
          </div>
        </div>
      </div>
      <div className="row-span-11 scroll-none overflow-y-scroll my-4 pb-24 col-span-12 md:col-span-4  hidden md:block p-1 rounded-lg ">
        <CourseCurriculum />
      </div>
    </div>
  );
};

export default Course;
