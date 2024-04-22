import React from "react";
import { FaPlus } from "react-icons/fa6";

const UpgradeButton = () => {
  return (
    <div className="flex flex-wrap flex-col md:flex-row  w-[88%] md:w-[96%] rounded-lg md:shadow-md mx-auto md:justify-between md:items-cente md:px-6 z-50 md:sticky md:top-0 md:left-0 bg-white py-3">
      <p className="px-4 md:px-0 text-right md:text-left font-semibold text-indigo-600">
        Free plan <br />
        <span className="text-xs">03 credits left</span>
      </p>
      <div className="sm:w-full px-3 md:px-0 flex md:items-center mt-2  flex-col md:flex-row">
        <button className="bg-white text-black text-center sm:w-full  flex justify-center items-center md:mr-5 border font-bold py-2 md:px-4 rounded">
          <FaPlus className="mr-2" size={16} /> Create a course
        </button>
        <button className="sm:w-full mt-2 md:mt-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Upgrade
        </button>
      </div>
    </div>
  );
};

export default UpgradeButton;
