import { stat } from "fs";
import Image from "next/image";
import React from "react";

const ITEMS = [
  {
    name: "T-shirt",
    price: 6.44,
    image: "/card-item1.png",
    status: "Available in pre-order",
  },
  {
    name: "Tote bag",
    price: 6.44,
    image: "/card-item4.png",
    status: "Available in pre-order",
  },
  {
    name: "Water bottle",
    price: 6.44,
    image: "/card-item3.png",
    status: "Available in pre-order",
  },
  {
    name: "China Bag",
    price: 6.44,
    image: "/card-item5.png",
    status: "Available in pre-order",
  },
  {
    name: "T-shirt",
    price: 6.44,
    image: "/card-item1.png",
    status: "Available in pre-order",
  },
  {
    name: "Tote bag",
    price: 6.44,
    image: "/card-item4.png",
    status: "Available in pre-order",
  },
  {
    name: "Water bottle",
    price: 6.44,
    image: "/card-item3.png",
    status: "Available in pre-order",
  },
  {
    name: "China Bag",
    price: 6.44,
    image: "/card-item5.png",
    status: "Available in pre-order",
  },
];

const Items = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 justify-items-center bg-[#FFD6D6] py-20 px-20 ">
      {ITEMS.map((item, index) => (
        <div
          key={index}
          className="w-[250px] flex flex-col items-center justify-center"
        >
          <Image
            src={item.image}
            alt={item.name}
            width={500}
            height={500}
            priority={true}
            className="w-full h-[300px] object-cover"
          />
          <div className="bg-[#fff] w-full flex flex-col gap-3 items-center p-10">
            <h1 className="text-[#252B42] text-[17px] font-bold">
              {item.name}
            </h1>
            <h1 className="text-[#737373] text-[15px] font-medium">
              {item.status}
            </h1>
            <h1 className="text-[#23856D] text-[17px] font-bold">
              ${item.price}
            </h1>

            <div className="flex items-center gap-3 pt-3">
              <div className="h-5 w-5 rounded-full bg-[#23A6F0]" />
              <div className="h-5 w-5 rounded-full bg-[#000000]" />
              <div className="h-5 w-5 rounded-full bg-[#CB3322]" />
              <div className="h-5 w-5 rounded-full bg-[#FFC728]" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Items;
