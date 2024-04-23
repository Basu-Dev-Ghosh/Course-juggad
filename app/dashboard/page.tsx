import Dashboard from "@/components/Dashboard/Dashboard";
import { logger } from "@/logger";
import React from "react";
export const maxDuration = 300;
const page = () => {
  console.log("Dashboard Page called ");
  return (
    <section>
      <Dashboard />
    </section>
  );
};

export default page;
