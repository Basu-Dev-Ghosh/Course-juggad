import React from "react";
import { FaFilter } from "react-icons/fa6";

const Filter = () => {
  return (
    <div className="bg-[#f3f3f4]  hover:bg-white px-4 py-4 rounded-md cursor-pointer transition-all hover:scale-95 active:scale-90 duration-150 ease-in-out flex justify-center items-center">
      <FaFilter size={24} color="blue" />
    </div>
  );
};

export default Filter;
