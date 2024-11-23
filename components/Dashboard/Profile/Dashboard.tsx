import React from "react";
import {
  Bell,
  Search,
  User,
  Clock,
  BookOpen,
  Users,
  ChevronDown,
  Award,
  BarChart2,
  Plus,
  Copy,
  Target,
  Zap,
} from "lucide-react";

const PERCENTAGE_THRESHOLD = 10;

interface Skill {
  name: string;
  progress: number;
}

export interface DashboardProps {
  username: string;
  courses: Course[] | null;
  upcomingCourse: {
    title: string;
    instructor: string;
    time: string;
    date: string;
  };
  stats: {
    totalCoursesCreated: number;
    udemyCoursesDuplicated: number;
    ongoingCourses: number;
    completedCourses: number;
    totalWatchTime: string;
    overallProgress: number;
    ranking: number;
    timeSpent: {
      today: string;
      yesterday: string;
      thisWeek: string;
      last30Days: string;
      lastYear: string;
      overall: string;
    } | null;
  };
  skills?: Skill[];
  learningStreak: number;
  isJobFetching: boolean;
  handleFetchJobsData: (skill_name: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({
  username,
  courses,
  upcomingCourse,
  stats,
  skills,
  learningStreak,
  isJobFetching,
  handleFetchJobsData,
}) => {
  return (
    <div
      className={`bg-purple-50 min-h-screen ${
        isJobFetching ? "absolute filter blur" : null
      }`}
    >
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-purple-800">
            Welcome back, {username}!
          </h1>
          <div className="flex items-center space-x-6">
            {/* <Search className="text-purple-400 w-5 h-5" />
            <Bell className="text-purple-400 w-5 h-5" /> */}
            <div className="flex items-center">
              <span className="text-2xl text-yellow-500">
                ★ {stats.ranking}
              </span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-8 px-6">
        {/* Learning Progress Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={BookOpen}
            title="Courses Created"
            value={stats.totalCoursesCreated}
            color="bg-purple-100"
            iconColor="text-purple-600"
          />
          <StatCard
            icon={Copy}
            title="Udemy Courses Duplicated"
            value={stats.udemyCoursesDuplicated}
            color="bg-indigo-100"
            iconColor="text-indigo-600"
          />
          <StatCard
            icon={Target}
            title="Ongoing Courses"
            value={stats.ongoingCourses}
            color="bg-blue-100"
            iconColor="text-blue-600"
          />
          <StatCard
            icon={Award}
            title="Completed Courses"
            value={stats.completedCourses}
            color="bg-green-100"
            iconColor="text-green-600"
          />
        </div>

        {/* Learning Streak and Overall Progress */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-purple-800 mb-4">
              Learning Streak
            </h2>
            <div className="flex items-center">
              <Zap className="text-yellow-500 w-8 h-8 mr-3" />
              <div>
                <p className="text-3xl font-bold text-purple-700">
                  {learningStreak} days
                </p>
                <p className="text-sm text-purple-500">Keep it up!</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-purple-800 mb-4">
              Overall Progress
            </h2>
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
                    {stats.overallProgress}%
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-purple-600">
                    {stats.totalWatchTime} total watch time
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
                <div
                  style={{ width: `${stats.overallProgress}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Time Spent Learning */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-lg font-semibold text-purple-800 mb-4">
            Time Spent Learning
          </h2>
          {stats.timeSpent && (
            <div className="flex justify-between items-end">
              <TimeBar
                label="Today"
                time={stats.timeSpent.today}
                height="h-24"
                color="bg-purple-500"
              />
              <TimeBar
                label="Yesterday"
                time={stats.timeSpent.yesterday}
                height="h-16"
                color="bg-purple-400"
              />
              <TimeBar
                label="This Week"
                time={stats.timeSpent.thisWeek}
                height="h-32"
                color="bg-purple-600"
              />
              <TimeBar
                label="Last Month"
                time={stats.timeSpent.last30Days}
                height="h-32"
                color="bg-purple-600"
              />
              <TimeBar
                label="Last Year"
                time={stats.timeSpent.lastYear}
                height="h-32"
                color="bg-purple-600"
              />
              <TimeBar
                label="Overall"
                time={stats.timeSpent.overall}
                height="h-32"
                color="bg-purple-600"
              />
            </div>
          )}
        </div>

        {/* Skills Progress */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <h2 className="text-lg font-semibold text-purple-800 mb-4">
            Skills Progress
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills &&
              skills.map((skill, index) => (
                <div key={index} className="bg-purple-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-purple-700">
                      {skill.name}
                    </span>
                    <span className="text-sm text-purple-600">
                      {skill.progress}%
                    </span>
                  </div>
                  <div className="w-full bg-purple-200 rounded-full h-2.5">
                    <div
                      className="bg-purple-600 h-2.5 rounded-full"
                      style={{ width: `${skill.progress}%` }}
                    ></div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Course list */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-purple-800">
              My Courses
            </h2>
            <div className="flex space-x-4 text-sm">
              <button className="text-purple-600 font-semibold border-b-2 border-purple-600 pb-1">
                All Courses
              </button>
              <button className="text-purple-400 hover:text-purple-600">
                Created
              </button>
              <button className="text-purple-400 hover:text-purple-600">
                Duplicated
              </button>
              <ChevronDown className="text-purple-400 w-4 h-4 mt-1" />
            </div>
          </div>
          <div className="space-y-6">
            {courses &&
              courses.map((course) => (
                <div
                  key={course.id}
                  className="flex bg-purple-50 p-4 rounded-lg"
                >
                  <img
                    src={course.course_cover}
                    alt={course.skill_name}
                    className="w-24 h-24 object-cover rounded-lg mr-4"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-semibold text-purple-800">
                        {course.skill_name}
                      </h3>
                      <span
                        className={`text-xs font-medium px-2 py-1 rounded ${
                          course?.is_duplicate
                            ? "bg-purple-200 text-purple-800"
                            : "bg-indigo-200 text-indigo-800"
                        }`}
                      >
                        {!course.is_duplicate ? "Created" : "Duplicated"}
                      </span>
                    </div>

                    <div className="flex items-center mt-2 text-xs text-purple-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>
                        {JSON.parse(course.course_data).length} total topics
                      </span>
                    </div>
                    {(course.progress || course.progress == 0) && (
                      <button
                        onClick={() => handleFetchJobsData(course.skill_name)}
                        disabled={course.progress < PERCENTAGE_THRESHOLD}
                        className="text-sm text-white px-4 disabled:bg-gray-400 py-1 mt-2 rounded-md bg-purple-600 cursor-pointer disabled:cursor-not-allowed"
                      >
                        Get jobs
                      </button>
                    )}
                  </div>
                  <div className="ml-4 flex flex-col items-end justify-between">
                    <span className="text-sm text-purple-600">Progress</span>
                    <div className="w-24 bg-purple-200 rounded-full h-2 mt-1">
                      <div
                        className="bg-purple-600 h-2 rounded-full"
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-purple-600 mt-1">
                      {course.progress}%
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
};

const StatCard: React.FC<{
  icon: React.ElementType;
  title: string;
  value: number | string;
  color: string;
  iconColor: string;
}> = ({ icon: Icon, title, value, color, iconColor }) => (
  <div className={`${color} p-4 rounded-lg shadow-sm`}>
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-purple-700">{title}</p>
        <p className="text-2xl font-semibold text-purple-900 mt-1">{value}</p>
      </div>
      <Icon className={`${iconColor} w-10 h-10`} />
    </div>
  </div>
);

const TimeBar: React.FC<{
  label: string;
  time: string;
  height: string;
  color: string;
}> = ({ label, time, height, color }) => (
  <div className="flex flex-col items-center">
    <div className={`w-20 ${height} ${color} rounded-t-lg`}></div>
    <p className="text-sm font-semibold text-purple-700 mt-2">{time}</p>
    <p className="text-xs text-purple-500">{label}</p>
  </div>
);

export default Dashboard;
