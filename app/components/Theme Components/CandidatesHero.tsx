import Link from 'next/link'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

export default function CandidatesHero() {
  return (
    <>        
        <div className="overflow-hidden flex flex-col justify-center relative min-h-[70vh] pb-10 bg-[url('/for-candidates.webp')] bg-center bg-cover bg-no-repeat bg-opacity-20 pt-16 lg:pt-0">
            <div className='absolute top-0 right-0 w-full h-full bg-gradient-to-r from-[#28a19d] to-[#00afa936]'></div>
            <div className="relative flex flex-col gap-4 w-11/12 lg:w-8/12 m-auto ">
              <div className="flex flex-col justify-center gap-4 lg:w-1/2 h-full text-white">
                <h2 className="text-sm lg:text-md font-bold tracking-widest uppercase">For Candidates</h2>
                <h1 className="text-5xl lg:text-8xl font-black tracking-tighter">We will do our best to find you a job</h1>
                <p>Our goal is to help you too, whether you are without a job, considering a change or simply looking for a better-paid job.</p>
                <Link href="/jobs" className='w-fit'>
                <button  
                        className="group flex justify-between items-center w-fit bg-[#fff] hover:bg-[#e5e5e5] hover:shadow-xl hover:gap-4 shadow-lg text-black hover:shadow-[#00afa93b] hover:w-fit p-3 rounded-full transition-all duration-200 gap-2"
                        >
                        Find Jobs
                        <FiArrowUpRight className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                        />
                </button>
                </Link>              
              </div>
            </div>
            <div className='employers-slide hidden lg:flex flex-nowrap w-[200vw] z-10'>
                <div className='flex justify-evenly gap-16 h-full w-[100vw] text-[#ffffffb7]'>
                    <div className='flex flex-col justify-center items-center'>                
                        <h3 className='font-bold'>Transparency</h3>                
                    </div>
                    <div className='flex flex-col justify-center items-center'>                
                        <h3 className='font-bold'>Care</h3>                
                    </div>
                    <div className='flex flex-col justify-center items-center'>                
                        <h3 className='font-bold'>Easy registration process</h3>                
                    </div>
                    <div className='flex flex-col justify-center items-center'>                
                        <h3 className='font-bold'>Satisfaction</h3>                
                    </div>
                    <div className='flex flex-col justify-center items-center'>                
                        <h3 className='font-bold'>Great rates of pay</h3>                
                    </div>
                    <div className='flex flex-col justify-center items-center'>                
                        <h3 className='font-bold'>Honesty</h3>                
                    </div>
                </div>
                <div className='flex justify-evenly gap-16 h-full w-[100vw] text-[#ffffff80]'>
                    <div className='flex flex-col justify-center items-center'>                
                        <h3 className='font-bold'>Transparency</h3>                
                    </div>
                    <div className='flex flex-col justify-center items-center'>                
                        <h3 className='font-bold'>Care</h3>                
                    </div>
                    <div className='flex flex-col justify-center items-center'>                
                        <h3 className='font-bold'>Easy registration process</h3>                
                    </div>
                    <div className='flex flex-col justify-center items-center'>                
                        <h3 className='font-bold'>Satisfaction</h3>                
                    </div>
                    <div className='flex flex-col justify-center items-center'>                
                        <h3 className='font-bold'>Great rates of pay</h3>                
                    </div>
                    <div className='flex flex-col justify-center items-center'>                
                        <h3 className='font-bold'>Honesty</h3>                
                    </div>
                </div>
            </div>             
        </div>
    </>
  )
}
