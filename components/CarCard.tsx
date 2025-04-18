import {Car} from '@/types/CarType'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { GiGearStickPattern } from 'react-icons/gi'
import { PiSeatbeltDuotone } from 'react-icons/pi'

type Props = {
    car: Car
}

const CarCard = ({car}: Props) => {
    return (
        <div className='rounded-lg relative flex flex-col justify-between p-5 w-full  h-[380px] bg-white'>
            <div className='flex flex-col text-black gap-1 w-full'>
                <span className='font-bold text-[20px]'>{car.model}</span>
                <span className=' font-bold text-[#90A3BF] text-[14px]'>{car.category}</span>
            </div>
            <Image
                src='/assets/car.png'
                alt='car image'
                width={300}
                height={380}
                className=' object-contain'
            ></Image>
            <div className='flex flex-col items-center gap-3 text-[#90A3BF] w-full'>
                <div className=' flex justify-around text-[#90A3BF] w-full'>
                    <span className="flex items-center">
                        <GiGearStickPattern className="mr-1" /> {car.transmissionType}
                    </span>
                    <span className="flex items-center">
                        <PiSeatbeltDuotone className="mr-1" /> {car.numberOfSeats} seats
                    </span>
                </div>
                <div className='flex w-full justify-between items-center'>
                    <span className='font-semibold text-xl text-black'>${car.price.toFixed(2)}/<span className='font-normal text-xl text-[#90A3BF]'>day</span> </span>
                    <Link href={`/cars/${car.model}`} className="btn btn-primary">Rent Now</Link>
                </div>
            </div>
        </div>
    )
}

export default CarCard