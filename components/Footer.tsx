import React from 'react'

type Props = {}

const Footer = (props: Props) => {
    return (
        <>
            {/* desktop footer */}
            <section className='hidden px-[60px] pt-[60px] pb-[16px] md:flex flex-wrap w-full text-black bg-white'>
                <div className=' w-1/3 lg:w-1/2 h-2/3'>
                    <div className='w-[300px] gap-[16px] flex flex-col  h-[110px]'>
                        <span className='font-bold text-[32px] text-primary '>CARENT</span>
                        <p className='font-normal text-[#90A3BF] text-[18px] w-1/2 lg:w-full '>Our vision is to provide convenience and help increase your sales business.</p>
                    </div>
                </div>

                <div className='grid px-14 justify-items-end grid-cols-3 w-2/3 lg:w-1/2 h-2/3'>
                    <div className=''>
                        <span className='font-semibold text-[20px] bg-white text-black'>About</span>
                        <ul className='text-[#90A3BF] mt-10 flex flex-col gap-5 text-[16px]'>
                            <li>
                                <span className='inline-block cursor-pointer'>How it works</span>
                            </li>
                            <li>
                                <span className='inline-block cursor-pointer'>Featured</span>
                            </li>
                            <li>
                                <span className='inline-block cursor-pointer'>Partnership</span>
                            </li>
                            <li>
                                <span className='inline-block cursor-pointer'>Bussiness Relation</span>
                            </li>
                        </ul>
                    </div>

                    <div className=''>
                        <span className='font-semibold text-[20px] bg-white text-black'>Community</span>
                        <ul className='text-[#90A3BF] mt-10 flex flex-col gap-5 text-[16px]'>
                            <li>
                                <span className='cursor-pointer'>Events</span>
                            </li>
                            <li>
                                <span className='cursor-pointer'>Blog</span>
                            </li>
                            <li>
                                <span className='cursor-pointer'>Podcast</span>
                            </li>
                            <li>
                                <span className='cursor-pointer'>Invite a friend</span>
                            </li>
                        </ul>
                    </div>

                    <div className=''>
                        <span className='font-semibold text-[20px] bg-white text-black'>Socials</span>
                        <ul className='text-[#90A3BF] mt-10 flex flex-col gap-5 text-[16px]'>
                            <li>
                                <span className='cursor-pointer'>Discord</span>
                            </li>
                            <li>
                                <span className='cursor-pointer'>Instagram</span>
                            </li>
                            <li>
                                <span className='cursor-pointer'>Twitter</span>
                            </li>
                            <li>
                                <span className='cursor-pointer'>Facebook</span>
                            </li>
                        </ul>
                    </div>


                </div>
                <div className='w-full mt-12 text-[16px] flex h-1/3 border border-transparent font-semibold border-t-gray-200 pt-[30px] justify-between'>
                    <div>{`©${new Date().getFullYear()} CARENT. All rights reserved`}</div>
                    <div className='flex gap-14'>
                        <div>Privacy & Policy</div>
                        <div>Terms & Condition</div>
                    </div>
                </div>

            </section>


            {/* footer */}
            <section className='text-black px-[60px]  w-full md:hidden bg-white'>
                <div className=' w-full grid gap-y-10 sm:grid-cols-3'>
                    
                    <div className='sm:col-span-3 col-span-2 gap-[16px] flex flex-col'>
                        <span className='font-bold text-[32px] text-primary '>CARENT</span>
                        <p className='font-normal text-[#90A3BF] text-[18px] sm:w-2/3 md:w-full '>Our vision is to provide convenience and help increase your sales business.</p>
                    </div>
                    <div className='w-full col-span-1'>
                        <span className='font-semibold text-[20px] bg-white text-black'>About</span>
                        <ul className='text-[#90A3BF] mt-10 flex flex-col gap-5 text-[16px]'>
                            <li>
                                <span className='inline-block cursor-pointer'>How it works</span>
                            </li>
                            <li>
                                <span className='inline-block cursor-pointer'>Featured</span>
                            </li>
                            <li>
                                <span className='inline-block cursor-pointer'>Partnership</span>
                            </li>
                            <li>
                                <span className='inline-block cursor-pointer'>Bussiness Relation</span>
                            </li>
                        </ul>
                    </div>

                    <div className='sm:w-full justify-self-end col-span-1'>
                        <span className='font-semibold text-[20px] bg-white text-black'>Socials</span>
                        <ul className='text-[#90A3BF] mt-10 flex flex-col gap-5 text-[16px]'>
                            <li>
                                <span className='cursor-pointer'>Discord</span>
                            </li>
                            <li>
                                <span className='cursor-pointer'>Instagram</span>
                            </li>
                            <li>
                                <span className='cursor-pointer'>Twitter</span>
                            </li>
                            <li>
                                <span className='cursor-pointer'>Facebook</span>
                            </li>
                        </ul>
                    </div>
                    <div className='w-full sm:col-span-1 col-span-2'>
                        <span className='font-semibold text-[20px] bg-white text-black'>Community</span>
                        <ul className='text-[#90A3BF] mt-10 flex flex-col gap-5 text-[16px]'>
                            <li>
                                <span className='cursor-pointer'>Events</span>
                            </li>
                            <li>
                                <span className='cursor-pointer'>Blog</span>
                            </li>
                            <li>
                                <span className='cursor-pointer'>Podcast</span>
                            </li>
                            <li>
                                <span className='cursor-pointer'>Invite a friend</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='font-semibold w-full my-12 text-[16px] flex h-1/3 border border-transparent flex-wrap gap-10 border-t-gray-200 pt-[10px] justify-between '>
                    <div className='flex justify-between w-full gap-14'>
                        <div>Privacy & Policy</div>
                        <div>Terms & Condition</div>
                    </div>

                    <div>{`©${new Date().getFullYear()} CARENT. All rights reserved`}</div>
                </div>
            </section>
        </>
    )
}

export default Footer