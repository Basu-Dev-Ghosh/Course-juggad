import React from "react";

import Image from "next/image";
import CreateCourseHeader from "./CreateCourseHeader";

const CreateCourse = () => {
  return (
    <section className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 h-auto my-4 md:my-16 px-8 md:px-10 py-10 bg-[#EEF2FE] text-white rounded-xl">
      <div className="flex w-full justify-center items-center">
        <Image
          alt="Illustration of a person"
          width={400}
          height={100}
          src={"/illus5.svg"}
        />
      </div>
      <CreateCourseHeader />
    </section>
  );
};

export default CreateCourse;
