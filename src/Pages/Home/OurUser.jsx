import React from "react";

const OurUser = () => {
  return (
    <div>
      <section className="py-16 px-6 md:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Amazing Features
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Discover how our platform helps you manage projects, collaborate
              with teams, and grow your business efficiently.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full justify-between">
              {/* Top row */}
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold text-lg">Top Clients</h4>
                <button className="border border-blue-500 text-blue-500 px-4 py-1 rounded-full hover:bg-blue-500 hover:text-white transition">
                  Active
                </button>
              </div>

              {/* User section */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                <div>
                  <p className="font-semibold text-sm">Jonatan Cristy</p>
                  <p className="text-gray-500 text-sm">New York</p>
                </div>
              </div>
              <div className="w-full border-t border-gray-300 mb-4"></div>

              {/* Bottom section */}
              <div>
                <h3 className="text-xl font-bold mb-3">
                  Manage Customer Relationships
                </h3>
                <p className="text-gray-600 text-sm">
                  Improve Customer satisfaction with effective relationship and
                  management
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full justify-between">
              {/* User section */}
              <div className="flex items-center gap-3 mt-2 ">
                <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
                <div>
                  <p className="font-semibold text-sm">Jane Smith</p>
                  <p className="text-gray-500 text-sm">
                    Utilizing Feedback Insights
                  </p>
                </div>
              </div>
              <div className="w-full border-t border-gray-300 mb-4"></div>

              {/* Bottom section */}
              <div>
                <h3 className="text-xl font-bold mb-2">
                  Get Insights from feedback to improve
                </h3>
                <p className="text-gray-600 text-sm">
                  Utilizing Feedback Insights to enhance your performance and
                  achieve your goals
                </p>
              </div>
            </div>

            {/* Card 3 (Task Progress) */}
            <div className="bg-white rounded-xl shadow-md p-6 flex flex-col h-full justify-between">
              {/* Card Title */}
              <h3 className="text-xl font-bold mb-4">Task Progress</h3>

              {/* Progress Items */}
              <div className="space-y-4">
                {/* Copywrite */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Copywrite</span>
                    <span>5/10</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-green-500 h-3 rounded-full"
                      style={{ width: "50%" }}
                    ></div>
                  </div>
                </div>

                {/* Illustration */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Illustration</span>
                    <span>4/7</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-blue-500 h-3 rounded-full"
                      style={{ width: "57%" }}
                    ></div>
                  </div>
                </div>

                {/* UX Design */}
                <div>
                  <div className="flex justify-between mb-1">
                    <span>UX Design</span>
                    <span>3/8</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-yellow-400 h-3 rounded-full"
                      style={{ width: "37.5%" }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="mt-4">
                <h4 className="font-bold text-lg mb-2">
                  Review your hard work's Out Comes
                </h4>
                <p className="text-gray-600 text-sm">
                  Focus on completing UX design tasks and copywrite improvements
                  to ensure the project meets deadlines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurUser;
