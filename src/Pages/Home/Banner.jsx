import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Line } from "react-chartjs-2";
import { MdOutlineVideoSettings } from "react-icons/md";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
);

const Banner = () => {
  // Income vs Expenses
  const incomeExpenseData = {
    labels: ["14 Mar", "15 Mar", "16 Mar", "17 Mar", "18 Mar"],
    datasets: [
      {
        label: "Labor Cost",
        data: [5, 10, 9, 7, 5],
        backgroundColor: "#3C60E2",
        borderRadius: 12,
        barThickness: 10,
      },
      {
        label: "Project Earnings",
        data: [9, 8, 10, 6, 5],
        backgroundColor: "#3DE18F",
        borderRadius: 12,
        barThickness: 10,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 2,
          callback: (value) => value + "h",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
  };

  // Time Tracking
  const timeTrackingData = {
    labels: [22, 23, 24, 25, 26, 27, 25],
    datasets: [
      {
        label: "Time Tracking",
        data: [2000, 1000, 2000, 1000, 1500, 100, 1700],
        backgroundColor: [
          "#3DE18F",
          "#3C60E2",
          "#3DE18F",
          "#3C60E2",
          "#3DE18F",
          "#3C60E2",
          "#3DE18F",
        ],
        borderRadius: 6,
        barThickness: 20,
      },
    ],
  };

  const options2 = {
    scales: {
      y: {
        min: 0,
        max: 3000,
        ticks: {
          stepSize: 500,
          callback: function (value) {
            if (value === 0) return "$0";
            if (value === 100) return "$100";
            if (value === 500) return "$500";
            if (value === 1000) return "$1k";
            if (value === 2000) return "$2k";
            if (value === 3000) return "$3k";
            return "$" + value;
          },
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: "line",
          color: "#3C60E2",
        },
      },
    },
  };

  // Time vs Budget
  const timeBudgetData = {
    labels: [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8",
      "Week 9",
    ],
    datasets: [
      {
        label: "Time Estimation",
        data: [500, 510, 200, 410, 420, 130, 440, 300, 100],
        borderColor: "#8B5CF6",
        backgroundColor: "#8B5CF6",
        tension: 0.4,
        pointBackgroundColor: "#8B5CF6",
        pointBorderColor: "#8B5CF6",
        pointRadius: 5,
        pointStyle: "circle",
        pointHoverRadius: 6,
        showLine: true,
      },
      {
        label: "Budget",
        data: [250, 220, 200, 210, 190, 195, 180, 185, 100],
        borderColor: "#3DE18F",
        backgroundColor: "#3DE18F",
        tension: 0.4,
        pointBackgroundColor: "#3DE18F",
        pointBorderColor: "#3DE18F",
        pointRadius: 5,
        pointStyle: "circle",
        pointHoverRadius: 6,
        showLine: true,
      },
    ],
  };

  const options3 = {
    scales: {
      y: {
        min: 50,
        max: 750,
        ticks: {
          callback: (value) => value + "h",
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-400">
      <div className="max-w-7xl mx-auto px-6 text-white text-center">
        <h1 className="text-5xl font-bold mb-6">
          Improve efficiency <br /> Through time tracking
        </h1>

        <p className="mb-12 text-blue-100">
          How to overcome common challenges and pitfalls when trying to adopt
          time tracking <br /> and efficient work habits, and build sustainable
          habits that lead to lasting success
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          <button className="bg-green-400 text-black font-semibold px-10 py-3 rounded-3xl shadow-lg hover:bg-gray-200 transition">
            Get Started
          </button>

          <button className="flex items-center gap-2 border border-white text-white px-6 py-3 rounded-3xl hover:bg-white hover:text-blue-900 transition">
            <MdOutlineVideoSettings />
            Watch Demo
          </button>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Chart 1 */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-black font-semibold mb-4">
              Income vs Expenses
            </h3>
            <Bar data={incomeExpenseData} options={options} />
          </div>

          {/* Chart 2 (middle chart with extra margin top) */}
          <div className="bg-white p-6 rounded-xl shadow mt-10">
            <h3 className="text-black font-semibold mb-4">Time Tracking</h3>
            <div className="flex justify-end mb-4 flex-wrap gap-2">
              <p className="text-gray-500 text-sm">This Month</p>
              <p className="text-gray-500 text-sm">All Time</p>
              <p className="text-gray-500 text-sm">Last 7 days</p>
            </div>
            <Bar data={timeTrackingData} options={options2} />
          </div>

          {/* Chart 3 */}
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-black font-semibold mb-4">Time vs Budget</h3>
            <Line data={timeBudgetData} options={options3} />
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto mt-10 gap-6">
          <div className="flex items-center justify-center gap-4 text-center md:text-left">
            <span className="font-bold text-lg text-white">
              15+ <br />
              <span className="text-white font-light">Years of Experience</span>
            </span>

            <div className="h-6 border-l border-gray-400"></div>

            <span className="font-bold text-lg text-white">
              84K <br />
              <span className="text-white font-light">Customer Worldwide</span>
            </span>
          </div>

          <div className="flex items-center justify-center md:justify-end gap-4">
            {/* Overlapping avatars */}
            <div className="flex -space-x-3">
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="https://i.pravatar.cc/40?img=1"
                alt=""
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="https://i.pravatar.cc/40?img=2"
                alt=""
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white"
                src="https://i.pravatar.cc/40?img=3"
                alt=""
              />
            </div>

            {/* Text */}
            <span className="text-white font-bold text-lg">
              140K <br />
              <span className="font-light text-white">Happy Customers</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
