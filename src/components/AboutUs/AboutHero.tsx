import { montserrat } from "@/font";
import React from "react";

const AboutHero = () => {
  return (
    <div
      className={`w-full px-3 h-[35em] flex flex-col gap-4 items-center justify-center text-white ${montserrat.className}`}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/gbest3.jpeg')`,
        backgroundSize: "cover", 
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
        <h1 className=" text-[30px] sm:text-[40px] text-center font-extrabold leading-[1.6] tracking-wider">Making the Devil Mad</h1>
        <p className=" w-[90%] sm:w-[70%] lg:w-[50%] xl:w-[40%] text-[18px] font-medium text-center">WE ARE THE LEADING PHILANTHROPY EMPOWERING YOUNG AFRICANS ACROSS ALL STATES </p>
    </div>
  );
};

export default AboutHero;
