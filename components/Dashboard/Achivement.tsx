import React from "react";

const Achivement = () => {
  return (
    <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
      <div className="flex justify-between mb-6">
        <div>
          <div className="text-2xl font-semibold mb-1">100</div>
          <div className="text-sm font-medium text-gray-400">Your score</div>
        </div>
      </div>
      <a
        href="#"
        className="text-[#2537f8] font-medium text-sm hover:text-blue-800"
      >
        How it works?
      </a>
    </div>
  );
};

export default Achivement;
