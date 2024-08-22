import Image from "next/image";
import React from "react";
import { FaFacebook, FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const TEAMS = [
  {
    name: "Gbest Nyemo",
    position: "Founder",
    image: "/gbest2.png",
    socialMedia: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Jane Doe",
    position: "Director",
    image: "/team2.jpg",
    socialMedia: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
  {
    name: "Amarachi Nwachukwu",
    position: "Program Manager",
    image: "/team3.jpg",
    socialMedia: {
      facebook: "https://facebook.com",
      twitter: "https://twitter.com",
      instagram: "https://instagram.com",
    },
  },
];

const OurTeam = () => {
  return (
    <div className="w-full flex flex-col items-center gap-20 mb-20 px-5">
      <div className=" w-full md:w-[80%] lg:w-[60%] xl:w-[40%] flex flex-col gap-4">
        <h1 className="text-[30px] font-extrabold text-[#252B42] text-center">
          Meet Our Team
        </h1>
        <p className="text-[15px] text-center font-normal text-[#737373]">
          Our team brings together a diverse range of skills and expertise, all
          focused on creating positive change and fostering sustainable growth
          through education, skill development, and community support.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {TEAMS.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <Image
              src={member.image}
              alt={member.name}
              width={500}
              height={500}
              priority={true}
              className="w-[13em] h-[13em] object-cover rounded-full mb-4"
            />
            <h2 className="text-lg font-bold text-[#252B42]">{member.name}</h2>
            <p className="text-sm text-[#737373] font-semibold">{member.position}</p>
            <div className="flex gap-4 mt-2">
            {member.socialMedia.facebook && (
                <a
                  href={member.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="text-[#CB3322]" />
                </a>
              )}
              {member.socialMedia.twitter && (
                <a
                  href={member.socialMedia.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="text-[#CB3322]" />
                </a>
              )}
              {member.socialMedia.instagram && (
                <a
                  href={member.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-[#CB3322]" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
