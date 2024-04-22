"use client";
import React from "react";
import Button from "../../ui-custom/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { getCurrentUserData, navigate } from "@/app/__actions__/auth";
import useLoginStore from "@/store/auth/login-store";
const CreateCourseHeader = () => {
  async function createCourse() {
    const user = await getCurrentUserData();
    if (!user) {
      useLoginStore.setState({ login_form_visible: true });
    } else {
      navigate("/dashboard/ai");
    }
  }
  return (
    <div className="flex flex-col justify-center mt-10 md:mt-0">
      <h1 className="max-w-3xl  font-bold text-4xl text-black  md:text-5xl leading-[50px]">
        Create Your Own <span className="text-indigo-700">Course</span>
      </h1>
      <p className="max-w-xl  text-base font-normal leading-7 text-gray-400 mt-4">
        Ready to share your expertise with the world? Join our community of
        instructors and unlock the power of teaching on our platform. Whether
        you're a seasoned professional or a passionate hobbyist, we welcome
        creators from all backgrounds to craft engaging courses that inspire and
        educate.
      </p>
      <Button
        onClick={createCourse}
        className="bg-indigo-600 text-white hover:bg-indigo-700 w-full md:w-[40%] mt-6 rounded-xl flex items-center justify-between px-6 "
      >
        <p>Become a creator</p>
        <IoIosArrowRoundForward size={30} />
      </Button>
    </div>
  );
};

export default CreateCourseHeader;
