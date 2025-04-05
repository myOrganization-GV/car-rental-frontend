"use client"
import React, { useActionState, useState } from 'react'

type Props = {}

const SignupForm = (props: Props) => {
    const [formState, formAction] = useActionState(signupAction, {
        errors: {},
        success: false
    });

    return (
        <form className='w-1/3 mx-auto  bg-white h-full p-4 rounded-lg'>
            <div className='text-[#90A3BF] grid gap-5 grid-cols-2'>
                <div className=''>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className={`w-full bg-[#F6F7F9] px-2 py-1  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder='First name'
                    />
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className={`w-full bg-[#F6F7F9] px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder='Last Name'
                    />
                </div>
                <div className='col-span-2'>
                    <label htmlFor="email" className="block text-sm  font-medium text-gray-700 mb-1">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={`w-full bg-[#F6F7F9] px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder='your@email.com'
                    />
                </div>

                <div className="col-span-2">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
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

                <div className="col-span-2">
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="w-full text-black bg-[#F6F7F9] px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Confirm password"
                    />
                </div>
                <div className="mt-4 col-span-2 space-y-4">
                    <div className="flex bg-[#F6F7F9] rounded-md py-2 px-4 items-center">
                        <input
                            type="checkbox"
                            id="marketing"
                            name="marketing"
                            className="h-4 w-4 mt-1 text-blue-600 border-gray-300 rounded"
                        />
                        <label htmlFor="marketing" className="ml-2 text-sm text-black font-semibold">
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
                        <label htmlFor="terms" className="ml-2 text-sm text-black font-semibold">
                            I agree with our terms and conditions and privacy policy.
                        </label>
                    </div>
                </div>
                <div className="mt-2 col-span-2 w-1/2 mx-auto">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition-colors"
                    >
                        Sign Up
                    </button>
                </div>

            </div>
        </form>

    )
}

export default SignupForm

function signupAction(state: { errors: {}; success: boolean }): { errors: {}; success: boolean } | Promise<{ errors: {}; success: boolean }> {
    throw new Error('Function not implemented.')
}
