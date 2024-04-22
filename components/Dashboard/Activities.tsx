import React from "react";

const Activities = () => {
  return (
    <div className="bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
      <div className="flex justify-between mb-4 items-start">
        <div className="font-medium">Activities</div>
      </div>
      <div className="overflow-hidden">
        <table className="w-full min-w-[540px]">
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <a
                    href="#"
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    Your score increased by 04+
                  </a>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  02-02-2024
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  17.45
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <a
                    href="#"
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    Course created and goes live
                  </a>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  02-02-2024
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  17.45
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <a
                    href="#"
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    Course purchased by basudev
                  </a>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  02-02-2024
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  17.45
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <a
                    href="#"
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    Course deleted by admin
                  </a>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  02-02-2024
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  17.45
                </span>
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <a
                    href="#"
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    Course updated by you
                  </a>
                </div>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  02-02-2024
                </span>
              </td>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  17.45
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Activities;
