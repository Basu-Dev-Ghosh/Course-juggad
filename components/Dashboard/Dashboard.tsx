import React from "react";
import DashboardNavbar from "./DashboardNavbar";
import CourseCreated from "./CourseCreated";
import CoursePurchased from "./CoursePurchased";
import Achivement from "./Achivement";
import CoursesOverview from "./CoursesOverview";
import Activities from "./Activities";
import Analytics from "./Analytics";
import Payments from "./Payments";
import UpgradeButton from "./UpgradeButton";

const Dashboard = () => {
  return (
    <main className="w-full md:w-[1200px] md:ml-0 min-h-screen transition-all main">
      <UpgradeButton />
      {/* navbar */}
      {/* <DashboardNavbar /> */}
      {/* end navbar */}
      {/* Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          <CourseCreated />
          <CoursePurchased />
          <Achivement />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <CoursesOverview />
          <Activities />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <Analytics />
          <Payments />
        </div>
      </div>
      {/* End Content */}
    </main>
  );
};

export default Dashboard;
