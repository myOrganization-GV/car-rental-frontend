"use client"
import { Car } from '@/types/CarType'
import Link from 'next/link'
import React, { useState } from 'react'
type Props = {
    cars: Car[]
}

const CarDetailsCard = ({ cars }: Props) => {
    const colors = cars.map(car => car.color);
    const car = cars[0]
    const [selectedColor, setSelectedColor] = useState<string | null>(car.color)
    const [selectedCar, setSelectedCar] = useState<Car>(car)

    const handleClick = (color: string) =>{
        setSelectedColor(color)
        const foundCar = cars.find(car => car.color === color)
        if(foundCar) {
            setSelectedCar(foundCar)
        }
    }



    return (
        <div className='rounded-xl self-start sm:flex text-black w-[315px] relative flex-col gap-5 p-5 sm:w-[450px] h-full bg-white'>
            <div className='flex flex-col text-black gap-1 w-full'>
                <span className='font-bold text-[32px]'>{car.model}</span>
            </div>
            <span className='text-[20px] text-[#596780]'>{car.description}</span>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 text-[#90A3BF] w-full'>
                <div className="flex  justify-between items-center">
                    Category <span className='text-[#596780]'>{car.category}</span>
                </div>
                <div className="flex text-[#90A3BF] justify-between items-center">
                    Capacity <span className='text-[#596780]'>{car.numberOfSeats} seats</span>
                </div>
                <div className="flex  justify-between items-center">
                    Transmission <span className='text-[#596780]'>{car.transmissionType}</span>
                </div>
                <div className="flex text-[#90A3BF] justify-between items-center">
                    Manufacturer <span className='text-[#596780]'>{car.manufacturer}</span>
                </div>
            </div>
            <div className=' flex-wrap flex gap-x-2 w-full h-14'>
                <div className='w-full text-[#596780]'>Select a color: </div>
                {colors.map(color => {
                    const isActive = color === selectedColor
                    return (
                        <button
                            key={color}
                            onClick={() => handleClick(color)}
                            aria-label={`Select ${color}`}
                            className={`
                w-6 h-6 rounded-full border cursor-pointer 
                ${isActive ? 'border-2 border-blue-300' : 'border-black'}
              `}
                            style={{ backgroundColor: color }}
                        />
                    )
                })}
            </div>
            <div className='flex w-full justify-between items-center'>
                <span className='font-semibold text-xl text-black'>${car.pricePerDay.toFixed(2)}/<span className='font-normal text-xl text-[#90A3BF]'>day</span> </span>
                <Link href={{pathname: `/cars/${car.model}/${selectedCar?.carId}/payment`}} className="btn btn-primary">Rent Now</Link>
            </div>
        </div>
    )
}

export default CarDetailsCard