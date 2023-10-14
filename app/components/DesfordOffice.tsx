import React from 'react'
import { TbPhone } from 'react-icons/tb'
import DesfordMap from './DesfordMap'
import ContactForm from './ContactForm'

export default function DesfordOffice() {
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
                        <DesfordMap />
                    </div>
                    <div className='flex gap-2'>
                        <p>Call Us directly:</p>
                        <TbPhone className="w-6 h-6 text-[#00afaa]"/>
                        <p>07342829774</p>
                    </div> 
                </div>
            </div>
            <div className='flex flex-col gap-8 py-8'>
                <h3 className='text-4xl font-black'>
                    About Desford
                </h3>
                <p className='lg:text-lg'>
                    Desford is a village and civil parish in the Hinckley and Bosworth district of England, 7 miles (11 km) west of the centre of Leicester and around 7 miles north east of Hinckley. Situated on a hill approximately 400 feet above sea level, the parish includes the hamlets of Botcheston and Newtown Unthank and a scattered settlement at Lindridge.
                </p>
            </div>
        </div>

    </section>
    </>
  )
}
