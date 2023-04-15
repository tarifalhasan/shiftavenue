import React from 'react';
import { Button } from '@material-tailwind/react';
import { HiArrowLongRight } from 'react-icons/hi2';
import { LatestJobsData } from '@/data';
const LatestJobs = () => {
  return (
    <div className=" container pt-16">
      <div className="flex justify-between pb-10 lg:pb-5 items-center">
        <h2 className="heading">Latest Jobs </h2>
        <Button
          variant="text"
          className="flex border border-white h-10  !border-opacity-30 items-center gap-2"
        >
          <span className="text-white"> Read More</span>{' '}
          <HiArrowLongRight strokeWidth={2} className="h-5 text-white w-5" />
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-6  place-items-center lg:grid-cols-3">
        <LatestJobs jobs={LatestJobsData} />
      </div>
    </div>
  );
};

export default LatestJobs;
