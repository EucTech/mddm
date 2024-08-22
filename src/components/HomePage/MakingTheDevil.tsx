import { montserrat } from "@/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MakingTheDevil = () => {
  return (
    <div
      className={`${montserrat.className} flex md:flex-row flex-col w-full bg-[#FFE3E4] relative items-center gap-20 px-[30px] md:px-[100px] lg:px-[200px] xl:px-[250px] py-16`}
    >
      <Image
        src="/image4.svg"
        alt=""
        width={500}
        height={500}
        className=" absolute top-0 left-0 w-[100px] lg:w-[200px] xl:w-[300px]"
      />

      <Image
        src="/gbest2.png"
        alt="Gbest image"
        width={500}
        height={500}
        className=" w-[300px] h-[400px] md:w-[500px] md:h-[300px] object-cover"
        priority={true}
      />
      <div className="flex flex-col gap-3 items-center md:items-start ">
        <h1 className="text-[#221919] text-start text-[24px] md:text-[30px] lg:text-[35px] xl:text-[40px] leading-[1.3] font-bold">
          Making the davil mad
        </h1>
        <p className="text-[15px] text-justify text-[#4F4F4F] font-medium">
          At the core of the MDDM Foundation is a belief that everyone deserves
          a chance to succeed. Education and skill development are powerful
          tools that can break the cycle of poverty and open doors to new
          opportunities
        </p>

        <Link href="#">
          <button className=" mt-8 relative bg-[#FFCDCF] w-fit px-8 py-[10px] rounded-3xl">
            <span className="text-[#6C0003] font-semibold text-[15px]">
              Get Started
            </span>
            <Image
              src="/right-icon.png"
              alt="right icon"
              width={500}
              height={500}
              className=" w-[38px] absolute top-0 right-[-20px]"
            />
          </button>
        </Link>
      </div>
      <Image
        src="/image3.png"
        alt="side frame"
        width={500}
        height={500}
        className=" absolute bottom-0 right-0 w-[100px] lg:w-[200px]"
      />
    </div>
  );
};

export default MakingTheDevil;
