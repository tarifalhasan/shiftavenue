import React from 'react';

const PerkBenifits = () => {
  return (
    <div className="bg-jobs-PerkBenifits-bg  mt-16 grid  h-full bg-no-repeat min-h-[742px]">
      <div className="container h-full">
        <div className=" flex flex-col h-full  items-center lg:flex-row ">
          <div className="basis-[55%] space-y-5  container">
            <h2 className="sub-heading text-fuchsia">Perks & Benefits </h2>
            <p className="heading3 text-[#D5D9E6]">
              Our vision is to be the leading provider of IT strategy consulting
              services, recognized for our expertise in transformation and
              change management.
            </p>
            <div>
              <ul className=" ml-4 space-y-2 text-[#D5D9E6]  text-[22px]  font-NeuePlakRegular list-image-[url(/circle.png)] 	">
                <li className="text-[]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
                <li>
                  <span>
                    Curabitur at velit luctus, vulputate leo a, tincidunt purus.
                    Suspendisse ut nunc scelerisque, sodales felis in, tempor
                    nisl..c
                  </span>
                </li>
                <li>Suspendisse at interdum dolor, quis vulputate neque. .</li>
                <li>
                  Morbi dictum magna quis odio condimentum luctus. Aliquam erat
                  volutpat. In porta urna sed sem tempus, vitae efficitur ex
                  molestie..
                </li>
              </ul>
            </div>
          </div>
          <div className="basis-[45%]"></div>
        </div>
      </div>
    </div>
  );
};

export default PerkBenifits;
