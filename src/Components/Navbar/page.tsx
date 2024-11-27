'use client'
import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaBars } from 'react-icons/fa'
import { useState } from "react";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-yellow-200 h-[90px] w-full text-center">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between  h-16 pt-2">
          {/* Logo */}
          <div className='flex mr-[100px] items-center '>
           <img src="/images/log.png" alt="logo" className='lg: h-[90px] mt-3' />
           <span className='lg:text-2xl text-blue-800 font-semibold text-center'>CHICKHEN GUNIYA VIRUS</span>
        </div>
         

          {/* Bar Icon (visible on small screens) */}
          <div className="flex md:hidden">
            <div
              className="cursor-pointer space-y-1"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span
                className={`block h-1 w-8 bg-blue-800 transform transition duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`block h-1 w-8 bg-blue-800 transition duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block h-1 w-8 bg-blue-800 transform transition duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </div>
          </div>

          {/* Links (hidden on small screens) */}
          <div className="hidden md:flex md:gap-6 space-x-4 text-blue-800">
            <Link   href="#home"  className="hover:text-[25px] font-bold text-[22px]">HOME
             
            </Link>
            <Link href="#about" className="hover:text-[25px] font-bold text-[22px]">ABOUT
            </Link>
            <Link href="#symptoms" className="hover:text-[25px] font-bold text-[22px]">SYMPTOMS
            </Link>
            <Link href="#prevention"
              className="hover:text-[25px] font-bold text-[22px]">PREVENTION
            </Link>
            <Link href="#epi"
              className="hover:text-[25px] font-bold text-[22px]">EPIDEMIOLOGY
            </Link>
            <Link href="#articals"
              className="hover:text-[25px] font-bold text-[22px]">ARTICALS
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu (visible when isOpen is true) */}
      {isOpen && (
        <div className="md:hidden fixed  bg-yellow-200 bg-opacity-90 z-50 ">
          <div className="px-2 pt-2 pb-3 space-y-1 ">
            <Link href="#home" className="block px-3 py-2 rounded-md text-base font-medium  hover:bg-white">
            HOME
             
            </Link>
            <Link href="#about"  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white">
            ABOUT
            
            </Link>
            <Link href="#symptoms" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-white">
            SYMPTOMS
            
            </Link>
            <Link href="#prevention" className="block px-3 py-2 rounded-md text-base font-medium  hover:bg-white">
            
            PREVENTION
            
            </Link>

            <Link href="#epi"  className="block px-3 py-2 rounded-md text-base font-medium  hover:bg-white">
            EPIDEMIOLOGY
           
            </Link>
            <Link href="#articals"  className="block px-3 py-2 rounded-md text-base font-medium  hover:bg-white">
            ARTICLES
            
            </Link>
          </div>
        </div>
      )}
    </nav>
  );}

export default Navbar
