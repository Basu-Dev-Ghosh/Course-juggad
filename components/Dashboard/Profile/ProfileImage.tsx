import { getCurrentUserData, navigate } from "@/app/__actions__/auth";
import React from "react";

const ProfileImage = async () => {
  const user = await getCurrentUserData();
  if (!user) return navigate("/");
  return (
    <div className="z-50 relative flex flex-col md:flex-row w-full ">
      <div className="w-44 h-44 -mt-20 md:ml-16 mx-auto md:mx-0 bg-white border-4 flex justify-center items-center shadow-xl border-white rounded-full">
        <p className="text-2xl">
          {user.full_name
            ? user.full_name.split(" ")[0][0] ||
              " " + user.full_name.split(" ")[1][0] ||
              " "
            : "U"}
        </p>
      </div>
      <div className="text-center md:text-left mt-5 md:ml-5 mx-auto md:mx-0">
        <h1 className="text-3xl font-bold">{user.full_name || ""}</h1>
        {/* <p className="text-gray-500 md:px-2">No bio</p> */}
      </div>

      <div className="flex flex-row  w-[60%] md:justify-end mt-5 md:ml-5 mx-auto md:mx-0">
        <p className="mr-6 text-center">
          <span className="text-2xl font-bold ">
            {user.courses?.length || 0}
          </span>
          <br /> Course created
        </p>
        {/* <p className="text-center">
          <span className="text-2xl font-bold ">02</span>
          <br />
          Course purchased
        </p> */}
      </div>
    </div>
  );
};

export default ProfileImage;
