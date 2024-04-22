import React from "react";

const CoursePurchased = () => {
  return (
    <div className="bg-white rounded-md border border-gray-100 p-6 shadow-md shadow-black/5">
      <div className="flex justify-between mb-4">
        <div>
          <div className="flex items-center mb-1">
            <div className="text-2xl font-semibold">01</div>
            <div className="p-1 rounded bg-emerald-500/10 text-emerald-500 text-[12px] font-semibold leading-none ml-2">
              +30%
            </div>
          </div>
          <div className="text-sm font-medium text-gray-400">
            Course purchased
          </div>
        </div>
      </div>
      <a
        href="/dierenartsen"
        className="text-[#2537f8] font-medium text-sm hover:text-blue-800"
      >
        View
      </a>
    </div>
  );
};

export default CoursePurchased;
