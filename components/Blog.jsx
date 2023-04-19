import React from 'react';
import { FiUser } from 'react-icons/fi';
import { FaRegCalendarCheck } from 'react-icons/fa';
import { RiShareLine } from 'react-icons/ri';
import { urlFor } from '@/client';
import Image from 'next/image';
import Link from 'next/link';
const Blog = ({ data }) => {
  const dateString = data._createdAt;
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <div className=" basis-[65%] space-y-5">
      <Link href={`blogs/${data.slug.current}`} className="">
        <Image
          className="w-full object-cover min-h-[250px] max-h-[250px] rounded-lg"
          src={urlFor(data.mainImage).url()}
          alt={data.title}
          width={350}
          height={250}
        />
      </Link>
      <div className=" ">
        <div className="text-xs md:text-base uppercase  font-NeuePlakRegular opacity-30">
          {data.categories[0].title}
        </div>
        <h2 className=" text-2xl md:text-3xl font-NeuePlakRegular py-4">
          {data.title}
        </h2>

        <div className="flex justify-between pb-4">
          <div className="flex gap-5  items-center">
            <div className="flex items-center gap-2">
              <FiUser className="text-fuchsia" size={25} />
              <div className="text-[10px] font-NeuePlakRegular lg:text-base opacity-80 text-[#F0F2F8] uppercase">
                {data.author.name}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaRegCalendarCheck className="text-fuchsia" size={25} />
            <div className="text-[10px]  opacity-80 font-NeuePlakRegular lg:text-base text-[#F0F2F8] uppercase">
              {formattedDate}
            </div>
          </div>
          <a href="/" className="flex items-center gap-2">
            <RiShareLine className="text-fuchsia" size={25} />
            <div className="text-[10px]  opacity-80 font-NeuePlakRegular lg:text-base text-[#F0F2F8] uppercase">
              Share
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
