import { RentalFormData, UpdateRentalFormData } from '@/types/RentalFormData';
import { RentalFormError } from '@/types/RentalFormError';
import { before } from 'node:test';
import React, { useState } from 'react'
import { DayPicker, SelectSingleEventHandler } from "react-day-picker";


interface Props {
    formData: RentalFormData;
    updateFormData: UpdateRentalFormData;
    errors: RentalFormError[]
}

const RentalInfoForm = ({ formData, updateFormData, errors }: Props) => {

    const today = new Date();
    const todayISOString = today.toISOString().split('T')[0];
    let minDropoffDate: string | undefined;
    if (formData.rentalPickupDate) {
        const pickupDateObj = new Date(formData.rentalPickupDate + 'T00:00:00'); 
        pickupDateObj.setDate(pickupDateObj.getDate() + 1);
        minDropoffDate = pickupDateObj.toISOString().split('T')[0];
    } else {
        minDropoffDate = todayISOString;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        updateFormData({ [e.target.name]: e.target.value });
    };
    const [pickupDate, setPickupDate] = useState<Date | undefined>(
        formData.rentalPickupDate ? new Date(formData.rentalPickupDate) : undefined
    );
    const [dropoffDate, setDropoffDate] = useState<Date | undefined>(
        formData.rentalDropoffDate ? new Date(formData.rentalDropoffDate) : undefined
    );

    const locations = [
        "New York, NY",
        "Los Angeles, CA",
        "Chicago, IL",
        "Houston, TX",
        "Phoenix, AZ",
    ];

    return (
        <div className='mx-auto font-semibold text-black bg-white p-4'>
            <div className='mb-5'>
                <h2 className='font-bold text-[20px]'>Rental Info</h2>
                <div className='flex font-semibold text-[14px] text-[#90A3BF] justify-between'>
                    <span >Please select your rental date</span>
                    <span >Step 2 of 4</span>
                </div>
            </div>
            <div className='mb-3'>
                Pick-Up
            </div>
            <div className='grid gap-5 grid-cols-2'>
                <div>
                    <label htmlFor="rentalPickupLocation" className="block text-sm mb-1">Pickup Location</label>
                    <select
                        id="rentalPickupLocation"
                        name="rentalPickupLocation"
                        className={`select flex items-center select-bordered w-full font-normal bg-[#F6F7F9] px-2 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        value={formData.rentalPickupLocation || ''}
                        onChange={handleChange}
                    >

                        <option value="" disabled>Select one pickup unit location</option>
                        {locations.map((location, index) => (
                            <option key={index} value={location}>
                                {location}
                            </option>
                        ))}
                    </select>
                    {errors.find(error => error.field === "rentalPickupLocation") && <p className="text-red-600">{errors.find(error => error.field === 'rentalPickupLocation')?.message}</p>}
                </div>
                <div className=''>
                    <label htmlFor="rentalPickupDate" className="block text-sm mb-1"> Pick-Up Date</label>
                    <input
                        data-theme="light"
                        type="date"
                        id="rentalPickupDate"
                        name="rentalPickupDate"
                        className={`w-full font-normal bg-[#F6F7F9] px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        value={formData.rentalPickupDate || ''} onChange={handleChange}
                        min={todayISOString}
                    />
                    {errors.find(error => error.field === "rentalPickupDate") && <p className="text-red-600">{errors.find(error => error.field === 'rentalPickupDate')?.message}</p>}
                </div>

            </div>
            <div className='mb-3 mt-5'>
                Drop-Off
            </div>
            <div className='grid  gap-5 grid-cols-2'>
                <div>
                    <label htmlFor="rentalDropoffLocation" className="block text-sm mb-1">Dropoff Location</label>
                    <select
                        id="rentalDropoffLocation"
                        name="rentalDropoffLocation"
                        className={`select select-bordered w-full font-normal bg-[#F6F7F9] px-2 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        value={formData.rentalDropoffLocation || ''}

                        onChange={handleChange}
                    >
                        <option value="" disabled>Select one unit dropoff location</option>

                        {locations.map((location, index) => (
                            <option key={index} value={location}>
                                {location}
                            </option>
                        ))}
                    </select>
                     {errors.find(error => error.field === "rentalDropoffLocation") && <p className="text-red-600">{errors.find(error => error.field === 'rentalDropoffLocation')?.message}</p>}
                </div>
                <div data-theme="light">
                    <label htmlFor="rentalDropoffDate" className="block text-sm mb-1"> Drop-Off Date</label>
                    <input
                        data-theme="light"
                        type="date"
                        id="rentalDropoffDate"
                        name="rentalDropoffDate"
                        min={minDropoffDate}
                        className={`w-full font-normal bg-[#F6F7F9] px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        value={formData.rentalDropoffDate || ''} onChange={handleChange}
                    />
                    {errors.find(error => error.field === "rentalDropoffDate") && <p className="text-red-600">{errors.find(error => error.field === 'rentalDropoffDate')?.message}</p>}
                </div>

            </div>
        </div>
    )
}

export default RentalInfoForm