import React from 'react'

function ContactMe() {
  return (
    <div id='contactMe' className='w-full bg-[#141313] '>
        {/* Head Part */}
        <div className='relative w-full h-100 bg-[url(/ContactBg.jpg)] bg-center'>
            <div className='w-full h-full absolute top-0 left-0 bg-black/75 p-5 flex flex-col justify-center'>
                <h1 className='uppercase text-4xl font-bold text-center text-gray-300 tracking-widest montserrat-head-font'>Contact Me</h1>
            
                <p className='text-center capitalize text-white/50 text-sm mt-5 inter-sub-font'>Want to work with me or any queries.<br />Just drop a message.</p>
            </div>
        </div>
        
        {/* my details */}

        <div className='w-full flex flex-col md:flex-row justify-between md:items-start gap-10 px-10 md:px-15 py-20 md:py-25 inter-sub-font'>
            
            <div className='flex flex-col items-center w-full md:w-1/3 lg:w-1/2'>
                <div className='w-full flex flex-wrap md:flex-col h-full justify-center md:justify-between gap-10 md:gap-5 px-10 py-5 md:px-0 md:py-0'>

                    <div className=' flex flex-col items-center md:items-start gap-2'> 
                        <h2 className='uppercase font-bold text-lg text-[#807d7d]'>Email Address</h2>
                        <p className='underline text-md text-white'>khanakram32392@gmail.com</p>
                    </div>

                <div className=' flex flex-col items-center md:items-start gap-2'> 
                    <h2 className='uppercase font-bold text-lg text-[#807d7d]'>Call</h2>
                    <p className='underline text-md text-white'>+91 6350164284</p>
                </div>

                <div className=' flex flex-col items-center md:items-start gap-2'> 
                    <h2 className='uppercase font-bold text-lg text-[#807d7d]'>Location</h2>
                    <p className='underline text-md text-white'>Tal Katora, Tonk, Rajasthan</p>
                    <p className='text-white text-md'>304001</p>
                </div>
                </div>
            </div>

            {/* send message form */}

            <form className='w-full lg:w-1/2 flex flex-col gap-8 py-5 md:px-0 md:py-0' action="">
                {/* name section */}
                <div className=' flex justify-between items-center gap-3'>
                    <div className='w-full flex flex-col gap-1'>
                        <label htmlFor='firstName' className="text-white">First Name</label>
                        <input type="text" id='firstName' className='w-full bg-zinc-800 p-1 outline-none text-white'/>
                    </div>
                    <div className='w-full flex flex-col gap-1'>
                        <label htmlFor='lastName' className="text-white">Last Name</label>
                        <input type="text" id='lastName' className='w-full bg-zinc-800 p-1 outline-none text-white'/>
                    </div>
                </div>

                {/* email and phone */}

                <div className='w-full flex justify-between items-center gap-3'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='email' className="text-white">Email</label>
                        <input type="text" id='email' className='w-full bg-zinc-800 p-1 outline-none text-white'/>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='phone' className="text-white">Phone</label>
                        <input type="text" id='phone' className='w-full bg-zinc-800 p-1 outline-none text-white'/>
                    </div>
                </div>

                {/* Location and date */}

                <div className='w-full flex justify-between items-center gap-3'>
                    <div className='flex flex-col gap-1'>
                        <label htmlFor='location' className="text-white">Location</label>
                        <input type="text" id='location' className='w-full text-white bg-zinc-800 p-1 outline-none'/>
                    </div>
                    <div className='w-1/3 flex flex-col gap-1'>
                        <label htmlFor='date' className="text-white">Date</label>
                        <input type="date" id='date' className='w-full bg-zinc-800 text-white p-1 outline-none'/>
                    </div>
                </div>

                {/* subject */} 

                <div className='flex flex-col gap-1'>
                    <label htmlFor="subject" className='text-white'>Subject</label>
                    <input type="text" id='subject' className='w-full bg-zinc-800 p-1 text-white outline-none' />
                </div>

                {/* details */}
                
                <div className='flex flex-col gap-1'>
                    <label htmlFor="details" className='text-white'>Details</label>
                    <textarea name="" id="details" className='w-full bg-zinc-800 outline-none text-white' rows={10}></textarea>
                </div>

                <button className='bg-transparent text-[#807d7d] border-1 border-[#807d7d] p-2'>Send Message</button>
            </form>
        </div>
        <footer className='py-5 px-5 w-full bg-[#010101] text-white flex flex-col items-center gap-2 inter-sub-font'> 
            <p className='text-lg text-center capitalize tracking-wider italic'>Designed with intent. Build with Code!</p>
            <p className='text-lg tracking-widest text-center'>&copy; {new Date().getFullYear()} <span className='font-bold'>Mohammad Akram</span>. All rights reserved.</p>
        </footer>
    </div>
  )
}

export default ContactMe