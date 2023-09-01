import Link from 'next/link'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

export default function EasyRegistration() {
  return (
    <>
        <section className="flex justify-center items-center w-full">
            <div className="flex flex-col lg:flex-row w-11/12 lg:w-8/12 gap-16 py-8">
                <div className="w-11/12 lg:w-1/2 flex justify-center flex-col gap-8">
                    <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                        Registration
                    </h3>
                    <h1 className="text-5xl font-black tracking-tighter ">Quick and easy registration process</h1>
                    <p className="text-lg">
                        Have you found the job you’re looking for on our website? Great! Now is the time to register. There is a number of different ways you can apply for a job. Through our website, via the job board, social media or by sending your CV to our consultants.
                    </p>
                    <Link href="/registration" className='w-fit'>
                        <button 
                            type="submit" 
                            className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white text-xl hover:shadow-[#00afa93b] hover:w-fit p-4 rounded-full transition-all duration-200 gap-2"
                            >
                            Register now
                            <FiArrowUpRight className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                            />
                        </button>
                    </Link>
                </div>
                <div className="w-11/12 lg:w-1/2 h-[60vh] bg-[url('/easy-registration.webp')] bg-contain bg-center bg-no-repeat"></div>
            </div>
        </section>
    </>
  )
}
