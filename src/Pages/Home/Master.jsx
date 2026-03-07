import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Master = () => {
  return (
    <div>
      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Master the art of managing your work
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700">
              Time Management is essential for ensuring that you have enough
              time to complete your task
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Track the project progress, assign tasks, and manage deadlines to
              keep your team efficient and aligned. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Culpa, error?
            </p>
            <div className="flex items-center gap-2 text-blue-500 font-semibold cursor-pointer">
              <span>Discover More</span>
              <span>
                <FaLongArrowAltRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </span>
            </div>
          </div>

          {/* Right Project Scope Card */}
          <div className="relative bg-white rounded-xl p-6 sm:p-8 shadow-md">
            {/* Left-side L-shaped border */}
            <div className="absolute top-0 left-0 h-full w-full pointer-events-none">
              {/* Vertical left line */}
              <div className="absolute top-0 left-0 w-2 sm:w-3 h-full bg-blue-500 rounded-l-xl"></div>
              {/* Horizontal top line */}
              <div className="absolute top-0 left-0 w-full h-2 sm:h-3 bg-blue-500 rounded-t-xl"></div>
            </div>

            <h3 className="text-center font-bold text-lg sm:text-xl mb-6">
              Project Scope
            </h3>

            {/* Circle with segments */}
            <div className="relative w-32 sm:w-40 h-32 sm:h-40 mx-auto mb-4 flex items-center justify-center">
              {/* Donut with 3 color segments */}
              <div
                className="w-32 sm:w-40 h-32 sm:h-40 rounded-full"
                style={{
                  background: `conic-gradient(
              red 0% 50%,
              blue 50% 75%,
              purple 75% 100%
            )`,
                }}
              ></div>

              {/* Inner circle */}
              <div className="absolute w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-white flex flex-col items-center justify-center">
                <span className="text-gray-800 font-bold text-lg sm:text-xl">
                  72h 30m
                </span>
                <p className="text-gray-600 text-xs sm:text-sm mt-1 text-center">
                  Total Time
                </p>
              </div>
            </div>

            {/* Dotted Progress Items */}
            <div className="space-y-4 text-sm sm:text-base">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                  <span className="text-gray-600">Branding</span>
                </div>
                <span className="text-gray-800 font-semibold">17h 30m</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                  <span className="text-gray-600">User Interface</span>
                </div>
                <span className="text-gray-800 font-semibold">23h 30m</span>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="text-gray-600">Illustration</span>
                </div>
                <span className="text-gray-800 font-semibold">6h 30m</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Master;
