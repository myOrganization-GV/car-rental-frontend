import React from 'react'
import ClientContent from './ClientContent'
import { Car } from '@/types/CarType';
import CarNotFound from '@/components/CarNotFound';

type Props = {
    params: {id: string}
}
async function fetchCarById(id:string): Promise<Car|null> {
    try {
      const response = await fetch(`${process.env.BACKEND_URL}/inventory/cars/${id}`, {
         cache: 'no-store' 
      });
      if (!response.ok) {
        console.error(`Error fetching car: ${response.status} ${response.statusText}`);
        throw new Error(`Failed to fetch car: ${response.statusText}`);
      }
      const car: Car = await response.json();
      console.log("Fetched car data:", car);
      return car;
    } catch (error) {
      console.error("Failed to fetch car:", error);
      return null
    }
  }
const page = async ({params}: Props) => {
  const {id} = params;
  const car = await fetchCarById(id);

  return (
   (car? <ClientContent car={car} /> : <CarNotFound/>)
  )
}

export default page