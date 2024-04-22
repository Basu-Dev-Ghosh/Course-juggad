"use client";

import React from "react";
import Dialog from "../Dialogs/CommonDialog";
import SignupForm from "../Auth/Signup/SignupForm";
import useSignupStore from "@/store/auth/signup-store";

const SignupDialog = ({ children }: { children: React.ReactNode }) => {
  const [signup_form_visible, set_signup_form_visibility] = useSignupStore(
    (state) => [state.signup_form_visible, state.set_signup_form_visibility]
  );
  return (
    <Dialog
      key={"signup"}
      visible={signup_form_visible}
      setVisibility={set_signup_form_visibility}
      dialogHeader={null}
      dialogDescription={null}
      dialogFooter={null}
      dialogTrigger={children}
    >
      <SignupForm />
    </Dialog>
  );
};

export default SignupDialog;
