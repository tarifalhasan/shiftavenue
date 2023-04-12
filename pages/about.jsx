import Header from '@/components/common/Header';
import MobileMenu from '@/components/common/MobileNavbar';
import {
  Input,
  Select,
  Option,
  Textarea,
  Button,
} from '@material-tailwind/react';
import {
  FaFacebookF,
  FaGithub,
  FaLinkedin,
  FaTwitch,
  FaTwitter,
} from 'react-icons/fa';
import { HiArrowLongRight } from 'react-icons/hi2';
import regtangle from '../assets/images/contact.svg';
import regtangleSmall from '../assets/images/contactmobile.svg';
import location from '../assets/images/location.svg';
import visitUs from '../assets/images/contact2.png';
import Image from 'next/image';
const About = () => (
  <section id="about">
    <Header />
    <MobileMenu />
    <main className="container relative py-24 space-y-5">
      <div className="flex pb-6 lg:pb-28  flex-col lg:flex-row gap-6">
        <div className=" basis-[60%] w-[80%] space-y-4">
          <span className="title">Get in touch</span>
          <h1>Contact Us</h1>
          <p className=" text-lg lg:text-2xl font-NeuePlakRegular">
            Interested in working here? See what a
            <span className=" text-fuchsia"> jobs at shiftavenue </span> looks
            like or follow us on social media. Interested in working with us?
            Explore our services and offerings.
          </p>
        </div>
        <div className=" hidden lg:block absolute top-0 right-0">
          <Image src={regtangle} alt="tarif al hasan" />
        </div>
        <div className="  lg:hidden absolute top-0 right-0">
          <Image width={200} src={regtangleSmall} alt="tarif al hasan" />
        </div>
      </div>
      <p className="text-lg lg:text-2xl font-NeuePlakRegular lg:pb-2 ">
        Need something else? <br className="lg:hidden" /> See below for more
        ways to get in touch.
      </p>
      <div className=" p-8 bg-dark-purple rounded-xl">
        <form>
          <h2 className="sub-heading">Write us an inquiry below.</h2>
          <div className="grid grid-cols-1 gap-x-6 pt-6 gap-y-10 md:grid-cols-2 ">
            <Input
              className=" placeholder:text-2xl font-NeuePlakRegular text-2xl text-white placeholder:opacity-75"
              variant="standard"
              type="text"
              required
              title="sfdsfs"
              label="First Name"
            />
            <Input variant="standard" type="text" required label="Last Name" />
            <Input
              variant="standard"
              type="email"
              required
              label="Email Address"
            />
            <Select variant="standard" label="Type of Inquiry">
              <Option>Inquiry1</Option>
              <Option>Inquiry2</Option>
              <Option>Inquiry3</Option>
              <Option>Inquiry4</Option>
            </Select>
          </div>
          <div className="py-10">
            <Textarea variant="standard" label="Your Business Information" />
          </div>
          <div>
            <Button
              type="submit"
              className="bg-[#2A0034]  text-lg  font-NeuePlakRegular px-10"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-7">
        <div>
          <span className="title ">Email us</span>
          <h2 className="sub-heading">info@shiftavenue.com</h2>
        </div>
        <div>
          <span className="title block lg:text-right">Call us</span>
          <h2 className="sub-heading">+1 (203) 12345679</h2>
        </div>
      </div>
      <div className="grid place-items-center grid-cols-1 gap-0 lg:grid-cols-2">
        <div className=" min-h-[500px] lg:min-h-[715px]   bg-cotact-visit-us-dekstop flex px-10 justify-center items-center  relative space-y-3">
          <div className=" space-y-5">
            <span className="title">Visit Us</span>
            <h2 className="sub-heading">
              We are at the very heart of New York City!
            </h2>
            <p className="text-lg lg:text-2xl font-NeuePlakRegular">
              At Shiftavenue, we are dedicated to empowering organizations to
              achieve sustainable digital transformation.
            </p>
            <button
              color="#fff"
              variant="text"
              className="flex items-center gap-2"
            >
              <span className="text-white text-lg block  capitalize font-NeuePlakRegular">
                Get Directions
              </span>
              <HiArrowLongRight
                strokeWidth={2}
                className="h-5 w-5 mt-1   text-fuchsia"
              />
            </button>
          </div>
        </div>
        <div className=" min-h-[715px] grid  place-items-center  w-full bg-cotact-location h-[715px]">
          <Image src={location} alt="asa" />
        </div>
      </div>
      <div className="pt-6">
        <span className="title text-center block">Follow Us</span>
        <ul className="flex gap-4 justify-center items-center">
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaFacebookF
                className=" hover:opacity-60 transition duration-700	ease-in	"
                size={25}
              />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaTwitter
                className=" hover:opacity-60 transition duration-700	ease-in	"
                size={25}
              />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaGithub
                className=" hover:opacity-60 transition duration-700	ease-in	"
                size={25}
              />
            </a>
          </li>
          <li>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaLinkedin
                className=" hover:opacity-60 transition duration-700	ease-in	"
                size={25}
              />
            </a>
          </li>
          <li className=" text-2xl font-NeuePlakRegular">@shiftavenue</li>
        </ul>
      </div>
    </main>
  </section>
);

export default About;
