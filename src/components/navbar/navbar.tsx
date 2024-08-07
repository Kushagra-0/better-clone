"use client"

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = ({ isWhiteBackground = false }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navBackground = isWhiteBackground || isScrolled ? 'bg-white' : 'bg-[#004733]';
  const textColor = isWhiteBackground || isScrolled ? 'text-[#292B29]' : 'text-white';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-20 p-4 transition-colors duration-300 ${navBackground}`}>
      <div className="container flex justify-between items-center py-1">
        <div className="flex items-center space-x-6 mx-12">
          {/* Logo */}
          <Link href="/">
            <span className={`font-bold text-xl ${textColor}`}>Better</span>
          </Link>

          {/* Left Menu Buttons with Dropdowns */}
          <div className="relative group">
            <button className={`hover:bg-[#F6F6F3] hover:text-[#292B29] hover:rounded-3xl p-3 ${textColor}`}>Buy</button>
            <div className="absolute left-0 hidden mt-2 w-72 bg-white border border-gray-200 rounded-lg shadow-lg group-hover:block p-2">
              <Link href="/buy/option1">
                <span className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Apply now</span>
              </Link>
              <Link href="/buy/option2">
                <span className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Purchase rates</span>
              </Link>
              <Link href="/buy/option2">
                <span className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Affordability calculator</span>
              </Link>
              <Link href="/buy/option2">
                <span className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Mortgage calculator</span>
              </Link>
              <Link href="/buy/option2">
                <span className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Rent vs buy calculator</span>
              </Link>
              <Link href="/buy/option2">
                <span className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Find an agent</span>
              </Link>
              <Link href="/buy/option2">
                <span className="block px-4 py-3 text-gray-700 hover:bg-gray-100">VA loans</span>
              </Link>
              <Link href="/buy/option2">
                <span className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Learning center</span>
              </Link>
            </div>
          </div>

          <div className="relative group">
             <button className={`hover:bg-[#F6F6F3] hover:text-[#292B29] hover:rounded-3xl p-3 ${textColor}`}>Refinance</button>
             <div className="absolute left-0 hidden mt-2 w-72 p-2 bg-white border border-gray-200 rounded-lg shadow-lg group-hover:block">
               <Link href="/refinance/option1">
                 <span className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Apply Now</span>
               </Link>
               <Link href="/refinance/option2">
                 <span className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Refinance rates</span>
               </Link>
               <Link href="/refinance/option2">
                 <span className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Cash-out refinance calculator</span>
               </Link>
               <Link href="/refinance/option2">
                 <span className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Learning Center</span>
               </Link>
             </div>
           </div>

           <div className="relative group">
            <button className={`hover:bg-[#F6F6F3] hover:text-[#292B29] hover:rounded-3xl p-3 ${textColor}`}>HELOC</button>
            <div className="absolute left-0 hidden mt-2 w-72 p-2 bg-white border border-gray-200 rounded-lg shadow-lg group-hover:block">
              <Link href="/heloc/option1">
                <span className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Apply Now</span>
              </Link>
              <Link href="/heloc/option2">
                <span className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Calculate your Cash 💵</span>
              </Link>
              <Link href="/heloc/option2">
                <span className="block px-4 py-3 text-gray-700 hover:bg-gray-100">HELOC vs. Cash-out Refinance</span>
              </Link>
              <Link href="/heloc/option2">
                <span className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Learning Center</span>
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button className={`hover:bg-[#F6F6F3] hover:text-[#292B29] hover:rounded-3xl p-3 ${textColor}`}>Rates</button>
            <div className="absolute left-0 hidden mt-2 w-72 p-2 bg-white border border-gray-200 rounded-lg shadow-lg group-hover:block">
              <Link href="/rates/option1">
                <span className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Purchase mortgage rates</span>
              </Link>
              <Link href="/rates/option2">
                <span className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Refinance rates</span>
              </Link>
              <Link href="/rates/option2">
                <span className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Refinance cash-out rates</span>
              </Link>
              <Link href="/rates/option2">
                <span className="block px-4 py-3 text-gray-700 hover:bg-gray-100">HELOC rates</span>
              </Link>
              <Link href="/rates/option2">
                <span className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Purchase VA rates</span>
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button className={`hover:bg-[#F6F6F3] hover:text-[#292B29] hover:rounded-3xl p-3 ${textColor}`}>Better+</button>
            <div className="absolute left-0 hidden mt-2 w-72 p-2 bg-white border border-gray-200 rounded-lg shadow-lg group-hover:block">
              <Link href="/betterplus/option1">
                <span className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Get Insurance</span>
              </Link>
              <Link href="/betterplus/option2">
                <span className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Title and Closing</span>
              </Link>
              <Link href="/betterplus/option1">
                <span className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Better Attorney Match</span>
              </Link>
              <Link href="/betterplus/option2">
                <span className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Learning Center</span>
              </Link>
              <Link href="/betterplus/option1">
                <span className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Better Agent Match</span>
              </Link>
              <Link href="/betterplus/option2">
                <span className="block px-4 py-3 text-gray-700 hover:bg-gray-100">Better Duo</span>
              </Link>
            </div>
          </div>

        </div>

        <div className="flex items-center space-x-6">
          {/* Call Icon */}
          <a href="tel:+1234567890" className={` hover:hover:bg-[#F6F6F3] hover:text-[#292B29] hover:rounded-3xl p-3 ${textColor}`}>
            call
          </a>

          {/* Sign In */}
          <Link href="/sign-in">
            <span className={`flex items-center space-x-2 ${textColor} hover:bg-[#F6F6F3] hover:text-[#292B29] hover:rounded-3xl p-3`}>
              <span>Sign In</span>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
