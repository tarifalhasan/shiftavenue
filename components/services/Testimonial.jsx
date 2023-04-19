import React, { useState } from 'react';

import '@brainhubeu/react-carousel/lib/style.css';
const Carousel = dynamic(() => import('@brainhubeu/react-carousel'), {
  ssr: false,
});

import { Dots } from '@brainhubeu/react-carousel';
import sponsar1 from '../../assets/images/services/testimonial/sponsars/1.png';
import sponsar2 from '../../assets/images/services/testimonial/sponsars/2.png';
import sponsar3 from '../../assets/images/services/testimonial/sponsars/3.png';
import sponsar4 from '../../assets/images/services/testimonial/sponsars/4.png';
import arrow_down from '../../assets/images/services/testimonial/arrow_down.png';
import dynamic from 'next/dynamic';
import Image from 'next/image';

function ServicesTestimonial() {
  const [value, setValue] = useState(1);

  const Data = [
    {
      name: 'Tarif Al Hasan',
      role: ' Director of Marketing, Newfront Insurance',
      say: ' “shiftavenue has helped us consistently improve our SEO rankings and   increase our organic traffic and revenue. Since they have joined the  team (about a year ago) we have more than doubled the amount of  revenue from organic sources.”',
      image: '/men.webp',
    },
    {
      name: 'Arif Al Hasan',
      role: ' Director of Marketing, Newfront Insurance',
      say: ' “shiftavenue has helped us consistently improve our SEO rankings and   increase our organic traffic and revenue. Since they have joined the  team (about a year ago) we have more than doubled the amount of  revenue from organic sources.”',
      image: '/men2.webp',
    },
    {
      name: 'Shakib',
      role: ' Director of Marketing, Newfront Insurance',
      say: ' “shiftavenue has helped us consistently improve our SEO rankings and   increase our organic traffic and revenue. Since they have joined the  team (about a year ago) we have more than doubled the amount of  revenue from organic sources.”',
      image: '/men3.webp',
    },
    {
      name: 'Maruf Sarkar',
      role: ' Director of Marketing, Newfront Insurance',
      say: ' “shiftavenue has helped us consistently improve our SEO rankings and   increase our organic traffic and revenue. Since they have joined the  team (about a year ago) we have more than doubled the amount of  revenue from organic sources.”',
      image: '/men4.webp',
    },
  ];

  const mappping = Data.map((data, index) => (
    <div className="py-10 ">
      <div className="bg-[#831F9D]  rounded relative  min-h-[480px] md:min-h-[390px] grid place-items-center   w-full">
        <div className=" space-y-6">
          <div>
            <Image
              className="min-w-[85px] !w-[85px] !h-[85px] min-h-[85px] object-cover rounded-full  mx-auto"
              src={data.image}
              width={88}
              height={88}
              alt={'fg'}
            />
          </div>
          <div>
            <h2 className="text-lg text-center uppercase leading-3 ">
              {data.name}
            </h2>
            <p className=" text-center   opacity-60 capitalize text-base font-NeuePlakRegular">
              Director of Marketing, Newfront Insurance
            </p>
          </div>
          <p className=" text-center lg:w-[85%] mx-auto w-full text-base md:text-xl lg:text-2xl lg:text-4 opacity-60 capitalize font-NeuePlakRegular">
            {data.say}
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
    </div>
  ));

  const thumbnails = [
    <Image alt="tarif" src={sponsar1} />,
    <Image alt="tarif" src={sponsar2} />,
    <Image alt="tarif" src={sponsar3} />,
    <Image alt="tarif" src={sponsar4} />,
  ];

  const handleChange = newValue => {
    setValue(newValue);
  };

  return (
    <div className="container py-16">
      <Carousel
        plugins={['arrows', 'infinite']}
        slides={mappping}
        value={value}
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

export default ServicesTestimonial;
