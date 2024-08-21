import { montserrat } from "@/font";
import React from "react";

const PartnerWithUs = () => {
  return (
    <div
      className={`${montserrat.className} flex flex-col w-full bg-[#F9FAFB] items-center gap-5 px-[20px] md:px-[150px] lg:px-[280px] xl:px-[350px] 2xl:px-[500px] pt-28 pb-10`}
    >
      <h1 className="text-[#221919] text-center text-[30px] lg:text-[35px]  leading-[1.3] font-bold">
        Partner with us
      </h1>
      <p className="text-[15px] text-center leading-[1.6] text-[#838383] font-normal">
        We collaborate with local and international organizations, businesses,
        and government agencies to maximize our impact. Partner with us to
        create sustainable solutions for poverty alleviation.
      </p>
    </div>
  );
};

export default PartnerWithUs;
