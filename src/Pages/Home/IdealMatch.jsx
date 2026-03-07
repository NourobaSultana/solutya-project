import React, { useState } from "react";

const PricingToggle = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className="py-16 px-6 md:px-10 bg-white">
      {/* Section Title */}
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">
        An ideal match no matter your <br /> budget constraints.
      </h2>

      {/* Toggle */}
      <div className="flex justify-center items-center mb-12 space-x-4">
        <span
          className={`cursor-pointer font-semibold ${
            isMonthly ? "text-gray-900" : "text-gray-400"
          }`}
          onClick={() => setIsMonthly(true)}
        >
          Per Month
        </span>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={!isMonthly}
            onChange={() => setIsMonthly(!isMonthly)}
          />
          <div className="w-14 h-7 bg-gray-300 rounded-full peer-checked:bg-green-300 transition"></div>
          <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full shadow transition peer-checked:translate-x-7"></div>
        </label>

        <span
          className={`cursor-pointer font-semibold ${
            !isMonthly ? "text-gray-900" : "text-gray-400"
          }`}
          onClick={() => setIsMonthly(false)}
        >
          Per Year
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* CARD */}
        {[
          {
            title: "Basic Plan",
            priceM: "$29/mo",
            priceY: "$290/yr",
            desc: "Our most popular plan",
          },
          {
            title: "Pro Plan",
            priceM: "$49/mo",
            priceY: "$490/yr",
            desc: "For advanced users",
          },
          {
            title: "Enterprise Plan",
            priceM: "$99/mo",
            priceY: "$990/yr",
            desc: "For large teams",
          },
        ].map((plan, index) => (
          <div key={index} className="card bg-base-100 shadow-sm">
            <div className="card-body text-center space-y-4">
              <h3 className="text-xs font-bold">{plan.title}</h3>

              <span className="text-2xl font-bold">
                {isMonthly ? plan.priceM : plan.priceY}
              </span>

              <p className="text-gray-500 text-xs">{plan.desc}</p>

              <div className="flex flex-col gap-4">
                <button className="btn bg-green-300 rounded-3xl">
                  Get Started
                </button>
                <button className="btn border rounded-3xl">
                  Chat to Sales
                </button>
              </div>

              {/* FEATURES */}
              <ul className="mt-6 flex flex-col gap-3 text-xs text-left">
                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-success mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>High-resolution image generation</span>
                </li>

                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-success mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Customizable style templates</span>
                </li>

                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-success mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>Batch processing capabilities</span>
                </li>

                <li className="flex items-start gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-success mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>AI-driven image enhancements</span>
                </li>

                <li className="flex items-start gap-2 opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="line-through">
                    Seamless cloud integration
                  </span>
                </li>

                <li className="flex items-start gap-2 opacity-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-gray-400 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="line-through">
                    Real-time collaboration tools
                  </span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingToggle;
