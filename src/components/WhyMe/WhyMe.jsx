import React from 'react'

function WhyMe() {
  return (
    <div id='whyMe' className='w-full bg-[#0f0f0f] px-10 md:px-15 py-20 md:py-25'>
        <h1 className='uppercase text-4xl font-bold text-center text-[#f5f5f5] tracking-widest montserrat-head-font'>Why Choose Me</h1>
        <p className='text-center text-[#a0a0a0] text-sm mt-5 inter-sub-font'>
            I don't just build websites — <br />
            I design experiences, solve problems, and think like a product owner.
        </p>

        <div className='w-full flex flex-col lg:flex-row justify-between gap-10 p-5 mt-10'> 
            {/* content of why choose me */}
            <div className='content w-full lg:w-1/2 flex flex-row items-center md:items-stretch lg:flex-col gap-8 flex-wrap md:flex-nowrap order-2 lg:order-1'>
                {/* first section */}
                <div className='w-400 md:w-full lg:w-full flex flex-col gap-3 p-5 rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-[#fb923c]/30 transition-all duration-300'>

                    <h2 className='text-xl lg:text-2xl font-bold text-[#f5f5f5] montserrat-head-font'>I Build With Purpose</h2>

                    <p className='text-sm lg:text-md text-[#a0a0a0] inter-sub-font'>Every line of code I write has a reason. I focus on performance, scalability, and real-world usability, not just making things "look good". The goal is always the same: create something that actually works for users and grows with your business.</p>
                </div>
                {/* second section */}
                <div className='w-full lg:w-full flex flex-col gap-3 p-5 rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-[#fb923c]/30 transition-all duration-300'>

                    <h2 className='text-xl lg:text-2xl font-bold text-[#f5f5f5] montserrat-head-font'>Solid Frontend + Backend</h2>

                    <p className='text-sm lg:text-md text-[#a0a0a0] inter-sub-font'>I bring the best of both sides: <br/>
                        <ul className='flex flex-col gap-2 my-2'>
                            <li className='list-disc list-inside ml-4'>Clean, responsive, animation-rich UIs</li>

                            <li className='list-disc list-inside ml-4'>Reliable backend logic and integrations</li>
                        </ul>

                        From smooth GSAP animations to structured APIs and authentication flows — everything is built to feel seamless.
                    </p>
                </div>
                {/* third section */} 
                <div className='w-full lg:w-full flex flex-col gap-3 p-5 rounded-2xl bg-[#1a1a1a] border border-white/5 hover:border-[#fb923c]/30 transition-all duration-300'>

                    <h2 className='text-xl lg:text-2xl font-bold text-[#f5f5f5] montserrat-head-font'>Clear Communication, No BS</h2>

                    <p className='text-sm lg:text-md text-[#a0a0a0] inter-sub-font'>No over-promising. No confusion.
                        You get:
                        <ul className='flex flex-col gap-2 my-2'>
                            <li className='list-disc list-inside ml-4' >
                                Honest timelines
                            </li>
                            <li className='list-disc list-inside ml-4'>
                                Clear explanations
                            </li>    
                            <li className='list-disc list-inside ml-4'>
                                Regular updates
                            </li>
                        </ul>

                        I value clarity and transparency as much as code quality.
                    </p>
                </div>

                <h1 className='hidden lg:block text-[#a0a0a0] text-2xl italic inter-sub-font'>Thinks Like a <span className='font-bold text-[#fb923c]'>Developer</span> + <span className='font-bold text-[#fb923c]'>Designer</span> + <span className='font-bold text-[#fb923c]'>Problem Solver</span></h1>
            </div>
            
            {/* image container of why choose me */}
            <div className='w-full lg:w-1/3 order-1 lg:order-2 flex justify-center items-center'>
                <img src="/Profile.jpg" alt="" className='w-1/2 lg:w-full rounded-lg border border-white/10 shadow-xl' />
            </div>

            <h1 className='lg:hidden order-3 text-[#a0a0a0] text-2xl italic inter-sub-font'>Thinks Like a <span className='font-bold text-[#fb923c]'>Developer</span> + <span className='font-bold text-[#fb923c]'>Designer</span> + <span className='font-bold text-[#fb923c]'>Problem Solver</span></h1>
        </div>
    </div>
  )
}

export default WhyMe