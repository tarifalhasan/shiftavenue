import Filter from '@/components/Filter';
import Header from '@/components/common/Header';
import MobileMenu from '@/components/common/MobileNavbar';
import React, { useState } from 'react';
import regtangle from '../../assets/images/contact.svg';
import Image from 'next/image';

import blogHead from '../../assets/images/blogHead.svg';
import { FiUser } from 'react-icons/fi';
import { FaRegCalendarCheck } from 'react-icons/fa';
import { RiShareLine } from 'react-icons/ri';

import Blog from '@/components/Blog';
import Footer from '@/components/common/Footer';
import { client, urlFor } from '@/client';
import Link from 'next/link';
const Blogs = ({ data }) => {
  const [openFilter, setOpenFilter] = useState(false);

  const TopBlog = data.find(
    d => d.slug.current == 'how-to-design-a-cloud-landing-zone'
  );
  const dateString = TopBlog._createdAt;
  const date = new Date(dateString);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = date.toLocaleDateString('en-US', options);

  return (
    <section className="bg-[#15203a]">
      <Header />
      <MobileMenu />
      <main className="container py-11 lg:py-28">
        <div className=" relative  ">
          <div className="flex flex-col lg:flex-row ">
            <div className="basis-[60%] ">
              <Link href={'/blogs'}>
                <span className="title">Blog</span>
              </Link>
              <h2 className="heading">
                Insights <span className=" text-fuchsia">@</span> shiftavenue
              </h2>
              <p className="heading3">
                Proprietary data, expert analysis and bold thinking for readers
                who want to achieve the extraordinary.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[70%] py-6">
            <Filter />
          </div>
          <div className=" hidden lg:block absolute z-10 right-0 top-[0%]">
            <Image src={regtangle} alt="sdf" />
          </div>
          <div className="absolute right-0 block lg:hidden">
            <Image src={blogHead} alt="tafdfsf" />
          </div>
        </div>
        <div className="flex gap-10 flex-col lg:flex-row relative z-30">
          <div className=" basis-[65%]">
            <Image
              src={urlFor(TopBlog.mainImage).url()}
              width={750}
              height={450}
              alt="realworld"
            />
            <div className=" ">
              <span className="title text-base">
                {TopBlog.categories[0].title}
              </span>
              <h2 className="sub-heading leading-normal">{TopBlog.title}</h2>
              <p className="text-base lg:text-xl leading-normal font-NeuePlakRegular lg:pb-2">
                {TopBlog.description.slice(0, 109)}
              </p>
              <hr className="w-full h-[2px] my-6 opacity-20 bg-[#707070]" />
              <div className="flex justify-between">
                <div className="flex gap-5 items-center">
                  <div className="flex items-center gap-2">
                    <FiUser className="text-fuchsia" size={25} />
                    <div className="text-xs lg:text-lg font-NeuePlakRegular text-[#F0F2F8] uppercase">
                      {TopBlog.author.name}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRegCalendarCheck className="text-fuchsia" size={25} />
                    <div className="text-xs lg:text-lg text-[#F0F2F8] uppercase">
                      {formattedDate}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <RiShareLine className="text-fuchsia" size={25} />
                  <div className="text-xs lg:text-lg text-[#F0F2F8] uppercase">
                    Share
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="sub-heading leading-[37px]">
              Recommended <br className="hidden  lg:block" /> Insights
            </h2>
            <ul className=" pt-6 flex flex-col gap-y-4">
              <li className="lg:border-b-2 bg-white bg-opacity-10 lg:bg-transparent py-3 px-2 rounded-lg lg:pb-6 border-white border-opacity-20">
                <span className="text-lg font-NeuePlakRegular text-fuchsia">
                  Cloud
                </span>
                <p className="heading3">
                  How to secure a Cloud Service Provider?
                </p>
              </li>
              <li className="lg:border-b-2 bg-white bg-opacity-10 lg:bg-transparent py-3 px-2 rounded-lg lg:pb-6 border-white border-opacity-20">
                <span className="text-lg font-NeuePlakRegular text-fuchsia">
                  Financial operation
                </span>
                <p className="heading3">
                  FinOps - how to challenge it?! My SQL Edition
                </p>
              </li>
              <li className="lg:border-b-2 bg-white bg-opacity-10 lg:bg-transparent py-3 px-2 rounded-lg lg:pb-6 border-white border-opacity-20">
                <span className="text-lg font-NeuePlakRegular text-fuchsia">
                  DB management
                </span>
                <p className="heading3">
                  What’s new with RDS in 2019? My SQL Edition
                </p>
              </li>
              <li className="lg:border-b-2 bg-white bg-opacity-10 lg:bg-transparent py-3 px-2 rounded-lg lg:pb-6 border-white border-opacity-20">
                <span className="text-lg font-NeuePlakRegular text-fuchsia">
                  Cloud
                </span>
                <p className="heading3">
                  How to secure a Cloud Service Provider?
                </p>
              </li>
              <li className="lg:border-b-2 bg-white bg-opacity-10 lg:bg-transparent py-3 px-2 rounded-lg lg:pb-6 border-white border-opacity-20">
                <span className="text-lg font-NeuePlakRegular text-fuchsia">
                  Cloud Hosting
                </span>
                <p className="heading3">How to design a Cloud Landing Zone??</p>
              </li>
            </ul>
          </div>
        </div>

        {/* All Insights */}

        <div>
          <div className="flex justify-between items-center pt-11">
            <div className="sub-heading">All Insights</div>
            <div
              onClick={() => setOpenFilter(!openFilter)}
              className="  cursor-pointer flex items-center gap-2 text-lg uppercase font-NeuePlakRegular opacity-50"
            >
              Sort By:
              <button>
                {!openFilter ? (
                  <svg
                    width={15}
                    height={15}
                    viewBox="0 0 9 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.3"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.29488 4.85205L0.0213928 0.19007L8.56836 0.19007L4.29488 4.85205Z"
                      fill="white"
                    />
                  </svg>
                ) : (
                  <svg
                    width={15}
                    height={15}
                    viewBox="0 0 9 5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.3"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.29498 0.189941L8.56848 4.85205H0.0214844L4.29498 0.189941Z"
                      fill="white"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {data.map((blog, i) => (
              <Blog key={i} data={blog} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
};
export async function getServerSideProps() {
  const query = `*[_type == "post"]{
  _id,
  title,
   author ->{
     name,
     image
   },
   description,
   mainImage,
  slug,
    categories[]->,
    _createdAt,
   
}`;
  const data = await client.fetch(query);

  return {
    props: {
      data,
    },
  };
}

export default Blogs;
