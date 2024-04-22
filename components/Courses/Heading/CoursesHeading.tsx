import React from "react";
import InViewAnimation from "../../Animations/InViewAnimation";

const CoursesHeading = () => {
  return (
    <section className="flex flex-col justify-center mx-3 md:text-left text-center md:mx-0">
      <InViewAnimation
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <h1 className="max-w-6xl  font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
          Check our Amazing <br className="md:hidden" />{" "}
          <span className="text-indigo-600">Courses</span>
        </h1>
      </InViewAnimation>
      <InViewAnimation
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <p className="text-base max-w-2xl font-normal leading-7 text-gray-500 mt-2">
          Welcome to our platform, where learning knows no bounds. Embark on
          your educational journey with us today!
        </p>
      </InViewAnimation>
    </section>
  );
};

export default CoursesHeading;
