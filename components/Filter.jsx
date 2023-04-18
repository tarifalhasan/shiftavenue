import React, { useState } from 'react';
import { Select, Option, Input } from '@material-tailwind/react';

const Filter = () => {
  const [openFilter, setOpenFilter] = useState(false);
  return (
    <>
      <div className=" hidden lg:block">
        <div className="flex items-center   gap-x-5">
          <div className="  text-lg uppercase font-NeuePlakRegular opacity-50">
            Filter By:
          </div>
          <select
            id="Select service"
            className="w-full bg-[#222C4A] max-w-[191px]  font-medium  relative text-base uppercase  font-NeuePlakRegular   focus:outline-none  rounded-lg outline-none text-white py-3 px-3"
          >
            <option selected value={'sds'}>
              Category
            </option>
            <option value="100">Front end dev</option>
            <option value="200">Full Stack</option>
            <option value="300">Grapics Design</option>
          </select>
          <select
            id="Select service"
            className="w-full bg-[#222C4A] max-w-[191px]  font-medium  relative text-base uppercase  font-NeuePlakRegular   focus:outline-none  rounded-lg outline-none text-white py-3 px-3"
          >
            <option selected value={'sds'}>
              Author
            </option>
            <option value="100">Tarif Al Hasan</option>
            <option value="200">Full Stack</option>
            <option value="300">Grapics Design</option>
          </select>
          <input
            type="date"
            className="w-full bg-[#222C4A] max-w-[191px]  font-medium  relative !text-base uppercase  font-NeuePlakRegular   focus:outline-none  rounded-lg outline-none text-white py-3 px-3"
            name=""
            id=""
          />
        </div>
      </div>
      <div className="lg:hidden">
        <div
          onClick={() => setOpenFilter(!openFilter)}
          className=" flex items-center gap-2 text-lg uppercase font-NeuePlakRegular opacity-50"
        >
          Filter By:
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
        {openFilter && (
          <div className="">
            <select
              id="Select service"
              className="w-full bg-[#222C4A]   font-medium  relative text-base uppercase  font-NeuePlakRegular   focus:outline-none  rounded-lg outline-none text-white py-3 px-3"
            >
              <option selected value={'sds'}>
                Category
              </option>
              <option value="100">Front end dev</option>
              <option value="200">Full Stack</option>
              <option value="300">Grapics Design</option>
            </select>

            <div className="grid gap-2 pt-2 grid-cols-2">
              <select
                id="Select service"
                defaultValue={'tarif'}
                className="w-full bg-[#222C4A] max-w-[191px]  font-medium  relative text-base uppercase  font-NeuePlakRegular   focus:outline-none  rounded-lg outline-none text-white py-3 px-3"
              >
                <option selected value={'sds'}>
                  Author
                </option>
                <option value="100">Tarif Al Hasan</option>
                <option value="200">Full Stack</option>
                <option value="300">Grapics Design</option>
              </select>
              <input
                type="date"
                className="w-full bg-[#222C4A] max-w-[191px]  font-medium  relative !text-base uppercase  font-NeuePlakRegular   focus:outline-none  rounded-lg outline-none text-white py-3 px-3"
                name=""
                id=""
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Filter;
