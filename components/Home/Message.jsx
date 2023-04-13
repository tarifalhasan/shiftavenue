import React from 'react';
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
const Message = () => {
  return (
    <div className="grid container lg:grid-cols-2 gap-y-10 pb-16 place-items-center">
      <div className="lg:px-28 space-y-1 lg:space-y-3 text-center lg:text-left">
        <span className="title">REQUEST A QUOTE</span>
        <h2 className="sub-heading leading-[38px]">
          Let us know how we can work together
        </h2>
        <p className="text-sm md:text-base lg:text-lg font-NeuePlakRegular font-normal ">
          We are advising CxOs ( primarily CTOs, CIOs, and CISOs) and IT
          managers / IT teams from mid- to large-scale companies. Here we will
          be providing custting egde Strategy and Technical IT Consulting, but
          also focusing on People, Teams, and Culture.
        </p>
      </div>
      <form className="bg-[#831F9D] p-8 rounded-lg">
        <h2 className="sub-heading">Let us know more about you</h2>
        <div className="grid grid-cols-1 gap-x-6 pt-6 gap-y-10  ">
          <Input
            className=" placeholder:text-2xl font-NeuePlakRegular text-2xl text-white placeholder:opacity-75"
            variant="standard"
            type="text"
            required
            title="sfdsfs"
            label="First Name"
          />

          <Input
            variant="standard"
            type="email"
            required
            label="Email Address"
          />
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
  );
};

export default Message;
