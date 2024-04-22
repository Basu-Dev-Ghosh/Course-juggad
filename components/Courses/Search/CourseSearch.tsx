import React from "react";
import SearchBar from "./SearchBar";
import Filter from "./Filter";

const CourseSearch = () => {
  return (
    <section className="mt-10 mx-6 md:mx-0 md:w-full flex  md:justify-between items-center">
      <SearchBar />
      {/* <Filter /> */}
    </section>
  );
};

export default CourseSearch;
