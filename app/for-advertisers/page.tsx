import CallToAction from "@/components/CallToAction";
import FormField from "@/components/FormField";
import BenefitsCard from "@/components/advertisersPage/BenefitsCard";
import HowItWorksCard from "@/components/advertisersPage/HowItWorksCard";
import ReviewCard from "@/components/homePage/ReviewCard";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="max-w-[1244px] mx-auto">
      <section>
        <div className="relative">
          <div className="flex h-[500px]  ">
            <div className="w-[60%] relative h-full">
              <img
                src="delivery-box-screen-advertisement.png"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-1 border-1"></div>
            <div className="flex  flex-1 flex-col justify-center absolute w-[30%] top-0 h-[100%] right-0 ">
              <h1 className="text-[2.5rem] w-[100%]">
                Reach Thousands Daily with Evox Media
              </h1>
              <p className="text-xl text-[#51545C]">
                Advertise on the Move and Maximize Your Brand’s Visibility
              </p>
              <div className="flex-start mt-[2rem]">
                <CallToAction label={"Get Started Today"} />
              </div>
            </div>
          </div>

          <div className="h-[500px] w-[80%] flex flex-1 flex-col items-end absolute top-0 right-0 bg-gradient-to-r from-transparent via-[#F9F1FF] to-[#F9F1FF]"></div>
          <div className="flex  flex-1 flex-col  absolute w-[40%] top-0 h-[100%] right-0 pl-[3rem] pt-[3rem]">
            <h1 className="text-[2.25rem] w-[80%]">
              {" "}
              Reach Thousands Daily with Evox Media
            </h1>
            <p className="text-xl text-[#51545C] w-[80%]">
              Advertise on the Move and Maximize Your Brand’s Visibility
            </p>
            <div className="flex-start mt-[2rem]">
              <Link href={"/for-advertisers/#contact-us"}>
                <CallToAction label={"Advertise with Us"} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="pt-[100px] pb-[50px]">
          <h2 className="text-xl mb-[2rem] ">Why Advertise with Evox Media?</h2>
          <div className="flex justify-between">
            <BenefitsCard
              title={"Wide Reach"}
              description={"Capture attention across the city"}
              imagePath={"people-icon.png"}
            />
            <BenefitsCard
              title={"Dynamic Displays"}
              description={"High-definition screens for vibrant ads."}
              imagePath={"frame.png"}
            />
            <BenefitsCard
              title={"Cost-Effective"}
              description={"Affordable advertising solution."}
              imagePath={"salary-icon.png"}
            />
            <BenefitsCard
              title={"Detailed Analytics"}
              description={"Track and measure your campaign’s success"}
              imagePath={"statistics-icon.png"}
            />
          </div>
        </div>
      </section>
      <section className="mt-[5rem] pb-[2rem]">
        <h2 className="text-xl text-center">How it Works?</h2>
        <div className="flex justify-between mt-[5rem]">
          <HowItWorksCard
            title={"Select Your Campaign"}
            description={"Choose your advertising campaign details"}
            imagePath={"people-discussing.png"}
          />
          <HowItWorksCard
            title={"Target Locations"}
            description={"Select target locations for maximum reach"}
            imagePath={"locations.png"}
          />
          <HowItWorksCard
            title={"Display Ads"}
            description={"Your ads are displayed on delivery boxes"}
            imagePath={"delivery-box-advertisement-3.png"}
          />
          <HowItWorksCard
            title={"Track Performance"}
            description={"Monitor ad performance with our analytics"}
            imagePath={"person-using-laptop.png"}
          />
        </div>
      </section>
      <section className="mt-[5rem] pb-[2rem]">
        <h2 className="text-xl mb-[3rem] text-center">Success Stories</h2>
        <div className="mt-5 flex justify-around  ">
          <ReviewCard
            review={
              "Our brand&#39;s visibility increased significantly with Evox Media&#39;s mobile ads. Highly effective!"
            }
            author={"Marketing Director, Retail Company"}
          />
          <ReviewCard
            review={
              "We saw a 30% boost in customer engagement after advertising with Evox Media."
            }
            author="CEO, Tech Startup"
          />
        </div>
      </section>
      <section id="contact-us" className="mt-[5rem] mb-[3rem]">
        <h2 className="text-xl mb-[3rem] text-center">
          Start Your Campaign Today
        </h2>

        <div className="border-1  border-[#EBE1F2] w-[50%] p-5 mx-auto rounded-lg">
          <FormField label="Full Name" id={"full-name"} />
          <FormField label="Email Address" id={"email-address"} />
          <FormField label="Phone Number" id={"phone-number"} />
          <FormField label="Company Name" id={"company-name"} />
          <FormField label="Message" id={"message"} variant={"text-area"} />
          <div className="flex justify-center mt-[2rem]">
            <CallToAction label={"Send Message"} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
