import React from 'react';
import Slider from 'react-slick';
import { Avatar } from '@material-tailwind/react';
import { testimonialData } from '@/data';
import Image from 'next/image';
import tarifImg from '../../assets/images/tarif.png';
import tarifImgMobile from '../../assets/images/tarif_mobile.png';
const Testimonial = () => {
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
          style={{ margin: '0px', display: 'flex' }}
        >
          {dots}
        </ul>
      </div>
    ),
    slidesToScroll: 1,
  };
  return (
    <div className="bg-[#831f9d] overflow-hidden ">
      <div className=" py-20 relative  ">
        <Slider className="container" {...settings}>
          {testimonialData.map((data, i) => (
            <div key={i}>
              <div className=" space-y-5">
                <div className=" space-y-4">
                  <span className="text-sm uppercase md:text-base lg:text-lg font-NeuePlakRegular">
                    Our clients say
                  </span>
                  <div className="flex items-center gap-3">
                    <svg
                      width={61}
                      height={41}
                      viewBox="0 0 61 41"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M60.424 0.975989H43.528L29.8 40.576H51.976L60.424 0.975989ZM30.68 0.975989H13.784L0.056 40.576H22.232L30.68 0.975989Z"
                        fill="white"
                      />
                    </svg>
                    <div className="h-[1px] w-full bg-white opacity-25"></div>
                  </div>
                </div>
                <p className="lg:text-3xl text-[#EDEDED]  font-normal md:text-2xl text-xl font-NeuePlakRegular ">
                  {data.say}
                </p>
                <div className="flex gap-y-7 flex-col lg:flex-row  lg:justify-between pb-7 lg:items-center">
                  <div className="flex items-center gap-5">
                    <Avatar
                      src={data.img}
                      alt="avatar"
                      size="lg"
                      variant="circular"
                    />
                    <div>
                      <div className="text-base md:text-lg font-NeuePlakRegular uppercase lg:text-xl">
                        {data.name}
                      </div>
                      <span className="lg:text-lg text-base font-NeuePlakRegular font-light opacity-70">
                        {data.bio}
                      </span>
                    </div>
                  </div>
                  <div className="h-[1px] lg:hidden w-full bg-white opacity-30"></div>
                  <div>
                    <Image
                      src={data.brandLogo}
                      width={200}
                      height={45}
                      alt={data.name}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className=" hidden lg:block absolute bottom-0 right-0">
          <Image
            className="w-auto max-w-[910px] h-full object-contain"
            src={tarifImg}
            alt="tarifImg"
          />
        </div>
        <div className=" lg:hidden absolute bottom-0 right-0">
          <Image
            className="w-auto max-w-[910px] h-full object-contain"
            src={tarifImgMobile}
            alt="tarifImg"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
