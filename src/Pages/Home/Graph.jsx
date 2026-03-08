import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { FaBusinessTime, FaDownload } from "react-icons/fa";
import { IoCreateOutline } from "react-icons/io5";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const Graph = () => {
  const data = {
    labels: ["2001", "2005", "2010", "2015", "2020"],
    datasets: [
      {
        label: "Hours",
        data: [4.2, 6.2, 8.6, 6.2, 0],
        backgroundColor: "#4364DB", // blue
        borderRadius: 18,
        barThickness: 32,
        maxBarThickness: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { mode: "index", intersect: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
        ticks: { stepSize: 2, callback: (value) => `${value}h` },
      },
    },
  };

  return (
    <div className="py-16 px-4 md:px-10 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-12 items-stretch">
        {/* Left Side - Chart Card */}
        <div className="flex-1 relative bg-white rounded-xl p-6 sm:p-8 shadow-md flex flex-col">
          {/* L-shaped borders */}
          <div className="absolute top-0 left-0 h-full w-full pointer-events-none">
            <div className="absolute top-0 left-0 w-2 sm:w-3 h-full bg-blue-500 rounded-l-xl"></div>
            <div className="absolute top-0 left-0 w-full h-2 sm:h-3 bg-blue-500 rounded-t-xl"></div>
          </div>

          {/* Title & Description */}
          <h3 className="text-xl sm:text-2xl font-bold mb-2 text-center z-10 relative">
            Work Progress Overview
          </h3>
          <p className="text-gray-600 text-sm sm:text-base mb-6 text-center z-10 relative">
            Track work hours and productivity across the years to identify
            trends and improve efficiency.
          </p>

          {/* Top Stats */}
          <div className="flex flex-wrap gap-4 justify-center mb-6 z-10 relative">
            <div className="flex-1 min-w-[80px] text-center">
              <h4 className="font-bold text-sm sm:text-base">36h</h4>
              <p className="text-gray-500 text-xs sm:text-sm">Total Hr</p>
            </div>
            <div className="flex-1 min-w-[80px] text-center">
              <h4 className="font-bold text-sm sm:text-base">32h 20m</h4>
              <p className="text-gray-500 text-xs sm:text-sm">Eff. Time</p>
            </div>
            <div className="flex-1 min-w-[80px] text-center">
              <h4 className="font-bold text-sm sm:text-base">24h 4m</h4>
              <p className="text-gray-500 text-xs sm:text-sm">Non-Eff.</p>
            </div>
            <div className="flex-1 min-w-[80px] text-center">
              <h4 className="font-bold text-sm sm:text-base">95%</h4>
              <p className="text-gray-500 text-xs sm:text-sm">Productivity</p>
            </div>
          </div>

          {/* Chart */}
          <div className="flex-1 h-64 sm:h-80 px-2 sm:px-4">
            <Bar data={data} options={options} />
          </div>
        </div>

        {/* Right Side - Features */}
        <div className="flex-1 flex flex-col space-y-6 bg-white rounded-xl p-6 sm:p-8 shadow-md">
          <h3 className="text-2xl sm:text-3xl font-bold">
            Simplify scheduling processes for all tasks
          </h3>
          <p className="text-gray-600 text-sm sm:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita,
            dolore beatae exercitationem voluptatum mollitia accusamus magni
            consequatur hic ab facere.
          </p>

          {/* Vertical dotted timeline */}
          <div className="relative pl-10 flex-1 space-y-8 mt-6">
            <div className="absolute left-4 top-0 bottom-0 border-l-2 border-dotted border-gray-300"></div>

            {/* Feature Item 1 */}
            <div className="flex items-start gap-3 relative z-10">
              <div className="flex-shrink-0">
                <FaDownload className="text-2xl text-blue-500" />
              </div>
              <div>
                <h4 className="font-bold text-base sm:text-lg">
                  Downloads for free via any device
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Easily download the free Coca app on any device at any time
                </p>
              </div>
            </div>

            {/* Feature Item 2 */}
            <div className="flex items-start gap-3 relative z-10">
              <div className="flex-shrink-0">
                <IoCreateOutline className="text-2xl text-green-500" />
              </div>
              <div>
                <h4 className="font-bold text-base sm:text-lg">
                  Create Your Account in Minutes
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Create a secure account in minutes with essential information
                </p>
              </div>
            </div>

            {/* Feature Item 3 */}
            <div className="flex items-start gap-3 relative z-10">
              <div className="flex-shrink-0">
                <FaBusinessTime className="text-2xl text-purple-500" />
              </div>
              <div>
                <h4 className="font-bold text-base sm:text-lg">
                  Start Tracking Time
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm">
                  Track time manually or automatically on any monitored hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
