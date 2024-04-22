import { useState, useEffect, useTransition } from "react";

export function useServerAction(action: any, validation?: any) {
  const [message, setMessage] = useState<string>("");
  let [isPending, startTransition] = useTransition();
  useEffect(() => {
    if (isPending) return;

    // THIS CODE WILL RUN AFTER THE SERVER ACTION
  }, [isPending]);

  const formAction = (formData: FormData) => {
    // RUN SOME VALIDATION HERE
    if (validation) validation();

    startTransition(async () => {
      let output = await action(formData);
      setMessage(output);
    });
  };
  return { formAction, message, isPending };
}
