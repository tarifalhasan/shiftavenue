import Header from '@/components/common/Header';
import Hero from '@/components/Home/Hero';
import Services from '@/components/Home/Services';
import MobileMenu from '@/components/common/MobileNavbar';
import Testimonial from '@/components/Home/Testimonial';
import MissionVision from '@/components/Home/MissionVision';
import MissionVisionMobile from '@/components/Home/MissionVissionMobile';
import Blogs from '@/components/Home/Blogs';
import HighLighting from '@/components/Home/Hightlighting';
import Message from '@/components/Home/Message';
import Footer from '@/components/common/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <MobileMenu />
      <Hero />
      <Services />
      <div className="pb-16">
        <Testimonial />
      </div>
      <MissionVision />
      <MissionVisionMobile />
      <Blogs />
      <HighLighting bg="#831F9D" />
      <div className=" h-full mx-auto bg-home-bg-2-large justify-center  bg-center bg-no-repeat bg-cover flex items-end">
        <div className=" text-center pb-10">
          <p className="text-xl md:text-2xl py-5 font-NeuePlakRegular  tracking-[6px] uppercase">
            Proven Track Record of Success
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-28">
            <div>
              <h1>80%</h1>
              <span className=" uppercase !leading-[17px] text-base text-fuchsia font-NeuePlakRegular md:text-xl lg:text-xl">
                returning <br className="hidden md:block" /> customers
              </span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-28">
              <div>
                <h1>100%</h1>
                <span className=" uppercase !leading-[17px] text-base text-fuchsia font-NeuePlakRegular md:text-xl lg:text-xl">
                  Satisfactory <br className="hidden md:block" /> Level
                </span>
              </div>
              <div>
                <h1>150+</h1>
                <span className=" uppercase !leading-[17px] text-base text-fuchsia font-NeuePlakRegular md:text-xl lg:text-xl">
                  successful <br className="hidden md:block" /> projects
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Message />
      <Footer />
    </>
  );
}
