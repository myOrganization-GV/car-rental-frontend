import Image from 'next/image';
import React from 'react'

type Props = {
    imgUrl: string
    description: string
    title: string

}

const Ads = ({imgUrl, description, title}: Props) => {
    return (
        <div className="relative rounded-lg col-span-1 h-[360px] bg-blue-400 overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
                <Image
                    src={imgUrl}
                    alt="Luxury sports car"
                    fill
                    className="object-cover"
                />
            </div>
            {/* Main content container */}
            <div className="relative z-10 p-6 flex flex-col h-full">
                {/* Heading */}
                <div className="text-white">
                    <h1 className="text-[32px] max-w-[18rem] font-semibold mb-6">
                        {title}
                    </h1>
                    <p className="text-[16px] mb-12 max-w-[18rem]">
                       {description}
                    </p>
                </div>
                {/* Button */}
                <div className='mb-20'>
                    <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg text-lg transition-colors">
                        Rental Car
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Ads