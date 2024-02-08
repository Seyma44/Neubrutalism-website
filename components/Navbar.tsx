"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); 
    };

    handleResize(); 

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`bg-[#ffff02] border-4 border-black py-4 px-8 absolute top-5 ${
        isMobile ? "left-4 right-4" : "left-20 right-20"
      } z-10`}
    >
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
        <Image src="/logo.png" alt="logo" width={120} height={120} />
      </div>
      <div className="sm:hidden text-right">
        <div className="relative top-1">
          <button onClick={toggleMenu} className="text-black">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d={
                  isMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-full mt-2 w-48 bg-[#ffff02] border-4 border-solid border-black shadow-lg z-10 -mx-4 right-4">
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-200  text-center"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-200 text-center"
                >
                  About
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-200 text-center"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="hidden sm:block text-right">
        <a href="#" className="text-lg font-bold text-black mr-4">
          Home
        </a>
        <a href="#" className="text-lg font-bold text-black mr-4">
          About
        </a>
        <a href="#" className="text-lg font-bold text-black">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
