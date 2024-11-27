import React from "react";

const Symptoms = () => {
  return (
    <div id="symptoms" className=" mt-16 h-auto w-full mb-16">
      <div>
        <h1 className="text-center p-5 m-2 bg-blue-900 font-serif font-bold text-2xl md:text-4xl lg:text-6xl text-white items-center">
          SYMPTOMS OF CHIKENGUNYA
        </h1>
        <p className="text-center  leading-2 font-serif text-2xl md:text-3xl ">
          Symptoms typically appear 4–8 days after the bite of an infected
          mosquito but can range from 2–12 days. The major signs include:
        </p>
      </div>
      <div className="mt-5  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6  gap-4 items-center overflow-hidden">
        <div>
          <div className="pl-3 h-[420px] border-[3px] ">
            <img
              src="/images/fever.png"
              alt=""
              className="w-[300px] h-[300px] rounded-full "
            />
            <div className=" text-center  bg-blue-900 text-white font-serif text-[22px] rounded-lg">
              FEVER
            </div>
            <p className="p-2 font-semibold text-[18px]">
              Sudden onset of high fever, often exceeding 102°F (39°C).
            </p>
          </div>
        </div>

        <div>
          <div className="pl-3  h-[420px] border-[3px]">
            <img
              src="/images/tired.png"
              alt=""
              className="w-[300px] h-[300px] rounded-full "
            />
            <div className="text-center  bg-blue-900 text-white font-serif text-[22px] rounded-lg">
              FATIGUE
            </div>
            <p className="p-2 font-semibold text-[18px]">
              Extreme tiredness and weakness.
            </p>
          </div>
        </div>

        <div>
          <div className="pl-3 pt-4 h-[420px] border-[3px]">
            <img
              src="/images/sardi.png"
              alt=""
              className="w-[300px] h-[280px] rounded-full "
            />
            <div className="text-center  bg-blue-900 text-white font-serif text-[22px] rounded-lg">
              SHAKING
            </div>
            <p className="p-2 font-semibold text-[18px]">
              Tremors or involuntary shaking may occur due to fever or muscle
              weakness.
            </p>
          </div>
        </div>

        <div>
          <div className="pl-3 h-[420px] border-[3px]">
            <img
              src="/images/vomt.png"
              alt=""
              className="w-[300px] h-[300px] rounded-full "
            />
            <div className="text-center  bg-blue-900 text-white font-serif text-[22px] rounded-lg">
              NAUSEA & VOMET
            </div>
            <p className="p-2 font-semibold text-[18px]">
              Accompanying the fever and other symptoms.
            </p>
          </div>
        </div>

        <div>
          <div className=" pl-5 h-[420px] border-[3px]">
            <img
              src="/images/trot.png"
              alt=""
              className="w-[300px] h-[300px] rounded-full "
            />
            <div className="text-center  bg-blue-900 text-white font-serif text-[22px] rounded-lg">
              HEADACHE
            </div>
            <p className="p-2 font-semibold text-[18px]">
              {" "}
              Persistent and intense.
            </p>
          </div>
        </div>

        <div>
          <div className="pl-3 h-[420px] border-[3px]">
            <img
              src="/images/body.png"
              alt=""
              className="w-[300px] h-[280px] rounded-full "
            />
            <div className="text-center  bg-blue-900 text-white font-serif text-[22px] rounded-lg">
              Severe Joint Pain{" "}
            </div>
            <p className="p-2 font-semibold text-[18px]">
              Pain can last for weeks or months, predominantly in wrists, knees,
              ankles, and fingers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Symptoms;
