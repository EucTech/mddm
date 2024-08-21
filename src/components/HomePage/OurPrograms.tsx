import { inter } from "@/font";
import Image from "next/image";
import React from "react";

const OurPrograms = () => {
  return (
    <div
      className={`w-full py-10  px-5 sm:px-20 flex flex-col lg:flex-row items-start lg:items-center gap-10 xl:gap-20 justify-between ${inter.className}`}
    >
      <div className=" w-full lg:w-[40em] h-full sm:h-[17em] px-5 sm:px-10 py-5 flex flex-col gap-3 bg-[#FFF4E2] ">
        <Image
          src="/icon4.svg"
          alt=""
          height={500}
          width={500}
          className="w-14 h-14"
          priority={true}
        />
        <h2 className="font-semibold text-[20px] text-[#000]">Our Programs</h2>
        <ul className=" flex flex-col gap-3 list-disc ml-5">
          <li className="text-[15px] font-medium text-[#4F4F4F]">
            Scholarships for underprivileged students
          </li>
          <li className="text-[15px] font-medium text-[#4F4F4F]">
            Free Financial giveaway on facebook
          </li>
          <li className="text-[15px] font-medium text-[#4F4F4F]">
            Free medical clinics and health camps
          </li>
        </ul>
      </div>

      <div className="w-full h-[17em] px-5 sm:px-10 flex flex-col justify-center gap-3 bg-[#F3F6F8]">
        <h2 className="font-semibold text-[20px] text-[#000]">Community development </h2>
        <ul className=" flex flex-col gap-3 list-disc ml-5">
          <li className="text-[15px] font-medium text-[#4F4F4F]">
          Clean water and sanitation projects
          </li>
          <li className="text-[15px] font-medium text-[#4F4F4F]">
          Housing and infrastructure development
          </li>
          <li className="text-[15px] font-medium text-[#4F4F4F]">
          Community centers and recreational facilities
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OurPrograms;
