import AboutUs from "@/components/HomePage/AboutUs";
import Hero from "@/components/HomePage/Hero";
import MakingTheDevil from "@/components/HomePage/MakingTheDevil";
import Mission from "@/components/HomePage/Mission";
import OurPrograms from "@/components/HomePage/OurPrograms";
import PartnerWithUs from "@/components/HomePage/PartnerWithUs";
import Support from "@/components/HomePage/Support";
import Testimonies from "@/components/HomePage/Testimonies";
import WhatWeDo from "@/components/HomePage/WhatWeDo";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Mission/>
      <WhatWeDo/>
      <OurPrograms/>
      <AboutUs/>
      <PartnerWithUs/>
      <MakingTheDevil/>
      <Testimonies/>
      <Support/>
    </div>
  );
}
