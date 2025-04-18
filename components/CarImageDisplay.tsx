"use client"
import { Car } from '@/types/CarType'
import Image from 'next/image'
import { motion, easeInOut, useAnimate } from 'motion/react'
import React, { useRef, useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

type Props = {
    car: Car
}

const CarImageDisplay = ({ car }: Props) => {
    const [x, setX] = useState(0);
    const scrollAmount = 166;
    const handleNextButton = () => {
        if(x <= -scrollAmount*3) return
        setX(prev => prev - scrollAmount);
    };

    const handlePrevButton = () => {
        if (x === 0) return
        setX(prev => prev + scrollAmount);
    };

    const thumbs = [
        'red', 'green', 'blue',
        'orange', 'purple', 'teal'
    ];


    return (
        <div className='gap-2 sm:gap-5 flex flex-col justify-center items-center  w-[480px]'>
            <div className="relative w-[315px] h-[280px] sm:w-[480px] sm:h-[350px]">
                <Image
                    src='/assets/preview.png'
                    alt='car image'
                    fill
                    className=' object-contain'
                ></Image>
            </div>
            <div className=' sm:w-full w-[315px] relative overflow-hidden flex'>
                <div className='absolute z-10 left-0 top-1/2 -translate-y-1/2'>
                    <button onClick={handlePrevButton}><FaArrowAltCircleLeft color='#3563E9' className='w-6 cursor-pointer  h-6' /></button>
                </div>
                <div className='absolute z-10 right-0  top-1/2 -translate-y-1/2'>
                    <button onClick={handleNextButton}><FaArrowAltCircleRight
                        color='#3563E9'
                        className='w-6 cursor-pointer h-6' /></button>
                </div>
                <motion.div
                    animate={{ x }}
                    transition={{ duration: 0.5, ease: easeInOut }}
                    className='flex gap-4 justify-between'>
                    <div  className="relative  w-[150px] h-[100px]">
                        <Image
                            src='/assets/previewSmall.png'
                            alt={`car preview`}
                            fill
                            className="object-cover cursor-pointer rounded-xl"
                        />
                    </div>
                    <div  className="relative w-[150px] h-[100px]">
                        <Image
                            src='/assets/previewSmall.png'
                            alt={`car preview`}
                            fill
                            className="object-cover cursor-pointer rounded-xl"
                        />
                    </div>
                    <div  className="relative w-[150px] h-[100px]">
                        <Image
                            src='/assets/previewSmall.png'
                            alt={`car preview`}
                            fill
                            className="object-cover cursor-pointer rounded-xl"
                        />
                    </div>
                    <div  className="relative w-[150px] h-[100px]">
                        <Image
                            src='/assets/previewSmall.png'
                            alt={`car preview`}
                            fill
                            className="object-cover cursor-pointer rounded-xl"
                        />
                    </div>
                    <div  className="relative w-[150px] h-[100px]">
                        <Image
                            src='/assets/previewSmall.png'
                            alt={`car preview`}
                            fill
                            className="object-cover cursor-pointer rounded-xl"
                        />
                    </div>
                    <div  className="relative w-[150px] h-[100px]">
                        <Image
                            src='/assets/previewSmall.png'
                            alt={`car preview`}
                            fill
                            className="object-cover cursor-pointer rounded-xl"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default CarImageDisplay