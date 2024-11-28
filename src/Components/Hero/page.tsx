import React from "react";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    
        <div className='bg-[url("/images/bg2.jpg")] bg-cover bg-center h-[50vh]  lg:h-[100vh] w-full '>
          <div className="text-center items-center pt-[40px] p-4 lg:pt-14">
            <h1 className="text-2xl md:text-6xl font-serif font-bold text-blue-900 lg:text-7xl">
              UNDERSTANDING <br /> CHIKEN GUNIYA
            </h1>
            <p className="text-1xl lg:text-3xl">
              Chikungunya Virus Symptoms, Prevention, and Awareness for a
              Healthier Tomorrow.
            </p>
          </div>
        </div>
      
  );
};

export default Hero;
