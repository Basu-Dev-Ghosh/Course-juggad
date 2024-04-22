import React from "react";
import LoginDialog from "./LoginDialog";
import SignupDialog from "./SignupDialog";
import Button from "../ui-custom/Button";
import { getCurrentUserData } from "@/app/__actions__/auth";
import Link from "next/link";

const AuthButtons = async () => {
  const user = await getCurrentUserData();
  return (
    <div className="ml-4 md:ml-0 shadow-md flex justify-center items-center bg-indigo-600 hover:bg-indigo-700 rounded-md md:rounded-xl h-auto md:h-[47px]">
      {user ? (
        <Link
          href="/dashboard/ai"
          className="w-[120px] text-right py-3 md:py-0 text-white flex justify-center md:w-[140px] font-bold"
        >
          Dashboard
        </Link>
      ) : (
        <>
          <LoginDialog>
            <Button className="w-[80px] text-right flex justify-end pr-3 md:w-[100px] font-bold">
              Login
            </Button>
          </LoginDialog>
          <div className="bg-slate-400 w-[.2px] h-[18px]" />
          <SignupDialog>
            <Button className="w-[80px] flex justify-start pl-3 md:w-[100px] font-bold">
              Signup
            </Button>
          </SignupDialog>
        </>
      )}
    </div>
  );
};

export default AuthButtons;
