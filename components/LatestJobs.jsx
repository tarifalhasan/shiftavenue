import React, { useState } from 'react';
import ShiftAvenue from '../assets/images/ShiftAvenue-Logo-6D.png';
import { HiArrowLongRight } from 'react-icons/hi2';
import { AiFillCaretDown } from 'react-icons/ai';
import Image from 'next/image';
const LatestJobs = ({ index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className=" bg-darken-black w-full group/item  relative  hover:bg-dark-purple  px-10 py-6 space-y-6  rounded-lg">
      <div className="flex  justify-between items-start lg:block">
        <div>
          <h2 className="heading2">Enterprise Architect</h2>
          <span className="text-lg font-NeuePlakRegular text-white opacity-30">
            Full Time
          </span>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => {
              setOpenIndex(openIndex === index ? -1 : index);
              setIsOpen(!isOpen);
            }}
          >
            <AiFillCaretDown size={24} />
          </button>
        </div>
      </div>
      <div
        className={` ${
          isOpen && index === openIndex ? 'block' : 'hidden'
        } lg:block space-y-4`}
      >
        <p className="text-base font-NeuePlakRegular lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra
          tellus id ullamcorper pretium.
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
  );
};

export default LatestJobs;
