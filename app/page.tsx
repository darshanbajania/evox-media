import CallToAction from "@/components/CallToAction";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[1244px] mx-auto">
      <section>
        <div className="flex h-[400px]  pt-5">
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
    </div>
  );
}
