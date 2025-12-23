import React, { useRef } from 'react'
import './Home.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

function Home() {

  const glassContainer = useRef() 
  const glassContainerHeading = useRef()
  const glassContainerSubHeading = useRef()
  const glassContainerSubText = useRef()

  useGSAP(()=>{
    const tl = gsap.timeline()

    tl.from(glassContainer.current, {
      x:'-100%', 
      duration: 1.5, 
    })
    tl.from(glassContainerHeading.current, {
      opacity: 0, 
      duration: 0.7
    })
    tl.from(glassContainerSubHeading.current, {
      opacity: 0, 
      duration: 0.5
    })
    tl.from(glassContainerSubText.current, {
      opacity: 0, 
      duration: 0.3
    })
  }, {scope: glassContainer})

  return (
    <div id='home' className='relative h-screen w-full bg-cover bg-[url(/HomeMobileBg.png)] md:bg-[url(/HomeBg2.jpg)]'>
        <div className='absolute top-0 left-0 bg-black/60 h-screen w-full flex items-center justify-center'>
            
            <div ref={glassContainer} className='flex flex-col justify-center items-center absolute top-0 left-0 w-2/3 md:w-1/2 h-screen bg-[#fff6f620] backdrop-blur-sm pl-10 pr-8 md:pl-15 md:pr-10'>
                <h1 ref={glassContainerHeading} className='fog-text text-3xl md:text-5xl lg:text-7xl text-start font-bold text-transparent bg-[url(/HomeMobileBg.png)] md:bg-[url(/HomeBg2.jpg)] bg-left bg-clip-text tracking-wider montserrat-head-font capitalize'>I build fast modern websites</h1>

                <h2 ref={glassContainerSubHeading} className='self-start text-xs md:text-lg tracking-widest text-left text-gray-300 mt-5 inter-sub-font'>React &middot; Node.js &middot; GSAP &middot; ResponsiveFrames</h2>

                <p ref={glassContainerSubText} className='text-gray-300/50 self-start text-left absolute bottom-10 text-xs md:text-sm inter-sub-font'>Helping Local Businesses & Startups. Convert visitors into leads.</p>
            </div>
        </div>
    </div>
  )
}

export default Home