import { inter, montserrat } from "@/font";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className=" w-full flex flex-col items-center gap-10 bg-[#FFCDCF33] pt-20 px-[30px] sm:px-[100px] lg:px-[200px] xl:px-[280px] ">
      <h1 className={` text-[30px] text-[#2D2D2D] font-bold ${montserrat.className}`}>About Gbest</h1>

      <p className={`text-[15px]  text-justify font-normal text-[#667085] leading-[1.8] ${inter.className}`}>
        Renowned for her track record and expertise,GBest is a dedicated
        philanthropist and an accomplished radio frequency engineer based in
        America. With a career spanning over two decades in the
        telecommunications industry, he has made significant contributions to
        the field of radio frequency engineering, specializing in the design and
        optimization of wireless communication systems. <br /> <br />
        Driven by a profound commitment to giving back, GBest has channeled his
        expertise and resources into founding the GBest Foundation. His vision
        is to leverage his technical background and philanthropic spirit to
        create impactful, sustainable change in Nigeria, especially in Edo
        State, where he has deep personal and familial ties.
      </p>

      <Image src="/image2.svg" alt="gbest image" width={500} height={500} priority={true} className=" w-[95%] mb-[-50px] z-30 sm:w-[500px] " /> 
    </div>
  );
};

export default AboutUs;
