import React from 'react'

function Work() {
  return (
    <div id='work' className='z-20 w-full bg-[#141313] px-10 md:px-15 py-20 md:py-25'>
      <h1 className='uppercase text-4xl font-bold text-center text-gray-300 tracking-widest montserrat-head-font'>Work</h1>
      <p className='text-center text-white/50 text-sm mt-5 inter-sub-font'>Top Work Projects</p>

      <div className='flex gap-8 justify-center flex-wrap min-h-100 p-5 mt-10'>
        <div className='relative w-full md:w-2/5 lg:w-60 h-80 bg-[url(/project1.jpg)] border-[0.5px] border-[#f55d17c9] rounded-lg overflow-hidden'>
          <div className='p-3 absolute top-0 left-0 flex flex-col justify-end items-center gap-5 w-full h-full shadow-[inset_0_-150px_80px_rgba(0,0,0,0.9)]'>
              <h1 className='text-gray-300 text-lg text-center leading-5 montserrat-head-font'>E-commerce Site for a local business</h1>
              <p className='text-white/50 text-xs text-center inter-sub-font'>Provide an Online plaform to a Local business.</p>
          </div>
        </div>
        <div className='relative w-full md:w-2/5 lg:w-60 h-80 bg-[url(/project2.jpg)] bg-cover border-[0.5px] border-[#f55d17] rounded-lg overflow-hidden'>
          <div className='p-3 absolute top-0 left-0 flex flex-col justify-end items-center gap-5 w-full h-full shadow-[inset_0_-150px_80px_rgba(0,0,0,0.9)]'>
              <h1 className='text-gray-300 text-lg text-center leading-5 montserrat-head-font'>Stone Manufacturing Website</h1>
              <p className='text-white/50 text-xs text-center inter-sub-font'>A portfolio with stunning design and animations.</p>
          </div>
        </div>
        <div className='relative w-full md:w-2/5 lg:w-60 h-80 bg-[url(/project3.jpg)] bg-cover border-[0.5px] border-[#f55d17] rounded-lg overflow-hidden'>
          <div className='p-3 absolute top-0 left-0 flex flex-col justify-end items-center gap-5 w-full h-full shadow-[inset_0_-150px_80px_rgba(0,0,0,0.9)]'>
              <h1 className='text-gray-300 text-lg text-center leading-5 montserrat-head-font'>A Real-Time Chat App</h1>
              <p className='text-white/50 text-xs text-center inter-sub-font'>Chat Application that works on Real-Time data.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work