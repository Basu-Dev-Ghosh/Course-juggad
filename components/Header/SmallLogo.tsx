import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const SmallLogo = ({ className }: { className?: string }) => {
  return (
    <Link
      href={"/"}
      className={cn(
        `bg-transparent md:w-fit font-extrabold h-fit text-[.8rem] md:text-[.9rem] flex  flex-col   px-1 md:px-2 py-1 `,
        className
      )}
    >
      <span>Course</span>
      <span className="ml-3 -mt-2 text-indigo-600">Juggad</span>
    </Link>
  );
};

export default SmallLogo;
