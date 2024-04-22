import React from "react";
import Chart from "./Chart";

const Analytics = () => {
  return (
    <div className="bg-white border w-full border-gray-100 shadow-md shadow-black/5 p-2 md:p-6 rounded-md lg:col-span-2">
      <div className="flex justify-between mb-4 items-start">
        <div className="font-medium">Order Statistics</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <div className="rounded-md border border-dashed border-gray-200 p-4">
          <div className="flex items-center mb-0.5">
            <div className="text-xl font-semibold">10</div>
            <span className="p-1 rounded text-[12px] font-semibold bg-blue-500/10 text-blue-500 leading-none ml-1">
              $80
            </span>
          </div>
          <span className="text-gray-400 text-sm">Active courses</span>
        </div>
        <div className="rounded-md border border-dashed border-gray-200 p-4">
          <div className="flex items-center mb-0.5">
            <div className="text-xl font-semibold">50</div>
            <span className="p-1 rounded text-[12px] font-semibold bg-emerald-500/10 text-emerald-500 leading-none ml-1">
              +$469
            </span>
          </div>
          <span className="text-gray-400 text-sm">Completed courses</span>
        </div>
        <div className="rounded-md border border-dashed border-gray-200 p-4">
          <div className="flex items-center mb-0.5">
            <div className="text-xl font-semibold">4</div>
            <span className="p-1 rounded text-[12px] font-semibold bg-rose-500/10 text-rose-500 leading-none ml-1">
              -$130
            </span>
          </div>
          <span className="text-gray-400 text-sm">Due courses</span>
        </div>
      </div>
      <div className="w-[99%] mt-8 h-[400px]">
        <Chart />
      </div>
    </div>
  );
};

export default Analytics;
