import React from 'react'
import { FaChevronRight } from "react-icons/fa6";

const serviceProducts = [
    {
        _id: 0, 
        name: 'Basic Business Website', 
        points: [
            '5 pages', 
            'Mobile Responsive', 
            'Whatsapp Integration', 
            '7 days delivery'
        ], 
        price: '10,000'
    },
    {
        _id: 1, 
        name: 'Premium Websites', 
        points: [
            'Everything in Basic', 
            'Stunning Animations & Modern UI', 
            'More Optimised', 
            '10 days delivery'
        ], 
        price: '25,000'
    },
    {
        _id: 2, 
        name: 'Landing Page', 
        points: [
            'Single Page', 
            'Conversion Focused', 
            'Fast delivery', 
        ], 
        price: '5,000'
    },
]


function Services() {
  return (
    <div id='services' className='w-full bg-[#010101] px-10 md:px-15 py-20 md:py-25'>
        <h1 className='uppercase text-4xl font-bold text-center text-gray-300 tracking-widest montserrat-head-font'>Services</h1>
        <p className='text-center text-white/50 text-sm mt-5 inter-sub-font'>Never Compromises in Providing the Best Work Possible...</p>

        <div className='w-full mt-10 flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-5 flex-wrap sm:p-5'>
            {serviceProducts.map(each => (
                <div key={each._id} className='w-full sm:w-80 h-full bg-[#807d7d] flex flex-col justify-between p-5 rounded-xl'>
                    <h1 className='text-center text-3xl font-semibold text-[#312e2e] montserrat-head-font'>{each.name}</h1>
                    <hr className='border-[0.5px] opacity-30 border-[#010101] mb-5 mt-3'/>
                    <ul className='flex flex-col items-start gap-5 inter-sub-font'>
                        {each.points.map((point, ind) => (
                            <li key={`${each._id}.${ind}`} className='text-[#010101] text-xl list-disc flex items-center gap-3'><FaChevronRight/> {point}</li>
                        ))}
                    </ul>
                    <hr className='border-[0.5px] opacity-30 border-[#010101] mt-5 mb-3' />
                    <div className='flex items-center justify-between bg-[#5c5551] p-2 mt-2 rounded-2xl inter-sub-font'>
                        <p className='text-xl font-light text-[#010101]'>Price:</p>
                        <p className='text-xl font-bold text-[#010101]'>&#8377; {each.price}</p>
                    </div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Services