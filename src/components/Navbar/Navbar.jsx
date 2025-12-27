import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useState, useEffect, useRef } from 'react'
import { HiMenuAlt3 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";

gsap.registerPlugin(useGSAP)

function Navbar() {

  const [openMenu, setOpenMenu] = useState(false)   
  const [scrolled, setScrolled] = useState(false);

  const mobileMenuRef = useRef()   
  const navbarRef = useRef();

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
    setScrolled(true)
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
    setScrolled(false)
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

  // Blur on scroll: listen to window scroll and set state based on half of #home height
  useEffect(() => {
    function handleScroll() {
      const homeSection = document.getElementById('home');
      if (homeSection) {
        const halfHome = homeSection.offsetHeight / 2;
        setScrolled(window.scrollY > halfHome);
      } else {
        setScrolled(window.scrollY > 100); // fallback
      }
    }

    window.addEventListener('scroll', handleScroll, {passive: true});
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Conditional class for blur/translucent effect
  // We'll use Tailwind for backdrop-blur and bg opacity, with transition for smoothness
  // Example: "backdrop-blur bg-[#181818CC]"

  return (
    <div
      id='navbar'
      ref={navbarRef}
      className={
        `z-50 fixed top-0 left-0 w-full px-10 md:px-15 py-8 md:py-10 transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-md bg-[#0a0a0a]/80 bg-opacity-90 shadow-xl shadow-black/50 border-b border-white/5'
            : 'bg-transparent border-0'
        }`
      }
      style={{WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none'}}
    >
      <div id='desktopContainer' className='w-full flex items-center justify-between '>
          <h1 className='text-[#f5f5f5] font-bold italic montserrat-head-font'>Akram</h1>
          <div className=' items-center gap-8 hidden md:flex inter-sub-font'>
              <h2 className='text-[#e5e5e5] hover:text-[#fb923c] transition-colors cursor-pointer' onClick={()=>scrollToSection('home')}>Home</h2>
              <h2 className='text-[#e5e5e5] hover:text-[#fb923c] transition-colors cursor-pointer' onClick={()=>scrollToSection('work')}>Work</h2>
              <h2 className='text-[#e5e5e5] hover:text-[#fb923c] transition-colors cursor-pointer' onClick={()=>scrollToSection('services')}>Services</h2>
              <h2 className='text-[#e5e5e5] hover:text-[#fb923c] text-md mx-5 font-bold transition-colors cursor-pointer' onClick={()=>scrollToSection('whyMe')}>Why Choose Me</h2>
              <h2 className='text-[#e5e5e5] hover:text-[#fb923c] transition-colors cursor-pointer' onClick={()=>scrollToSection('contactMe')} >Testimonials</h2> 
          </div>
          <button className={`hamburger md:hidden text-[#f5f5f5] hover:text-[#fb923c] transition-colors ${openMenu && 'hidden'}`} onClick={handleOpenMobileMenu}><HiMenuAlt3/></button>
          <button className={`md:hidden text-[#f5f5f5] hover:text-[#fb923c] transition-colors ${!openMenu && 'hidden'}`} onClick={handleCloseMobileMenu}><RiCloseFill/></button>
      </div>

      {/* mobile menu */} 
      <div ref={mobileMenuRef} className='mobileMenu w-full h-auto flex flex-col items-center gap-5 md:hidden overflow-hidden inter-sub-font bg-transparent'>
          <h2 className='text-[#e5e5e5] hover:text-[#fb923c] w-full text-center py-2 transition-colors cursor-pointer' onClick={()=>scrollToSection('home')}>Home</h2>
          <h2 className='text-[#e5e5e5] hover:text-[#fb923c] w-full text-center py-2 transition-colors cursor-pointer' onClick={()=>scrollToSection('work')}>Work</h2>
          <h2 className='text-[#e5e5e5] hover:text-[#fb923c] w-full text-center py-2 transition-colors cursor-pointer' onClick={()=>scrollToSection('services')}>Services</h2>
          <h2 className='text-[#e5e5e5] hover:text-[#fb923c] text-md mx-5 font-bold w-full text-center py-2 transition-colors cursor-pointer' onClick={()=>scrollToSection('whyMe')}>Why Choose Me</h2>
          <h2 className='text-[#e5e5e5] hover:text-[#fb923c] w-full text-center py-2 transition-colors cursor-pointer' onClick={()=>scrollToSection('contactMe')}>Testimonials</h2> 
      </div>
    </div>
  )
}

export default Navbar