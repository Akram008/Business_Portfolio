import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Work from './components/Work/Work'
import Services from './components/Services/Services'
import WhyMe from './components/WhyMe/WhyMe'
import ContactMe from './components/ContactMe/ContactMe'
import Lenis from 'lenis'


function App() {

  useEffect(()=>{

    const lenis = new Lenis({
      smoothWheel: true,
      duration: 2
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, [])

  return (
    <div className='h-screen w-full bg-[#0a0a0a]'>
      <Navbar/>
      <Home/>
      <Work/>
      <Services/>
      <WhyMe/>
      <ContactMe/>
    </div>
  )
}

export default App