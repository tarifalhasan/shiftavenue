import React from 'react';
import Slider from 'react-slick';

import { WhitepapersData, testimonialData } from '@/data';
import { Button } from '@material-tailwind/react';
import { HiArrowLongRight } from 'react-icons/hi2';
import Image from 'next/image';

const HighLighting = ({ bg }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    appendDots: dots => (
      <div className="tarif_slider">
        <ul
          className="slider_dots_tarif !top-7"
          style={{ margin: '0px', top: '10px' }}
        >
          {dots}
        </ul>
      </div>
    ),
    slidesToScroll: 1,
  };
  return (
    <div className={` relative bg-${bg}`}>
      <div className=" py-20   ">
        <Slider className="container" {...settings}>
          {WhitepapersData.map((data, i) => (
            <div key={i} className=" space-y-3">
              <div className="flex justify-between items-center">
                <div>
                  <span className="title">Whitepapers</span>
                  <h2 className="sub-heading">Highlights</h2>
                </div>
                <Button
                  variant="text"
                  className="flex border border-white h-10  !border-opacity-30 items-center gap-2"
                >
                  <span className="text-white"> All Whitepapers</span>
                  <HiArrowLongRight
                    strokeWidth={2}
                    className="h-5 text-white w-5"
                  />
                </Button>
              </div>
              <div className="grid pb-15 grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <Image
                    src={data.img}
                    className="w-full h-full"
                    alt="blogImg"
                    width={668}
                    height={615}
                  />
                </div>
                <div className=" relative space-y-6">
                  <div>
                    <h2 className="sub-heading leading-[37px]">{data.label}</h2>
                    <small className="text-lg pt-2 block md:text-base text-white opacity-40 font-NeuePlakRegular">
                      {data.date}
                    </small>
                  </div>
                  <p className="text text-sm md:text-base lg:text-xl  font-NeuePlakRegular font-normal text-[#D5D9E6]">
                    {data.desc}
                  </p>
                  <div className="  lg:absolute top-[80%] ">
                    <Button
                      variant="text"
                      className="flex text-base capitalize font-NeuePlakRegular h-10  group !border-opacity-30 items-center gap-2"
                    >
                      <span className="text-white"> Read More</span>
                      <HiArrowLongRight
                        strokeWidth={2}
                        className="h-5 group-hover:block hidden  text-fuchsia w-5"
                      />
                    </Button>
                  </div>
                  <div className="h-[1px] absolute bottom-0 w-full bg-white opacity-25"></div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-6 py-10">
                <div className="bg-white bg-opacity-10 p-4 rounded-md hover:bg-opacity-20">
                  <h2 className="text-lg lg:text-[28px] md:text-[22px]">
                    How to Setup a Logi Analytics Multi-Tenant Environment
                  </h2>
                  <small className="text-lg pt-2 block md:text-base text-white opacity-40 font-NeuePlakRegular">
                    {data.date}
                  </small>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-md hover:bg-opacity-20">
                  <h2 className="text-lg lg:text-[28px] md:text-[22px]">
                    Sed viverra tellus id ullamcorper pretium. Lorem ipsum dolor
                  </h2>
                  <small className="text-lg pt-2 block md:text-base text-white opacity-40 font-NeuePlakRegular">
                    {data.date}
                  </small>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HighLighting;
