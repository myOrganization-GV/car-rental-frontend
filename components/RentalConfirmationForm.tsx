import { RentalFormData, UpdateRentalFormData } from '@/types/RentalFormData';
import Image from 'next/image';
import React from 'react'


interface Props {
  formData: RentalFormData;
  updateFormData: UpdateRentalFormData;
}


const RentalConfirmationForm = ({ formData, updateFormData, }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    updateFormData({ [e.target.name]: e.target.value });
  };

  return (
    <div className='mx-auto flex flex-col rounded-t-xl gap-4 font-semibold text-black bg-white p-4'>
      <div className='mb-5'>
        <h2 className='font-bold text-[20px]'>Confirmation</h2>
        <div className='flex font-semibold text-[14px] text-[#90A3BF] justify-between'>
          <span >We are getting to the end. Review your info and your rental is ready!</span>
          <span >Step 4 of 4</span>
        </div>
      </div>
      <div className="flex bg-[#F6F7F9] rounded-md py-2 px-4 items-center">
        <input

          type="checkbox"
          id="marketing"
          name="marketing"
          className="h-4 w-4 mt-1 text-blue-600 border-gray-300 rounded"
        />
        <label htmlFor="marketing" className="ml-2 text-sm  font-semibold">
          I agree with sending an Marketing and newsletter emails. No spam, promissed!
        </label>
      </div>
      <div className="flex bg-[#F6F7F9] rounded-md py-2 px-4 items-start">
        <input

          type="checkbox"
          id="terms"
          name="terms"
          className="h-4 bg-white w-4 mt-1 text-blue-600 border-gray-300 rounded"
        />
        <label htmlFor="terms" className="ml-2 text-sm  font-semibold">
          I agree with our terms and conditions and privacy policy.
        </label>
      </div>
    </div>
  )
}

export default RentalConfirmationForm