"use client";

import useLoginStore from "@/store/auth/login-store";
import useSignupStore from "@/store/auth/signup-store";
import React from "react";

const GoToLogin = () => {
  const set_login_form_visibility = useLoginStore(
    (state) => state.set_login_form_visibility
  );
  const set_signup_form_visibility = useSignupStore(
    (state) => state.set_signup_form_visibility
  );
  return (
    <span
      onClick={() => {
        set_signup_form_visibility(false);
        set_login_form_visibility(true);
      }}
      className="cursor-pointer text-indigo-600"
    >
      Signin here
    </span>
  );
};

export default GoToLogin;
