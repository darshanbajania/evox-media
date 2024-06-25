import CallToAction from "@/components/CallToAction";
import Navbar from "@/components/Navbar";
import HowItWorksCard from "@/components/homePage/HowItWorksCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[1244px] mx-auto">
      <section>
        <div className="flex h-[500px]  pt-5">
          <div className="w-[50%] flex items-center justify-center">
            <img src="evox-bike.png" className="w-[300px]" />
          </div>
          <div className="flex  flex-1 flex-col justify-center">
            <h1 className="text-[3rem] w-[80%]">
              Transform Your Commute into Profit
            </h1>
            <div className="flex-start">
              <CallToAction label={"Get Started Today"} />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[2rem]">
        <h2 className="text-xl mb-1">Who we are</h2>
        <div className="w-[40%]">
          <p className="mb-2 text-[#51545C]">
            Evox Media is revolutionizing outdoor advertising by leveraging the
            mobility of delivery vehicles.{" "}
          </p>
          <p className="text-[#51545C]">
            Our delivery boxes, equipped with high-definition screens on three
            sides, provide dynamic advertising opportunities as they travel
            across the city.
          </p>
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
      <section>
        <div className="flex h-[500px]  pt-5">
          <div className="flex  flex-1 flex-col justify-center">
            <h1 className="text-xl w-[80%]">Earn Money While You Drive</h1>
            <p className="text-xl text-[#51545C] mt-4 w-[80%]">
              Turn your delivery route into a profitable venture. Join Evox
              Media, install our delivery box, and start earning extra income
              effortlessly.
            </p>
            <div className="flex-start mt-4">
              <CallToAction label={"Get Started Today"} />
            </div>
          </div>
          <div className="w-[50%] flex items-center justify-center">
            <img src="happy-delivery-person.png" className="w-[80%]" />
          </div>
        </div>
      </section>
    </div>
  );
}
