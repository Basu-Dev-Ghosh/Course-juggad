import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function CommonAlertDialog({
  dialogTrigger,
  title = "Are you absolutely sure?",
  description = "This action cannot be undone. This will permanently delete your account and remove your data from our servers.",
  key,
  onConfirm,
  type,
}: {
  dialogTrigger: React.ReactNode;
  title?: React.ReactNode | string | null;
  description?: React.ReactNode | string | null;
  key?: React.Key;
  onConfirm: () => void;
  type?: string;
}) {
  return (
    <AlertDialog key={key}>
      <AlertDialogTrigger asChild>{dialogTrigger}</AlertDialogTrigger>
      <AlertDialogContent className="z-[1000]">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className={`${
              type === "delete"
                ? "bg-red-500 hover:bg-red-700"
                : "bg-indigo-700"
            }`}
            onClick={onConfirm}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
