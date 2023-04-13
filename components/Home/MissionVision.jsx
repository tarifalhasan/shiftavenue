import React from 'react';
import mission from '../../assets/images/mission.png';
import Image from 'next/image';
import Link from 'next/link';
const MissionVision = () => {
  return (
    <div className=" hidden lg:block pb-16">
      <div className="grid  grid-cols-1 gap-9 lg:grid-cols-2">
        <div>
          <Image className="w-full h-full" src={mission} alt="mission" />
        </div>
        <div className=" w-full space-y-3 lg:w-[90%] 2xl:w-[60%] ">
          <div>
            <span className="title uppercase">jobs</span>
            <h2 className="sub-heading">Mission and Vision</h2>
          </div>
          <p className="text text-sm md:text-base lg:text-xl  font-NeuePlakRegular font-normal text-[#D5D9E6]">
            Our mission is to provide innovative and effective solutions that
            promote positive cultural shifts, optimize enterprise architecture,
            and enable teams to work more efficiently and effectively.
          </p>
          <p className="text text-sm md:text-base lg:text-xl  font-NeuePlakRegular font-normal text-[#D5D9E6]">
            Our vision is to be the leading provider of IT strategy consulting
            services, recognized for our expertise in transformation and change
            management.
          </p>
          <div className=" space-y-2">
            <p className="text text-sm md:text-base lg:text-xl  font-NeuePlakRegular font-normal text-[#B9C2DB]">
              We are currently in need of the following:
            </p>
            <div className="bg-[#405180]  bg-opacity-20 group flex justify-between py-3 px-5  rounded-lg items-center ">
              <p className="text-sm lg:text-xl  font-NeuePlakRegular">
                Enterprise Architect
              </p>
              <div className=" hidden cursor-pointer group-hover:block">
                <svg
                  width={30}
                  height={18}
                  viewBox="0 0 30 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.4046 1.9826L21.255 1.23999L28.4199 9.34685L21.2278 16.4181L20.4318 15.6181L26.8653 9.2927L20.4046 1.9826Z"
                    fill="#E80D66"
                    stroke="#E31E67"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M26.8255 9.76856H0.790039V8.64337H26.8255V9.76856Z"
                    fill="#E80D66"
                    stroke="#E31E67"
                  />
                </svg>
              </div>
            </div>
            <div className="bg-[#405180]  bg-opacity-20 group flex justify-between py-3 px-5  rounded-lg items-center ">
              <p className="text-sm lg:text-xl  font-NeuePlakRegular">
                Principal Cloud Consultant
              </p>
              <div className=" hidden cursor-pointer group-hover:block">
                <svg
                  width={30}
                  height={18}
                  viewBox="0 0 30 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M20.4046 1.9826L21.255 1.23999L28.4199 9.34685L21.2278 16.4181L20.4318 15.6181L26.8653 9.2927L20.4046 1.9826Z"
                    fill="#E80D66"
                    stroke="#E31E67"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M26.8255 9.76856H0.790039V8.64337H26.8255V9.76856Z"
                    fill="#E80D66"
                    stroke="#E31E67"
                  />
                </svg>
              </div>
            </div>
            <Link href={'/jobs'}>
              <span className="title py-4 block uppercase">More jobs</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
