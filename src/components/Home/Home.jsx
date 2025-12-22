import React from 'react'
import './Home.css'

function Home() {
  return (
    <div id='home' className='relative h-screen w-full bg-zinc-900 bg-cover' style={{backgroundImage: 'url(/HomeBg.jpg)'}}>
        <div className='absolute top-0 left-0 bg-black/60 h-screen w-full flex items-center justify-center'>
            
            <div className='flex flex-col justify-center items-center absolute top-0 left-0 w-2/3 md:w-1/2 h-screen bg-[#7e787820] backdrop-blur-lg pl-10 pr-8 md:pl-15 md:pr-10'>
                <h1 className='fog-text text-3xl md:text-5xl lg:text-7xl text-start font-bold text-transparent bg-[url(/HomeBg.jpg)] bg-left bg-clip-text tracking-wider montserrat-head-font capitalize'>I build fast modern websites</h1>

                <h2 className='self-start text-xs md:text-lg tracking-widest text-left text-gray-300 mt-5 inter-sub-font'>React &middot; Node.js &middot; GSAP &middot; ResponsiveFrames</h2>

                <p className='text-gray-300/50 self-start text-left absolute bottom-10 text-xs md:text-sm inter-sub-font'>Helping Local Businesses & Startups. Convert visitors into leads.</p>
            </div>
        </div>
    </div>
  )
}

export default Home