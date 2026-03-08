import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Component/Navbar/Navbar";
import Footer from "../Component/Footer/Footer";

const RootLayout = () => {
  return (
    // <div className="max-w-7xl mx-auto">
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <header className="w-full fixed top-0 left-0 z-50">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-20 px-4 sm:px-6 md:px-8 lg:px-16">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full mt-auto">
        <Footer />
      </footer>
    </div>
    // </div>
  );
};

export default RootLayout;
