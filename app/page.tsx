import CallToAction from "@/components/CallToAction";
import Navbar from "@/components/Navbar";
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
        <h2 className="text-[2rem] ">Who we are</h2>
        <div className="w-[40%]">
          <p className="mb-2">
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
    </div>
  );
}
