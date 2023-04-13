import React from 'react';
import sildeImg from '../../assets/images/overview.svg';
import Image from 'next/image';
const Overview = () => {
  return (
    <div>
      <h2 className="sub-heading leading-10 py-10">
        Technology is <br /> everywhere— but value isn’t
      </h2>
      <div className=" grid grid-cols-1 2xl:gap-24 gap-16 place-items-center lg:grid-cols-2">
        <div className=" space-y-5 2xl:space-y-8">
          <div className="text-[18px] md:text-[22px] lg:text-[24px] font-NeuePlakRegular font-normal">
            With technology now critical to helping drive corporate strategy and
            ensuring its success, today’s CIO is fast becoming the new corporate
            “rock star,” as well as an advocate for change, corporate
            transformation and the realities of what new technologies can do.
          </div>
          <p className="text-[14px] md:text-[16px] lg:text-[19px] text-[#D5D9E6] font-NeuePlakRegular font-normal">
            Organizations therefore need a fundamentally different approach to
            building and managing technology and large-scale transformation—one
            better suited to the ever-changing reality of today’s business
            landscape.
          </p>
          <button className="btn border-0 px-10 font-NeuePlakRegular  text-xl  btn-primary">
            Start With Us
          </button>
        </div>
        <div>
          <Image
            className="w-full h-full object-cover"
            src={sildeImg}
            alt="sildeImg"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
