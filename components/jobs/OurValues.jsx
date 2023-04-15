import React from 'react';
import Image from 'next/image';
import { valus } from '@/data';
const OurValues = () => {
  return (
    <div className=" space-y-9">
      <div>
        <h2 className="sub-heading">Our Values</h2>
      </div>
      <div className="grid grid-cols-1 gap-12 lg:gap-16 lg:grid-cols-2  ">
        {valus.map((data, i) => (
          <div className="flex items-center  gap-6" key={i}>
            <div>
              <div className="w-[97px] h-[97px] flex justify-center items-center rounded-full  bg-fuchsia">
                <Image src={data.icon} alt={data.name} />
              </div>
            </div>
            <div>
              <h2 className="text-[24px] font-NeuePlakRegular md:text-[34px]">
                {data.name}
              </h2>
              <p className=" text-[#D5D9E6] text-base md:text-xl font-NeuePlakRegular">
                We embrace change and continuously seek new and creative ways to
                help our clients succeed.
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* PerkBenifits */}
    </div>
  );
};

export default OurValues;
