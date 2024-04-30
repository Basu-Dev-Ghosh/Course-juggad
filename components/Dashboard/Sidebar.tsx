import React from "react";
import SmallLogo from "../Header/SmallLogo";
import Link from "next/link";
import Navbar from "./Navbar";
import { getCurrentUserData, navigate } from "@/app/__actions__/auth";

const Sidebar = async () => {
  const user = await getCurrentUserData();
  if (!user) return navigate("/");
  return (
    <aside className="group md:hover:w-48  z-[100]  transition-all duration-300 ease-in-out  flex flex-row md:flex-col w-full md:w-[5.4rem] md:h-screen md:px-1 py-8 overflow-x-hidden overflow-y-auto bg-white fixed -bottom-3 md:border-r md:rtl:border-r-0 md:  rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <div className="mx-auto hidden md:block">
        <SmallLogo />
      </div>
      <div className=" flex-col items-center mt-6 -mx-2 hidden md:flex">
        <div className="w-12 h-12  mx-auto md:mx-0 bg-white border-2 flex justify-center items-center  border-gray-300 rounded-full">
          <p className="text-md">
            {user.full_name
              ? user.full_name.split(" ")[0][0] ||
                " " + user.full_name.split(" ")[1][0] ||
                " "
              : "U"}
          </p>
        </div>
        <h4 className="mx-2 mt-2 hidden md:block text-xs text-center font-medium text-gray-800 dark:text-gray-200">
          {user.full_name || ""}
        </h4>
        <Link
          href="/dashboard/profile/1"
          className="hidden md:block text-[.65rem] font-medium text-gray-600 dark:text-gray-400"
        >
          View profile
        </Link>
      </div>
      <div className="flex flex-col justify-between w-full md:w-fit md:mx-auto  md:flex-1   py-4 md:mt-1 md:static absolute bottom-0">
        <Navbar />
      </div>
    </aside>
  );
};

export default Sidebar;
