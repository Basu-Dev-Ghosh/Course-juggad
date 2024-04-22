"use client";

import useLoginStore from "@/store/auth/login-store";
import useSignupStore from "@/store/auth/signup-store";
import React from "react";

const GoToSignup = () => {
  const set_signup_form_visibility = useSignupStore(
    (state) => state.set_signup_form_visibility
  );
  const set_login_form_visibility = useLoginStore(
    (state) => state.set_login_form_visibility
  );
  return (
    <span
      className="cursor-pointer text-indigo-600"
      onClick={() => {
        set_login_form_visibility(false);
        set_signup_form_visibility(true);
      }}
    >
      Create a free account
    </span>
  );
};

export default GoToSignup;
