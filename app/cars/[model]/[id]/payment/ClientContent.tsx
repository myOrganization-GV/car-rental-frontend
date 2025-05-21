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
    if (currentStep === 1) {
      if (!validateBillingForm(formData, setFormErrors)) {
        return
      }
    }
    if (currentStep === 2) {
      if (!validateRentalInfoForm(formData, setFormErrors)) {
        return
      }
    }

    if (currentStep === 3) {
      if(!formData.paymentMethod) return
    }

    if (currentStep === 3 && formData.paymentMethod === "Credit Card") {
      try {
        const token = await createCardToken({ cardholderName: "Test CardHolder" })
        updateFormData({ token: token?.id })
      }catch(error: any){
        if(!Array.isArray(error))return 

        const newErrors: RentalFormError[] = [];
        (error as Array<RentalFormError>).forEach(err => {
          newErrors.push({field: err.field, message: err.message})
        })
        setFormErrors(newErrors);
        return
      }

      if(!formData.token)return
    }

    if(formData.paymentMethod === "Pix"){
      if(!validatePixPaymentForm(formData, setFormErrors)) return
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
  console.log(formData.token)
  return (
    <div className='sm:p-[60px] p-[10px] w-full mx-auto place-items-center gap-8 text-black grid grid-cols-1 lg:grid-cols-2 bg-[#F6F7F9] '>
      <form action={action} className='w-full h-full'>
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
            errors={formErrors}
          />
        )}

        {currentStep === 3 && (
          <PaymentForm formData={formData}
            updateFormData={updateFormData} errors={formErrors} />
        )}
        {currentStep === 4 && (
          <RentalConfirmationForm formData={formData}
            updateFormData={updateFormData} />
        )}
        <div className="flex justify-between mx-auto p-4 rounded-b-xl bg-white">
          {(
            <button disabled={currentStep <= 1} type="button" onClick={handlePrevStep} className="btn  cursor-pointer p-2 font-semibold">
              Back
            </button>
          )}
          {(currentStep < totalSteps) && (
            <button type="button" onClick={handleNextStep} className="cursor-pointer btn btn-primary">
              Next
            </button>
          )}

          {(currentStep == totalSteps) && (
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

const validateBillingForm = (formData: RentalFormData, setFormErrors: React.Dispatch<React.SetStateAction<RentalFormError[]>>) => {
  const newErrors: RentalFormError[] = [];
  if (!formData.name) {
    newErrors.push({ field: 'name', message: 'Name is required' });
  }
  if (formData.name && formData.name?.length <= 5) {
    newErrors.push({ field: 'name', message: 'Name is too short' })
  }
  if (!formData.city) {
    newErrors.push({ field: 'city', message: 'city is required' });
  }
  if (formData.city && formData.city?.length <= 2) {
    newErrors.push({ field: 'city', message: 'city is too short' })
  }

  if (!formData.address) {
    newErrors.push({ field: 'address', message: 'Address is required' });
  }

  if (!formData.zipCode) {
    newErrors.push({ field: 'zipcode', message: 'Zipcode is required' });
  }

  if (formData.zipCode && !/^\d{5}-\d{3}$/.test(formData.zipCode)) {
    newErrors.push({ field: 'zipcode', message: 'Invalid zipcode format (11111-111)' });
  }
  setFormErrors(newErrors);
  return newErrors.length === 0;
}

const validateRentalInfoForm = (formData: RentalFormData, setFormErrors: React.Dispatch<React.SetStateAction<RentalFormError[]>>) => {
  const newErrors: RentalFormError[] = [];
  if (!formData.rentalPickupDate) {
    newErrors.push({ field: 'rentalPickupDate', message: 'Pick up date is required' });
  }
  if (!formData.rentalDropoffDate) {
    newErrors.push({ field: 'rentalDropoffDate', message: 'Drop off date is required' });
  }
  if (!formData.rentalPickupLocation) {
    newErrors.push({ field: 'rentalPickupLocation', message: 'Pick up location is required' });
  }
  if (!formData.rentalDropoffLocation) {
    newErrors.push({ field: 'rentalDropoffLocation', message: 'Drop off location is required' });
  }

  if (formData.rentalPickupDate && formData.rentalDropoffDate) {
    const pickupDate = new Date(formData.rentalPickupDate);
    const dropoffDate = new Date(formData.rentalDropoffDate);

    pickupDate.setHours(0, 0, 0, 0);
    dropoffDate.setHours(0, 0, 0, 0);

    const differenceInMilliseconds = dropoffDate.getTime() - pickupDate.getTime();
    const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
    if (differenceInMilliseconds < oneDayInMilliseconds) {
      newErrors.push({
        field: 'rentalDropoffDate',
        message: 'Drop off date must be at least one day after pick up date'
      });
    }
  }
  setFormErrors(newErrors);
  return newErrors.length === 0;
}

const validatePixPaymentForm = (formData: RentalFormData, setFormErrors: React.Dispatch<React.SetStateAction<RentalFormError[]>>) => {
  const newErrors: RentalFormError[] = [];
  if (!formData.payerEmail) {
    newErrors.push({ field: 'payerEmail', message: 'Payer email is required' });
  }
  if (!formData.payerFirstName) {
    newErrors.push({ field: 'payerFirstName', message: 'Payer first name is required' });
  }
  if (!formData.payerLastName) {
    newErrors.push({ field: 'payerLastName', message: 'Payer Last name is required' });
  }

  if (formData.payerEmail && !isValidEmail(formData.payerEmail)) {
    newErrors.push({ field: 'payerEmail', message: 'Invalid email format' });
  }

  if (!formData.payerIdentificationNumber) {
    newErrors.push({ field: 'payerIdentificationNumber', message: 'CPF is required' });
  } 
  
  if(formData.payerIdentificationNumber){
    const cleanedCPF = formData.payerIdentificationNumber.replace(/[^\d]/g, ''); 

    if (cleanedCPF.length !== 11) {
      newErrors.push({ field: 'payerIdentificationNumber', message: 'CPF must have 11 digits' });
    } else if (!isValidCPF(cleanedCPF)) { 
      newErrors.push({ field: 'payerIdentificationNumber', message: 'Invalid CPF number' });
    }
  }


  setFormErrors(newErrors);
  return newErrors.length === 0;
}

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const isValidCPF = (cpf: string): boolean => {
  cpf = cpf.replace(/[^\d]/g, "");

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false;
  }

  let sum = 0;
  let remainder: number;

  for (let i = 1; i <= 9; i++) {
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  }
  remainder = (sum * 10) % 11;

  if ((remainder === 10) || (remainder === 11)) {
    remainder = 0;
  }
  if (remainder !== parseInt(cpf.substring(9, 10))) {
    return false;
  }

  sum = 0;
  for (let i = 1; i <= 10; i++) {
    sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  }
  remainder = (sum * 10) % 11;

  if ((remainder === 10) || (remainder === 11)) {
    remainder = 0;
  }
  if (remainder !== parseInt(cpf.substring(10, 11))) {
    return false;
  }

  return true;
}