"use client"
import { signupFormAction } from '@/lib/actions/signupFormAction';
import React, { useActionState } from 'react'

interface Props {
    formData: any;
    updateFormData: (data: any) => void;
}

const BillingForm = ({ formData, updateFormData }: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateFormData({ [e.target.name]: e.target.value });
    };

    return (
        <div className='mx-auto font-semibold text-black rounded-t-xl bg-white p-4'>
            <div className='mb-5'>
                <h2 className='font-bold text-[20px]'>Billing Info</h2>
                <div className='flex font-semibold text-[14px] text-[#90A3BF] justify-between'>
                    <span >Please enter your billing info</span>  
                    <span >Step 1 of 4</span>  
                </div>

            </div>
            <div className='grid gap-5 grid-cols-2'>
                <div className=''>
                    <label htmlFor="name" className="block text-sm  mb-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className={`w-full font-normal bg-[#F6F7F9] px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder='Name'
                        value={formData.name || ''} onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="address" className="block text-sm  mb-1">Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address || ''}
                        onChange={handleChange}
                        className={`w-full font-normal bg-[#F6F7F9] px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder='Address'
                    />
                </div>
                <div className='col-span-1'>
                    <label htmlFor="zipcode" className="block text-sm   mb-1">Zipcode</label>
                    <input
                        type="text"
                        id="zipcode"
                        name="zipcode"
                        className={`w-full font-normal bg-[#F6F7F9] px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        value={formData.zipcode || ''} onChange={handleChange}
                        placeholder='zipcode Code'
                    />
                </div>
                <div className='col-span-1'>
                    <label htmlFor="city" className="block text-sm   mb-1">City</label>
                    <input
                        type="text"
                        id="city"
                        name="city"
                        className={`w-full font-normal bg-[#F6F7F9] px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder='city'
                        value={formData.city || ''} onChange={handleChange}
                    />
                </div>

                {/*         <div className="mt-2 col-span-2 w-1/2 mx-auto">
            <button
                disabled={isPending}
                type="submit"
                className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition-colors"
            >
                {isPending ? <span className="loading  loading-spinner text-white"></span>
                    : "Sign Up"
                }
            </button>
            {state?.error && (
            <p className="text-red-500  text-center mt-2">{state?.error}</p>
        )}
        {state?.formErrors && state?.formErrors.length > 0 && (
            <ul className="text-red-500 text-center mt-2">
                {state?.formErrors?.map((e, i) => (
                    <li key={i}>{e}</li>
                ))}
            </ul>
        )}
        {state?.success && (
            <p className="text-green-600 mt-2">Registration successful!</p>
        )}

        </div>
         */}
            </div>
        </div>
    )
}

export default BillingForm