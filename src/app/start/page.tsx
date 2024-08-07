"use client"

import Footer from "@/components/footer/footer";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

interface CustomNavbarProps {
  isWhiteBackground: boolean;
}

const CustomNavbar = () => {
  return (
    <nav className={` ml-44 fixed top-0 left-0 right-0 z-20 p-6 transition-colors duration-300 bg-white border-y-2 mr-44`}>
      <div className="container flex justify-between items-center mx-auto">
        <Link href="/">
        <div className="text-black">
          <div className="text-[#017848] font-bold">Better</div>
          <div className="text-sm">Mortgage</div>
        </div>
        </Link>
        <div className="text-black">Need Help? Call (415) 523 8837</div>
      </div>
    </nav>
  );
};

const Start = () => {
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY < window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {showNavbar && <CustomNavbar/>}
      <section 
        id="section1" 
        className="relative flex flex-col items-center justify-center min-h-screen bg-white text-black"
      >
        <div className="font-bold text-5xl">Hi, I'm Betty!</div>
        <div className="font-bold text-5xl">What can I help you with?</div>
        <div className="space-y-8 text-center flex flex-col mt-8">
          <button className="border-2 hover:bg-darkgreen text-darkgreen hover:text-[#017848] hover:border-4 hover:border-[#017848] py-4 px-8 rounded-xl text-xl font-semibold">Buying a home</button>
          <button className="border-2 hover:bg-darkgreen text-darkgreen hover:text-[#017848] hover:border-4 hover:border-[#017848] py-4 px-8 rounded-xl text-xl font-semibold">Refinance my mortgage</button>
          <button className="border-2 hover:bg-darkgreen text-darkgreen hover:text-[#017848] hover:border-4 hover:border-[#017848] py-4 px-8 rounded-xl text-xl font-semibold">Get cash from my home</button>
        </div>

        <div className="flex flex-row mt-8">
          <a className="justify-center flex flex-col items-center mx-6">
            <div className="text-2xl">$100B</div>
            <div className="text-xs mt-5">home loans funded entirely online</div>
          </a>
          <a className="justify-center flex flex-col items-center mx-6">
            <div className="text-2xl">400K</div>
            <div className="text-xs mt-5">Customers who chose a Better Mortgage</div>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Start;