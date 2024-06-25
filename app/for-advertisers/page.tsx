import CallToAction from "@/components/CallToAction";
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
              <CallToAction label={"Advertise with Us"} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
