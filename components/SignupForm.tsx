"use client"
import { signupFormAction } from '@/lib/actions/signupFormAction';
import React, { useActionState } from 'react'



const SignupForm = () => {
    const [state, action, isPending] = useActionState(signupFormAction, undefined);
    return (
        <form action={action} className='w-1/3 mx-auto font-semibold text-black bg-white h-full p-4 rounded-lg'>
            <div className='grid gap-5 grid-cols-2'>
                <div className=''>
                    <label htmlFor="firstName" className="block text-sm  mb-1">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className={`w-full font-normal bg-[#F6F7F9] px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder='First name'
                    />
                    {state?.fieldErrors?.firstName && (
                        <p className="text-red-500">{state.fieldErrors.firstName[0]}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="lastName" className="block text-sm  mb-1">last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className={`w-full font-normal bg-[#F6F7F9] px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder='Last Name'
                    />
                    {state?.fieldErrors?.lastName && (
                        <p className="text-red-500">{state.fieldErrors.lastName[0]}</p>
                    )}
                </div>
                <div className='col-span-2'>
                    <label htmlFor="email" className="block text-sm   mb-1">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className={`w-full font-normal bg-[#F6F7F9] px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        placeholder='your@email.com'
                    />
                    {state?.fieldErrors?.email && (
                        <p className="text-red-500">{state.fieldErrors.email[0]}</p>
                    )}
                </div>

                <div className="col-span-2">
                    <label htmlFor="password" className="block text-sm  mb-1">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="w-full font-normal  bg-[#F6F7F9] px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter password"
                    />
                    {state?.fieldErrors?.password && (
                        <p className="text-red-500">{state.fieldErrors.password[0]}</p>
                    )}
                </div>

                <div className="col-span-2">
                    <label htmlFor="confirmPassword" className="block text-sm  mb-1">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        className="w-full font-normal bg-[#F6F7F9] px-2 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Confirm password"
                    />
                    {state?.fieldErrors?.confirmPassword?.map((msg, i) => (
                        <p key={i} className="text-red-500">
                            {msg}
                        </p>
                    ))}
                </div>
                <div className="mt-4 col-span-2 space-y-4">
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
                    {state?.fieldErrors?.terms && (
                        <p className="text-red-500 text-center">{state.fieldErrors.terms[0]}</p>
                    )}
                </div>
                <div className="mt-2 col-span-2 w-1/2 mx-auto">
                    <button
                        disabled={isPending}
                        type="submit"
                        className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition-colors"
                    >
                        {isPending ? <span className="loading  loading-spinner text-white"></span>
                            : "Sign Up"
                        }
                    </button>
                    {state?.error && (
                    <p className="text-red-500  text-center mt-2">{state?.error}</p>
                )}
                {state?.formErrors && state?.formErrors.length > 0 && (
                    <ul className="text-red-500 text-center mt-2">
                        {state?.formErrors?.map((e, i) => (
                            <li key={i}>{e}</li>
                        ))}
                    </ul>
                )}
                {state?.success && (
                    <p className="text-green-600 mt-2">Registration successful!</p>
                )}

                </div>
                
            </div>
        </form>

    )
}

export default SignupForm
