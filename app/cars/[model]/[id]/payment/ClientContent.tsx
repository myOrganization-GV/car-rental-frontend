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
import { RentalFormError } from '@/types/RentalFormError';
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
  const [formErrors, setFormErrors] = useState<RentalFormError[]>([]);
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState<RentalFormData>({
    carId: car?.carId.toString(),
    carModel: car?.model,
  });

  const updateFormData = (data: any) => {
    setFormData(prevData => ({ ...prevData, ...data }));
  };



  const handleNextStep = async () => {
    if(currentStep === 1){
      if(!validateBillingForm(formData, setFormErrors)) {
        return
      }
      console.log("entering step 2")
    }
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
            errors={formErrors}
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

const validateBillingForm = (formData: RentalFormData, setFormErrors: React.Dispatch<React.SetStateAction<RentalFormError[]>>) =>{
  const newErrors: RentalFormError[] = [];
  if (!formData.name) {
    newErrors.push({ field: 'name', message: 'Name is required' });
  }
  if(formData.name && formData.name?.length <= 5) {
    newErrors.push({ field: 'name', message: 'Name is too short' })
  }
  if (!formData.city) {
    newErrors.push({ field: 'city', message: 'city is required' });
  }
  if(formData.city && formData.city?.length <= 2) {
    newErrors.push({ field: 'city', message: 'city is too short' })
  }

  if (!formData.address) {
    newErrors.push({ field: 'address', message: 'Address is required'});
  }

  if(!formData.zipCode){
    newErrors.push({ field: 'zipcode', message: 'Zipcode is required'});
  }

  if(formData.zipCode && !/^\d{5}-\d{3}$/.test(formData.zipCode)){
     newErrors.push({ field: 'zipcode', message: 'Invalid zipcode format (11111-111)' });
  } 
  setFormErrors(newErrors);
  return newErrors.length === 0;
}