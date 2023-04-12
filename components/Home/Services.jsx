import React, { useState } from 'react';
import Slider from 'react-slick';
import { ServiceIcon1, ServiceIcon2, ServiceIcon3 } from '../ui/Icons';
import { HiArrowLongRight } from 'react-icons/hi2';
import Link from 'next/link';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className=" absolute top-1/2 z-50 right-[57px]"
      style={{ ...style, display: 'block', background: 'none' }}
      onClick={onClick}
    >
      <svg
        width={15}
        height={25}
        viewBox="0 0 15 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          d="M1.22266 24L13.9373 12.4851L1.22266 1.19043"
          stroke="white"
        />
      </svg>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className=" absolute top-1/2 z-50 left-[53px]"
      style={{ ...style, display: 'block', background: 'none' }}
      onClick={onClick}
    >
      <svg
        width={15}
        height={25}
        viewBox="0 0 15 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.2"
          d="M13.7771 24L1.0625 12.4851L13.7771 1.19043"
          stroke="white"
        />
      </svg>
    </div>
  );
}
const Services = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: 'center',
    centerMode: true,
    autoPlay: true,
    autoPlaySpeed: 1000,
    beforeChange: (current, next) => setSlideIndex(next),
    cenerMode: true,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          initialSlide: 3,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const servivcesData = [
    {
      title: 'Transformation',
      title2: 'Clould',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra tellus id ullamcorper pretium.',
      icons: <ServiceIcon1 />,
    },
    {
      title: 'Foundations',
      title2: 'Clould',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra tellus id ullamcorper pretium.',
      icons: <ServiceIcon2 />,
    },
    {
      title: 'FinOps',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra tellus id ullamcorper pretium.',
      icons: <ServiceIcon3 />,
      title2: '',
    },
    {
      title: 'Transformation',
      des: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra tellus id ullamcorper pretium.',
      icons: <ServiceIcon1 />,
      title2: 'Clould',
    },
  ];

  return (
    <div className="container py-16">
      <div className=" space-y-4">
        <span className="title block text-center">Our Services</span>
        <h2 className="heading text-center">
          Strategy. Architecture. <br className="lg:hidden" /> Deep Thinking.
        </h2>
        <div className="pera  text-[14px] leading-tight w-[90%] font-NeuePlakRegular md:text-xl md:w-[70%] mx-auto">
          Our team of experts have extensive experience in enterprise
          architecture and enablement for teams, which means we can help you
          design and implement the right solutions for your organization.
        </div>
      </div>
      <div className="slider py-10 lg:max-h-[629px]">
        <Slider {...settings}>
          {servivcesData.map((data, index) => (
            <div
              key={index}
              className={`bg-light-dark rounded-md space-y-5 py-14 px-6 ${
                index === slideIndex ? 'slide slide-active' : 'slide'
              }`}
            >
              <div>{data.icons}</div>
              <div className="flex  lg:flex-col gap-4">
                <h2 className={`text-[22px] xl:text-[40px] leading-tight `}>
                  {data.title2}
                </h2>
                <h2 className="text-[22px] xl:text-[40px] leading-tight">
                  {data.title}
                </h2>
              </div>
              <div className="pera text-[#D5D9E6] leading-7 text-left">
                {data.des}
              </div>

              {index === slideIndex && (
                <div className="flex group    items-center gap-2">
                  <Link href={'/'} className="pera block">
                    Know More
                  </Link>
                  <HiArrowLongRight
                    size={20}
                    className=" mt-1 transition duration-700 ease-in-out  hidden group-hover:block"
                  />
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
