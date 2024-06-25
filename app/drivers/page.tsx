import CallToAction from "@/components/CallToAction";
import FormField from "@/components/FormField";
import BenefitsCard from "@/components/driversPage/BenefitsCard";
import HowItWorksCard from "@/components/driversPage/HowItWorksCard";
import ReviewCard from "@/components/homePage/ReviewCard";
import React from "react";

const page = () => {
  return (
    <div className="max-w-[1244px] mx-auto">
      <section>
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
              <CallToAction label={"Join Our Driver Network"} />
            </div>
          </div>
        </div>
      </section>
      <section>
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
      </section>
      <section className="mt-[5rem]">
        <h2 className="text-xl text-center">How it Works?</h2>
        <div className="flex justify-between mt-[5rem]">
          <HowItWorksCard
            title={"Step 1"}
            description={
              "Easily attach our innovative delivery box to your vehicle"
            }
            imagePath={"delivery-box-rack-for-bike.png"}
          />
          <HowItWorksCard
            title={"Step 2"}
            description={
              "Dynamic ads play on screens, reaching a wide audience as you drive."
            }
            imagePath={"evox-bike-2.png"}
          />
          <HowItWorksCard
            title={"Step 3"}
            description={"Get paid for driving and advertising."}
            imagePath={"giving-payment.png"}
          />
        </div>
      </section>
      <section className="mt-[5rem]">
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
      </section>
      <section className="mt-[5rem] mb-[3rem]">
        <h2 className="text-xl mb-[3rem] text-center">Join Us Today</h2>

        <div className="border-1  border-[#EBE1F2] w-[50%] p-5 mx-auto rounded-lg">
          <FormField label="Full Name" id={"full-name"} />
          <FormField label="Email Address" id={"email-address"} />
          <FormField label="Phone Number" id={"phone-number"} />
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
