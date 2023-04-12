import PerkBenifits from '@/components/PerkBenifits';
import Header from '@/components/common/Header';
import MobileMenu from '@/components/common/MobileNavbar';
import { LatestJobsData, valus } from '@/data';
import Image from 'next/image';
import { Button } from '@material-tailwind/react';
import { HiArrowLongRight } from 'react-icons/hi2';
import LatestJobs from '@/components/LatestJobs';
const Jobs = () => (
  <section className="jobs">
    <Header opacity={60} />
    <MobileMenu opacity={60} />
    <div className="py-11 lg:py-32">
      <div className="container space-y-16">
        <div className=" space-y-3">
          <span className="title">We’re Hiring</span>
          <h2 className="heading leading-[67px]">
            Work at the <br /> heart of change
          </h2>
          <div className="heading3">Discover stories of change from A to Z</div>
          <button className="btn px-10 font-NeuePlakRegular border-0  text-xl  btn-primary">
            Search Jobs
          </button>
        </div>
        <div className="grid grid-cols-1 place-items-center lg:grid-cols-2">
          <div className=" bg-dark-purple rounded-lg px-7 py-10 space-y-5">
            <h2 className="sub-heading">Our Vision</h2>
            <p className="heading3">
              Our vision is to be the leading provider of IT strategy consulting
              services, recognized for our expertise in transformation and
              change management.
            </p>
            <p className="text-sm font-NeuePlakRegular">
              We aspire to be a trusted partner to organizations worldwide,
              helping them drive positive business outcomes through effective
              digital transformation and change management practices. By
              fostering a culture of collaboration and innovation, we aim to
              continuously improve our services and deliver unparalleled value
              to our clients.
            </p>
          </div>
          <div className="bg-[#0D1733] space-y-3 rounded-lg px-7 py-8 h-[80%]">
            <h2 className="sub-heading">Our Mission</h2>
            <p className="heading3">
              At shiftavenue, we are dedicated to empowering organizations to
              achieve sustainable digital transformation.
            </p>
            <p className="text-sm font-NeuePlakRegular">
              Our mission is to provide innovative and effective solutions that
              promote positive cultural shifts, optimize enterprise
              architecture, and enable teams to work more efficiently and
              effectively.
            </p>
          </div>
        </div>
        {/* Our Values */}
        <div className=" space-y-9">
          <div>
            <h2 className="sub-heading">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:gap-16 lg:grid-cols-2  ">
            {valus.map((data, i) => (
              <div className="flex items-center  gap-6" key={i}>
                <div>
                  <div className="w-[97px] h-[97px] flex justify-center items-center rounded-full  bg-fuchsia">
                    <Image src={data.icon} alt={data.name} />
                  </div>
                </div>
                <div>
                  <h2 className="text-[24px] font-NeuePlakRegular md:text-[34px]">
                    {data.name}
                  </h2>
                  <p className=" text-[#D5D9E6] text-base md:text-xl font-NeuePlakRegular">
                    We embrace change and continuously seek new and creative
                    ways to help our clients succeed.
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* PerkBenifits */}
        </div>
      </div>
      <PerkBenifits />

      <div className=" container py-16">
        <div className="flex justify-between items-center">
          <h2 className="heading">Latest Jobs </h2>
          <Button
            variant="text"
            className="flex border border-white h-10  !border-opacity-30 items-center gap-2"
          >
            <span className="text-white"> Read More</span>{' '}
            <HiArrowLongRight strokeWidth={2} className="h-5 text-white w-5" />
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-6 place-items-center lg:grid-cols-3">
          {LatestJobsData.map((data, i) => (
            <LatestJobs key={data.id} index={i} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Jobs;
