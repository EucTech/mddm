import { montserrat } from "@/font";
import React from "react";

const Support = () => {
  return (
    <div
      className={`bg-[#DB353A] w-full flex flex-col items-center text-center py-20 px-[20px] lg:px-[200px] xl:px-[300px] gap-6  ${montserrat.className}`}
    >
      <h1 className=" w-full lg:[90%] xl:w-[80%] text-[24px] sm:text-[30px] text-center font-bold text-[#FFF3F4]">
        Support Our Cause. Buy our mechandise
      </h1>
      <p className="text-[15px] text-[#FFF3F4] text-center font-normal">
        Join us in making the devil mad. When you purchase merchandise from the
        GBest Foundation, you&apos;re not just buying a product—you&apos;re contributing
        to a cause that transforms lives. Every item you buy helps fund our
        initiatives, empowering communities in Nigeria, particularly in Edo
        State, to break free from the cycle of poverty.
      </p>
      <div className="flex gap-2 items-center mt-4">
        <button className="w-fit h-12 px-3 sm:px-8 py-3 rounded-md text-[15px] bg-[#fff] hover:bg-[#fff]/80 text-[#CB3322] font-medium">
          Order Now
        </button>
        <button className="w-fit h-12 px-3 sm:px-6 py-[10px] rounded-md text-[15px] bg-transparent hover:bg-[#fff]/20 text-[#fff] border border-solid border-[#fff] font-medium">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Support;
