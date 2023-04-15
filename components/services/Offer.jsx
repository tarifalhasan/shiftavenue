import React, { useState } from 'react';

import ShiftAvenue from '../../assets/images/ShiftAvenue-Logo-6D.png';
import { HiArrowLongRight } from 'react-icons/hi2';
import Slider from 'react-slick';

import Image from 'next/image';
import { OfferData } from '@/data';

const Item = () =>
  OfferData.map((data, i) => (
    <div
      key={i}
      className=" bg-[#641B84]  bg-opacity-25 w-full group/item  relative  hover:opacity-100 hover:bg-[#33155D]  px-10 py-6 space-y-6  rounded-lg"
    >
      <div> {data.icon}</div>

      <div className="">
        <h2 className="heading2">{data.label}</h2>
      </div>
      <div className={`  space-y-4`}>
        <p className="text-base font-NeuePlakRegular lg:text-lg">{data.desc}</p>
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

console.log(Item);

const Offer = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrow: false,
    slidesToScroll: 1,
    className: 'center2',
    centerMode: true,
    autoPlay: true,
    autoPlaySpeed: 1000,
    beforeChange: (current, next) => setSlideIndex(next),
    cenerMode: true,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div>
      <div className="hidden xl:grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-2 gap-y-12 xl:gap-5 2xl:gap-10 py-10 overflow-hidden">
        <Item />
      </div>
      <div className="lg:hidden">
        <Slider {...settings} className=" ">
          {OfferData.map((data, i) => (
            <div
              key={i}
              className={`  bg-light-dark   bg-opacity-25  group/item  relative  hover:opacity-100   px-10 py-6 space-y-6  rounded-lg ${
                i === slideIndex ? 'slide slide-active' : 'slide'
              }`}
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
        </Slider>
      </div>
    </div>
  );
};

export default Offer;
