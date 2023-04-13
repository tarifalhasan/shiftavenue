import React from 'react';
import mission from '../../assets/images/sales.png';
import Image from 'next/image';
import Link from 'next/link';
const OnSale = () => {
  return (
    <div className="   relative  lg:block pb-16">
      <div className="grid  grid-cols-1 place-items-center gap-9 lg:grid-cols-2">
        <div className=" order-last">
          <Image src={mission} alt="mission" />
        </div>
        <div className="  px-8 w-full space-y-3 lg:w-[90%] 2xl:w-[60%] ">
          <div>
            <h2 className="sub-heading">Our Sales & Pre-Sales Team</h2>
          </div>
          <p className="text text-sm md:text-base lg:text-xl  font-NeuePlakRegular font-normal text-[#D5D9E6]">
            With technology now critical to helping drive corporate strategy and
            ensuring its success, today’s CIO is fast becoming the new corporate
            “rock star,” as well as an advocate for change, corporate
            transformation and the realities of what new technologies can do.
          </p>

          <div className="grid  lg:grid-cols-2">
            <div>
              <h1>100%</h1>
              <span className=" uppercase !leading-[17px] text-base text-fuchsia font-NeuePlakRegular md:text-xl lg:text-xl">
                Satisfactory <br className="hidden md:block" /> Level
              </span>
            </div>
            <div>
              <h1>150+</h1>
              <span className=" uppercase !leading-[17px] text-base text-fuchsia font-NeuePlakRegular md:text-xl lg:text-xl">
                successful <br className="hidden md:block" /> projects
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" absolute left-0 top-0">
        <Image
          src={'/ShiftAnenueServices.png'}
          width={600}
          height={200}
          alt="44"
        />
      </div>
    </div>
  );
};

export default OnSale;
