import { Car } from "@/types/CarType"; 
import ClientContent from "./ClientContent";

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
      console.log("Fetched cars data:", carsData);
      return carsData;
    } catch (error) {
      console.error("Failed to fetch cars:", error);
      return [];
    }
  }
  

export default async function ExplorePage() {
  const cars: Car[] = await fetchCars();
  const uniqueModelsMap = new Map<string, Car>(); 
  cars.forEach(car => {
    if (!uniqueModelsMap.has(car.model)) {
      uniqueModelsMap.set(car.model, car);
    }
  });

  const uniqueModelCars: Car[] = Array.from(uniqueModelsMap.values());
  return (
    <ClientContent initialCars={uniqueModelCars} />
  );
}
