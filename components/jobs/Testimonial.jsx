import React, { useState } from 'react';

import '@brainhubeu/react-carousel/lib/style.css';
import client1 from '../../assets/images/jobs/client/1.png';
import { Dots } from '@brainhubeu/react-carousel';

import arrow_down from '../../assets/images/services/testimonial/arrow_down.png';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Carousel = dynamic(() => import('@brainhubeu/react-carousel'), {
  ssr: false,
});

// use the Carousel component as normal

function JobsTestimonial() {
  const [value, setValue] = useState(0);

  const slides = [
    <div className="py-10">
      <div className="bg-[#831F9D] rounded relative  min-h-[290px] grid place-items-center   w-full">
        <div className=" space-y-6">
          <p className=" text-center lg:w-[85%] mx-auto w-full text-base md:text-xl lg:text-2xl lg:text-4 opacity-60 capitalize font-NeuePlakRegular">
            “shiftavenue has helped us consistently improve our SEO rankings and
            increase our organic traffic and revenue. Since they have joined the
            team (about a year ago) we have more than doubled the amount of
            revenue from organic sources.”
          </p>
        </div>
        <div className=" absolute -top-[4%]">
          <svg
            width="61"
            height="41"
            viewBox="0 0 61 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60.424 0.975989H43.528L29.8 40.576H51.976L60.424 0.975989ZM30.68 0.975989H13.784L0.056 40.576H22.232L30.68 0.975989Z"
              fill="white"
            />
          </svg>
        </div>

        <div className=" absolute bottom-[-4%]">
          <Image src={arrow_down} alt="asas" />
        </div>
      </div>
    </div>,
    <div className="py-10">
      <div className="bg-[#831F9D] rounded relative  min-h-[290px] grid place-items-center   w-full">
        <div className=" space-y-6">
          <p className=" text-center lg:w-[85%] mx-auto w-full text-base md:text-xl lg:text-2xl lg:text-4 opacity-60 capitalize font-NeuePlakRegular">
            “shiftavenue has helped us consistently improve our SEO rankings and
            increase our organic traffic and revenue. Since they have joined the
            team (about a year ago) we have more than doubled the amount of
            revenue from organic sources.”
          </p>
        </div>
        <div className=" absolute -top-[4%]">
          <svg
            width="61"
            height="41"
            viewBox="0 0 61 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60.424 0.975989H43.528L29.8 40.576H51.976L60.424 0.975989ZM30.68 0.975989H13.784L0.056 40.576H22.232L30.68 0.975989Z"
              fill="white"
            />
          </svg>
        </div>

        <div className=" absolute bottom-[-4%]">
          <Image src={arrow_down} alt="asas" />
        </div>
      </div>
    </div>,
    <div className="py-10">
      <div className="bg-[#831F9D] rounded relative  min-h-[290px] grid place-items-center   w-full">
        <div className=" space-y-6">
          <p className=" text-center lg:w-[85%] mx-auto w-full text-base md:text-xl lg:text-2xl lg:text-4 opacity-60 capitalize font-NeuePlakRegular">
            “shiftavenue has helped us consistently improve our SEO rankings and
            increase our organic traffic and revenue. Since they have joined the
            team (about a year ago) we have more than doubled the amount of
            revenue from organic sources.”
          </p>
        </div>
        <div className=" absolute -top-[4%]">
          <svg
            width="61"
            height="41"
            viewBox="0 0 61 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60.424 0.975989H43.528L29.8 40.576H51.976L60.424 0.975989ZM30.68 0.975989H13.784L0.056 40.576H22.232L30.68 0.975989Z"
              fill="white"
            />
          </svg>
        </div>

        <div className=" absolute bottom-[-4%]">
          <Image src={arrow_down} alt="asas" />
        </div>
      </div>
    </div>,
    <div className="py-10">
      <div className="bg-[#831F9D] rounded relative  min-h-[290px] grid place-items-center   w-full">
        <div className=" space-y-6">
          <p className=" text-center lg:w-[85%] mx-auto w-full text-base md:text-xl lg:text-2xl lg:text-4 opacity-60 capitalize font-NeuePlakRegular">
            “shiftavenue has helped us consistently improve our SEO rankings and
            increase our organic traffic and revenue. Since they have joined the
            team (about a year ago) we have more than doubled the amount of
            revenue from organic sources.”
          </p>
        </div>
        <div className=" absolute -top-[4%]">
          <svg
            width="61"
            height="41"
            viewBox="0 0 61 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M60.424 0.975989H43.528L29.8 40.576H51.976L60.424 0.975989ZM30.68 0.975989H13.784L0.056 40.576H22.232L30.68 0.975989Z"
              fill="white"
            />
          </svg>
        </div>

        <div className=" absolute bottom-[-4%]">
          <Image src={arrow_down} alt="asas" />
        </div>
      </div>
    </div>,
  ];

  const thumbnails = [
    <Image
      className="md:w-[60px] object-cover md:h-[60px] rounded-full"
      alt="tarif"
      src={client1}
    />,
    <Image
      className="md:w-[60px] md:h-[60px] rounded-full"
      alt="tarif"
      src={client1}
    />,
    <Image
      className="md:w-[60px] md:h-[60px] rounded-full"
      alt="tarif"
      src={client1}
    />,
    <Image
      className="md:w-[60px] md:h-[60px] rounded-full"
      alt="tarif"
      src={client1}
    />,
  ];

  const handleChange = newValue => {
    setValue(newValue);
  };

  return (
    <div className="container py-16">
      <Carousel
        plugins={['infinite']}
        animationSpeed={1000}
        value={value}
        slides={slides}
        onChange={handleChange}
      />
      <Dots
        number={thumbnails.length}
        thumbnails={thumbnails}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default JobsTestimonial;
