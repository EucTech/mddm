import { montserrat } from "@/font";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      className={`w-full flex flex-col gap-10 bg-[#101010] text-[#fff] py-10 z-50 ${montserrat.className}`}
    >
      <div className="flex flex-wrap gap-10 justify-between px-10 md:px-20">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2 cursor-pointer ml-[-10px]">
            <Image
              src="/logo.svg"
              alt="MDDM logo"
              width={500}
              height={500}
              className="w-[50px]"
              priority={true}
            />

            <p className="text-[#DB353A] text-[26px] font-bold ">MDDM</p>
          </div>

          <div className="flex items-center  gap-3 ">
            <FaXTwitter className=" text-[#fff] h-6 w-6" />

            <FaWhatsapp className=" text-[#fff] h-6 w-6" />

            <FaInstagram className=" text-[#fff] h-6 w-6" />

            <FaTelegramPlane className=" text-[#fff] h-6 w-6" />
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-[#C4C4C4] text-[14px] font-medium ">
            MDDM Foundation
          </h1>
          <p className="text-[13px] text-[#9A9797] font-medium">Lekki, Lagos</p>
          <p className="text-[13px] text-[#9A9797] font-medium">
            08042 NIGERIA
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link href="/">
            <h1 className="text-[#C4C4C4] text-[14px] font-medium">Home</h1>
          </Link>
          <Link href="/about-us">
            <p className="text-[13px] text-[#9A9797] font-medium">About us</p>
          </Link>
          <Link href="/merchandise">
            <p className="text-[13px] text-[#9A9797] font-medium">
              Merchandise
            </p>
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <h1 className="text-[#C4C4C4] text-[14px] font-medium">
            Legal Mentions
          </h1>
          <p className="text-[13px] text-[#9A9797] font-medium">
            Terms of Services
          </p>
          <p className="text-[13px] text-[#9A9797] font-medium">
            Privacy Policy
          </p>
        </div>
      </div>

      <div className="w-full border-b border-solid mt-6 border-[#505050]" />

      <p className="text-[12px] text-[#838383] text-center font-medium">
        &#169; 2024 COPYRIGHT BY AquaVital Relief
      </p>
    </div>
  );
};

export default Footer;
