import React from "react";
import HowToUseButton from "./HowToUseButton";
import Tagline from "./Tagline";
import DashboardPic from "./DashboardPic";

const Hero = () => {
  return (
    <section className="pt-2 px-8 md:px-0 lg:pt-12 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-cover md:w-full">
      <div className="relative text-center">
        <HowToUseButton />
        <Tagline />
        <DashboardPic />
      </div>
    </section>
  );
};

export default Hero;
