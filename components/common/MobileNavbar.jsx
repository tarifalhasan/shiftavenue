import React, { useState } from 'react';
import Link from 'next/link';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import Image from 'next/image';
import { TaCross } from '../ui/Icons';
import { CiDark } from 'react-icons/ci';
import { MdLightMode } from 'react-icons/md';
import { Switch } from '@material-tailwind/react';
const MobileMenu = ({ opacity }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(true);
  const toggleDrawer = () => {
    setIsOpen(prevState => !prevState);
  };

  return (
    <div
      className={`w-full sticky top-0 ${opacity} z-[9999]  lg:hidden bg-[#030303]`}
    >
      <div className="flex justify-between px-4 py-4">
        <div className="flex self-center">
          <Image src={'/Logo.png'} alt="logo" width={185} height={55} />
        </div>
        <div className="flex gap-6">
          <span
            className="flex self-center cursor-pointer"
            onClick={toggleDrawer}
          >
            <svg
              width={25}
              height={18}
              viewBox="0 0 25 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.97168 9.11499H22.0635H3.97168Z"
                stroke="#E31E67"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.6228 1.53613H17.8512H7.6228Z"
                stroke="#E31E67"
                strokeWidth={2}
                strokeLinecap="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.682129 16.4639H24.792H0.682129Z"
                stroke="#E31E67"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        style={{
          background: '#831F9D',
          backdropFilter: 'blur(4px)',
        }}
      >
        <div className="py-7 h-full relative ">
          <div className="mb-5 px-4 flex justify-between items-center">
            <div className="flex gap-4">
              <span>EN</span>
              <span className=" opacity-40">GR</span>
            </div>
            <div onClick={toggleDrawer}>
              <TaCross />
            </div>
          </div>
          <div className="flex flex-col gap-3 mb-5">
            <Link
              href={'/services'}
              className=" border-white border-opacity-10 border-l-0 border-r-0"
            >
              <span className="nav-link px-4">Services</span>
            </Link>
            <Link
              className="border-t border-white border-opacity-10 border-l-0 border-r-0"
              href={'/jobs'}
            >
              <span className="nav-link px-4">Jobs</span>
            </Link>
            <Link
              className="border-t border-white border-opacity-10 border-l-0 border-r-0"
              href={'/blogs'}
            >
              <span className="nav-link px-4">Blog</span>
            </Link>
            <Link
              className="border-t border-white border-opacity-10 border-l-0 border-r-0"
              href={'/about'}
            >
              <span className="nav-link px-4">About</span>
            </Link>
            <Link
              className="border-t border-white border-opacity-10 border-l-0 border-r-0"
              href={'/contact'}
            >
              <span className="nav-link px-4">Contact</span>
            </Link>
          </div>
          <div className=" absolute z-50 px-4 pb-8 bottom-0 ">
            <div className="flex items-center gap-4">
              <MdLightMode size={20} className={`opacity-50`} />
              <Switch
                onChange={() => setTheme(!theme)}
                id="pink"
                color="pink"
                defaultChecked
              />
              <CiDark size={20} />
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
