
import { RentalFormData, UpdateRentalFormData } from '@/types/RentalFormData';
import { easeInOut, motion, useAnimate } from 'motion/react';
import Image from 'next/image';
import React, { useEffect } from 'react'


interface Props {
    formData: RentalFormData;
    updateFormData: UpdateRentalFormData;
}


const PaymentForm = ({ formData, updateFormData, }: Props) => {
    const [scope, animate] = useAnimate();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        updateFormData({ [e.target.name]: e.target.value });
    };
    useEffect(() => {
        // Use a single animation sequence with all selectors to ensure true parallelism
        animate(
            [
                [".credit-card-panel, .paypal-panel, .pix-panel, .bitcoin-panel", 
                {
                    height: "70px" // Default height for all panels
                },
                {
                    duration: 0.5,
                    ease: easeInOut
                }]
            ],
            {
                delay: 0 // Force immediate start
            }
        );
        const selectedPanel = `.${formData.paymentMethod?.toLowerCase().replace(' ', '-')}-panel`;
        setTimeout(() => {
            console.log(selectedPanel)
            animate(
                selectedPanel, 
                { 
                    height: formData.paymentMethod === "Credit Card" ? '240px' : '140px' 
                }, 
                { 
                    duration: 0.5,
                    ease: easeInOut
                }
            );
        }, 0);
        
    }, [formData.paymentMethod, animate]);
    
    return (
        <div ref={scope} className='mx-auto font-semibold text-black bg-white p-4'>
            <div className='mb-5'>
                <h2 className='font-bold text-[20px]'>Rental Info</h2>
                <div className='flex font-semibold text-[14px] text-[#90A3BF] justify-between'>
                    <span >Please enter your payment method</span>
                    <span >Step 3 of 4</span>
                </div>
            </div>
            <div className='mb-5 h-[50px]  credit-card-panel rounded-xl overflow-y-hidden p-5 bg-[#F6F7F9] grid grid-cols-2 gap-5'>
                <div className='items-start justify-between flex col-span-2'>
                    <div className=' items-center flex'>
                        <input
                            type="radio"
                            id='Credit Card'
                            name="paymentMethod"
                            value="Credit Card"
                            className="mr-2 cursor-pointer"
                            checked={formData.paymentMethod === "Credit Card"}
                            onChange={handleChange}
                        />
                        <label
                            htmlFor='Credit Card'
                            className='font-semibold text-[16px]'
                        >Credit Card</label>
                    </div>
                    {/* <h2 className='font-semibold text-[16px]'>Credit Card</h2> */}
                    <div className='relative w-20 h-8'>
                        <Image className='object-contain' fill alt='credit logo' src='/assets/Visa.png' />
                    </div>
                </div>
                <div className=''>
                    <label htmlFor="cardNumber" className="block text-sm mb-1">
                        Card Number
                    </label>
                    <input
                        type="text"
                        id="cardNumber"
                        name="cardNumber"
                        inputMode="numeric"
                        pattern="\d{13,19}"
                        autoComplete="cc-number"
                        placeholder="1234 5678 9012 3456"
                        className="input w-full bg-white text-black"
                        value={formData.cardNumber || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className=''>
                    <label htmlFor="cardExpiry" className="block text-sm mb-1">
                        Expiration Date
                    </label>
                    <input
                        placeholder='mm-YYYY'
                        type="month"
                        id="cardExpiry"
                        name="cardExpiry"
                        autoComplete="cc-exp"
                        className="input w-full bg-white text-black"
                        value={formData.cardExpiry || ''}
                        onChange={handleChange}
                    />
                </div>
                <div className=''>
                    <label htmlFor="cardCVC" className="block text-sm mb-1">
                        CVC/CVV
                    </label>
                    <input
                        type="text"
                        id="cardCVC"
                        name="cardCVC"
                        inputMode="numeric"
                        pattern="\d{3,4}"
                        maxLength={4}
                        autoComplete="cc-csc"
                        placeholder="123"
                        className="input w-full bg-white text-black"
                        value={formData.cardCVC || ''}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div
                className='paypal-panel items-center mb-5 rounded-xl p-4 bg-[#F6F7F9] justify-between flex col-span-2'>
                <div className='flex items-center'>
                    <input
                        type="radio"
                        id="PayPal"
                        name="paymentMethod"
                        value="PayPal"
                        className=" mr-2 cursor-pointer"
                        checked={formData.paymentMethod === "PayPal"}
                        onChange={handleChange}
                    />
                    <label
                        htmlFor='PayPal'
                        className='font-semibold text-[16px]'
                    >   Paypal
                    </label>
                </div>
                <div className='relative w-20 h-8'>
                    <Image className='object-contain' fill alt='credit logo' src='/assets/PayPal.png' />
                </div>
            </div>
            <div className=' pix-panel items-center mb-5 p-4 rounded-xl bg-[#F6F7F9] justify-between flex col-span-2'>
                <div className='flex items-center'>
                    <input
                        type="radio"
                        id='Pix'
                        name="paymentMethod"
                        value="Pix"
                        className="mr-2 cursor-pointer"
                        checked={formData.paymentMethod === "Pix"}
                        onChange={handleChange}
                    />
                    <label
                        htmlFor='Pix'
                        className='font-semibold text-[16px]'
                    >Pix</label>
                </div>
                <div className='relative w-20 h-8'>
                    <Image className='object-contain' fill alt='pix logo' src='/assets/pix.png' />
                </div>
            </div>
            <div className='bitcoin-panel items-center p-4 rounded-xl bg-[#F6F7F9] justify-between flex col-span-2'>
                <div className='flex items-center'>
                    <input
                        type="radio"
                        id='Bitcoin'
                        name="paymentMethod"
                        value="Bitcoin"
                        className=" mr-2 cursor-pointer"
                        checked={formData.paymentMethod === "Bitcoin"}
                        onChange={handleChange}
                    />
                    <label
                        htmlFor='Bitcoin'
                        className='font-semibold text-[16px]'
                    >   Bitcoin
                    </label>
                </div>
                <div className='relative w-20 h-8'>
                    <Image className='object-contain' fill alt='credit logo' src='/assets/Bitcoin.png' />
                </div>
            </div>
        </div>
    )
}

export default PaymentForm