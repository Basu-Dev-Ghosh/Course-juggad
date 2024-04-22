"use client";
import React from "react";
import { Staatliches } from "next/font/google";
import { FaArrowRightLong } from "react-icons/fa6";
import InViewAnimation from "../../Animations/InViewAnimation";

const stl = Staatliches({ weight: "400", subsets: ["latin"] });

const features = [
  "AI-generated courses for personalized learning experiences.",
  "Intuitive editing tools for effortless customization.",
  "Seamless certification process upon completing courses.",
  "Commitment to delivering excellence in education.",
  "Affordable pricing that fits any budget.",
];
const FeatureList = () => {
  const [activeFeature, setActiveFeature] = React.useState<number>(1);
  const refs = React.useRef(
    features.map(() => React.createRef<HTMLLIElement>())
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>, i: number) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      const nextIndex = (i + 1) % features.length;
      setActiveFeature(nextIndex);
      refs.current[nextIndex].current?.focus();
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      const prevIndex = (i - 1 + features.length) % features.length;
      setActiveFeature(prevIndex);
      refs.current[prevIndex].current?.focus();
    }
  };
  const handleClick = (i: number) => {
    setActiveFeature(i);
    refs.current[i].current?.focus();
  };
  return (
    <ul className="mt-8 md:mt-4 space-y-4">
      {features.map((feature, i) => {
        return (
          <InViewAnimation key={i} initial={{ x: 200 }} whileInView={{ x: 0 }}>
            <li
              ref={refs.current[i]}
              tabIndex={0}
              onKeyDown={(e) => handleKeyDown(e, i)}
              onClick={() => handleClick(i)}
              className={`  ${
                activeFeature === i
                  ? "bg-[#EEF2FE] text-indigo-700 font-bold text-lg  pr-10 active"
                  : "border"
              } text-xs md:text-md tracking-wider px-4 focus:border-0 focus:outline-none  md:w-[96%] w-full cursor-pointer hover:scale-95 active:scale-90 transition-all duration-150 ease-in-out py-4 flex justify-between items-center rounded-xl shadow-md `}
            >
              {feature}
              {activeFeature === i && <FaArrowRightLong />}
            </li>
          </InViewAnimation>
        );
      })}
    </ul>
  );
};

export default FeatureList;
