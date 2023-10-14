import React from 'react'
import { TbPhone } from 'react-icons/tb'
import LeicesterMap from './LeicesterMap'
import ContactForm from './ContactForm'

export default function LeicesterBranchOffice() {
  return (
    <>
    <section className='w-full py-20'>
        <div className='flex flex-col w-11/12 lg:w-8/12 m-auto'>            
            <div className='flex flex-col-reverse lg:flex-row justify-center gap-16 lg:gap-20 w-full pb-20'>
                <div className='flex flex-col gap-8 w-full lg:w-1/2'>
                    <div className='flex flex-col gap-8'>
                        <h3 className='text-6xl font-black'>
                            Contact Us
                        </h3>
                        <ContactForm classname={'flex flex-col gap-4'}/>
                    </div>                  
                </div>
                <div className='flex flex-col  gap-8 lg:w-1/2'>
                    <div className='w-full h-[50vh]  rounded-3xl overflow-hidden'>
                        <LeicesterMap />
                    </div>
                    <div className='flex gap-2'>
                        <p>Call Us directly:</p>
                        <TbPhone className="w-6 h-6 text-[#00afaa]"/>
                        <p>0116 218 2133</p>
                    </div> 
                </div>
            </div>
            <div className='flex flex-col gap-8 py-8'>
                <h3 className='text-4xl font-black'>
                    About Leicester
                </h3>
                <p className='lg:text-lg'>
                    Leicester is a city, unitary authority area, unparished area and the county town of Leicestershire in the East Midlands of England. It is the largest city in the East Midlands. Its population was 368,600 in 2021, increased by 38,800 from around 329,800 in 2011. The greater Leicester urban area had a population of 559,017 in 2021, making it the 11th most populous in England, and the 13th most populous in the United Kingdom.
                </p>
            </div>
        </div>

    </section>
    </>
  )
}
