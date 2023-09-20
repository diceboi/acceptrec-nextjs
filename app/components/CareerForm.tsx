"use client"

import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { PiPaperPlaneTiltBold } from 'react-icons/pi'

type ClassnameProps = {
  classname: string;
};


export default function CareerForm({classname}: ClassnameProps) {

  return (
    <>
    <section id="applyform" className={classname}>
        <div className='flex justify-center w-11/12 lg:w-8/12 py-20'>
            <form className='flex flex-col items-center gap-8 w-full'>
                <h2 className='text-4xl font-black tracking-tighter'>Apply for Job</h2>
                <input required placeholder='Name' type='name' className=' rounded-full p-4 text-lg shadow-special w-full'></input>
                <input required placeholder='Phone number' type='tel' className=' rounded-full p-4 text-lg shadow-special w-full'></input>
                <input required placeholder='Email' type='email' className=' rounded-full p-4 text-lg shadow-special w-full'></input>
                <input required placeholder='Location' type='text' className=' rounded-full p-4 text-lg shadow-special w-full'></input>
                <textarea required placeholder='Message' rows={5} className='col-span-2 row-span-2 rounded-3xl p-4 text-lg shadow-special w-full'></textarea>
                <button 
                  type="submit" 
                  className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white font-medium text-xl hover:shadow-[#00afa93b] hover:w-fit p-4 rounded-full transition-all duration-200 gap-2"
                  >
                  Apply for Job
                  <PiPaperPlaneTiltBold className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                  />
                </button>
            </form>
        </div>
    </section>
    </>
  )
}
