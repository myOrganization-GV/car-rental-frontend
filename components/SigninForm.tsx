import React from 'react'
import GoogleSvg from './GoogleSvg'
import GithubSvg from './GithubSvg'

type Props = {}

const SigninForm = (props: Props) => {
    return (
        <form className='w-1/3 mx-auto  bg-white h-full p-4 rounded-lg'>
            <div className='text-[#90A3BF] grid gap-5 grid-cols-2'>
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
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition-colors"
                    >
                        Sign In
                    </button>
                </div>
                <hr className=' col-span-2' />
                <div className='col-span-2 mx-auto font-semibold text-black'>Or continue with your socials</div>
                <div className="flex items-center col-span-2 justify-center">
                    <button className="flex cursor-pointer mx-auto items-center bg-white  border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-black  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                        <GoogleSvg />
                        <span>Continue with Google</span>
                    </button>

                </div>
                <div className="flex items-center col-span-2 justify-center">
                    <button className="flex cursor-pointer mx-auto items-center bg-white  border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-black  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                        <GithubSvg />
                        <span>Continue with Github</span>
                    </button>
                </div>
            </div>
        </form>
    )
}

export default SigninForm