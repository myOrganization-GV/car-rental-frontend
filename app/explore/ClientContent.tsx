'use client';

import React, { useState } from 'react';

import { Car } from "@/types/CarType";

import CarGrid from '@/components/CarGrid';
import MultiRangeSlider, { ChangeResult } from 'multi-range-slider-react';
import { useSession } from "next-auth/react"
type FilterOption = {
    label: string;
    value: string;
    count?: number;
};

const rawTypeOptions: FilterOption[] = [
    { label: 'Sport', value: 'sport' },
    { label: 'SUV', value: 'suv' },
    { label: 'MPV', value: 'mpv' },
    { label: 'Sedan', value: 'sedan' },
    { label: 'Coupe', value: 'coupe' },
    { label: 'Hatchback', value: 'hatchback' },
];

const rawCapacityOptions: FilterOption[] = [
    { label: '2 Person', value: '2' },
    { label: '4 Person', value: '4' },
    { label: '6 Person', value: '6' },
    { label: '8 or More', value: '8+' },
];

interface ClientContentProps {
    initialCars: Car[];
}

const ClientContent: React.FC<ClientContentProps> = ({ initialCars }) => {

    const [cars, setCars] = useState<Car[]>(initialCars);
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [selectedCaps, setSelectedCaps] = useState<string[]>([]);
    const [minPrice, setMinPrice] = useState(80);
    const [maxPrice, setMaxPrice] = useState(150);


    const typeOptions: FilterOption[] = rawTypeOptions.map(opt => ({
        ...opt,
        count: initialCars.filter(car =>
            car.category.toLowerCase() === opt.value
        ).length
    }));

    const capacityOptions: FilterOption[] = rawCapacityOptions.map(opt => {
        const n = parseInt(opt.value, 10);
        const count = opt.value.endsWith('+')
            ? initialCars.filter(car => car.numberOfSeats >= n).length
            : initialCars.filter(car => car.numberOfSeats === n).length;
        return { ...opt, count };
    });

    const toggle = (val: string, list: string[], setter: React.Dispatch<React.SetStateAction<string[]>>) =>
        setter(list.includes(val) ? list.filter(x => x !== val) : [...list, val]);


    const filteredCars = cars.filter(car =>
        car.pricePerDay >= minPrice &&
        car.pricePerDay <= maxPrice &&
        (selectedTypes.length === 0 ||
            selectedTypes.includes(car.category.toLowerCase())
        ) &&
        (selectedCaps.length === 0 ||
            selectedCaps.some(opt => {
                if (opt.endsWith('+')) {
                    return car.numberOfSeats >= parseInt(opt, 10);
                }
                return car.numberOfSeats === parseInt(opt, 10);
            })
        )
    );

    return (
        <section className='flex'>
            <div className="w-[300px] p-5 h-screen bg-white">
                <div className="mb-8">
                    <h3 className="text-xs font-semibold text-[#90A3BF] uppercase mb-2">Type</h3>
                    <ul className="space-y-2">
                        {typeOptions.map(opt => (
                            <li key={opt.value} className="flex font-semibold items-center justify-between">
                                <label className="inline-flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        className="checkbox bg-white checkbox-sm checkbox-primary"
                                        checked={selectedTypes.includes(opt.value)}
                                        onChange={() => toggle(opt.value, selectedTypes, setSelectedTypes)}
                                    />
                                    <span className="text-sm text-[#596780]">{opt.label}<span className="ml-2 text-[#90A3BF]">({opt.count})</span></span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mb-8">
                    <h3 className="text-xs font-semibold text-[#90A3BF] uppercase mb-2">Capacity</h3>
                    <ul className="space-y-2">
                        {capacityOptions.map(opt => (
                            <li key={opt.value} className="flex items-center justify-between">
                                <label className="inline-flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        className="checkbox bg-white checkbox-sm checkbox-primary"
                                        checked={selectedCaps.includes(opt.value)}
                                        onChange={() => toggle(opt.value, selectedCaps, setSelectedCaps)}
                                    />
                                    <span className="text-sm font-semibold text-[#596780]">{opt.label}<span className="ml-2 text-[#90A3BF]">({opt.count})</span></span>
                                </label>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-xs font-semibold text-[#90A3BF] uppercase mb-2">
                        Price
                    </h3>
                    <div className="mb-4 text-[#596780] font-semibold text-sm">
                        Min. ${minPrice} – Max. ${maxPrice}
                    </div>
                    <MultiRangeSlider
                        className='border-none'
                        barLeftColor="#e5e7eb"
                        barInnerColor="#3b82f6"
                        barRightColor="#e5e7eb"
                        thumbLeftColor="#3b82f6"
                        thumbRightColor="#3b82f6"
                        ruler={false}
                        label={false}
                        min={80}
                        max={250}
                        step={5}
                        style={{
                            border: 'none',
                            boxShadow: 'none',
                        }}
                        minValue={minPrice}
                        maxValue={maxPrice}
                        onInput={(e: ChangeResult) => {
                            setMinPrice(e.minValue);
                            setMaxPrice(e.maxValue);
                        }}
                    />
                </div>
            </div>
            <div className='p-8 w-full bg-[#F6F7F9]'>
                <CarGrid cars={filteredCars} />
            </div>
        </section>
    );
};

export default ClientContent;