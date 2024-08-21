import { montserrat } from "@/font";
import React from "react";

const Mission = () => {
  return (
    <div
      className={`${montserrat.className} flex flex-col w-full items-center gap-5 px-[20px] md:px-[100px] lg:px-[250px] xl:px-[300px] 2xl:px-[500px] pt-20 pb-10`}
    >
      <h1 className="text-[#221919] text-center text-[24px] md:text-[30px] lg:text-[35px] xl:text-[40px] leading-[1.3] font-bold">
        Our Mission
      </h1>
      <p className="text-[15px] text-center text-[#4F4F4F] font-medium">
        We believe everyone deserves the opportunity to reach their full
        potential. Our mission is to empower individuals and families living in
        poverty by providing essential resources, fostering education, and
        promoting sustainable development solutions.
      </p>
    </div>
  );
};

export default Mission;
