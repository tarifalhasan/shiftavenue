import React, { useState } from 'react';
import ShiftAvenue from '../../assets/images/ShiftAvenue-Logo-6D.png';
import { HiArrowLongRight } from 'react-icons/hi2';

import Image from 'next/image';
import { OfferData } from '@/data';
const Offer = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 py-10 overflow-hidden">
      {OfferData.map((data, i) => (
        <div
          key={i}
          className=" bg-[#641B84]  bg-opacity-25 w-full group/item  relative  hover:opacity-100 hover:bg-[#33155D]  px-10 py-6 space-y-6  rounded-lg"
        >
          <div> {data.icon}</div>

          <div className="">
            <h2 className="heading2">{data.label}</h2>
          </div>
          <div className={`  space-y-4`}>
            <p className="text-base font-NeuePlakRegular lg:text-lg">
              {data.desc}
            </p>
            <button className="flex  group/edit  font-NeuePlakRegular !hover:bg-none items-center gap-2">
              Apply Now
              <HiArrowLongRight
                strokeWidth={2}
                className="h-5 group-hover/edit:text-fuchsia  text-white w-5"
              />
            </button>
            <div className="absolute hidden group-hover/item:block right-0 bottom-0">
              <Image src={ShiftAvenue} alt="ShiftAvenue" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Offer;
