import React from "react";
import Logo from "../../Header/Logo";
import { RiDoubleQuotesL } from "react-icons/ri";
import Image from "next/image";
import { TextGenerateEffect } from "../../ui/text-generate-effect";

const Owner = () => {
  return (
    <div className="bg-border w-full h-full md:w-[400px] rounded-xl px-8 py-4 md:py-6 flex justify-center items-center">
      <div className="bg-primary md:w-[90%] md:h-[90%] rounded-2xl flex flex-col items-center py-6 md:py-10 ">
        <Logo className="text-white  shadow-none border rounded-xl border-white" />
        <div className=" relative mt-8 text-xs font-bold text-white text-center mx-2 ">
          <RiDoubleQuotesL
            size={20}
            className=" absolute left-2 -top-6 md:-top-2"
          />
          <TextGenerateEffect
            className="text-white text-sm md:text-base"
            words="At our platform, innovation meets personalization. With AI-generated
          courses and intuitive editing tools, users enjoy tailored learning
          experiences like never before."
          />
        </div>
        <div className="flex flex-col mt-6 items-center justify-center mx-2 w-full">
          <Image
            alt="owner pic"
            src={"/owner.png"}
            width={100}
            height={100}
            className="rounded-full object-cover"
          />
          <h1 className="text-2xl text-white text-center font-bold mt-5">
            Basudev Ghosh
          </h1>
          <p className="text-[.6rem] text-gray-100 text-center">
            Creator of Exam Juggad
          </p>
        </div>
      </div>
    </div>
  );
};

export default Owner;
