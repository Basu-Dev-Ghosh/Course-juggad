"use client";
import { signOut } from "@/app/__actions__/auth";
import useCurrentUser from "@/hooks/useCurrentUser";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaStore } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";

import { MdOutlineLibraryBooks } from "react-icons/md";
import { RiRobot3Line } from "react-icons/ri";

const Navbar = () => {
  const { user, isLoading } = useCurrentUser();

  const path = usePathname();
  const routes: Route[] = [
    {
      name: "AI",
      icon: <RiRobot3Line size={21} />,
      path: "/dashboard/ai",
      isActive: path.includes("/dashboard/ai"),
    },

    {
      name: "Courses",
      icon: <MdOutlineLibraryBooks size={21} />,
      path: "/dashboard/courses",
      isActive: path.includes("/dashboard/courses"),
    },
    {
      name: "Hub",
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
    <nav className="flex md:block items-center  justify-evenly py-1">
      {routes.map((route, index) => {
        return route.path ? (
          <Link
            key={index}
            className={`flex flex-col md:flex-row items-center md:mb-4   md:justify-start  md:px-4 md:py-2 text-gray-700 ${
              route?.isActive && "bg-indigo-100"
            } rounded-lg dark:bg-gray-800 dark:text-gray-200`}
            href={route.path}
          >
            {route.icon}
            <span className="mx-4 text-[.5rem] md:text-base md:hidden md:group-hover:block font-medium transition-all duration-200 ease-in-out">
              {route.name}
            </span>
          </Link>
        ) : (
          <a
            className={`flex flex-col md:flex-row cursor-pointer items-center md:mb-4   md:justify-start  md:px-4 md:py-2 text-gray-700 ${
              route?.isActive && "bg-indigo-100"
            } rounded-lg dark:bg-gray-800 dark:text-gray-200`}
            onClick={route.onClick}
          >
            {route.icon}
            <span className="mx-4 text-[.5rem] md:text-base md:hidden md:group-hover:block font-medium transition-all duration-200 ease-in-out">
              {route.name}
            </span>
          </a>
        );
      })}

      <Link
        className="flex md:hidden items-center justify-center md:justify-start md:px-4 md:py-2 md:mt-5 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
        href="/dashboard/profile/1"
      >
        <div className="w-8 h-8  mx-auto md:mx-0 bg-white border-2 flex justify-center items-center  border-gray-300 rounded-full">
          {!isLoading && user && (
            <p className="text-xs">
              {user.full_name
                ? user.full_name.split(" ")[0][0] ||
                  " " + user.full_name.split(" ")[1][0] ||
                  " "
                : "U"}
            </p>
          )}
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
