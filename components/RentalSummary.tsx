import { Car } from '@/types/CarType'
import { RentalFormData } from '@/types/RentalFormData'
import { differenceInCalendarDays } from 'date-fns'
import Image from 'next/image'
import React from 'react'

type Props = {
    car: Car
    formData: RentalFormData
}

const RentalSummary = ({ car, formData }: Props) => {

    const calculateRentalPrice = () => {
        const pickupDateStr = formData.rentalPickupDate;
        const dropoffDateStr = formData.rentalDropoffDate;
        if(!pickupDateStr || !dropoffDateStr) return
        const differenceInDays = differenceInCalendarDays(dropoffDateStr, pickupDateStr) + 1;
        return differenceInDays * car.pricePerDay;
    }


    return (
        <div className='mx-auto rounded-xl font-semibold text-black bg-white p-4'>
            <div className='mb-5'>
                <h2 className='font-bold text-[20px]'>Rental Summary</h2>
                <div className='flex font-semibold text-[14px] text-[#90A3BF] justify-between'>
                    <span className='' >Prices may change depending on the length of the rental and the price of your rental car.</span>
                </div>
            </div>
            <div className='w-full flex gap-4 pb-12 border-b-1 border-[#C3D4E9] '>
                <div className='relative w-[200px] rounded-xl bg-blue-400 h-[130px]'>
                    <Image
                        src='/assets/ad 1.png'
                        alt='car image'
                        fill
                        className=' object-contain'
                    ></Image>
                </div>
                <div className='flex justify-center  items-start'>
                    <span className='text-black font-bold text-[36px]'>{car.model}</span>
                </div>
            </div>
            <div className='grid gap-5 border-b-1 py-5 border-[#C3D4E9] grid-cols-2 '>
                <div className='flex justify-between items-center'><span className='text-[#90A3BF]'>Car color</span> <span>{car.color}</span></div>
                <div className='flex justify-between items-center'><span className='text-[#90A3BF]'>Payment Method</span> <span>{formData.paymentMethod}</span></div>
                <div className='flex justify-between items-center'><span className='text-[#90A3BF]'>Pick-Up Location</span> <span>{formData.rentalPickupLocation}</span></div>
                <div className='flex justify-between items-center'><span className='text-[#90A3BF]'>Pick-up Date</span> <span>{formData.rentalPickupDate}</span></div>
                <div className='flex justify-between items-center'><span className='text-[#90A3BF]'>Drop-off Location</span> <span>{formData.rentalDropoffLocation}</span></div>
                <div className='flex justify-between items-center'><span className='text-[#90A3BF]'>Drop-off Date</span> <span>{formData.rentalDropoffDate}</span></div>
            </div>
            <div className='flex flex-col my-5 gap-5'>
                <div className='flex justify-between'>
                    <span className='text-[#90A3BF] text-[16px]'>Price per day</span>
                    <span className='text-[#1A202C]'>${car.pricePerDay.toFixed(2)}</span>
                </div>
                <div className='flex justify-between'>
                    <span className='text-[#90A3BF] text-[16px]'>Subtotal</span>
                    {calculateRentalPrice() && <span className='text-[#1A202C]'>${calculateRentalPrice()?.toFixed(2)}</span>}
                </div>
                <div className='flex justify-between'>
                    <span className='text-[#90A3BF] text-[16px]'>Tax</span>
                    <span className='text-[#1A202C]'>$0.00</span>
                </div>
                <div className='flex justify-between items-center'>                    
                    <input
                        type="text"
                        id="promocode"
                        name="promocode"
                        className={`font-normal bg-[#F6F7F9] px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder='Apply promo code'
                    />
                    <button type='button' className='btn btn-primary'>Apply</button>
                </div>
            </div>
            <div className=' items-center justify-between flex gap-5'>
                <div>
                    <div className='font-bold text-[20px] '>Total Rental Price</div>
                    <div className='text-[#90A3BF] text-[16px]'>Overall price and includes rental discount</div>
                </div>
                <div className='flex justify-between'>
                    <span className='font-bold text-[24px] text-[#1A202C]'>${calculateRentalPrice()?.toFixed(2)}</span>
                </div>
            </div>
        </div>
    )
}

export default RentalSummary

