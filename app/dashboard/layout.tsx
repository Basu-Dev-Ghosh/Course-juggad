import Sidebar from "@/components/Dashboard/Sidebar";
import { redirect } from "next/navigation";
import React from "react";
import { isAuth } from "../__actions__/auth";

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const {
    data: { user },
  }: any = await isAuth();

  if (!user) {
    redirect("/");
  }
  return (
    <main>
      {/* @ts-expect-error Async Server Component */}
      <Sidebar />
      <div className="w-full px-4 rounded-md mx-auto mt-4 h-full  md:py-5 flex justify-center items-center">
        {children}
      </div>
    </main>
  );
};

export default layout;
