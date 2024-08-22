import Image from "next/image";
import React from "react";

const Media = () => {
  return (
    <div className="w-full flex items-center justify-center my-20 px-5">
      <Image
        src="/media-bg-cover.png"
        alt="Media"
        width={500}
        height={500}
        className="w-[600px] h-[400px] object-cover"
      />
    </div>
  );
};

export default Media;
