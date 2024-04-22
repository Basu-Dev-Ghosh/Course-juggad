"use client";
import { getCurrentUserData } from "@/app/__actions__/auth";
import { createClient } from "@/lib/supabase.client";
import useLoginStore from "@/store/auth/login-store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineSave } from "react-icons/ai";

const CourseCard = ({ course }: { course: Course }) => {
  async function saveCourseToDb() {
    try {
      const user = await getCurrentUserData();
      if (!user) {
        useLoginStore.setState({ login_form_visible: true });
        return;
      }
      const supabase = createClient();
      const course_id = course.id;

      await supabase.from("saved_courses").upsert([
        {
          user_id: user.id,
          course_id: course_id,
        },
      ]);
      alert("Course saved");
    } catch (err) {
      logger.info(err);
      alert("Course saving failed");
    }
  }
  return (
    <div className="course-card flex">
      <div className="card-img">
        <Image
          alt="Course image"
          width={300}
          height={300}
          src={course.course_cover}
        />
      </div>
      <Link href={`/course/${course.id}`} className="card-title">
        {"Course juggad of " + course.skill_name}
      </Link>

      <hr className="card-divider" />
      <div className="card-footer">
        <div className="card-price">
          <span>$</span> FREE
        </div>
        <button className="card-btn" onClick={saveCourseToDb}>
          <AiOutlineSave size={20} className="mr-2" />
        </button>
      </div>
    </div>

    // <div className="min-w-[250px] md:max-w-[300px] min-h-[340px] max-h-[440px] rounded-2xl border shadow-md bg-cover mx-2">
    //   <div className="overflow-hidden h-[60%] rounded-tl-2xl rounded-tr-2xl bg-red-400">

    //   </div>
    //   <p className="mx-2 my-4 text-left font-bold text-md text-gray-900 mb-2 md:text-base leading-[50px]">
    //     Learn BUMS, From zero to hero mastary course.
    //   </p>

    //   <div className="flex p-3 items-center justify-between mt-1">
    //     <p className="flex items-center">
    //       <span className="text-lg font-extrabold mr-2 flex items-center">
    //         <LiaRupeeSignSolid />
    //         100.00
    //       </span>
    //       <span className="line-through text-xs text-slate-400">1000</span>
    //     </p>
    //     <Button className="bg-indigo-600 hover:bg-indigo-700 px-7 py-2 rounded-xl text-sm">
    //       Add to cart
    //     </Button>
    //   </div>
    // </div>
  );
};

export default CourseCard;
