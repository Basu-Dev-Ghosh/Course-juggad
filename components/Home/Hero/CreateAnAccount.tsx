"use client";

import React from "react";
import Button from "../../ui-custom/Button";
import useLoginStore from "@/store/auth/login-store";
import useSignupStore from "@/store/auth/signup-store";

const CreateAnAccount = () => {
  const set_signup_form_visibility = useSignupStore(
    (state) => state.set_signup_form_visibility
  );
  const set_login_form_visibility = useLoginStore(
    (state) => state.set_login_form_visibility
  );
  return (
    <Button
      onClick={() => {
        set_signup_form_visibility(true);
        set_login_form_visibility(false);
      }}
      className="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500"
    >
      Create an account
      <svg
        className="ml-2"
        width={20}
        height={20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Button>
  );
};

export default CreateAnAccount;
