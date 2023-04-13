import Link from 'next/link';
import React, { useState } from 'react';
import { FaFacebookF, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { CiDark } from 'react-icons/ci';
import { MdLightMode } from 'react-icons/md';
import { Switch } from '@material-tailwind/react';
const Footer = () => {
  const [theme, setTheme] = useState(true);

  return (
    <footer className=" bg-footer-bg-large overflow-hidden relative w-full overflow-hidden   bg-no-repeat bg-center ">
      <div className=" relative">
        <div className="container lg:pt-48 grid gap-y-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <h2 className="text-[22px] lg:text-[24px] font-NeuePlakRegular  font-normal ">
              Our Services
            </h2>
            <ul className="pt-5 lg:pt-7 space-y-2">
              <li className="text-base lg:text-xl font-NeuePlakRegular font-normal">
                <Link href={'CyberSecurity Assessment'}>
                  CyberSecurity Assessment
                </Link>
              </li>
              <li className="text-base lg:text-xl font-NeuePlakRegular font-normal">
                <Link href={'CyberSecurity Assessment'}>
                  Cloud Transformation
                </Link>
              </li>
              <li className="text-base lg:text-xl font-NeuePlakRegular font-normal">
                <Link href={'CyberSecurity Assessment'}>Cloud Foundations</Link>
              </li>
              <li className="text-base lg:text-xl font-NeuePlakRegular font-normal">
                <Link href={'CyberSecurity Assessment'}>FinOps</Link>
              </li>
              <li className="text-base lg:text-xl font-NeuePlakRegular font-normal">
                <Link href={'CyberSecurity Assessment'}>
                  Modern Dev Culture
                </Link>
              </li>
              <li className="text-base lg:text-xl font-NeuePlakRegular font-normal">
                <Link href={'CyberSecurity Assessment'}>DevOps / SRE </Link>
              </li>
              <li className="text-base lg:text-xl font-NeuePlakRegular font-normal">
                <Link href={'CyberSecurity Assessment'}>
                  Plaform Engineering Team
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-[22px] lg:text-[24px] font-NeuePlakRegular  font-normal ">
              About Us
            </h2>
            <ul className="pt-5 lg:pt-7 space-y-2">
              <li className="text-base lg:text-xl font-NeuePlakRegular font-normal">
                <Link href={'/about'}>About Us</Link>
              </li>
              <li className="text-base lg:text-xl font-NeuePlakRegular font-normal">
                <Link href={'/services'}>Services</Link>
              </li>
              <li className="text-base lg:text-xl font-NeuePlakRegular font-normal">
                <Link href={'/blogs'}>Blog</Link>
              </li>
              <li className="text-base lg:text-xl font-NeuePlakRegular font-normal">
                <Link href={'.jobs'}>Jobs</Link>
              </li>
              <li className="text-base lg:text-xl font-NeuePlakRegular font-normal">
                <Link href={'/contact'}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-[22px] lg:text-[24px] font-NeuePlakRegular  font-normal ">
              Contact Us
            </h2>
            <ul className="pt-5 lg:pt-7 space-y-2">
              <li className="text-base lg:text-xl  font-normal">
                <Link href={'CyberSecurity Assessment'}>
                  <h2>+1 (972) 12345678</h2>
                </Link>
              </li>
              <li className="text-base lg:text-xl font-NeuePlakRegular font-normal">
                <Link href={'CyberSecurity Assessment'}>
                  <h2> hello@shiftavenue.com</h2>
                </Link>
              </li>
              <li className="flex pt-6 lg:pt-16 items-center gap-5">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF size={24} />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaTwitter size={24} />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaGithub size={24} />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin size={24} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" container flex justify-center pt-10 lg:pt-52   w-full">
          <div className="  ">
            <div className="flex items-center justify-center gap-4">
              <MdLightMode size={20} className={`opacity-50`} />
              <Switch
                onChange={() => setTheme(!theme)}
                id="pink"
                color="pink"
                defaultChecked
              />
              <CiDark size={20} />
            </div>
            <div>
              <div className="pt-5 lg:pt-7 flex-col lg:flex-row  flex items-center">
                <div className="text-base   lg:text-xl border-r pr-2 pl-2 b font-NeuePlakRegular font-normal">
                  <Link href={'/'}>Copyright © 2023 shiftavenue</Link>
                </div>
                <div className="flex ">
                  <div className="text-base lg:text-xl border-r pr-2 pl-2 font-NeuePlakRegular font-normal">
                    <Link href={'CyberSecurity Assessment'}>
                      Private Privacy
                    </Link>
                  </div>
                  <div className="text-base lg:text-xl pr-2 pl-2 font-NeuePlakRegular font-normal">
                    <Link href={'CyberSecurity Assessment'}>Terms of Use</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
