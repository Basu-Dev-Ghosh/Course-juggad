import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link
      href={"/"}
      className={cn(
        `bg-transparent md:w-fit font-extrabold h-fit text-[1rem] md:text-[1.2rem] flex  flex-col   px-1 md:px-2 py-1 `,
        className
      )}
    >
      <span>Course</span>
      <span className="ml-3 -mt-2 text-indigo-600">Juggad</span>
    </Link>
  );
};

export default Logo;
