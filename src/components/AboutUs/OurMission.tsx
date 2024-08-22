import { dm_sans, montserrat } from "@/font";
import React from "react";

const OurMission = () => {
  return (
    <div
      className={`w-full flex flex-col gap-16 px-[30px] sm:px-[80px] lg:px-[150px] mt-20 ${montserrat.className}`}
    >
      <div className="flex md:flex-row flex-col justify-between gap-5  lg:px-[40px] xl:px-[100px]">

        <div className="flex flex-col gap-4 md:w-[50%] xl:w-[30%]">
          <h2 className="text-[#E74040] font-normal">What we stand for </h2>
          <h1 className="text-[#252B42] text-[25px] font-bold">
            Making the Devil Mad Initiative{" "}
          </h1>
        </div>

        <p className="md:w-[70%] xl:w-[50%] text-[14px] text-justify font-normal text-[#667085]">
          Welcome to the MDDM Foundation, a dedicated non-profit organization
          committed to alleviating poverty and improving the quality of life for
          low-income individuals and families in Nigeria. Founded with a passion
          for making a tangible difference, the MDDM Foundation focuses on
          providing essential support through various giveaway programs and
          community-based initiatives.
        </p>

      </div>

      <div className={`text-[#667085] text-[16px] font-normal flex flex-col gap-3 ${dm_sans.className}`}>
        
        <p className="leading-[2] text-justify">
          Our mission is to empower the underprivileged by addressing their
          immediate needs and creating opportunities for sustainable growth. We
          aim to foster a community where everyone has access to the basic
          necessities of life and the resources needed to thrive
        </p>

        <p className="leading-[2]">
          <span className="font-semibold text-[#4c5669]">Giveaway Programs:</span> Our foundation runs regular giveaway
          programs, distributing money, food, educational materials, and other
          essential items to those in need. These giveaways are designed to
          provide immediate relief to struggling families and individuals,
          ensuring they have the basics to survive and thrive.
        </p>

        <p className="leading-[2]">
          <span className="font-semibold text-[#4c5669]">Community Support Initiatives:</span> Beyond giveaways, we are committed to
          implementing long-term solutions to poverty. This includes educational
          programs, vocational training, and health awareness campaigns. By
          equipping people with the skills and knowledge they need, we aim to
          break the cycle of poverty and promote self-sufficiency <br />
          Whether you are looking to donate, volunteer, or collaborate with us,
          there are many ways you can get involved with the MDDM Foundation.
          Together, we can make a significant impact on the lives of those in
          need and contribute to a more equitable and just society.
        </p>

        <h1 className="font-extrabold text-[20px] text-[#4c5669] mt-5">Our Founder’s Letter</h1>

        <div className="flex flex-col gap-3 mt-2">
          <p className="leading-[2]">Dear Friends and Supporters,</p>

          <p className="leading-[2]">
            I am honored to introduce you to the MDDM Foundation, an
            organization born out of a profound belief in the power of
            education, skill empowerment, and the spirit of giving. As the
            founder of this foundation, I have witnessed firsthand the
            transformative impact that these elements can have on individuals
            and communities, especially those facing significant economic
            challenges.
          </p>

          <p className="leading-[2]">
            Growing up in Nigeria, I saw many talented and hardworking
            individuals held back by a lack of resources and opportunities. This
            reality inspired me to create a platform that not only addresses
            immediate needs but also paves the way for long-term growth and
            self-sufficiency. The MDDM Foundation is dedicated to making a
            tangible difference in the lives of low-income individuals and
            families across Nigeria through a combination of direct aid and
            empowerment programs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
