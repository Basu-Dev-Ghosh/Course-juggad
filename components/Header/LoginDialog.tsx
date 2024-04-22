"use client";

import React from "react";
import Dialog from "../Dialogs/CommonDialog";
import LoginForm from "../Auth/Login/LoginForm";
import useLoginStore from "@/store/auth/login-store";

const LoginDialog = ({ children }: { children: React.ReactNode }) => {
  const [login_form_visible, set_login_form_visibility] = useLoginStore(
    (state) => [state.login_form_visible, state.set_login_form_visibility]
  );
  return (
    <Dialog
      key={"login"}
      visible={login_form_visible}
      setVisibility={set_login_form_visibility}
      dialogHeader={null}
      dialogDescription={null}
      dialogFooter={null}
      dialogTrigger={children}
    >
      <LoginForm />
    </Dialog>
  );
};

export default LoginDialog;
