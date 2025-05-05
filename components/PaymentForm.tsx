import { RentalFormData, UpdateRentalFormData } from '@/types/RentalFormData';
import { easeInOut, motion, useAnimate } from 'motion/react';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { loadMercadoPago } from "@mercadopago/sdk-js";
import { CardNumber, ExpirationDate, SecurityCode } from '@mercadopago/sdk-react';



interface Props {
    formData: RentalFormData;
    updateFormData: UpdateRentalFormData;
}


const PaymentForm = ({ formData, updateFormData, }: Props) => {
    const [scope, animate] = useAnimate();

    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        updateFormData({ [e.target.name]: e.target.value });
    };


      const cardStyle = {
        fontFamily:   "Inter, sans-serif",
        fontSize:     "1rem",
        backgroundColor: "white",
        color:        "#111827",
        border:       "1px solid red",
        padding:      "0.5rem 1rem",
        height:       "40px",
        placeholderColor: "#90A3BF"
      };
    useEffect(() => {
        animate(
            [
                [".credit-card-panel, .paypal-panel, .pix-panel, .bitcoin-panel",
                    {
                        height: "70px"
                    },
                    {
                        duration: 0.5,
                        ease: easeInOut
                    }]
            ],
            {
                delay: 0
            }
        );
        if (formData.paymentMethod) {
            const selectedPanel = `.${formData.paymentMethod.toLowerCase().replace(' ', '-')}-panel`;
            setTimeout(() => {
                animate(
                    selectedPanel,
                    {
                        height: formData.paymentMethod === "Credit Card" ? 'auto' : '140px'
                    },
                    {
                        duration: 0.3,
                        ease: easeInOut
                    }
                );
            }, 0);
        }

    }, [formData.paymentMethod, animate]);

    

    return (
        <div ref={scope} className='mx-auto rounded-t-xl font-semibold text-black bg-white p-4'>
            <div className='mb-5'>
                <h2 className='font-bold text-[20px]'>Rental Info</h2>
                <div className='flex font-semibold text-[14px] text-[#90A3BF] justify-between'>
                    <span >Please enter your payment method</span>
                    <span >Step 3 of 4</span>
                </div>
            </div>
            <div className='mb-5 h-[70px]  credit-card-panel rounded-xl overflow-y-hidden p-5 bg-[#F6F7F9] grid grid-cols-2 gap-5'>
                <div className='items-start justify-between flex col-span-2'>
                    <div className='items-center flex'>
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
                    <div className='relative w-20 h-8'>
                        <Image className='object-contain' fill alt='credit logo' src='/assets/Visa.png' />
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div>Card Number</div>
                    <CardNumber placeholder='Card Number' style={cardStyle}/>
                </div>
                <div className='flex flex-col gap-4'>
                    <div>Expiration Date</div>
                    <ExpirationDate placeholder='mm-yy' style={cardStyle}/>
                </div>
                <div className='flex flex-col gap-4'>
                    <div>CVV</div>
                    <SecurityCode placeholder='CVV'  style={cardStyle}/>
                </div>
  
            </div>
            <div className='paypal-panel h-[70px] items-center mb-5 rounded-xl p-4 bg-[#F6F7F9] justify-between flex col-span-2'>
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
            <div className=' pix-panel h-[70px] items-center mb-5 p-4 rounded-xl bg-[#F6F7F9] justify-between flex col-span-2'>
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
            <div className='bitcoin-panel h-[70px] items-center p-4 rounded-xl bg-[#F6F7F9] justify-between flex col-span-2'>
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