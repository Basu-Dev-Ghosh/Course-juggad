import React from "react";
import InViewAnimation from "../../Animations/InViewAnimation";
import Image from "next/image";

const DashboardPic = () => {
  return (
    <InViewAnimation initial={{ scale: 0 }} whileInView={{ scale: 1 }}>
      <div className="flex justify-center rounded-xl overflow-hidden">
        <Image
          width={1000}
          height={600}
          className="w-full max-w-6xl h-full object-cover rounded-lg"
          src="/dashboard.jpg"
          alt="Dashboard image"
        />
      </div>
    </InViewAnimation>
  );
};

export default DashboardPic;
