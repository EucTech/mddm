import { montserrat } from "@/font";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className=" overflow overflow w-full h-fit gap-10 overflow flex lg:flex-row flex-col items-center pt-10 justify-between px-5 md:px-20 lg:pl-16 xl:pl-24">
      <div className=" w-full items-center lg:items-start md:[70%] lg:w-[45%] flex flex-col gap-5">
        <div
          className={`${montserrat.className} text-center lg:text-start w-[100%] lg:w-[85%] font-bold text-[40px] md:text-[50px] leading-[1.5]`}
        >
          <h1 className="text-[#000000]">
            MDDM Foundation, a
            <span className="text-[#DB353A] "> Making the Devil Mad </span>
          </h1>
        </div>

        <p
          className={`${montserrat.className} lg:text-start text-center text-[16px] md:text-[18px] w-[100%] md:w-[82%] lg:w-[90%] text-[#838383]`}
        >
          we are dedicated to uplifting communities in Nigeria, particularly in
          Edo State, out of poverty.
        </p>
      </div>

      <div className=" relative w-fit  flex flex-col items-center">
        <Image
          src="/a-girl.png"
          alt="a girl with a phone"
          width={400}
          height={400}
          className=" w-[500px] lg:w-[480px] xl:w-[600px]  object-cover "
          priority={true}
        />
      </div>
    </div>
  );
};

export default Hero;
