import CarDetailsCard from '@/components/CarDetailsCard'
import CarImageDisplay from '@/components/CarImageDisplay'
import CarNotFound from '@/components/CarNotFound'
import { Car } from '@/types/CarType'
import React from 'react'


interface Props {
    params: { model: string }
  }

  async function fetchCarsWithSameModel(model: string): Promise<Car[]> {
      try {
        const response = await fetch(`${process.env.BACKEND_URL}/inventory/cars/model/${model}`, {
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
    

const page = async ({params}: Props) => {
  const {model} = params
  const cars = await fetchCarsWithSameModel(model);


  const car = cars.find(car => car.model.toLowerCase() === model.toLowerCase());
  if(!car){
    return <CarNotFound/>
  }

return (
    <div className='sm:p-[60px] p-[10px] w-full mx-auto place-items-center gap-2 text-black grid grid-cols-1 lg:grid-cols-2 bg-[#F6F7F9] '>
        <CarImageDisplay car={car}/>
        <CarDetailsCard cars={cars}/>
    </div>
  )
}

export default page
