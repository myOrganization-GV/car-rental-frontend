import Ads from "@/components/Ads";
import CarCard from "@/components/CarCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid p-[10px] bg-[#F6F7F9] sm:p-[60px] grid-cols-1 md:grid-cols-2 gap-10 ">
        <Ads description="Ease of doing a car rental safely and reliably. Of course at a low price." title="The Best Platform for Car Rental" imgUrl="/assets/ad 1.png"/>
        <Ads description="Providing cheap car rental services and safe and comfortable facilities." title="Easy way to rent a car at a low price" imgUrl="/assets/ad 2.png"/>
      </div>

      <CarCard/>
    </div>
  );
}
