import React from 'react';
import { FiUser } from 'react-icons/fi';
import { FaRegCalendarCheck } from 'react-icons/fa';
import { RiShareLine } from 'react-icons/ri';
import Image from 'next/image';
const Blog = ({ img, category, title, description }) => {
  return (
    <div className=" basis-[65%] space-y-5">
      <Image className="w-full rounded-lg" src={img} alt="realworld" />
      <div className=" ">
        <div className="text-lg uppercase  font-NeuePlakRegular opacity-30">
          {category}
        </div>
        <h2 className="sub-heading leading-[36px] opacity-80 py-4">{title}</h2>
        <p className="text-lg lg:text-2xl leading-normal font-NeuePlakRegular lg:pb-2">
          {description}
        </p>

        <div className="flex justify-between pb-4">
          <div className="flex gap-5 items-center">
            <div className="flex items-center gap-2">
              <FiUser className="text-fuchsia" size={25} />
              <div className="text-xs lg:text-lg text-[#F0F2F8] uppercase">
                shiftavenue
              </div>
            </div>
            <div className="flex items-center gap-2">
              <FaRegCalendarCheck className="text-fuchsia" size={25} />
              <div className="text-xs lg:text-lg text-[#F0F2F8] uppercase">
                Feb 23, 2023
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <RiShareLine className="text-fuchsia" size={25} />
            <div className="text-xs lg:text-lg text-[#F0F2F8] uppercase">
              Share
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
