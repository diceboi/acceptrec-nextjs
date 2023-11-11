import Link from 'next/link'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

export default function EmployersHero() {
  return (
    <>        
        <div className="overflow-hidden flex flex-col justify-center relative h-[70vh] pb-10 bg-[url('/accepted-job.webp')] bg-center bg-cover bg-no-repeat bg-opacity-20 pt-16 lg:pt-0">
            <div className='absolute top-0 right-0 w-full h-full bg-gradient-to-r from-[#312252] to-[#31225283]'></div>
            <div className="relative flex flex-col gap-4 w-11/12 lg:w-8/12 m-auto ">
              <div className="flex flex-col justify-center gap-4 lg:w-1/2 h-full text-white">
                <h2 className="text-sm lg:text-md font-bold tracking-widest uppercase">For Employers</h2>
                <h1 className="text-6xl lg:text-8xl font-black tracking-tighter">Looking for staff?</h1>
                <p>At Accept, we provide a range of workforce solutions which employers in any sector can benefit from. </p>
                <Link href="/contact-us" className='w-fit'>
                <button  
                        className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white hover:shadow-[#00afa93b] hover:w-fit p-3 rounded-full transition-all duration-200 gap-2"
                        >
                        Ask for a demo
                        <FiArrowUpRight className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                        />
                </button>
                </Link>              
              </div>
            </div>
            <div className='employers-slide hidden lg:flex flex-nowrap w-[200vw] z-10'>
                <div className='flex justify-evenly gap-16 h-full w-[100vw]  text-[#ffffff80]'>
                    <div className='flex flex-col justify-center items-center'>                
                        <h3 className='font-bold'>Consultancy</h3>                
                    </div>
                    <div className='flex flex-col justify-center items-center'>                
                        <h3 className='font-bold'>Contingent Workforce Solutions</h3>                
                    </div>
                    <div className='flex flex-col justify-center items-center'>                
                        <h3 className='font-bold'>Recruitment Process Outsourcing</h3>                
                    </div>
                    <div className='flex flex-col justify-center items-center'>                
                        <h3 className='font-bold'>Training & Development Support</h3>                
                    </div>
                    <div className='flex flex-col justify-center items-center'>                
                        <h3 className='font-bold'>Payroll Support</h3>                
                    </div>
                    <div className='flex flex-col justify-center items-center'>                
                        <h3 className='font-bold'>Master Vendor</h3>                
                    </div>
                </div>
                <div className='flex justify-evenly gap-16 h-full w-[100vw] text-[#ffffff80]'>
                    <div className='flex flex-col justify-center items-center'>                
                        <h3 className='font-bold'>Consultancy</h3>                
                    </div>
                    <div className='flex flex-col justify-center items-center'>                
                        <h3 className='font-bold'>Contingent Workforce Solutions</h3>                
                    </div>
                    <div className='flex flex-col justify-center items-center'>                
                        <h3 className='font-bold'>Recruitment Process Outsourcing</h3>                
                    </div>
                    <div className='flex flex-col justify-center items-center'>                
                        <h3 className='font-bold'>Training & Development Support</h3>                
                    </div>
                    <div className='flex flex-col justify-center items-center'>                
                        <h3 className='font-bold'>Payroll Support</h3>                
                    </div>
                    <div className='flex flex-col justify-center items-center'>                
                        <h3 className='font-bold'>Master Vendor</h3>                
                    </div>
                </div>
            </div>             
        </div>
    </>
  )
}
