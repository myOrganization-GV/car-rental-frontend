import Ads from "@/components/Ads";
import CarCard from "@/components/CarCard";
import CarGrid from "@/components/CarGrid";
import {Car, cars } from "@/types/CarType";
import Image from "next/image";

export default function Home() {

  return (
    <div className="flex flex-col">
      <div className="grid bg-[#F6F7F9] p-[10px]  sm:p-[60px] grid-cols-1 md:grid-cols-2 gap-10 ">
        <Ads description="Ease of doing a car rental safely and reliably. Of course at a low price." title="The Best Platform for Car Rental" imgUrl="/assets/ad 1.png" />
        <Ads description="Providing cheap car rental services and safe and comfortable facilities." title="Easy way to rent a car at a low price" imgUrl="/assets/ad 2.png" />
      </div>
      <div className="p-[10px] sm:p-[60px] bg-[#F6F7F9]">
        <div className="flex px-[20px] w-full mb-5 justify-between">
          <span className="text-[#90A3BF]">Popular Cars</span>
          <button className="text-primary cursor-pointer relative group">
            View All
            <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full group-hover:left-0 transform -translate-x-1/2 group-hover:translate-x-0"></span>
          </button>
        </div>
        <CarGrid cars={cars} />
      </div>
    </div>
  );
}


