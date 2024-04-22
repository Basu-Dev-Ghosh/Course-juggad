"use client";
import { signOut } from "@/app/__actions__/auth";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaStore } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";

import { MdOutlineDashboard, MdOutlineLibraryBooks } from "react-icons/md";
import { RiRobot3Line } from "react-icons/ri";

const Navbar = () => {
  const path = usePathname();
  const routes: Route[] = [
    {
      name: "Course Maker",
      icon: <RiRobot3Line size={21} />,
      path: "/dashboard/ai",
      isActive: path.includes("/dashboard/ai"),
    },

    {
      name: "My Courses",
      icon: <MdOutlineLibraryBooks size={21} />,
      path: "/dashboard/courses",
      isActive: path.includes("/dashboard/courses"),
    },
    {
      name: "Course hub",
      icon: <FaStore size={21} />,
      path: "/dashboard/coursehub",
      isActive: path.includes("/dashboard/coursehub"),
    },
    // {
    //   name: "Payments",
    //   icon: <MdOutlinePayment size={21} />,
    //   path: "/dashboard/payments",
    //   isActive: path.includes("/dashboard/payments"),
    // },
    {
      name: "Logout",
      icon: <IoIosLogOut size={21} />,
      onClick: async () => await signOut(),
    },
  ];
  return (
    <nav className="flex md:block items-center  justify-evenly">
      {routes.map((route, index) => {
        return route.path ? (
          <Link
            key={index}
            className={`flex items-center md:mb-4   md:justify-start  px-4 py-2 text-gray-700 ${
              route?.isActive && "bg-indigo-100"
            } rounded-lg dark:bg-gray-800 dark:text-gray-200`}
            href={route.path}
          >
            {route.icon}
            <span className="mx-4 hidden md:group-hover:block font-medium transition-all duration-200 ease-in-out">
              {route.name}
            </span>
          </Link>
        ) : (
          <a
            className={`flex cursor-pointer items-center md:mb-4   md:justify-start  px-4 py-2 text-gray-700 ${
              route?.isActive && "bg-indigo-100"
            } rounded-lg dark:bg-gray-800 dark:text-gray-200`}
            onClick={route.onClick}
          >
            {route.icon}
            <span className="mx-4 hidden md:group-hover:block font-medium transition-all duration-200 ease-in-out">
              {route.name}
            </span>
          </a>
        );
      })}

      <Link
        className="flex md:hidden items-center justify-center md:justify-start px-4 py-2 md:mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
        href="/dashboard/profile/1"
      >
        <div className="w-12 h-12  mx-auto md:mx-0 bg-white border-2 flex justify-center items-center  border-gray-300 rounded-full">
          <p className="text-md">{"AC"}</p>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
