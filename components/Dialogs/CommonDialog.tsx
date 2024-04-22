import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Button from "../ui-custom/Button";

const defaultDialogFooter = (
  <Button className="bg-indigo-600 hover:bg-indigo-700 px-3 py-2 rounded-lg">
    Save Changes
  </Button>
);

const LoginDialog = ({
  children,
  dialogTrigger,
  dialogHeader = "Dialog Title",
  dialogDescription = "Dialog Description",
  dialogFooter = defaultDialogFooter,
  visible,
  setVisibility,
  key,
}: {
  children?: React.ReactNode | string;
  dialogTrigger: React.ReactNode;
  dialogHeader?: React.ReactNode | string | null;
  dialogDescription?: React.ReactNode | string | null;
  dialogFooter?: React.ReactNode | string | null;
  visible: boolean;
  setVisibility: (open: boolean) => void;
  key?: React.Key;
}) => {
  return (
    <Dialog key={key} open={visible} modal onOpenChange={setVisibility}>
      <DialogTrigger asChild>{dialogTrigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] z-[1000]">
        {dialogHeader && (
          <DialogHeader>
            <DialogTitle>{dialogHeader}</DialogTitle>
            {dialogDescription && (
              <DialogDescription>{dialogDescription}</DialogDescription>
            )}
          </DialogHeader>
        )}

        {children}
        {dialogFooter && <DialogFooter>{dialogFooter}</DialogFooter>}
      </DialogContent>
    </Dialog>
  );
};

export default LoginDialog;
