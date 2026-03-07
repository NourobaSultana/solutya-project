import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>

      <li>
        <NavLink to="/about">Our Team</NavLink>
      </li>

      <li>
        <NavLink to="/about">Pricing</NavLink>
      </li>

      <li>
        <NavLink to="/about">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/about">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar urbanist bg-gradient-to-r from-blue-900/90 via-blue-700/70 to-blue-400/50 backdrop-blur-md shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-white font-bold">COCA</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{links}</ul>
        </div>
        <div className="navbar-end gap-4">
          <NavLink
            className="text-white font-bold
          "
            to={"/login"}
          >
            Login
          </NavLink>
          <button className="btn rounded-4xl p-5 bg-green-300 font-bold">
            Sign Up Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
