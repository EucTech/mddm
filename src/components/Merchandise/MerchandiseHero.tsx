import Image from "next/image";
import React from "react";

const MerchandiseHero = () => {
  return (
    <div className="w-full flex lg:flex-row flex-col items-center justify-between gap-10 mt-20 mb-28 px-[30px] sm:px-[50px] lg:px-[100px]">

      <div>
        <Image
          src="/card-item1.png"
          alt="card-image"
          width={500}
          height={500}
          className="w-[500px] lg:w-[26em] lg:h-[30em] "
        />
      </div>

      <div className="w-full lg:w-[50%] lg:h-[30em] flex flex-col gap-5 items-center">
          <Image
            src="/card-item2.png"
            alt="card-image"
            width={500}
            height={500}
            className="w-[500px] lg:w-full lg:h-[15em] object-cover"
          />

        <div className="w-full flex lg:flex-row flex-col items-center justify-between gap-5 lg:overflow-hidden">
          <Image
            src="/card-item3.png"
            alt="card-image"
            width={500}
            height={500}
            className=" w-[500px] lg:w-[300px] object-cover"
          />
          <Image
            src="/card-item4.png"
            alt="card-image"
            width={500}
            height={500}
            className=" w-[500px] lg:w-[300px]"
          />
        </div>
      </div>
    </div>
  );
};

export default MerchandiseHero;
