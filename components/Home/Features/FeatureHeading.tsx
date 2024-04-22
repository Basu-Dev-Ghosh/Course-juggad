import React from "react";
import { Staatliches } from "next/font/google";
import InViewAnimation from "../../Animations/InViewAnimation";
const stl = Staatliches({ weight: "400", subsets: ["latin"] });

const FeatureHeading = () => {
  return (
    <div className="flex flex-col justify-center ">
      <InViewAnimation
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <h1 className="max-w-2xl  font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
          See why we <br className="md:hidden" />{" "}
          <span className="text-indigo-600">Stand out</span>
        </h1>
      </InViewAnimation>
      <InViewAnimation
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <p className="text-base font-normal leading-7 text-gray-500 mt-2">
          Welcome to our platform, where learning knows no bounds. Embark on
          your educational journey with us today!
        </p>
      </InViewAnimation>
    </div>
  );
};

export default FeatureHeading;
