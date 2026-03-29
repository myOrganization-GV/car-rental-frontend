"use client"
import BillingForm from '@/components/BillingForm';
import PaymentForm from '@/components/PaymentForm';
import { getPixDetails } from '@/components/PixDetailsData';
import PixLinkDisplay from '@/components/PixLinkDisplay';
import PixQRCodeImage from '@/components/PixQRCodeImage';
import RentalConfirmationForm from '@/components/RentalConfirmationForm';
import RentalInfoForm from '@/components/RentalInfoForm';
import RentalSummary from '@/components/RentalSummary';
import { defaultRentalFormData } from '@/constants/InitialRentFormData';
import { paymentFormAction } from '@/lib/actions/paymentFormAction';
import { Car } from '@/types/CarType';
import { RentalFormData } from '@/types/RentalFormData';
import { RentalFormError } from '@/types/RentalFormError';
import { createCardToken } from '@mercadopago/sdk-react';
import { useRouter } from 'next/navigation';

import React, { useActionState, useEffect, useState } from 'react'

interface Props {
  car: Car
}

type ActionState = Awaited<ReturnType<typeof paymentFormAction>>;



const totalSteps = 4;

const ClientContent = ({ car }: Props) => {
  const [state, action, isPending] = useActionState<ActionState | undefined, FormData>(paymentFormAction, undefined);
  const [formErrors, setFormErrors] = useState<RentalFormError[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoadingPixDetails, setIsLoadingPixDetails] = useState(false);
  const [pixError, setPixError] = useState<string | null>(null);
  const [pixPaymentDetails, setPixPaymentDetails] = useState<{
    qrCodeBase64: string;
    qrCode: string;
    sagaId: string;
  } | null>(null);

  const router = useRouter();
  const [redirectCount, setRedirectCount] = useState(5);
  const hasSubmitted = !!state && !state?.errors && state?.paymentMethod !== 'Pix';


  useEffect(() => {
    if (!hasSubmitted) return;
    if (redirectCount <= 0) {
      router.push('/');
      return;
    }
    const timer = setTimeout(() => setRedirectCount(prev => prev - 1), 1000);
    return () => clearTimeout(timer);
  }, [hasSubmitted, redirectCount, router]);

  const [formData, setFormData] = useState<RentalFormData>({
    carId: car?.carId.toString(),
    carModel: car?.model, ...defaultRentalFormData
  });

  useEffect(() => {
    if (!state?.sagaId) return
    let isCancelled = false;
    const maxAttempts = 6;
    let attempts = 0;

    const pollPixDetails = async () => {
      setIsLoadingPixDetails(true)
      while (attempts < maxAttempts && !isCancelled) {
        try {
          console.log(`Attempt at fetching pix details: ${attempts + 1}`)
          setIsLoadingPixDetails(true);
          const result = await getPixDetails(state.sagaId);

          if (result.data) {
            setPixPaymentDetails({
              qrCodeBase64: result.data.qrCodeBase64,
              qrCode: result.data.qrCode,
              sagaId: result.data.sagaId,
            });
            setIsLoadingPixDetails(false)
            return;
          }
        } catch (error) {
          console.error("Polling error:", error);
          setPixError("Failed to fetch PIX details");
        }
        await new Promise(resolve => setTimeout(resolve, 3000));
        attempts++;
      }
      if (!isCancelled && attempts >= maxAttempts) {

        setPixError("Timeout: Unable to fetch PIX details after 30 seconds.");
      }

      setIsLoadingPixDetails(false);
    };

    pollPixDetails();
    return () => {
      isCancelled = true;
    };
  }, [state]);


  const updateFormData = (data: Partial<RentalFormData>) => {
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

    if (currentStep === 3 && !formData.paymentMethod) {
      return
    }

    if (currentStep === 3 && formData.paymentMethod === "Credit Card") {
      let token;
      try {
        token = await createCardToken({ cardholderName: formData.name })
        updateFormData({ cardToken: token?.id })
      } catch (error: unknown) {
        if (!Array.isArray(error)) return
        const newErrors: RentalFormError[] = [];
        error.filter(isRentalFormError).forEach(err => {
          newErrors.push({ field: err.field, message: err.message })
        })
        setFormErrors(newErrors);
        return
      }
      if (!token) return;
    }

    if (formData.paymentMethod === "Pix") {
      if (!validatePixPaymentForm(formData, setFormErrors)) return
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
      {!(state?.sagaId && state?.paymentMethod === 'Pix') && !pixPaymentDetails && <form action={action} className='w-full h-full'>
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
            updateFormData={updateFormData} errors={formErrors}
            isPending={isPending}
            state={state} />
        )}
        <div className="flex justify-between mx-auto p-4 rounded-b-xl bg-white">
          {!hasSubmitted && (
            <button
              disabled={currentStep <= 1 || isPending || isLoadingPixDetails}
              type="button"
              onClick={handlePrevStep}
              className="btn cursor-pointer p-2 font-semibold disabled:opacity-30"
            >
              Back
            </button>
          )}

          {!hasSubmitted && currentStep < totalSteps && (
            <button type="button" onClick={handleNextStep} className="cursor-pointer btn btn-primary">
              Next
            </button>
          )}

          {!hasSubmitted && currentStep === totalSteps && (
            <button
              type="submit"
              disabled={isPending || isLoadingPixDetails}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 cursor-pointer rounded-md font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending || isLoadingPixDetails ? 'Processing...' : 'Complete Rental'}
            </button>
          )}

          {hasSubmitted && (
            <div className="w-full flex items-center justify-center gap-2 text-[14px] text-[#90A3BF]">
              <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
              Redirecting you to the home page in
              <span className="font-bold text-blue-600">{redirectCount}s</span>
            </div>
          )}
        </div>
      </form>}
      {state?.sagaId && state?.paymentMethod === 'Pix' && !pixPaymentDetails && (
        <div className='w-full h-full p-6 bg-white rounded-xl flex flex-col items-center justify-center gap-4 text-center'>
          {!pixError && (
            <>
              <div className='w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center'>
                <div className='w-7 h-7 border-4 border-blue-600 border-t-transparent rounded-full animate-spin' />
              </div>
              <div>
                <h2 className='font-bold text-[18px]'>Preparing your PIX payment</h2>
                <p className='text-[13px] text-[#90A3BF] mt-1 max-w-xs'>
                  Your rental request was received! We&apos;re generating your QR code, this should only take a few seconds...
                </p>
              </div>
              <div className='flex flex-col gap-2 w-full max-w-xs'>
                {['Rental request confirmed', 'Initiating PIX transaction', 'Generating QR code...'].map((step, i) => (
                  <div key={i} className='flex items-center gap-2 text-[13px] text-[#90A3BF] bg-[#F6F7F9] px-4 py-2 rounded-md'>
                    {i < 2
                      ? <div className='w-3 h-3 rounded-full bg-green-500 shrink-0' />
                      : <div className='w-3 h-3 border-2 border-blue-400 border-t-transparent rounded-full animate-spin shrink-0' />}
                    {step}
                  </div>
                ))}
              </div>
            </>
          )}
          {pixError && (
            <div className='flex flex-col items-center gap-3'>
              <div className='w-12 h-12 rounded-full bg-red-100 flex items-center justify-center'>
                <svg className='w-6 h-6 text-red-500' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M6 18L18 6M6 6l12 12' />
                </svg>
              </div>
              <h2 className='font-bold text-[18px]'>Something went wrong</h2>
              <p className='text-[13px] text-[#90A3BF] max-w-xs'>{pixError}</p>
              <p className='text-[12px] text-[#90A3BF]'>Your rental was confirmed — contact support with your request ID.</p>
              <p className='text-[12px] font-mono bg-[#F6F7F9] px-3 py-1 rounded-md text-[#90A3BF]'>
                Request ID: {state.sagaId}
              </p>
            </div>
          )}
        </div>
      )}
      {pixPaymentDetails && (
        <div className='w-full h-full p-4 bg-white rounded-xl'>
          <PixQRCodeImage base64={pixPaymentDetails.qrCodeBase64} />
          <PixLinkDisplay qrCode={pixPaymentDetails.qrCode} />
        </div>
      )}
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

  if (formData.payerIdentificationNumber) {
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
const isRentalFormError = (value: unknown): value is RentalFormError => {
  return (
    typeof value === 'object' &&
    value !== null &&
    'field' in value &&
    'message' in value &&
    typeof value.field === 'string' &&
    typeof value.message === 'string'
  );
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
