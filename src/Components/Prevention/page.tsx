import React from "react";

const Prevention = () => {
  return (
    <div id="prevention" className="mt-20 lg:mt-32 mb-16 w-full ">
      <h1 className=" text-center p-5 m-2  font-serif font-bold text-2xl md:text-4xl lg:text-5xl text-blue-800 items-center">
        TREATMENT & PREVENTION
      </h1>
      <div className="flex flex-row ">
        <img
          src="/images/doctor.png"
          alt=""
          className="h-auto md:h-[500px] md:w-[400px] lg:h-[900px] lg:w-[700px] hidden md:block"
        />
        <div className="mt-14 ml-8">
          <div className="p-5">
            <img src="/images/medicine.png" alt="" className="h-[100px]" />
            <h1 className="font-semibold p-1 text-[19px]">Pain relievers</h1>
            <p>like paracetamol or ibuprofen.</p>
          </div>
          <div className="p-5">
            <img src="/images/hyderation.png" alt="" className="h-[100px]" />
            <h1 className="font-semibold p-1 text-[19px]">Hyderation</h1>
            <p> Drinking plenty of fluids to prevent dehydration.</p>
          </div>
          <div className="p-5">
            <img src="/images/rest.png" alt="" className="h-[100px]" />
            <h1 className="font-semibold p-1 text-[19px]">Rest</h1>
            <p>To recover from joint and muscle pain.</p>
          </div>
          <div className="p-5">
            <img src="/images/asprin.png" alt="" className="h-[100px]" />
            <h1 className="font-semibold p-1 text-[19px]">Avoid Asprin</h1>
            <p>To reduce the risk of bleeding complications.</p>
          </div>
        </div>
        <div className="mt-14 ml-16">
        <div className="p-5">
            <img src="/images/spray.png" alt="" className="h-[100px]" />
            <h1 className="font-semibold p-1 text-[19px]">Spray Around</h1>
            <p>Use mosquito repellents with DEET, picaridin, or oil of lemon eucalyptus.</p>
          </div>
          <div className="p-5">
            <img src="/images/cycle.png" alt="" className="h-[100px]" />
            <h1 className="font-semibold p-1 text-[19px]">Mosquito Control</h1>
            <p>Remove stagnant water where mosquitoes breed.</p>
          </div>
          <div className="p-5">
            <img src="/images/fogg.png" alt="" className="h-[100px]" />
            <h1 className="font-semibold p-1 text-[19px]">fogging</h1>
            <p>Regular fogging in high-risk areas.</p>
          </div>
          <div className="p-5">
            <img src="/images/long.png" alt="" className="h-[100px]" />
            <h1 className="font-semibold p-1 text-[19px]">Cover</h1>
            <p>fullly cover your body</p>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Prevention;
