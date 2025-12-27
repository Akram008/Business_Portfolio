import React from 'react'

function Work() {
  return (
    <div id='work' className='z-20 w-full bg-[#0f0f0f] px-10 md:px-15 py-20 md:py-25'>
      <h1 className='uppercase text-4xl font-bold text-center text-[#f5f5f5] tracking-widest montserrat-head-font'>Work</h1>
      <p className='text-center text-[#a0a0a0] text-sm mt-5 inter-sub-font'>Top Work Projects</p>

      <div className='flex gap-8 justify-center flex-wrap min-h-100 p-5 mt-10'>
        <div className='relative w-full md:w-2/5 lg:w-60 h-80 bg-[url(/project1.jpg)] border border-[#fb923c]/50 hover:border-[#fb923c] rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg shadow-black/50'>
          <div className='p-3 absolute top-0 left-0 flex flex-col justify-end items-center gap-5 w-full h-full shadow-[inset_0_-150px_80px_rgba(10,10,10,0.95)] bg-gradient-to-t from-[#0a0a0a]/90 to-transparent'>
              <h1 className='text-[#f5f5f5] text-lg text-center leading-5 montserrat-head-font'>E-commerce Site for a local business</h1>
              <p className='text-[#a0a0a0] text-xs text-center inter-sub-font'>Provide an Online plaform to a Local business.</p>
          </div>
        </div>
        <div className='relative w-full md:w-2/5 lg:w-60 h-80 bg-[url(/project2.jpg)] bg-cover border border-[#fb923c]/50 hover:border-[#fb923c] rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg shadow-black/50'>
          <div className='p-3 absolute top-0 left-0 flex flex-col justify-end items-center gap-5 w-full h-full shadow-[inset_0_-150px_80px_rgba(10,10,10,0.95)] bg-gradient-to-t from-[#0a0a0a]/90 to-transparent'>
              <h1 className='text-[#f5f5f5] text-lg text-center leading-5 montserrat-head-font'>Stone Manufacturing Website</h1>
              <p className='text-[#a0a0a0] text-xs text-center inter-sub-font'>A portfolio with stunning design and animations.</p>
          </div>
        </div>
        <div className='relative w-full md:w-2/5 lg:w-60 h-80 bg-[url(/project3.jpg)] bg-cover border border-[#fb923c]/50 hover:border-[#fb923c] rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-lg shadow-black/50'>
          <div className='p-3 absolute top-0 left-0 flex flex-col justify-end items-center gap-5 w-full h-full shadow-[inset_0_-150px_80px_rgba(10,10,10,0.95)] bg-gradient-to-t from-[#0a0a0a]/90 to-transparent'>
              <h1 className='text-[#f5f5f5] text-lg text-center leading-5 montserrat-head-font'>A Real-Time Chat App</h1>
              <p className='text-[#a0a0a0] text-xs text-center inter-sub-font'>Chat Application that works on Real-Time data.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work