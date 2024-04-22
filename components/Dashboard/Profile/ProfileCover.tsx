"use client";
import LoginDialog from "@/components/Dialogs/CommonDialog";
import EditProfileForm from "@/components/EditProfile/EditProfileForm";
import Button from "@/components/ui-custom/Button";
import React, { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";

const ProfileCover = () => {
  const [editing, setEditing] = useState<boolean>(false);
  return (
    <div className="w-full relative h-[200px] md:h-[300px] cover">
      {/* <LoginDialog
        dialogFooter={null}
        dialogDescription={null}
        visible={editing}
        setVisibility={setEditing}
        dialogTrigger={
          <Button className="bg-white px-4 py-2 rounded-md absolute right-6 top-5 text-black flex items-center">
            <MdOutlineModeEdit size={20} className="mr-2" />
            Edit profile
          </Button>
        }
        dialogHeader={null}
        key={"edit-profile"}
      >
        <EditProfileForm />
      </LoginDialog> */}
    </div>
  );
};

export default ProfileCover;
