import React from "react";
import Owner from "./Owner";
import StandOut from "./StandOut";

const Features = () => {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2  h-auto my-2 md:my-12 px-4 md:px-10 py-10 max-w-[76rem] mx-auto rounded-xl">
      <Owner />
      <StandOut />
    </section>
  );
};

export default Features;
