import React from "react";
import { Staatliches } from "next/font/google";
const stl = Staatliches({ weight: "400", subsets: ["latin"] });
const PricingHeader = () => {
  return (
    <div className="mx-8 md:mx-0">
      <h1 className="max-w-2xl  md:mx-auto md:text-center font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
        Flexible
        <span className="text-indigo-600"> Pricing </span>
        Options
      </h1>
      <p className="max-w-4xl mx-auto md:text-center text-base font-normal leading-7 text-gray-500 mb-9">
        Choose from our range of affordable pricing plans to access premium
        education at unbeatable prices. Whether you're a casual learner or a
        dedicated student, we have a plan tailored to fit your budget and
        learning needs. Explore our pricing options below and start your journey
        to success today!
      </p>
    </div>
  );
};

export default PricingHeader;
