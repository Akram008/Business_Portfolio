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
    <div id='services' className='w-full bg-[#0a0a0a] px-10 md:px-15 py-20 md:py-25'>
        <h1 className='uppercase text-4xl font-bold text-center text-[#f5f5f5] tracking-widest montserrat-head-font'>Services</h1>
        <p className='text-center text-[#a0a0a0] text-sm mt-5 inter-sub-font'>Never Compromises in Providing the Best Work Possible...</p>

        <div className='w-full mt-10 flex flex-col lg:flex-row items-center lg:items-stretch justify-between gap-5 flex-wrap sm:p-5'>
            {serviceProducts.map(each => (
                <div key={each._id} className='w-full sm:w-80 h-full bg-[#1a1a1a] border border-white/5 hover:border-[#fb923c]/50 flex flex-col justify-between p-5 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#fb923c]/10'>
                    <h1 className='text-center text-3xl font-semibold text-[#f5f5f5] montserrat-head-font'>{each.name}</h1>
                    <hr className='border border-white/10 mb-5 mt-3'/>
                    <ul className='flex flex-col items-start gap-5 inter-sub-font'>
                        {each.points.map((point, ind) => (
                            <li key={`${each._id}.${ind}`} className='text-[#e5e5e5] text-xl flex items-center gap-3'><FaChevronRight className='text-[#fb923c]'/> <span>{point}</span></li>
                        ))}
                    </ul>
                    <hr className='border border-white/10 mt-5 mb-3' />
                    <div className='flex items-center justify-between bg-[#1f1f1f] border border-white/5 p-3 mt-2 rounded-2xl inter-sub-font'>
                        <p className='text-xl font-light text-[#a0a0a0]'>Price:</p>
                        <p className='text-xl font-bold text-[#fb923c]'>&#8377; {each.price}</p>
                    </div>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Services