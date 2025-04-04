import Image from 'next/image'
import React from 'react'

type Props = {}
type Car = {
    model: string,
    price: number,
    category: string,
    manufactorer: string,
    color: string,
    transmissionType: string,
    numberOfSeats: number,
}
const CarCard = (props: Props) => {
    const car: Car = {
        model: 'Camry',
        price: 99.00,
        category: 'SEDAN',
        manufactorer: 'Toyota',
        color: 'Silver',
        transmissionType: 'Automatic',
        numberOfSeats: 5,
    };

    return (
        <div className='rounded-lg relative flex flex-col justify-between p-5 w-[300px] bg-amber-200 h-[380px]'>
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
                    <span>{car.transmissionType}</span>
                    <span>{car.numberOfSeats} people</span>
                </div>
                <div className='flex w-full justify-between items-center'>
                    <span className='font-semibold text-2xl text-black'>${car.price.toFixed(2)}/<span className='font-normal text-xl text-[#90A3BF]'>day</span> </span>
                    <button className="btn btn-primary">Rent Now</button>
                </div>
            </div>
        </div>
    )
}

export default CarCard