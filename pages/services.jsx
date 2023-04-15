import HighLighting from '@/components/Home/Hightlighting';
import Message from '@/components/Home/Message';
import ServicesTab from '@/components/ServicesTab';
import Footer from '@/components/common/Footer';
import Header from '@/components/common/Header';
import MobileMenu from '@/components/common/MobileNavbar';
import Offer from '@/components/services/Offer';
import OnSale from '@/components/services/OnSale';
import ServicesTestimonial from '@/components/services/Testimonial';

const Services = () => (
  <section className="bg-[#15203a] ">
    <Header opacity={60} />
    <MobileMenu />
    <div className=" ">
      <div className="bg-jobs-hero-bg-mobile   object-center   md:bg-contain    md:bg-services-bg-large  bg-no-repeat ">
        <div className="container space-y-16 py-28">
          <div className=" space-y-3">
            <span className="title">Services and Offerings</span>
            <h2 className="heading leading-[67px]">
              Strategy. <br /> Architecture. <br /> Deep Thinking.
            </h2>
            <div className="heading3 lg:w-[35%]">
              Helping you thrive in the future your products are inventing
            </div>
          </div>
        </div>
        <div className="grid w-full lg:pt-10 grid-cols-1 place-items-center ">
          <ServicesTab />
        </div>
      </div>
      <div className="bg-[#831F9D] mb-16 py-10">
        <div className="container">
          <h2 className="sub-heading text-center lg:text-left">
            Services and Offerings
          </h2>
          <p className="text-[14px] lg:w-[70%] text-center lg:text-left md:text-[16px] lg:text-[19px] text-[#D5D9E6] font-NeuePlakRegular font-normal">
            Our global team of tech strategists, enterprise architects and
            transformation experts help harness technology and innovation as a
            way to reinvent every business.
          </p>
          <Offer />
        </div>
      </div>

      <OnSale />
      <ServicesTestimonial />
      <HighLighting bg={'light-black'} />
      <div className="pt-16">
        <Message />
      </div>
    </div>
    <Footer />
  </section>
);

export default Services;
