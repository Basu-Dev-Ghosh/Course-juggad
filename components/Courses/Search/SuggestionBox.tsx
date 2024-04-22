"use client";
import Button from "@/components/ui-custom/Button";
import useCourseStore from "@/store/course/course-store";
import React from "react";

const SuggestionBox = ({ name }: { name: string }) => {
  const set_search_term = useCourseStore((state) => state.set_search_term);
  return (
    <Button
      onClick={() => set_search_term(name)}
      className="px-3 py-2 text-sm cursor-pointer transition-all duration-150 ease-in-out hover:scale-95 active:scale-90 hover:bg-slate-50 max-w-[100px] bg-[#f3f3f4] rounded-md text-indigo-800"
    >
      {name}
    </Button>
  );
};

export default SuggestionBox;
