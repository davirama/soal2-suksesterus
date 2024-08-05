"use client";

import { Button, Navbar } from "flowbite-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [hasShadow, setHasShadow] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header >
      <div className={`fixed top-0 z-10 w-full bg-transparent p-3 pb-0 lg:p-5 transition-shadow ${hasShadow ?  'shadow-md bg-white' : ''} ${isMenuOpen ? 'shadow-none' : 'shadow-none'} `}>
        <div className="grid grid-cols-2 gap-1 lg:gap-4 items-center">
          <div className="flex gap-2 items-center">
            <div className="flex flex-col">
              <p className={`font-semibold text-white flex text-base lg:text-xl ${hasShadow ?  'text-black' : ''} `}>Home ERP</p>
            </div>
          </div>
          <div className="flex justify-end items-center">
            <div className="hidden lg:flex justify-center items-center space-x-10 text-xl">
              <a className="font-semibold hover:text-blue-500 hover:underline underline-offset-8" href="#about">About</a>
              <a className="font-semibold hover:text-blue-500 hover:underline underline-offset-8" href="#pricing">Pricing</a>
              <a className="font-semibold hover:text-blue-500 hover:underline underline-offset-8" href="#contact">Contact</a>
              <button className="flex items-center gap-2 p-2 rounded-lg border font-bold border-blue-500 text-blue-500 hover:bg-blue-500 px-5 hover:text-white transition-transform transform duration-700 hover:scale-105 text-base">
                <p>Login</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                </svg>
              </button>
            </div>
            <div className="flex lg:hidden justify-center items-center space-x-2">
              <button className="flex items-center p-2 px-3 rounded-lg border font-bold border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition-transform transform duration-700 hover:scale-105 text-sm">
                <p>Login</p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
                </svg>
              </button>
              {/* Button Menu Dropdown */}
              <button onClick={toggleMenu} className={`flex items-center p-3 font-bold text-sm ${isMenuOpen ? 'border  text-blue-500' : 'text-gray-400'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`fixed top-12 bg-white z-10 w-full p-3`}>
        <div className="lg:hidden flex flex-col text-end border ml-32">
          <a className="block border font-semibold text-blue-500  p-2" href="#about">About</a>
          <a className="block border font-semibold text-black  p-2" href="#pricing">Pricing</a>
          <a className="block border font-semibold text-black p-2" href="#contact">Contact</a>
        </div>
        </div>
      )}
      
    </header> 
  );
}