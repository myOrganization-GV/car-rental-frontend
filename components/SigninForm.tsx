"use client"

import React, { useActionState } from 'react'
import { signinFormAction } from '@/lib/actions/signinFormAction'
import SocialLogins from './SocialLogins'

const SigninForm = () => {
    const [state, action, isPending] = useActionState(signinFormAction, undefined);
    return (
        <form action={action} className='w-1/3 mx-auto bg-white h-full p-4 rounded-lg'>
            <div className='text-[#90A3BF] grid gap-5 grid-cols-2'>
               {state && <div className='col-span-2 text-center text-red-600'>{
                state.type === "credentials"? "Wrong email or password.": "Error in the server try again later."
                }</div>}
                <div className='col-span-2'>
                    <label htmlFor="email" className="block text-sm text-black  font-semibold  mb-1">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={`w-full bg-[#F6F7F9] px-2 text-black py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder='your@email.com'
                    />
                </div>

                <div className="col-span-2">
                    <label htmlFor="password" className="block text-black text-sm font-semibold  mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full text-black bg-[#F6F7F9] px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter password"
                    />
                </div>

                <div className="mt-2 col-span-2 w-1/2 mx-auto">
                    <button
                        disabled={isPending}
                        name="provider"
                        value="custom"
                        className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition-colors"
                    >
                        {isPending ? <span className="loading loading-spinner"></span> : "Sign In"}
                    </button>
                </div>
                <SocialLogins/>
            </div>
        </form>
    )
}

export default SigninForm
