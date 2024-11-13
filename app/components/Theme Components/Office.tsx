import React from 'react'
import { TbPhone } from 'react-icons/tb'
import ContactForm from '../ContactForm'
import OfficeMap from './Officemap'
import Link from 'next/link'

export default function Office({phonenumber, about, living, jobs, coordinates}:any) {
  return (
    <>
    <section className='w-full py-20' id='contactus'>
        <div className='flex flex-col w-11/12 lg:w-8/12 m-auto'>            
            <div className='flex flex-col-reverse lg:flex-row justify-center gap-16 lg:gap-20 w-full pb-20'>
                <div className='flex flex-col gap-8 w-full lg:w-1/2'>
                    <div className='flex flex-col gap-8'>
                        <h3 className='text-6xl font-black text-[#312252]'>
                            Contact Us
                        </h3>
                        <div className='flex gap-2 text-lg'>
                            <p>Call Us directly:</p>
                                <TbPhone className="w-6 h-6 text-[#00afaa]"/>
                            <Link href={`tel:${phonenumber}`}><p className='font-bold hover:underline text-[#00afaa]'>{phonenumber}</p></Link>
                        </div> 
                        <ContactForm classname={'flex flex-col gap-4'}/>
                    </div>                  
                </div>
                <div className='flex flex-col  gap-8 lg:w-1/2'>
                    <div className='w-full h-[50vh]  rounded-3xl overflow-hidden'>
                        <OfficeMap coordinates={coordinates} />
                    </div>
                </div>
            </div>
            <div className={`${about? 'flex':'hidden'} flex-col gap-8 py-8`}>
                <h3 className='text-4xl font-black text-[#312252]'>
                    About the city
                </h3>
                <p className='lg:text-lg'>
                    {about}
                </p>
            </div>
            <div className={`${living? 'flex':'hidden'} flex-col gap-8 py-8`}>
                <h3 className='text-4xl font-black text-[#312252]'>
                    Living and surrounding area
                </h3>
                <p className='lg:text-lg'>
                    {living} 
                </p>
            </div>
            <div className={`${jobs? 'flex':'hidden'} flex-col gap-8 py-8`}>
                <h3 className='text-4xl font-black text-[#312252]'>
                    Jobs
                </h3>
                <p className='lg:text-lg'>
                    {jobs}
                </p>
            </div>
        </div>

    </section>
    </>
  )
}
