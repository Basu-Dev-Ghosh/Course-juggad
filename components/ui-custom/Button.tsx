import { cn } from "@/lib/utils";
import React from "react";

const Button = ({
  children,
  className,
  onClick,
  disabled,
}: {
  children: React.ReactNode | string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick || undefined}
      className={cn(
        "text-white disabled:bg-gray-400 disabled:cursor-not-allowed   py-2 active:scale-90 hover:scale-95 transition-all duration-150 ease-in-out",
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
