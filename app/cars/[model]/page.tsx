import CarCard from '@/components/CarCard'
import CarDetailsCard from '@/components/CarDetailsCard'
import CarImageDisplay from '@/components/CarImageDisplay'
import { cars } from '@/types/CarType'
import React from 'react'


interface Props {
    params: Promise<{ model: string }>
  }
  
const page = ({params}: Props) => {
  const {model} = React.use(params)
  const car = cars.find(car => car.model.toLowerCase() === model.toLowerCase());
  if(!car){
    return carNotFound()
  }

return (
    <div className='sm:p-[60px] p-[10px] w-full mx-auto place-items-center gap-2 text-black grid grid-cols-1 lg:grid-cols-2 bg-[#F6F7F9] '>
        <CarImageDisplay car={car}/>
        <CarDetailsCard car={car}/>
    </div>
  )
}

export default page


const carNotFound = () => {
    return (
        <div className="p-6  bg-[#F6F7F9] h-[350px] text-black text-center">
          <h2 className="text-3xl font-bold mb-2">Car Not Found</h2>
          <p>We couldn't find that model in our inventory.</p>
          <a href="/explore" className="mt-4 inline-block text-blue-600 hover:underline">
            ← Back to Explore
          </a>
        </div>
      )
}