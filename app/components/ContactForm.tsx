import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { PiPaperPlaneTiltBold } from 'react-icons/pi'

export default function ContactForm() {
  return (
    <>
    <section className='flex justify-center w-full h-auto'>
        <div className='flex justify-center w-11/12 lg:w-8/12 py-20'>
            <form className='grid lg:grid-cols-2 gap-8 w-11/12 lg:w-1/2'>
                <input required value="" placeholder='Name' type='name' className=' rounded-full p-4 text-lg shadow-special w-full'></input>
                <input required value="" placeholder='Phone number' type='tel' className=' rounded-full p-4 text-lg shadow-special w-full'></input>
                <input required value="" placeholder='Email' type='email' className=' rounded-full p-4 text-lg shadow-special w-full'></input>
                <input required value="" placeholder='Location' type='text' className=' rounded-full p-4 text-lg shadow-special w-full'></input>
                <textarea required value="" placeholder='Message' className='col-span-2 row-span-2 rounded-3xl p-4 text-lg shadow-special w-full'></textarea>
                <button 
                  type="submit" 
                  className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white text-xl hover:shadow-[#00afa93b] hover:w-fit p-4 rounded-full transition-all duration-200 gap-2"
                  >
                  Send
                  <PiPaperPlaneTiltBold className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                  />
                </button>
            </form>
        </div>
    </section>
    </>
  )
}
