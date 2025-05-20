import Ads from "@/components/Ads";
import CarGrid from "@/components/CarGrid";
import {Car} from "@/types/CarType";


async function fetchCars(): Promise<Car[]> {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/inventory/cars`, {
       cache: 'no-store' 
    });
    if (!response.ok) {
      console.error(`Error fetching cars: ${response.status} ${response.statusText}`);
      throw new Error(`Failed to fetch cars: ${response.statusText}`);
    }
    const carsData: Car[] = await response.json();
    return carsData;
  } catch (error) {
    console.error("Failed to fetch cars:", error);
    return [];
  }
}


export default async function Home() {
  const cars = await fetchCars();
  
  const uniqueModelsMap = new Map<string, Car>(); 
  cars.forEach(car => {
    if (!uniqueModelsMap.has(car.model)) {
      uniqueModelsMap.set(car.model, car);
    }
  });
  const uniqueModelCars: Car[] = Array.from(uniqueModelsMap.values());
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
        <CarGrid cars={uniqueModelCars} />
      </div>
    </div>
  );
}


