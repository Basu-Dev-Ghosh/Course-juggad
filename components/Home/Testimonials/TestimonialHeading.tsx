import React from "react";
import { Staatliches } from "next/font/google";
const stl = Staatliches({ weight: "400", subsets: ["latin"] });

const TestimonialHeading = () => {
  return (
    <div className="mx-8 md:mx-auto max-w-2xl md:text-center">
      <h1 className="max-w-2xl mx-auto md:text-center font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
        What Our
        <br /> <span className={`text-indigo-600`}>Customers Are Saying</span>
      </h1>
    </div>
  );
};

export default TestimonialHeading;
