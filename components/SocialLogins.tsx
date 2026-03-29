import React from 'react'
import GithubSvg from './GithubSvg'
import GoogleSvg from './GoogleSvg'

const SocialLogins = () => {
    return (<>
        <hr className=' col-span-2' />
        <div className='col-span-2 mx-auto font-semibold text-black'>Or continue with your socials</div>
        <div className="flex items-center col-span-2 justify-center">
            <button
                name='provider'
                value="google"
                className="flex cursor-pointer mx-auto items-center bg-white  border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-black  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <GoogleSvg />
                <span>Continue with Google</span>
            </button>

        </div>
        <div className="flex items-center col-span-2 justify-center">
            <button
                name='provider'
                value="github"
                className="flex cursor-pointer mx-auto items-center bg-white  border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-black  hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <GithubSvg />
                <span>Continue with Github</span>
            </button>
        </div>
    </>
    )
}

export default SocialLogins
