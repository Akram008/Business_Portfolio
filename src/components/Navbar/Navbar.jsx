import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useState } from 'react'
import { useRef } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";

gsap.registerPlugin(useGSAP)

function Navbar() {

  const [openMenu, setOpenMenu] = useState(false)   

  const mobileMenuRef = useRef()   

  useGSAP(()=>{
    const tl = gsap.timeline() 
    tl.from('#desktopContainer h1', {
      y: '-100%',
      opacity: 0, 
      duration: 0.5, 
      delay: 3
    })
    tl.from('#desktopContainer .hamburger', {
      y: '-100%', 
      opacity: 0,
    })
    tl.from('#desktopContainer div h2', {
      y: '-100%', 
      opacity: 0,
      stagger: 0.2
    })
    
  })
  
  
  const {contextSafe} = useGSAP(()=>{
    gsap.set(mobileMenuRef.current, {
        height: 0,
    })
    gsap.set('.mobileMenu h2', {
        y: -400,     
    })

  }, {scope: mobileMenuRef})

  const handleOpenMobileMenu = contextSafe(() =>{
    setOpenMenu(true) 
    gsap.to(mobileMenuRef.current, {
        height: '300',
        duration: 1
    })
    gsap.to('.mobileMenu h2', {
        y: 0, 
        duration: 1,    
    })
  })

  const handleCloseMobileMenu = contextSafe(() =>{
    setOpenMenu(false) 
    gsap.to(mobileMenuRef.current, {
        height: 0,
        duration: 1 
    })
    gsap.to('.mobileMenu h2', {
        y: -400,    
        duration: 1  
    })
  })

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <div id='navbar' className='z-50 fixed top-0 left-0 w-full px-10 md:px-15 py-8 md:py-10 bg-transparent'>
    <div id='desktopContainer' className='w-full flex items-center justify-between '>
        <h1 className='text-[#e2d8d8] font-bold italic montserrat-head-font'>Akram</h1>
        <div className=' items-center gap-8 hidden md:flex inter-sub-font'>
            <h2 className='text-[#e2d8d8] cursor-pointer' onClick={()=>scrollToSection('home')}>Home</h2>
            <h2 className='text-[#e2d8d8] cursor-pointer' onClick={()=>scrollToSection('work')}>Work</h2>
            <h2 className='text-[#e2d8d8] cursor-pointer' onClick={()=>scrollToSection('services')}>Services</h2>
            <h2 className='text-[#e2d8d8] text-md mx-5 font-bold cursor-pointer' onClick={()=>scrollToSection('whyMe')}>Why Choose Me</h2>
            <h2 className='text-[#e2d8d8] cursor-pointer' onClick={()=>scrollToSection('contactMe')} >Testimonials</h2> 
        </div>
        <button className={`hamburger md:hidden text-[#e2d8d8] ${openMenu && 'hidden'}`} onClick={handleOpenMobileMenu}><HiMenuAlt3/></button>
        <button className={`md:hidden text-[#e2d8d8] ${!openMenu && 'hidden'}`} onClick={handleCloseMobileMenu}><RiCloseFill/></button>
    </div>

    {/* mobile menu */} 

    <div ref={mobileMenuRef} className='mobileMenu w-full h-auto flex flex-col items-center gap-5 md:hidden overflow-hidden inter-sub-font'>
        <h2 className='text-[#e2d8d8] w-full text-center py-2 ' onClick={()=>scrollToSection('home')}>Home</h2>
        <h2 className='text-[#e2d8d8] w-full text-center py-2 ' onClick={()=>scrollToSection('work')}>Work</h2>
        <h2 className='text-[#e2d8d8] w-full text-center py-2' onClick={()=>scrollToSection('services')}>Services</h2>
        <h2 className='text-[#e2d8d8] text-md mx-5 font-bold w-full text-center py-2' onClick={()=>scrollToSection('whyMe')}>Why Choose Me</h2>
        <h2 className='text-[#e2d8d8] w-full text-center py-2' onClick={()=>scrollToSection('contactMe')}>Testimonials</h2> 
    </div>
    </div>
  )
}

export default Navbar