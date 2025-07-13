import { RentalFormData, UpdateRentalFormData } from '@/types/RentalFormData';
import { easeInOut, motion, useAnimate } from 'motion/react';
import Image from 'next/image';
import React, { useEffect } from 'react'
import { CardNumber, ExpirationDate, SecurityCode } from '@mercadopago/sdk-react';
import { RentalFormError } from '@/types/RentalFormError';
import { InputMask } from '@react-input/mask';


interface Props {
    formData: RentalFormData;
    updateFormData: UpdateRentalFormData;
    errors: RentalFormError[]
}


const PaymentForm = ({ formData, updateFormData, errors }: Props) => {
    const [scope, animate] = useAnimate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        updateFormData({ [e.target.name]: e.target.value });
    };


    const cardStyle = {
        fontFamily: "Inter, sans-serif",
        fontSize: "1rem",
        backgroundColor: "white",
        color: "#111827",
        border: "1px solid red",
        padding: "0.5rem 1rem",
        height: "40px",
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
                        height: formData.paymentMethod === "Credit Card" ? 'auto' : 'auto'
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
        <div ref={scope} className='mx-auto overflow-y-scroll h-[635px] rounded-t-xl font-semibold text-black bg-white p-4'>
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
                    <CardNumber placeholder='Card Number' style={cardStyle} />
                    {errors.find(error => error.field === "cardNumber") && <p className="text-red-600">{errors.find(error => error.field === 'cardNumber')?.message}</p>}
                </div>
                <div className='flex flex-col gap-4'>
                    <div>Expiration Date</div>
                    <ExpirationDate placeholder='mm-yy' style={cardStyle} />
                    {errors.find(error => error.field === "expirationDate" ||  error.field === "expirationMonth" || error.field === "expirationYear") && <p className="text-red-600">{errors.find(error => error.field === "expirationDate" ||  error.field === "expirationMonth" || error.field === "expirationYear")?.message}</p>}
                </div>
                <div className='flex flex-col gap-4'>
                    <div>CVV</div>
                    <SecurityCode placeholder='CVV' style={cardStyle} />
                    {errors.find(error => error.field === "securityCode") && <p className="text-red-600">{errors.find(error => error.field === 'securityCode')?.message}</p>}
                </div>

            </div>
            <div className='paypal-panel h-[70px] items-center mb-5 rounded-xl p-4 bg-[#F6F7F9] justify-between flex col-span-2'>
                <div className='flex items-center'>
                    <input
                        type="radio"
                        id="PayPal"
                        name="paymentMethod"
                        value="PayPal"
                        className="mr-2"
                        checked={formData.paymentMethod === "PayPal"}
                        onChange={handleChange}
                        disabled={true}
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
            <div className='overflow-y-hidden pix-panel h-[70px] items-center mb-5 p-5 gap-5 rounded-xl bg-[#F6F7F9] justify-between flex-wrap flex col-span-2'>
                <div className='flex'>
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
                <div className='grid grid-cols-2 w-full flex-col gap-4'>
                    <div>
                        <label htmlFor="First Name" className="block text-sm  mb-1">First Name</label>
                        <input
                            type="text"
                            id="First Name"
                            name="payerFirstName"
                            className={`w-full font-normal bg-white px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            placeholder='First Name'
                            value={formData.payerFirstName || ''} onChange={handleChange}
                        />
                        {errors.find(error => error.field === "payerFirstName") && <p className="text-red-600">{errors.find(error => error.field === 'payerFirstName')?.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="Last Name" className="block text-sm  mb-1">Last Name</label>
                        <input
                            type="text"
                            id="Last Name"
                            name="payerLastName"
                            className={`w-full font-normal bg-white px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            placeholder='Last Name'
                            value={formData.payerLastName || ''} onChange={handleChange}
                        />
                        {errors.find(error => error.field === "payerLastName") && <p className="text-red-600">{errors.find(error => error.field === 'payerLastName')?.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm  mb-1">email</label>
                        <input
                            type="email"
                            id="email"
                            name="payerEmail"
                            className={`w-full font-normal bg-white px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            placeholder='email'
                            value={formData.payerEmail || ''} onChange={handleChange}
                        />
                        {errors.find(error => error.field === "payerEmail") && <p className="text-red-600">{errors.find(error => error.field === 'payerEmail')?.message}</p>}
                    </div>
                    <div>
                        <label htmlFor="cpf" className="block text-sm  mb-1">CPF</label>
                        <InputMask
                            mask="___.___.___-__"
                            replacement={{ '_': /\d/ }}
                            type="text"
                            id="cpf"
                            name="payerIdentificationNumber"
                            className={`w-full font-normal bg-white px-2 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
                            placeholder='123.456.789-12'
                            value={formData.payerIdentificationNumber || ''} onChange={handleChange}
                        />
                        {errors.find(error => error.field === "payerIdentificationNumber") && <p className="text-red-600">{errors.find(error => error.field === 'payerIdentificationNumber')?.message}</p>}
                    </div>
                </div>
            </div>
            <div className='bitcoin-panel h-[70px] items-center p-4 rounded-xl bg-[#F6F7F9] justify-between flex col-span-2'>
                <div className='flex items-center'>
                    <input
                        type="radio"
                        id='Bitcoin'
                        name="paymentMethod"
                        value="Bitcoin"
                        className=" mr-2"
                        checked={formData.paymentMethod === "Bitcoin"}
                        onChange={handleChange}
                        disabled={true}
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