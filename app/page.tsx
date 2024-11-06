import CallToAction from "@/components/CallToAction";
import Navbar from "@/components/Navbar";
import HowItWorksCard from "@/components/homePage/HowItWorksCard";
import ReviewCard from "@/components/homePage/ReviewCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <section>
        <div className="flex h-[90vh] relative">
          <div className="absolute  h-[90vh] w-full  -z-10">
            <div className="relative">
              {/* <div className="bg-black opacity-40 absolute top-0 left-0 w-full h-full"></div> */}
              <div className=" absolute left-[55%]  top-[20%] bottom-[0px] right-[0px] w-full h-full">
                <img
                  src="3d-bike.png"
                  className="w-[800px] h-[800px] object-contain"
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
          <div className="flex  items-center flex-col w-[100%] pt-[5%]  border-1">
            <h1 className="text-[4rem] w-[50%] text-white text-center font-thin ">
              The only out of home advertising that delivers conversions
            </h1>
            <div className="mt-[7rem]">
              <Link href={"/drivers/#contact-us"}>
                <CallToAction label={"Let us show you how"} />
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
      <div className="max-w-[1224px] mx-auto pt-[4rem]">
        <section id="about-us" className="">
          <div className="flex items-center  relative h-[200px] gap-x-10">
            <div className=" pr-3 h-full  relative flex items-stretch">
              <div className="h-full border-r-0 flex items-center">
                <h2 className="text-2xl  ">Our Supporters</h2>
              </div>
            </div>
            <div className="w-[1px] h-full bg-slate-200" />
            <div className="flex flex-1 flex-wrap justify-between gap-x-2 gap-y-4">
              <img
                src="assets/partner-logos/gaston-logo.png"
                className="w-[150px] h-[50px] object-contain"
              />
              <img
                src="assets/partner-logos/jegnus-logo.png"
                className="w-[150px] h-[50px] object-contain"
              />
              <img
                src="assets/partner-logos/matru-logo.png"
                className="w-[150px] h-[50px] object-contain"
              />
              <img
                src="assets/partner-logos/spco-logo.png"
                className="w-[150px] h-[50px] object-contain"
              />
              <img
                src="assets/partner-logos/meal-tech-logo.png"
                className="w-[150px] h-[50px] object-contain"
              />
              <img
                src="assets/partner-logos/just-eat-logo.png"
                className="w-[150px] h-[50px] object-contain"
              />
              <img
                src="assets/partner-logos/bosch-logo.png"
                className="w-[150px] h-[50px] object-contain"
              />
              <img
                src="assets/partner-logos/apple-logo.png"
                className="w-[150px] h-[50px] object-contain"
              />
              <img
                src="assets/partner-logos/google-logo.png"
                className="w-[150px] h-[50px] object-contain"
              />
              <img
                src="assets/partner-logos/red-bull-logo.png"
                className="w-[150px] h-[50px] object-contain"
              />
              {/* <img
                src="assets/partner-logos/maserati-logo.png"
                className="w-[150px] h-[50px] object-contain"
              /> */}
            </div>
          </div>
        </section>

        <section id="how-it-works" className=" mt-[300px] mb-[300px]">
          <div className="mt-[5rem]  mb-[5rem]">
            <h2 className="text-[3em] text-center mt-[5rem] font-light  text-[#1E1F22]">
              Get up to <span className="font-medium">15 million ad views</span>{" "}
              a day
            </h2>
            <p className="text-xl text-center text-[#51545C]">
              We operate the largest network of high definition digital screen
              installed on scooters, taxis and bicycles{" "}
            </p>
          </div>
          <div className="flex justify-center mt-[5rem] gap-[80px] items-center">
            <div className="w-[300px] h-[300px] rounded-full bg-[#FEFAFF] flex items-center justify-center pr-4">
              <img
                src="3d-bike.png"
                className="h-[100%] w-[100%] object-contain "
              />
            </div>
            <div className="w-[180px] h-[180px] rounded-full bg-[#FEFAFF] flex items-center justify-center p-4 relative">
              <img src="assets/car.png" className="h-[90%] w-[90%]" />
              <div className="absolute  w-full h-full rounded-full bg-[#FEFAFF]/70 top-0 left-0 flex items-center justify-center">
                <p className="text-black"> Launching Soon...</p>
              </div>
            </div>
            <div className="w-[180px] h-[180px] rounded-full bg-[#FEFAFF] flex items-center justify-center p-4 relative">
              <img src="assets/bicycle.png" className="h-[90%]" />
              <div className="absolute  w-full h-full rounded-full bg-[#FEFAFF]/70 top-0 left-0 flex items-center justify-center">
                <p className="text-black"> Launching Soon...</p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="">
          <h2 className="text-xl text-center mt-[5rem]">How it Works?</h2>
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
        <section id="services">
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
        </section>
        <section>
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
        </section>
        <section className="mt-[5rem]">
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
        </section>
        <section>
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
              {/* <img src="happy-delivery-person.png" className="w-[80%]" /> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
