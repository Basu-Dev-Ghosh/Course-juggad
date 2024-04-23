import Sidebar from "@/components/Dashboard/Sidebar";
import { redirect } from "next/navigation";
import React from "react";
import { isAuth } from "../__actions__/auth";
import ReactQueryProvider from "@/lib/ReactQueryProvider";

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
      <ReactQueryProvider>
        {/* @ts-expect-error Async Server Component */}
        <Sidebar />
        <div className="w-full  rounded-md mx-auto mt-4 h-full  md:py-5 flex justify-center items-center">
          {children}
        </div>
      </ReactQueryProvider>
    </main>
  );
};

export default layout;
