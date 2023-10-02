import React from 'react'
import { TbPhone } from 'react-icons/tb'
import TamworthMap from './TamworthMap'
import ContactForm from './ContactForm'

export default function CoventryOffice() {
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
                        <ContactForm />
                    </div>                  
                </div>
                <div className='flex flex-col  gap-8 lg:w-1/2'>
                    <div className='w-full h-[50vh]  rounded-3xl overflow-hidden'>
                        <TamworthMap />
                    </div>
                    <div className='flex gap-2'>
                        <p>Call Us directly:</p>
                        <TbPhone className="w-6 h-6 text-[#00afaa]"/>
                        <p>07943156678</p>
                    </div> 
                </div>
            </div>
            <div className='flex flex-col gap-8 py-8'>
                <h3 className='text-4xl font-black'>
                    About Tamworth
                </h3>
                <p className='lg:text-lg'>
                    Tamworth is a market town and borough in Staffordshire, England, 14 miles (23 km) north-east of Birmingham. The town borders North Warwickshire to the east and north, Lichfield to the north, south-west and west. The town takes its name from the River Tame, which flows through it. The population of Tamworth borough (2021) was 78,646. The wider urban area had a population of 81,964. The town&apos;s industries include logistics, engineering, clothing, brick, tile and paper manufacture.
                </p>
            </div>
        </div>

    </section>
    </>
  )
}
