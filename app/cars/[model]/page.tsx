import CarCard from '@/components/CarCard'
import CarDetailsCard from '@/components/CarDetailsCard'
import CarImageDisplay from '@/components/CarImageDisplay'
import CarNotFound from '@/components/CarNotFound'
import { cars } from '@/types/CarType'
import React from 'react'


interface Props {
    params: Promise<{ model: string }>
  }
  
const page = ({params}: Props) => {
  const {model} = React.use(params)
  const car = cars.find(car => car.model.toLowerCase() === model.toLowerCase());
  if(!car){
    return <CarNotFound/>
  }

return (
    <div className='sm:p-[60px] p-[10px] w-full mx-auto place-items-center gap-2 text-black grid grid-cols-1 lg:grid-cols-2 bg-[#F6F7F9] '>
        <CarImageDisplay car={car}/>
        <CarDetailsCard car={car}/>
    </div>
  )
}

export default page
