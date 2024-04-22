import React from "react";
import FeatureHeading from "./FeatureHeading";
import FeatureList from "./FeatureList";

const StandOut = () => {
  return (
    <div className="mt-12 md:mt-0 px-2 md:px-0">
      <FeatureHeading />
      <FeatureList />
    </div>
  );
};

export default StandOut;
