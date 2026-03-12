import { paymentFormAction } from '@/lib/actions/paymentFormAction';
import { RentalFormData, UpdateRentalFormData } from '@/types/RentalFormData';
import { RentalFormError } from '@/types/RentalFormError';
import React from 'react';

type ActionState = Awaited<ReturnType<typeof paymentFormAction>>;
interface Props {
  formData: RentalFormData;
  updateFormData: UpdateRentalFormData;
  errors: RentalFormError[];
  isPending?: boolean;
  state?: ActionState;
}

const RentalConfirmationForm = ({ formData, updateFormData, errors, isPending, state }: Props) => {
  const hasSubmitted = !!state?.sagaId || (!!state && !state.errors);
  const hasError = !!state?.errors;

  if (isPending) {
    return (
      <div className='mx-auto flex flex-col rounded-t-xl gap-4 font-semibold text-black bg-white p-4 min-h-[200px] items-center justify-center'>
        <div className='flex flex-col items-center gap-3 py-8'>
          <div className='w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin' />
          <p className='text-[16px] font-semibold text-[#90A3BF]'>Sending your rental request...</p>
        </div>
      </div>
    );
  }

  if (hasSubmitted && !hasError) {
    return (
      <div className='mx-auto flex flex-col rounded-t-xl gap-4 font-semibold text-black bg-white p-4 min-h-[200px] items-center justify-center'>
        <div className='flex flex-col items-center gap-3 py-8 text-center'>
          <div className='w-14 h-14 rounded-full bg-green-100 flex items-center justify-center'>
            <svg className='w-7 h-7 text-green-600' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2.5} d='M5 13l4 4L19 7' />
            </svg>
          </div>
          <h2 className='font-bold text-[20px] text-green-700'>Request Received!</h2>
          <p className='text-[14px] text-[#90A3BF] max-w-xs'>
            Your rental request has been sent. Our system is processing it — you'll receive a confirmation shortly.
          </p>
          {state?.sagaId && (
            <p className='text-[12px] text-[#90A3BF] font-mono bg-[#F6F7F9] px-3 py-1 rounded-md'>
              Request ID: {state.sagaId}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className='mx-auto flex flex-col rounded-t-xl gap-4 font-semibold text-black bg-white p-4'>
      <div className='mb-5'>
        <h2 className='font-bold text-[20px]'>Confirmation</h2>
        <div className='flex font-semibold text-[14px] text-[#90A3BF] justify-between'>
          <span>We are getting to the end. Review your info and your rental is ready!</span>
          <span>Step 4 of 4</span>
        </div>
      </div>
      <div className='flex bg-[#F6F7F9] rounded-md justify-center py-2 px-4 items-center'>
        <div>
          We're really close, remember to review your rental and you are ready to confirm your payment!
        </div>
      </div>
      {hasError && (
        <div className='bg-red-50 border border-red-200 text-red-700 text-[13px] rounded-md px-4 py-2'>
          Something went wrong processing your request. Please try again.
        </div>
      )}
    </div>
  );
};

export default RentalConfirmationForm;