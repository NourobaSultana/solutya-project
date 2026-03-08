import React from "react";

const Ready = () => {
  return (
    <div>
      <section className=" py-20 px-6 bg-gradient-to-r from-blue-900/90 via-blue-700/70 to-blue-400/50 text-white">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Are you ready to get started? <br /> Being your free trial today
          </h2>

          {/* Small Text */}
          <p className="text-blue-100 mb-8">
            Experience the posibilities: Start Your Free Trial And get Started
            Today
          </p>

          {/* 3 Feature Texts */}
          <div className="flex justify-center items-center gap-4 mb-10 text-sm md:text-base">
            <span>Ready for 30-days trial</span>
            <span className="border-l border-white h-4"></span>
            <span>Exclusive Support</span>
            <span className="border-l border-white h-4"></span>
            <span>No Fees</span>
          </div>

          {/* Email + Button */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-2 py-2 rounded-md text-black w-full bg-white"
            />

            <button className="bg-white text-black-600 btn">Get Started</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ready;
