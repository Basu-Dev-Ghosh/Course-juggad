import React from "react";
import SuggestionBox from "./SuggestionBox";

const courseNames = ["React js", "Javascript", "Python"];
const CourseSuggestions = () => {
  return (
    <div className="px-10 md:px-4 w-full md:w-2/6 mt-3 flex gap-3 items-center flex-wrap">
      {courseNames.map((name, i) => {
        return <SuggestionBox key={i} name={name} />;
      })}
    </div>
  );
};

export default CourseSuggestions;
