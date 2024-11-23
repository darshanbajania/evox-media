"use client";
import CallToAction from "@/components/CallToAction";
import Navbar from "@/components/Navbar";
import BenefitsCardV2 from "@/components/advertisersPage/BenefitsCardV2";
import HowItWorksCardV2 from "@/components/advertisersPage/HowItWorksCardV2";
import HowItWorksCard from "@/components/homePage/HowItWorksCard";
import PartnerCard from "@/components/homePage/PartnerCard";
import ReviewCard from "@/components/homePage/ReviewCard";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div className="">
      <section>
        <div className="flex h-[90vh] relative">
          <div className="absolute  h-[90vh] w-full  -z-10">
            <div className="relative overflow-hidden">
              <div className="bg-black opacity-30 absolute top-0 left-0 w-full h-full"></div>
              <div className=" absolute left-[0%] sm:left-[10%] lg:left-[55%] top-[48%] lg:top-[20%] bottom-[0px] right-[0px] w-full h-full">
                <img
                  src="3d-bike.png"
                  className="w-[500px] h-[500px] md:w-[800px] w-[500px] h-[500px] md:h-[800px] object-contain"
                />
              </div>
              <div className="w-full  h-[90vh] border-2">
                <img
                  src="hero-banner2.png"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* <video autoPlay className="w-full h-[700px]">
                <source src="food-delivery-video.mp4" type="video/mp4" />
              </video> */}
            </div>
          </div>
          <div className="flex ml-[5%] flex-col w-[100%] pt-[8%]  bg-red items-center lg:items-start">
            <h1 className="text-[3rem] lg:text-[4rem] w-[100%]  lg:w-[50%]   text-white text-center lg:text-left font-regular ">
              The only out of home advertising that delivers conversions
            </h1>
            <div className="mt-[4rem]">
              <Link href={"#our-supporters"}>
                <CallToAction label={"Let Us Show You How"} />
              </Link>
            </div>
          </div>
          {/* <div className="w-[50%] flex items-center justify-center">
            <img src="evox-bike.png" className="w-[300px]" />
          </div> */}
          {/* <div className="flex  flex-1 flex-col justify-center">
            <h1 className="text-[3rem] w-[80%]">
              Transform Your Commute into Profit
            </h1>
            <div className="flex-start">
              <Link href={"/drivers/#contact-us"}>
                <CallToAction label={"Get Started Today"} />
              </Link>
            </div>
          </div> */}
        </div>
      </section>
      <div className=" pt-[4rem] lg:pt-[8rem]">
        <section id="our-supporters" className="max-w-[90%] mx-auto ">
          <div className="flex items-center flex-col lg:flex-row relative h-[200px] gap-x-10">
            <div className=" pr-3 h-full  relative flex items-stretch">
              <div className="h-full border-r-0 flex  items-center">
                <h2 className="text-3xl md:text-4xl font-light">
                  Our Supporters
                </h2>
              </div>
            </div>
            <div className="w-[2px] h-full bg-slate-200 hidden lg:block" />
            <div className="flex flex-1 flex-wrap justify-between gap-x-10 md:gap-x-2 gap-y-4 mt-4 lg:mt-0">
              <PartnerCard path="assets/partner-logos/gaston-logo.png" />
              <PartnerCard path="assets/partner-logos/jegnus-logo.png" />
              <PartnerCard path="assets/partner-logos/matru-logo.png" />
              <PartnerCard path="assets/partner-logos/spco-logo.png" />
              <PartnerCard path="assets/partner-logos/meal-tech-logo.png" />
              <PartnerCard path="assets/partner-logos/just-eat-logo.png" />
              <PartnerCard path="assets/partner-logos/bosch-logo.png" />
              <PartnerCard path="assets/partner-logos/apple-logo.png" />
              <PartnerCard path="assets/partner-logos/google-logo.png" />
              <PartnerCard path="assets/partner-logos/red-bull-logo.png" />

              {/* <img
                src="assets/partner-logos/maserati-logo.png"
                className="w-[150px] h-[50px] object-contain"
              /> */}
            </div>
          </div>
        </section>

        <section
          id="fleet-section"
          className="max-w-[95%] sm:max-w-[90%] mx-auto mt-[200px] lg:mt-[300px] mb-[300px]"
        >
          <div className="mt-[5rem]  mb-[5rem]">
            <h2 className="text-[2em] lg:text-[3em] text-center mt-[5rem] font-light  text-[#1E1F22]">
              Get up to <span className="font-medium">15 million ad views</span>{" "}
              a day
            </h2>
            <p className="text-lg sm:text-xl text-center text-[#51545C]">
              We operate the largest network of high definition digital screen
              installed on scooters, taxis and bicycles{" "}
            </p>
          </div>
          <div className="flex justify-center pt-[5rem] gap-[40px] md:gap-[80px] items-center">
            <motion.div
              initial={{ translateY: 50, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              exit={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              // viewport={{ margin: "-150px" }}
              className="w-[140px] sm:w-[200px] md:w-[300px] h-[140px] sm:h-[200px]  md:h-[300px] rounded-full bg-[#FEFAFF] flex items-center justify-center pr-4"
            >
              <img
                src="3d-bike.png"
                className="h-[100%] w-[100%] object-contain "
              />
            </motion.div>
            <motion.div
              initial={{ translateY: 50, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              exit={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              className="w-[100px] sm:w-[140px] md:w-[180px] h-[100px]  sm:h-[140px]  md:h-[180px] rounded-full bg-[#FEFAFF] flex items-center justify-center p-2 md:p-4 relative"
            >
              <img src="assets/car.png" className="h-[90%] w-[90%]" />
              <div className="absolute  w-full h-full rounded-full bg-[#FEFAFF]/70 top-0 left-0 flex items-center justify-center">
                <p className="text-black text-[10px] sm:text-[12px] md:text-[15px] text-center">
                  {" "}
                  Launching Soon...
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ translateY: 50, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              exit={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              className="w-[100px] sm:w-[140px] md:w-[180px] h-[100px]  sm:h-[140px]  md:h-[180px] rounded-full bg-[#FEFAFF] flex items-center justify-center p-2 md:p-4 relative"
            >
              <img src="assets/bicycle.png" className="h-[90%]" />
              <div className="absolute  w-full h-full rounded-full bg-[#FEFAFF]/70 top-0 left-0 flex items-center justify-center">
                <p className="text-black text-[10px] sm:text-[12px] md:text-[15px] text-center">
                  {" "}
                  Launching Soon...
                </p>
              </div>
            </motion.div>
          </div>
          <motion.div
            // initial={{ translateY: 50, opacity: 0 }}
            // whileInView={{ translateY: 0, opacity: 1 }}
            // exit={{ translateY: 0, opacity: 1 }}
            // viewport={{ margin: "-50px" }}
            className="flex justify-center mt-[5rem]"
          >
            <a href="https://forms.gle/b29CLTnPZAxxd8XQ9" target="_blank">
              <CallToAction label={"Advertise with us "} />
            </a>
          </motion.div>
        </section>

        <section id="services" className="overflow-hidden">
          <div className="max-w-[1440px] mx-auto">
            <div className="flex flex-col md:flex-row h-[auto] md:h-[500px]  pt-5 px-5">
              <motion.div
                initial={{ translateX: -100, opacity: 0 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                exit={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                viewport={{ margin: "-200px 0px 0px 0px" }}
                className="flex  flex-1 flex-col justify-center"
              >
                <h1 className="text-[24px] md:text-[32px] xl:text-[44px] font-light w-[100%] xl:w-[70%]">
                  Get upto <span className="font-medium">28 million</span> ad
                  runs a day
                </h1>
                <p className="text-[16px] md:text-[18px] xl:text-[24px] text-[#51545C] mt-[4rem] w-[80%] md:w-[100%] xl:w-[70%]">
                  Advertise your brand on our network of digital screen and
                  reach millions of your potential buyer instantaneously
                </p>
                <p className="text-[16px] md:text-[18px] xl:text-[24px] text-[#51545C] mt-[2rem] w-[80%] md:w-[100%] xl:w-[70%]">
                  Your brand travels around the city and get seen by millions of
                  people
                </p>
                <div className="flex-start mt-[2rem]">
                  <Link href={"https://forms.gle/b29CLTnPZAxxd8XQ9"}>
                    <CallToAction label={"Get Started Now"} />
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ translateX: 150, opacity: 0 }}
                whileInView={{ translateX: 0, opacity: 1 }}
                exit={{ translateX: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                viewport={{ margin: "-200px 0px 0px 0px" }}
                className=" md:w-[50%] flex items-center justify-center mt-[5rem] md:mt-0"
              >
                <img src="3d-bike.png" className="w-[100%]" />
              </motion.div>
            </div>
          </div>
        </section>
        <section
          id="how-it-works"
          className="max-w-[90%] mx-auto mt-[300px] mb-[300px]"
        >
          <motion.div
            initial={{ translateY: 150, opacity: 0 }}
            whileInView={{ translateY: 0, opacity: 1 }}
            exit={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeIn" }}
            viewport={{ margin: "-100px" }}
            className="pt-[4rem] md:pt-[10rem] pb-[4rem] md:pb-[10rem] flex justify-center"
          >
            <p className="text-[#1E1F22] text-[24px] xl:text-[32px] font-light text-center w-[90%] lg:w-[60%] xl:w-[40%]">
              <span className="font-medium">Don’t wait</span> for people to walk
              by your Ad on the banner,{" "}
              <span className="font-medium">take your brand to them</span>
            </p>
          </motion.div>
        </section>
        <section id="how-it-works" className="mb-[300px]">
          <h2 className="text-2xl xl:text-3xl text-center mt-[5rem] ">
            How it Works?
          </h2>
          <p className="text-xl xl:text-2xl py-2 text-center text-[#51545C] mt-[2rem] bg-[#FEF8FF]">
            Easy to use platform to launch and monitor your campaign successes
          </p>

          <div className=" flex flex-col xl:flex-row justify-center items-center xl:items-start gap-[5rem] mt-[5rem]">
            <motion.div
              initial={{ translateY: 50, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              exit={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              viewport={{ margin: "-100px" }}
            >
              <HowItWorksCardV2
                title={"Upload your campaign and schedule"}
                description={"Upload still or motion ads on the platform"}
                imagePath={"uploadCampaigns.png"}
              />
            </motion.div>
            <motion.div
              initial={{ translateY: 50, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              exit={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              viewport={{ margin: "-100px" }}
            >
              <HowItWorksCardV2
                title={"Target your viewers in specific region"}
                description={
                  "Create/Select as many sons as you like where you want your ad to run"
                }
                imagePath={"target-viewers.png"}
              />
            </motion.div>
            <motion.div
              initial={{ translateY: 50, opacity: 0 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              exit={{ translateY: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeIn" }}
              viewport={{ margin: "-100px" }}
            >
              <HowItWorksCardV2
                title={`That’s it !
  You are live`}
                description={
                  "Monitor the results of your campaign success live"
                }
                imagePath={"dashboard.png"}
              />
            </motion.div>
          </div>
        </section>
        <section className="max-w-[80%] mx-auto mb-[300px]">
          <div className=" pb-[50px]">
            <h2 className="text-2xl xl:text-3xl mb-[4rem] ">
              Pick your perfect ad-space without the hassle!
            </h2>
            <div className="flex flex-col xl:flex-row justify-between items-center xl:items-start gap-y-20 xl:gap-y-0">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                exit={{ scale: 1.2 }}
                transition={{ duration: 0.2, ease: "easeIn" }}
                viewport={{ margin: "-100px" }}
              >
                <BenefitsCardV2
                  title={"Wide Reach"}
                  description={"Capture attention across the city"}
                  imagePath={"people-icon.png"}
                />
              </motion.div>
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                exit={{ scale: 1.2 }}
                transition={{ duration: 0.2, ease: "easeIn" }}
                viewport={{ margin: "-100px" }}
              >
                <BenefitsCardV2
                  title={"Dynamic Displays"}
                  description={"High-definition screens for vibrant ads"}
                  imagePath={"frame.png"}
                />
              </motion.div>
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                exit={{ scale: 1.2 }}
                transition={{ duration: 0.2, ease: "easeIn" }}
                viewport={{ margin: "-100px" }}
              >
                <BenefitsCardV2
                  title={"Cost-Effective"}
                  description={"Affordable advertising solution"}
                  imagePath={"salary-icon.png"}
                />
              </motion.div>
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.2 }}
                exit={{ scale: 1.2 }}
                transition={{ duration: 0.2, ease: "easeIn" }}
                viewport={{ margin: "-100px" }}
              >
                <BenefitsCardV2
                  title={"Detailed Analytics"}
                  description={"Track and measure your campaign’s success"}
                  imagePath={"statistics-icon.png"}
                />
              </motion.div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="mb-[100px]">
          <h2 className="text-3xl text-center mt-[5rem] mb-[3rem] ">
            The Tech Bit
          </h2>
          <div className="flex justify-center  bg-[#F5FFFF] py-[40px] xl:py-[100px] mb-[50px]">
            <div className="flex h-[400px] w-[90%]  pt-5 ">
              <div className="mr-5">
                <div className="relative w-[1px] h-[90%] bg-[#51545C]">
                  <div className="w-[3px] absolute top-[50px] -left-[1px] h-[30%] bg-[#51545C]" />
                </div>
              </div>
              <div className="flex  flex-1 flex-col ">
                <h1 className="text-[20px] xl:text-[32px] text-[#1E1E1E] font-light w-[70%] mt-[50px]">
                  <span className="font-medium">Monitor</span> your Ad Campaign
                  in real time
                </h1>
                <p className="text-[16px] xl:text-[24px]  text-[#51545C] mt-[1rem] w-[70%] xl:w-[40%]">
                  Heat map and ad run counts by vehicle type
                </p>
              </div>
              <div className="w-[50%] flex items-center justify-center ">
                <img src="heatmap.png" className="h-[60%] xl:h-[100%]" />
              </div>
            </div>
          </div>
          <div className="flex justify-center  bg-[#FFF8FD] py-[40px] xl:py-[100px] mb-[50px]">
            <div className="flex h-[400px] w-[90%]  pt-5 ">
              <div className="mr-5">
                <div className="relative w-[1px] h-[90%] bg-[#51545C]">
                  <div className="w-[3px] absolute top-[50px] -left-[1px] h-[30%] bg-[#51545C]" />
                </div>
              </div>
              <div className="flex  flex-1 flex-col ">
                <h1 className="text-[20px] xl:text-[32px] text-[#1E1E1E] font-light w-[80%] xl:w-[64%] mt-[50px]">
                  Run <span className="font-medium">A/B tests</span> by changing
                  your ads across different zones
                </h1>
                <p className="text-[16px] xl:text-[24px]  text-[#51545C] mt-[1rem] w-[90%] xl:w-[50%]">
                  Target rush hour commuters to day time strollers by running
                  different versions of ads in a single day
                </p>
              </div>
              <div className="w-[50%] flex items-center justify-center ">
                <img src="ab-testing.png" className="h-[60%] xl:h-[100%] " />
              </div>
            </div>
          </div>
          <div className="flex justify-center  bg-[#F5FFF8] py-[40px] xl:py-[100px]">
            <div className="flex h-[400px] w-[90%]  pt-5 ">
              <div className="mr-5">
                <div className="relative w-[1px] h-[90%] bg-[#51545C]">
                  <div className="w-[3px] absolute top-[50px] -left-[1px] h-[30%] bg-[#51545C]" />
                </div>
              </div>
              <div className="flex  flex-1 flex-col ">
                <h1 className="text-[20px] xl:text-[32px] text-[#1E1E1E] font-light w-[80%] xl:w-[64%] mt-[50px]">
                  <span className="font-medium">Broadcast</span> your Campaign
                </h1>
                <p className="text-[16px] xl:text-[24px]  text-[#51545C] mt-[1rem] w-[90%] xl:w-[50%]">
                  Enhance conversions by Broadcasting your campaign messages
                  directly to consumers
                </p>
              </div>
              <div className="w-[50%] flex items-center justify-center ">
                <img src="megaphone.png" className="h-[30%] xl:h-[50%]" />
              </div>
            </div>
          </div>
        </section>
        {/* <section id="services">
          <div className="flex h-[500px]  pt-5">
            <div className="flex  flex-1 flex-col justify-center">
              <h1 className="text-xl w-[80%]">Earn Money While You Drive</h1>
              <p className="text-xl text-[#51545C] mt-4 w-[80%]">
                Turn your delivery route into a profitable venture. Join Evox
                Media, install our delivery box, and start earning extra income
                effortlessly.
              </p>
              <div className="flex-start mt-4">
                <Link href={"/drivers/#contact-us"}>
                  <CallToAction label={"Become a Driver"} />
                </Link>
              </div>
            </div>
            <div className="w-[50%] flex items-center justify-center">
              <img src="happy-delivery-person.png" className="w-[80%]" />
            </div>
          </div>
        </section> */}
        {/* <section>
          <div className="flex   mt-[3rem]">
            <div className="w-[50%] flex items-center ">
              <img src="delivery-box-advertisement-2.png" className="w-[60%]" />
            </div>
            <div className="flex  flex-1 flex-col ">
              <h1 className="text-xl w-[80%]">Maximize Your Reach</h1>
              <p className="text-xl text-[#51545C] mt-4 w-[80%]">
                Capture the attention of thousands daily. Advertise with Evox
                Media and place your brand on screens that travel the city,
                ensuring maximum visibility.
              </p>
              <div className="flex-start mt-4">
                <Link href={"/for-advertisers/#contact-us"}>
                  <CallToAction label={"Advertise with Us"} />
                </Link>
              </div>
            </div>
          </div>
        </section> */}

        {/* <section className="mt-[5rem]">
          <h2 className="text-xl mb-[3rem] text-center">
            What Our Clients Say
          </h2>
          <div className="mt-5 flex justify-around  ">
            <ReviewCard
              review={
                "Evox Media has transformed our advertising strategy. The exposure we get from mobile ads is unparalleled!"
              }
              author={"Happy Client"}
            />
            <ReviewCard
              review={
                "I love earning extra money while driving my usual routes. Evox Media made it so easy."
              }
              author="Happy Driver"
            />
          </div>
        </section> */}
        {/* <section>
          <div className="flex h-[500px]  pt-5">
            <div className="flex  flex-1 flex-col justify-center">
              <h1 className="text-xl w-[80%]">
                Ready to Transform Your Advertising?
              </h1>
              <p className="text-xl text-[#51545C] mt-4 w-[80%]">
                Whether you&#39;re a driver looking to earn more or a business
                seeking effective advertising, Evox Media has the solution for
                you.
              </p>
              <div className="flex-start mt-4">
                <Link href={"/for-advertisers/#contact-us"}>
                  <CallToAction label={"Contact Us Today"} />
                </Link>
              </div>
            </div>
            <div className="w-[50%] flex items-center justify-center">
              <img src="happy-delivery-person.png" className="w-[80%]" /> 
            </div>
          </div>
        </section> */}
        <section
          id="supporters-slider"
          className="max-w-[90%] mx-auto mt-[200px] mb-[50px] xl:mb-[180px]"
        >
          <div className="pt-[10rem]  pb-[10rem] flex flex-col items-center justify-center">
            <p className="text-[#1E1F22] text-[24px] xl:text-[32px] font-light text-center w-[80%] xl:w-[40%] mb-[2rem]">
              Get seen by <span className="font-medium">millions</span> today
            </p>
            <a href="https://forms.gle/b29CLTnPZAxxd8XQ9" target="_blank">
              <CallToAction label={"Get Started Today"} />
            </a>
          </div>
        </section>
        <section id="how-it-works" className=" w-[100%]  mb-[50px]">
          <Marquee speed={150} pauseOnClick gradient>
            <img
              src="assets/partner-logos/gaston-logo.png"
              className="w-[120px] h-[40px] xl:w-[180px] xl:h-[80px] object-contain mr-[5rem]"
            />
            <img
              src="assets/partner-logos/jegnus-logo.png"
              className="w-[120px] h-[40px] xl:w-[180px] xl:h-[80px] object-contain mr-[5rem]"
            />
            <img
              src="assets/partner-logos/matru-logo.png"
              className="w-[120px] h-[40px] xl:w-[180px] xl:h-[80px] object-contain mr-[5rem]"
            />
            <img
              src="assets/partner-logos/spco-logo.png"
              className="w-[120px] h-[40px] xl:w-[180px] xl:h-[80px] object-contain mr-[5rem]"
            />
            <img
              src="assets/partner-logos/meal-tech-logo.png"
              className="w-[120px] h-[40px] xl:w-[180px] xl:h-[80px] object-contain mr-[5rem]"
            />
            <img
              src="assets/partner-logos/just-eat-logo.png"
              className="w-[120px] h-[40px] xl:w-[180px] xl:h-[80px] object-contain mr-[5rem]"
            />
            <img
              src="assets/partner-logos/bosch-logo.png"
              className="w-[120px] h-[40px] xl:w-[180px] xl:h-[80px] object-contain mr-[5rem]"
            />
            <img
              src="assets/partner-logos/apple-logo.png"
              className="w-[120px] h-[40px] xl:w-[180px] xl:h-[80px] object-contain mr-[5rem]"
            />
            <img
              src="assets/partner-logos/google-logo.png"
              className="w-[120px] h-[40px] xl:w-[180px] xl:h-[80px] object-contain mr-[5rem]"
            />
            <img
              src="assets/partner-logos/red-bull-logo.png"
              className="w-[120px] h-[40px] xl:w-[180px] xl:h-[80px] object-contain mr-[5rem]"
            />
          </Marquee>
        </section>
      </div>
    </div>
  );
}
