import React from 'react'

function ContactMe() {
  return (
    <div id='contactMe' className='w-full bg-[#0a0a0a] '>
        {/* Head Part */}
        <div className='relative w-full h-100 bg-[url(/ContactBg.jpg)] bg-center'>
            <div className='w-full h-full absolute top-0 left-0 bg-[#0a0a0a]/85 p-5 flex flex-col justify-center'>
                <h1 className='uppercase text-4xl font-bold text-center text-[#f5f5f5] tracking-widest montserrat-head-font'>Contact Me</h1>
            
                <p className='text-center capitalize text-[#a0a0a0] text-sm mt-5 inter-sub-font'>Want to work with me or any queries.<br />Just drop a message.</p>
            </div>
        </div>
        
        {/* my details */}

        <div className='w-full flex flex-col md:flex-row justify-between md:items-start gap-10 px-10 md:px-15 py-20 md:py-25 inter-sub-font'>
            
            <div className='flex flex-col items-center w-full md:w-1/3 lg:w-1/2'>
                <div className='w-full flex flex-wrap md:flex-col h-full justify-center md:justify-between gap-10 md:gap-5 px-10 py-5 md:px-0 md:py-0 bg-[#1a1a1a] border border-white/5 rounded-xl p-8'>

                    <div className=' flex flex-col items-center md:items-start gap-2'> 
                        <h2 className='uppercase font-bold text-lg text-[#a0a0a0]'>Email Address</h2>
                        <p className='text-md text-[#f5f5f5] hover:text-[#fb923c] transition-colors cursor-pointer'>khanakram32392@gmail.com</p>
                    </div>

                <div className=' flex flex-col items-center md:items-start gap-2'> 
                    <h2 className='uppercase font-bold text-lg text-[#a0a0a0]'>Call</h2>
                    <p className='text-md text-[#f5f5f5] hover:text-[#fb923c] transition-colors cursor-pointer'>+91 6350164284</p>
                </div>

                <div className=' flex flex-col items-center md:items-start gap-2'> 
                    <h2 className='uppercase font-bold text-lg text-[#a0a0a0]'>Location</h2>
                    <p className='text-md text-[#f5f5f5]'>Tal Katora, Tonk, Rajasthan</p>
                    <p className='text-[#a0a0a0] text-md'>304001</p>
                </div>
                </div>
            </div>

            {/* send message form */}

            <form className='w-full lg:w-1/2 flex flex-col gap-8 py-5 md:px-0 md:py-0' action="">
                {/* name section */}
                <div className=' flex justify-between items-center gap-3'>
                    <div className='w-full flex flex-col gap-1'>
                        <label htmlFor='firstName' className="text-[#e5e5e5]">First Name</label>
                        <input type="text" id='firstName' className='w-full bg-[#1a1a1a] border border-white/10 focus:border-[#fb923c]/50 p-3 outline-none text-[#f5f5f5] rounded-lg transition-colors'/>
                    </div>
                    <div className='w-full flex flex-col gap-1'>
                        <label htmlFor='lastName' className="text-[#e5e5e5]">Last Name</label>
                        <input type="text" id='lastName' className='w-full bg-[#1a1a1a] border border-white/10 focus:border-[#fb923c]/50 p-3 outline-none text-[#f5f5f5] rounded-lg transition-colors'/>
                    </div>
                </div>

                {/* email and phone */}

                <div className='w-full flex justify-between items-center gap-3'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='email' className="text-[#e5e5e5]">Email</label>
                        <input type="text" id='email' className='w-full bg-[#1a1a1a] border border-white/10 focus:border-[#fb923c]/50 p-3 outline-none text-[#f5f5f5] rounded-lg transition-colors'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='phone' className="text-[#e5e5e5]">Phone</label>
                        <input type="text" id='phone' className='w-full bg-[#1a1a1a] border border-white/10 focus:border-[#fb923c]/50 p-3 outline-none text-[#f5f5f5] rounded-lg transition-colors'/>
                    </div>
                </div>

                {/* Location and date */}

                <div className='w-full flex justify-between items-center gap-3'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='location' className="text-[#e5e5e5]">Location</label>
                        <input type="text" id='location' className='w-full bg-[#1a1a1a] border border-white/10 focus:border-[#fb923c]/50 p-3 outline-none text-[#f5f5f5] rounded-lg transition-colors'/>
                    </div>
                    <div className='w-1/3 flex flex-col gap-1'>
                        <label htmlFor='date' className="text-[#e5e5e5]">Date</label>
                        <input type="date" id='date' className='w-full bg-[#1a1a1a] border border-white/10 focus:border-[#fb923c]/50 p-3 outline-none text-[#f5f5f5] rounded-lg transition-colors'/>
                    </div>
                </div>

                {/* subject */} 

                <div className='flex flex-col gap-1'>
                    <label htmlFor="subject" className='text-[#e5e5e5]'>Subject</label>
                    <input type="text" id='subject' className='w-full bg-[#1a1a1a] border border-white/10 focus:border-[#fb923c]/50 p-3 outline-none text-[#f5f5f5] rounded-lg transition-colors' />
                </div>

                {/* details */}
                
                <div className='flex flex-col gap-1'>
                    <label htmlFor="details" className='text-[#e5e5e5]'>Details</label>
                    <textarea name="" id="details" className='w-full bg-[#1a1a1a] border border-white/10 focus:border-[#fb923c]/50 outline-none text-[#f5f5f5] rounded-lg p-3 transition-colors' rows={10}></textarea>
                </div>

                <button className='bg-transparent text-[#f5f5f5] border border-[#fb923c]/50 hover:bg-[#fb923c]/10 hover:border-[#fb923c] p-3 rounded-lg transition-all duration-300 font-semibold'>Send Message</button>
            </form>
        </div>
        <footer className='py-5 px-5 w-full bg-[#0a0a0a] border-t border-white/5 text-[#a0a0a0] flex flex-col items-center gap-2 inter-sub-font'> 
            <p className='text-lg text-center capitalize tracking-wider italic'>Designed with intent. Build with Code!</p>
            <p className='text-lg tracking-widest text-center'>&copy; {new Date().getFullYear()} <span className='font-bold text-[#f5f5f5]'>Mohammad Akram</span>. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default ContactMe