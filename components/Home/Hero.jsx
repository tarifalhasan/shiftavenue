import React from 'react';
import sponsrs from '../../assets/images/sponsar.png';
import Image from 'next/image';
const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div id="home" className="relative  ">
      <div className="flex h-full justify-center  min-h-[855px] lg:min-h-[1079px] !z-50 items-center  container ">
        <div className=" text-center relative ">
          <div className=" text-white space-y-5 ">
            <h1 className="">
              Transformation. <br className="lg:hidden" /> Digitalization.
            </h1>
            <div className=" w-[95%] md:w-[80%] pb-6 pera m-auto">
              We are a leading provider of IT strategy consulting especially
              focused on change and transformation management and
              digitalisation.
            </div>
            <button className="btn px-10 font-NeuePlakRegular  text-xl  btn-primary">
              Start With Us
            </button>
          </div>
        </div>
        <div className=" px-5 pb-5 absolute bottom-0">
          <Image src={sponsrs} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
