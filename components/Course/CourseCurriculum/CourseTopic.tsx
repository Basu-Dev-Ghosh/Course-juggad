import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const CourseTopic = ({
  value,
  index,
  text,
  children,
  description,
}: {
  value: string;
  index: string;
  text: string;
  children: React.ReactNode | string;
  description?: string;
}) => {
  return (
    <div className="content-heading">
      <AccordionItem value={value} className="bg-gray-100 rounded-xl py-2 px-2">
        <AccordionTrigger className="text-left">
          <p>
            Section {index} : {text}
            <br />
            <span className="text-left text-[.6rem] -mt-2 ml-2 text-gray-500">
              {description}
            </span>
          </p>
        </AccordionTrigger>
        <AccordionContent className="px-1">{children}</AccordionContent>
      </AccordionItem>
    </div>
  );
};

export default CourseTopic;
