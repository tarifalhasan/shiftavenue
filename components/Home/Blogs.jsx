import React from 'react';
import { Button } from '@material-tailwind/react';
import { HiArrowLongRight } from 'react-icons/hi2';
import Image from 'next/image';
import blogImg from '../../assets/images/blog.png';
import { blogsData } from '@/data';
const Blogs = () => {
  return (
    <div className=" container pb-16">
      <div>
        <div className=" space-y-9">
          <div className="flex justify-between items-center">
            <div>
              <span className="title">BLOG</span>
              <h2 className="sub-heading">In The Media</h2>
            </div>
            <Button
              variant="text"
              className="flex border border-white h-10  !border-opacity-30 items-center gap-2"
            >
              <span className="text-white"> Read More</span>
              <HiArrowLongRight
                strokeWidth={2}
                className="h-5 text-white w-5"
              />
            </Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <Image src={blogImg} className="w-full h-full" alt="blogImg" />
            </div>
            <div className=" relative space-y-6">
              <div>
                <h2 className="sub-heading leading-[37px]">
                  How to Setup a Logi Analytics Multi-Tenant Environment
                </h2>
                <small className="text-lg pt-2 block md:text-base text-white opacity-25 font-NeuePlakRegular">
                  Feb 25, 2023
                </small>
              </div>
              <p className="text text-sm md:text-base lg:text-xl  font-NeuePlakRegular font-normal text-[#D5D9E6]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                viverra tellus id ullamcorper pretium. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Sed viverra tellus id
                ullamcorper pretium.
              </p>
              <div className="  absolute top-[80%] ">
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

          <div className="grid  sr-only md:not-sr-only lg:grid-cols-3 gap-6 ">
            {blogsData.slice(0, 3).map((blog, i) => (
              <div key={i} className=" space-y-5">
                <Image alt={blog.title} className="rounded-lg" src={blog.img} />
                <div>
                  <h2 className="text-2xl  font-normal">{blog.title}</h2>
                  <span className="text-lg opacity-25">{blog.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
