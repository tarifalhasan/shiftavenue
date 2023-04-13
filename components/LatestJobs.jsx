import React, { useState } from 'react';
import ShiftAvenue from '../assets/images/ShiftAvenue-Logo-6D.png';
import { HiArrowLongRight } from 'react-icons/hi2';
import { AiFillCaretDown } from 'react-icons/ai';
import Image from 'next/image';
const LatestJobs = ({ jobs }) => {
  // const [isOpen, setIsOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(new Array(jobs.length).fill(false));
  function handleToggle(index) {
    const newIsOpen = [...isOpen];
    newIsOpen.fill(false); // close all other items
    newIsOpen[index] = true; // open the current item
    setIsOpen(newIsOpen);
  }
  return jobs.map((data, index) => (
    <div
      key={index}
      className=" bg-darken-black w-full group/item  relative  hover:bg-dark-purple  px-10 py-6 space-y-6  rounded-lg"
    >
      <div className="flex  justify-between items-start lg:block">
        <div onClick={() => handleToggle(index)}>
          <h2 className="heading2">{data.name}</h2>
          <span className="text-lg font-NeuePlakRegular text-white opacity-30">
            {data.status}
          </span>
        </div>
        <div className="lg:hidden">
          <button onClick={() => handleToggle(index)}>
            <AiFillCaretDown size={24} />
          </button>
        </div>
      </div>
      <div
        className={` ${isOpen[index] ? 'block' : 'hidden'} lg:block space-y-4`}
      >
        <p className="text-base font-NeuePlakRegular lg:text-lg">{data.des}</p>
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
  ));
};

export default LatestJobs;
