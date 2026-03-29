"use client"
import SignupForm from '@/components/SignupForm'
import SocialLogins from '@/components/SocialLogins';
import { signinFormAction } from '@/lib/actions/signinFormAction';
import React, { useActionState } from 'react'

const Page = () => {
  const [, action] = useActionState(signinFormAction, undefined);
  return (
    <div className='bg-[#F6F7F9] py-[20px]'>
      <SignupForm />
      <form action={action} className='w-1/3 mx-auto bg-white h-full p-4 rounded-lg'>
        <div className='text-[#90A3BF] grid gap-5 grid-cols-2'>
          <SocialLogins/>
        </div>
      </form>
    </div>
  )
}

export default Page
