"use client";
import CallToAction from "@/components/CallToAction";
import FormField from "@/components/FormField";
import BenefitsCard from "@/components/driversPage/BenefitsCard";
import HowItWorksCard from "@/components/driversPage/HowItWorksCard";
import ReviewCard from "@/components/driversPage/ReviewCard";
import React, { useRef } from "react";
import Link from "next/link";
import HowItWorksCardV2 from "@/components/driversPage/HowItWorksCardV2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import Swiper JS

const page = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="">
      <section className="">
        <div className="max-w-[90%] mx-auto relative py-[5rem]">
          <div className="flex h-[500px]  ">
            <div className="w-[50%] relative h-full">
              <img src="3d-bike.png" className="w-full h-full object-contain" />
            </div>

            <div className="flex  flex-1 flex-col justify-center absolute w-[40%] top-0 h-[100%] right-0 ">
              <h1 className="text-[3rem] w-[100%] mb-[2rem]">
                Drive, Advertise, Earn
              </h1>
              <p className="text-[1.5rem] text-[#51545C] w-[50%]">
                Turn Your Daily Routes into a Revenue Stream with Evox Media
              </p>
              <div className="flex-start mt-[2rem]">
                <CallToAction label={"Join Our Driver Network"} />
              </div>
            </div>
          </div>

          {/* <div className="h-[500px] w-[80%] flex flex-1 flex-col items-end absolute top-0 right-0 "></div> */}
          {/* <div className="flex  flex-1 flex-col  absolute w-[40%] top-0 h-[100%] right-0 pl-[3rem] pt-[3rem]">
            <h1 className="text-[2.5rem] w-[80%]">Drive, Advertise, Earn</h1>
            <p className="text-xl text-[#51545C] w-[80%]">
              Turn Your Daily Routes into a Revenue Stream with Evox Media
            </p>
            <div className="flex-start mt-[2rem]">
              <Link href={"/drivers/#contact-us"}>
                <CallToAction label={"Join Our Driver Network"} />
              </Link>
            </div>
          </div> */}
        </div>
      </section>
      {/* <section>
        <div className="relative">
          <div className="flex h-[500px]  ">
            <div className="w-[60%] relative h-full">
              <img
                src="delivery-person-with-bike.png"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-1 border-1">
              <p>asda</p>
            </div>
            <div className="flex  flex-1 flex-col justify-center absolute w-[30%] top-0 h-[100%] right-0 ">
              <h1 className="text-[2.5rem] w-[100%]">Drive, Advertise, Earn</h1>
              <p className="text-xl text-[#51545C]">
                Turn Your Daily Routes into a Revenue Stream with Evox Media
              </p>
              <div className="flex-start mt-[2rem]">
                <CallToAction label={"Get Started Today"} />
              </div>
            </div>
          </div>

          <div className="h-[500px] w-[80%] flex flex-1 flex-col items-end absolute top-0 right-0 bg-gradient-to-r from-transparent via-[#F9F1FF] to-[#F9F1FF]"></div>
          <div className="flex  flex-1 flex-col  absolute w-[40%] top-0 h-[100%] right-0 pl-[3rem] pt-[3rem]">
            <h1 className="text-[2.5rem] w-[80%]">Drive, Advertise, Earn</h1>
            <p className="text-xl text-[#51545C] w-[80%]">
              Turn Your Daily Routes into a Revenue Stream with Evox Media
            </p>
            <div className="flex-start mt-[2rem]">
              <Link href={"/drivers/#contact-us"}>
                <CallToAction label={"Join Our Driver Network"} />
              </Link>
            </div>
          </div>
        </div>
      </section> */}
      {/* <section>
        <div className="pt-[100px] pb-[50px]">
          <h2 className="text-xl mb-[2rem] text-center">
            Why Drive with Evox Media?
          </h2>
          <div className="flex justify-between">
            <BenefitsCard
              description={"Earn money effortlessly by displaying ads."}
              imagePath={"money-icon.png"}
            />
            <BenefitsCard
              description={"Quick and simple setup of the delivery box."}
              imagePath={"tools-icon.png"}
            />
            <BenefitsCard
              description={"Drive on your terms, no extra work required."}
              imagePath={"customer-happy.png"}
            />
            <BenefitsCard
              description={"We are here to assist you whenever you need."}
              imagePath={"customer-support.png"}
            />
          </div>
        </div>
      </section> */}
      <section className="mt-[5rem]">
        {/* <h2 className="text-[2rem] text-center">How it Works?</h2> */}
        <div className="max-w-[90%] mx-auto flex justify-between mt-[5rem]">
          <HowItWorksCardV2
            title={"Sign-up to join our growing network of riders"}
            description={
              "Currently more than 3000 riders have already joined Evox community"
            }
            imagePath={"signup.png"}
          />
          <div className="mt-[80px]">
            <svg
              width="92"
              height="16"
              viewBox="0 0 92 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M91.7071 8.70711C92.0976 8.31658 92.0976 7.68342 91.7071 7.29289L85.3431 0.928932C84.9526 0.538408 84.3195 0.538408 83.9289 0.928932C83.5384 1.31946 83.5384 1.95262 83.9289 2.34315L89.5858 8L83.9289 13.6569C83.5384 14.0474 83.5384 14.6805 83.9289 15.0711C84.3195 15.4616 84.9526 15.4616 85.3431 15.0711L91.7071 8.70711ZM0 9H91V7H0V9Z"
                fill="#C837AB"
              />
            </svg>
          </div>
          <HowItWorksCardV2
            title={"Get Ready"}
            description={
              "Visit our partner for our all new innovative delivery box fitted to your scooter"
            }
            imagePath={"box.png"}
          />
          <div className="mt-[80px]">
            <svg
              width="92"
              height="16"
              viewBox="0 0 92 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M91.7071 8.70711C92.0976 8.31658 92.0976 7.68342 91.7071 7.29289L85.3431 0.928932C84.9526 0.538408 84.3195 0.538408 83.9289 0.928932C83.5384 1.31946 83.5384 1.95262 83.9289 2.34315L89.5858 8L83.9289 13.6569C83.5384 14.0474 83.5384 14.6805 83.9289 15.0711C84.3195 15.4616 84.9526 15.4616 85.3431 15.0711L91.7071 8.70711ZM0 9H91V7H0V9Z"
                fill="#C837AB"
              />
            </svg>
          </div>
          <HowItWorksCardV2
            title={"Start Earning"}
            description={
              "Carry on with your daily delivery work and turn your daily routine to a revenue stream."
            }
            imagePath={"earning.png"}
          />
        </div>
      </section>
      {/* <section className="mt-[5rem]">
        <h2 className="text-xl mb-[3rem] text-center">What Our Clients Say</h2>
        <div className="mt-5 flex justify-around  ">
          <ReviewCard
            review={
              "Evox Media has made it so easy to earn extra income. I just drive my usual routes and get paid!"
            }
            author={"Alex D"}
          />
          <ReviewCard
            review={
              "The installation was quick and the earnings are great. Highly recommend for any driver."
            }
            author="Jamie S."
          />
        </div>
      </section> */}

      <section className="my-[200px]">
        <h2 className="text-[1.5rem] mb-[5rem] text-center ">
          What other riders say
        </h2>
        <div className="slider-container relative">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
          >
            <ReviewCard
              author={"Alex"}
              designation={"Rider"}
              review={`Evox Media has made it so easy to earn extra income. I just drive
              my usual routes and get paid!`}
            />
            <ReviewCard
              author={"Alex"}
              designation={"Rider"}
              review={`Evox Media has made it so easy to earn extra income. I just drive
              my usual routes and get paid!`}
            />
            <ReviewCard
              author={"Alex"}
              designation={"Rider"}
              review={`Evox Media has made it so easy to earn extra income. I just drive
              my usual routes and get paid!`}
            />
          </Slider>

          <div className="absolute top-0 -left-[200px] h-[100%] w-[200px]   flex flex-col justify-center items-center">
            <button
              className="button bg-[#FD80A3] rounded-full "
              onClick={previous}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="absolute top-0 -right-[200px] h-[100%] w-[200px]  flex flex-col justify-center items-center">
            <button
              className="button  bg-[#FD80A3] rounded-full "
              onClick={next}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
      <section id="contact-us" className="my-[250px]">
        <h2 className="text-[2rem] mb-[2rem] text-center">Join Us Today</h2>
        <div className="flex justify-center">
          <CallToAction label={"Sign Up Now"} />
        </div>
        {/* <div className="border-1  border-[#EBE1F2] w-[50%] p-5 mx-auto rounded-lg">
          <FormField label="Full Name" id={"full-name"} />
          <FormField label="Email Address" id={"email-address"} />
          <FormField label="Phone Number" id={"phone-number"} />
          <FormField label="Message" id={"message"} variant={"text-area"} />
          <div className="flex justify-center mt-[2rem]">
            <CallToAction label={"Send Message"} />
          </div>
        </div> */}
      </section>
    </div>
  );
};

export default page;
