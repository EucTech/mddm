import { open_sans } from "@/font";
import Image from "next/image";
import React from "react";

const WhatWeDo = () => {
  return (
    <div
      className={`w-full flex xl:flex-row flex-col items-center justify-between gap-6 pb-10 px-[20px] sm:px-[50px] ${open_sans.className}`}
    >
      <Image
        src="/image1.svg"
        alt=""
        height={500}
        width={500}
        className="w-[30em] h-[30em]"
        priority={true}
      />

      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="p-5 flex flex-col gap-3 ">
          <Image
            src="/w-icon1.svg"
            alt=""
            height={500}
            width={500}
            className="w-14 h-14"
            priority={true}
          />
          <h2 className="font-semibold text-[20px] text-[#000]">What we Do</h2>
          <p className="text-[15px] font-medium text-[#000]">
            We implement comprehensive programs that address the root causes of
            poverty. Our initiatives focus on education, healthcare, economic
            empowerment, and community development.{" "}
          </p>
        </div>

        
        <div className="p-5 flex flex-col gap-3 ">
          <Image
            src="/w-icon3.svg"
            alt=""
            height={500}
            width={500}
            className="w-14 h-14"
            priority={true}
          />
          <h2 className="font-semibold text-[20px] text-[#000]">Our story </h2>
          <p className="text-[15px] font-medium text-[#000] ">
            Growing up, Our founders GBest witnessed firsthand the challenges
            faced by many families in his community. As accomplished engineer
            based in America, recognized the urgent need to help struggling
            Africans.
          </p>
        </div>

        <div className="w-ful p-5 flex flex-col gap-3 ">
          <Image
            src="/w-icon2.svg"
            alt=""
            height={500}
            width={500}
            className="w-14 h-14"
            priority={true}
          />

          <h2 className="font-semibold text-[20px] text-[#000]">
            Our Programs
          </h2>

          <ul className=" flex flex-col gap-2 list-disc ml-5">
            <li className="text-[15px] font-medium text-[#000]">
              Scholarships for underprivileged students
            </li>
            <li className="text-[15px] font-medium text-[#000]">
              Free Financial giveaway on facebook
            </li>
            <li className="text-[15px] font-medium text-[#000]">
              Free medical clinics and health camps
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default WhatWeDo;
