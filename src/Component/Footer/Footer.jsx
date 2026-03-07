import React from "react";
import { CgMail } from "react-icons/cg";
import { CiLocationOn } from "react-icons/ci";
import { FaLongArrowAltRight } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-base-content px-6 md:px-16 py-20 flex flex-col gap-8">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 w-full">
          <nav className="space-y-4">
            <p className="text-white font-bold text-2xl md:text-5xl leading-snug">
              Are You prepared to <br /> collaborate with us
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-white">
              <div className="flex items-center gap-2">
                <span className="text-2xl bg-gray-300 rounded-full p-2">
                  <CiLocationOn />
                </span>
                <p className="text-lg">Dhaka, Bangladesh</p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-2xl bg-gray-300 rounded-full p-2">
                  <CgMail />
                </span>
                <p className="text-lg">info@example.com</p>
              </div>
            </div>
          </nav>

          <nav className="flex">
            <button className="btn w-full sm:w-auto rounded-full px-6 py-3 bg-green-300 font-bold flex items-center gap-2">
              We get start a project
              <FaLongArrowAltRight />
            </button>
          </nav>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-700 "></div>

        {/* Bottom section */}
        <section className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-neutral-content text-sm">
          <aside>
            <p>© CocaPayBySansBrothers</p>
          </aside>

          <nav className="flex flex-wrap gap-4">
            <a className="hover:underline cursor-pointer">
              Terms And Condition
            </a>
            <a className="hover:underline cursor-pointer">Privacy Policy</a>
          </nav>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
