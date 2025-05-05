"use client"
import BillingForm from '@/components/BillingForm';
import CarNotFound from '@/components/CarNotFound';
import PaymentForm from '@/components/PaymentForm';
import RentalConfirmationForm from '@/components/RentalConfirmationForm';
import RentalInfoForm from '@/components/RentalInfoForm';
import RentalSummary from '@/components/RentalSummary';
import { paymentFormAction } from '@/lib/actions/paymentFormAction';
import { Car } from '@/types/CarType';
import { RentalFormData } from '@/types/RentalFormData';
import { createCardToken } from '@mercadopago/sdk-react';

import React, { useActionState, useState } from 'react'

interface Props {
  car: Car
}


const initialState: {
  message: string | null;
  errors: Record<string, string[]> | null;
} = {
  message: null,
  errors: null,
};

const totalSteps = 4;

const ClientContent = ({ car }: Props) => {
  const [state, action, isPending] = useActionState(paymentFormAction, undefined);
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState<RentalFormData>({
    carId: car?.carId.toString(),
    carModel: car?.model,
  });

  const updateFormData = (data: any) => {
    setFormData(prevData => ({ ...prevData, ...data }));
  };


  const handleNextStep = async () => {
    if(formData.paymentMethod === "Credit Card") {
      const token = await createCardToken({cardholderName: "Test CardHolder"})
      console.log(token)
      updateFormData({token: token?.id})
    }

    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };


  return (
    <div className='sm:p-[60px] p-[10px] w-full mx-auto place-items-center gap-8 text-black grid grid-cols-1 lg:grid-cols-2 bg-[#F6F7F9] '>
      <form action={action} className='w-full h-screen'>

        {Object.entries(formData).map(([key, value]) => (
          value !== undefined && value !== null && (
            <input
              key={key}
              type="hidden"
              name={key}
              value={String(value)}
            />
          )
        ))}


        {currentStep === 1 && (
          <BillingForm
            formData={formData}
            updateFormData={updateFormData}
          />
        )}
        {currentStep === 2 && (
          <RentalInfoForm
            formData={formData}
            updateFormData={updateFormData}
          />
        )}
        
        {currentStep === 3 && (
          <PaymentForm formData={formData}
           updateFormData={updateFormData} />
        )}
        {currentStep === 4 && (
          <RentalConfirmationForm formData={formData}
           updateFormData={updateFormData} />
        )}
        <div className="flex justify-between mx-auto p-4 rounded-xl bg-white">
          {(
            <button disabled={currentStep <= 1} type="button" onClick={handlePrevStep} className="btn  cursor-pointer p-2 font-semibold">
              Back
            </button>
          )}
          {(currentStep < totalSteps ) && (
            <button type="button" onClick={handleNextStep} className="cursor-pointer btn btn-primary">
              Next
            </button>
          )} 
          
          {(currentStep == totalSteps ) && (
            <button type="submit" disabled={isPending} className="bg-blue-600 hover:bg-blue-700 text-white p-2 cursor-pointer rounded-md font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              {isPending ? 'Processing...' : 'Complete Rental'}
            </button>
          )}
        </div>
      </form>
      <div className='w-full h-full rounded-xl bg-white'>
        <RentalSummary car={car} formData={formData} />
      </div>
    </div>
  )
}

export default ClientContent