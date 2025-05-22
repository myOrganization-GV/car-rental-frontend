import { RentalFormData, UpdateRentalFormData } from '@/types/RentalFormData';
import { RentalFormError } from '@/types/RentalFormError';
import Image from 'next/image';
import React from 'react'


interface Props {
  formData: RentalFormData;
  updateFormData: UpdateRentalFormData;
  errors: RentalFormError[]
}


const RentalConfirmationForm = ({ formData, updateFormData, errors }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    updateFormData({ [name]: type === 'checkbox' ? checked : value });
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
      <div className="flex bg-[#F6F7F9] rounded-md justify-center py-2 px-4 items-center">
          <div>
            We're really close, remember to review your rental and you are ready to confirm your payment!
          </div>
      </div>
    </div>
  )
}

export default RentalConfirmationForm