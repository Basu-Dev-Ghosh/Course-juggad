import React from "react";

const CourseLoading = () => {
  return (
    <div className=" w-full mx-auto md:ml-20 max-w-[90rem] h-[650px] gap-3 grid grid-cols-12 grid-rows-12">
      <div className=" row-span-12 col-span-12 md:col-span-8 grid grid-rows-11">
        <div className=" row-span-4 md:row-span-8 col-span-8 sticky top-0 left-0 md:static z-[100] md:z-0">
          <div className="w-full md:w-[86%] md:h-[90%] md:mt-16 bg-slate-400 rounded-lg animate-pulse  md:mx-auto"></div>
        </div>
        <div className=" row-span-7  md:row-span-3 col-span-8 px-3 md:px-16 py-3">
          <div className="w-full h-[24px] mt-6 bg-slate-400 rounded-lg animate-pulse"></div>
          <div className="w-full h-[18px] mt-1 bg-slate-400 rounded-lg animate-pulse"></div>
          <div className="md:hidden w-full  pb-36 mt-7">
            <div className="w-full flex flex-col h-full ">
              <div className="w-full h-[80px] my-1 bg-slate-400 rounded-lg animate-pulse"></div>
              <div className="w-full h-[80px] my-1 bg-slate-400 rounded-lg animate-pulse"></div>
              <div className="w-full h-[80px] my-1 bg-slate-400 rounded-lg animate-pulse"></div>
              <div className="w-full h-[80px] my-1 bg-slate-400 rounded-lg animate-pulse"></div>
              <div className="w-full h-[80px] my-1 bg-slate-400 rounded-lg animate-pulse"></div>
              <div className="w-full h-[80px] my-1 bg-slate-400 rounded-lg animate-pulse"></div>
              <div className="w-full h-[80px] my-1 bg-slate-400 rounded-lg animate-pulse"></div>
              <div className="w-full h-[80px] my-1 bg-slate-400 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row-span-12 overflow-y-scroll my-4 pb-24 col-span-12 md:col-span-4  hidden md:block p-1 rounded-lg ">
        <div className="w-full flex flex-col h-full  px-7">
          <div className="w-full h-[80px] my-1 bg-slate-400 rounded-lg animate-pulse"></div>
          <div className="w-full h-[80px] my-1 bg-slate-400 rounded-lg animate-pulse"></div>
          <div className="w-full h-[80px] my-1 bg-slate-400 rounded-lg animate-pulse"></div>
          <div className="w-full h-[80px] my-1 bg-slate-400 rounded-lg animate-pulse"></div>
          <div className="w-full h-[80px] my-1 bg-slate-400 rounded-lg animate-pulse"></div>
          <div className="w-full h-[80px] my-1 bg-slate-400 rounded-lg animate-pulse"></div>
          <div className="w-full h-[80px] my-1 bg-slate-400 rounded-lg animate-pulse"></div>
          <div className="w-full h-[80px] my-1 bg-slate-400 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default CourseLoading;
