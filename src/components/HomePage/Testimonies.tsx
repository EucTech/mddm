"use client";
import { inter, montserrat } from "@/font";
import Image from "next/image";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";


const Testimonies = () => {
  interface TestimonyProps {
    title: string;
    description: string;
    image: string;
    name: string;
    status: string;
    rating: Array<string>;
  }

  const Testimonies: TestimonyProps[] = [
    {
      title: "Scholarship Recepient",
      description:
        "The MDDM Foundation has changed my life. Their scholarship enabled me to continue my education and pursue my dream of becoming a Lawyer. I am forever grateful for their support. 😄👍✌️",
      image: "/t3.svg",
      name: "Ronald Richards",
      status: "Student of Ekpoma",
      rating: [
        "star.svg",
        "star.svg",
        "star.svg",
        "star.svg",
        "star-nofill.svg",
      ],
    },
    {
      title: "Transformed My Financial Life",
      description:
        "Thanks to the MDDM Foundation’s Facebook giveaway program, I started my own business. Their support has empowered me to create a stable income.",
      image: "/t3.svg",
      name: "Susan Nwigwe",
      status: "MDDM member",
      rating: [
        "star.svg",
        "star.svg",
        "star.svg",
        "star.svg",
        "star-nofill.svg",
      ],
  
    },
 
  ];

  const options = {
    type: "loop",
    drag: "free",
    focus: "center",
    arrows: false,
    fixedWidth: "30rem",
    fixedHeight: "17rem",
    width: "98%",
    perPage: 3,
    autoScroll: {
      speed: 1.4,
    },
    breakpoints: {
      640: {
        perPage: 1,
      },
      850: {
        perPage: 2,
      },
      1024: {
        perPage: 3,
      },
    },
  };

  return (
    <div
      className={`${montserrat.className} overflow-hidden w-full bg-[#FAFAFA] py-24 flex flex-col gap-14 items-center `}
    >
      <h1 className="text-[#000000] text-[24px] lg:text-[30px] font-bold">
      Testimonials from our Community
      </h1>
      <Splide options={options} extensions={{ AutoScroll }}>
        {Testimonies.map((testimony, index) => (
            <SplideSlide
            style={{
                overflow: "hidden",
                position: "relative",
                margin: "2rem",
                // border: "1px red solid",
              }}
            key={index}
            className="shadow-md"
            >
              <div
                className="flex flex-col gap-4 w-[30em] h-[60em] py-8 px-5 rounded-md "
                // style={{ border: "1px red solid" }}
              >
                <div className="flex flex-col gap-2">
                  <h2 className="text-[#0C0632] text-[18px] font-semibold ">
                    {testimony.title}
                  </h2>
                  <p className="text-[14px] text-[#838383] font-medium">
                    {testimony.description}
                  </p>
                </div>
    
                <div className="border-t-2 border-[#9A9797]/60 border-solid" />
    
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={testimony.image}
                      alt={testimony.name}
                      width={500}
                      height={500}
                      className="w-[60px] rounded-full"
                    />
                    <div className="flex flex-col gap-1">
                      <h1
                        className={`${inter.className} text-[#6A6A6A] text-[16px]`}
                      >
                        {testimony.name}
                      </h1>
                      <p className="text-[#9A9797] text-[14px]">
                        {testimony.status}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {testimony.rating.map((item, index) => (
                      <Image
                        key={index}
                        src={item}
                        alt="rating"
                        width={20}
                        height={20}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Testimonies;
