import React, { useState, useEffect } from 'react';
import Logo from '../ui/Logo';
import Link from 'next/link';

const Header = ({ opacity }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header
      className={`bg-[#030303] bg-opacity-${opacity} z-[999999999999999]  fixed w-full top-0  hidden lg:block`}
    >
      <div className="navbar  container">
        <div className="flex-1">
          <Link href={'/'}>
            <Logo />
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal uppercase  text-white px-1">
            <li tabIndex={0}>
              <a className="font-NeuePlakRegular">
                Services and offerings
                <svg
                  className="fill-current "
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <Link className="font-NeuePlakRegular" href={'jobs'}>
                Jobs
              </Link>
            </li>
            <li>
              <Link className="font-NeuePlakRegular" href={'blog'}>
                Blog
              </Link>
            </li>
            <li>
              <Link className="font-NeuePlakRegular" href={'/about'}>
                About
              </Link>
            </li>
            <li>
              <Link className="font-NeuePlakRegular" href={'/contact'}>
                Contact
              </Link>
            </li>
            <li>
              <Link className="font-NeuePlakRegular" href={'about'}>
                About
              </Link>
            </li>
            <li tabIndex={0}>
              <a className="font-NeuePlakRegular">
                <svg
                  width={17}
                  height={17}
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.5011 0C4.02479 0 0.393066 3.63175 0.393066 8.10803C0.393066 12.5843 4.02479 16.2161 8.5011 16.2161C12.9774 16.2161 16.6091 12.5843 16.6091 8.10803C16.6091 3.63172 12.9774 0 8.5011 0ZM14.3526 12.7339C13.6227 12.3109 12.7998 12.0009 11.9805 11.7853C12.2275 10.7552 12.368 9.61599 12.3897 8.43235H15.9533C15.8851 9.99795 15.3245 11.5054 14.3526 12.7339ZM2.6496 12.7339C1.67771 11.5054 1.11712 9.99795 1.04888 8.43235H4.61249C4.63422 9.61599 4.77475 10.7552 5.02169 11.7853C4.19642 12.0064 3.3946 12.3016 2.6496 12.7339ZM2.64957 3.48214C3.37693 3.90298 4.19282 4.21251 5.02169 4.43081C4.77472 5.46085 4.63422 6.60006 4.61249 7.78371H1.04888C1.11712 6.21808 1.67771 4.71064 2.64957 3.48214ZM8.82543 11.3552V8.43235H11.741C11.7195 9.56744 11.5851 10.6564 11.3496 11.6371C10.579 11.4765 9.72182 11.3752 8.82543 11.3552ZM5.65256 11.6371C5.4171 10.6564 5.2827 9.56745 5.2612 8.43235H8.17678V11.3552C7.29116 11.3749 6.43952 11.4734 5.65256 11.6371ZM8.17678 4.8609V7.78372H5.2612C5.2827 6.64863 5.4171 5.55969 5.65256 4.57904C6.44238 4.74263 7.28409 4.84099 8.17679 4.86091L8.17678 4.8609ZM8.82543 7.78371V4.86089C9.69734 4.84143 10.5447 4.74602 11.3497 4.57902C11.5851 5.55967 11.7195 6.64861 11.741 7.7837L8.82543 7.78371ZM8.82543 4.21209V0.68973C9.52204 0.86363 10.2016 1.58881 10.7289 2.73925C10.9002 3.11293 11.0511 3.5196 11.1809 3.95241C10.4045 4.11074 9.60801 4.19448 8.82543 4.21209ZM8.17678 0.68973V4.21209C7.37746 4.19409 6.58079 4.10743 5.82127 3.95241C5.9511 3.5196 6.10203 3.11294 6.27331 2.73925C6.80059 1.58878 7.48014 0.8636 8.17678 0.68973ZM8.17678 12.004V15.5263C7.48014 15.3524 6.80059 14.6272 6.27331 13.4768C6.10204 13.1031 5.9511 12.6965 5.82127 12.2637C6.5854 12.1085 7.37344 12.0221 8.17678 12.004ZM8.82543 15.5263V12.004C9.66626 12.0229 10.448 12.1148 11.1809 12.2637C11.0511 12.6965 10.9002 13.1031 10.7289 13.4768C10.2016 14.6273 9.52203 15.3524 8.82543 15.5263ZM12.3897 7.78371C12.368 6.60007 12.2275 5.46086 11.9805 4.43081C12.8013 4.21355 13.6213 3.90632 14.3526 3.48214C15.3245 4.71064 15.8851 6.21808 15.9533 7.78371H12.3897ZM13.9194 2.98184C13.2664 3.34583 12.5452 3.61261 11.8135 3.80529C11.51 2.77914 11.0177 1.63847 10.2785 0.8636C11.6605 1.20239 12.9261 1.93201 13.9194 2.98184H13.9194ZM6.7236 0.8636C5.98444 1.63847 5.49222 2.77917 5.18868 3.80529C4.46058 3.61368 3.74072 3.34803 3.08276 2.98184C4.07616 1.93201 5.34166 1.20239 6.72359 0.8636H6.7236ZM3.0828 13.2342C3.74519 12.8662 4.46142 12.6014 5.18872 12.4108C5.49225 13.4368 5.98447 14.5776 6.72363 15.3524C5.34163 15.0137 4.07616 14.284 3.0828 13.2342ZM10.2786 15.3525C11.0169 14.5785 11.5094 13.4389 11.8135 12.4108C12.5326 12.5995 13.2594 12.8668 13.9194 13.2342C12.9261 14.284 11.6605 15.0137 10.2786 15.3525H10.2786Z"
                    fill="white"
                  />
                </svg>
                English
                <svg
                  className="fill-current "
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li>
                  <a>Bangla</a>
                </li>
                <li>
                  <a>Arabic</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
