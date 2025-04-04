import Car from '@/types/CarType'
import React from 'react'
import CarCard from './CarCard'

type Props = {
    cars: Car[]
}

const CarGrid = ({cars}: Props) => {
  return (
    <div className='grid gap-16 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4'>
       {cars.map(car => <CarCard key={car.model} car={car} />)}
    </div>
  )
}

export default CarGrid