import React from "react";
import { FcGoogle } from "react-icons/fc";
import theme from "../../assets/themeforest.png";
const OurServices = () => {
  return (
    <div>
      <section class="companies-section ">
        <div class="container text-center">
          {/* <!-- Right Content --> */}
          <div class="company-content">
            <h2 class="title font-bold texl-2xl mb-4">
              Trusted by Leading Companies
            </h2>

            {/* <!-- First Row --> */}
            <div className="flex flex-col items-center gap-6">
              {/* First Row */}
              <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                <div className="flex items-center gap-2">
                  <img
                    className="w-10 md:w-12 lg:w-14"
                    src={theme}
                    alt="VideoHive logo"
                  />
                  <span className="text-sm md:text-base">VideoHive</span>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    className="w-10 md:w-12 lg:w-14"
                    src={theme}
                    alt="CodeCanyon logo"
                  />
                  <span className="text-sm md:text-base">CodeCanyon</span>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    className="w-10 md:w-12 lg:w-14"
                    src={theme}
                    alt="GraphicRiver logo"
                  />
                  <span className="text-sm md:text-base">GraphicRiver</span>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    className="w-10 md:w-12 lg:w-14"
                    src={theme}
                    alt="ThemeForest logo"
                  />
                  <span className="text-sm md:text-base">ThemeForest</span>
                </div>
              </div>

              {/* Second Row */}
              <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
                <div className="flex items-center gap-2">
                  <img
                    className="w-10 md:w-12 lg:w-14"
                    src={theme}
                    alt="VideoHive logo"
                  />
                  <span className="text-sm md:text-base">VideoHive</span>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    className="w-10 md:w-12 lg:w-14"
                    src={theme}
                    alt="CodeCanyon logo"
                  />
                  <span className="text-sm md:text-base">CodeCanyon</span>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    className="w-10 md:w-12 lg:w-14"
                    src={theme}
                    alt="GraphicRiver logo"
                  />
                  <span className="text-sm md:text-base">GraphicRiver</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
