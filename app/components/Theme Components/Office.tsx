import React from 'react'
import { TbPhone } from 'react-icons/tb'
import ContactForm from '../ContactForm'
import OfficeMap from './Officemap'

export default function Office({phonenumber, about, living, jobs, coordinates}:any) {
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
                        <OfficeMap coordinates={coordinates} />
                    </div>
                    <div className='flex gap-2'>
                        <p>Call Us directly:</p>
                        <TbPhone className="w-6 h-6 text-[#00afaa]"/>
                        <p>{phonenumber}</p>
                    </div> 
                </div>
            </div>
            <div className={`${about? 'flex':'hidden'} flex-col gap-8 py-8`}>
                <h3 className='text-4xl font-black'>
                    About the city
                </h3>
                <p className='lg:text-lg'>
                    {about}
                </p>
            </div>
            <div className={`${living? 'flex':'hidden'} flex-col gap-8 py-8`}>
                <h3 className='text-4xl font-black'>
                    Living and surrounding area
                </h3>
                <p className='lg:text-lg'>
                    {living} 
                </p>
            </div>
            <div className={`${jobs? 'flex':'hidden'} flex-col gap-8 py-8`}>
                <h3 className='text-4xl font-black'>
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
