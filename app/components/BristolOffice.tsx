import React from 'react'
import { TbPhone } from 'react-icons/tb'
import BristolMap from './BristolMap'
import ContactForm from './ContactForm'

export default function BristolOffice() {
  return (
    <>
    <section className='w-full py-20'>
        <div className='flex flex-col w-11/12 lg:w-8/12 m-auto'>            
            <div className='flex justify-center gap-8 lg:gap-20 w-full pb-20'>
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
                        <BristolMap />
                    </div>
                    <div className='flex gap-2'>
                        <p>Call Us directly:</p>
                        <TbPhone className="w-6 h-6 text-[#00afaa]"/>
                        <p>07949110380</p>
                    </div> 
                </div>
            </div>
            <div className='flex flex-col gap-8 py-8'>
                <h3 className='text-4xl font-black'>
                    About Bristol
                </h3>
                <p className='lg:text-lg'>
                    Bristol is a city in southwestern England that is known for its aerospace, maritime and automotive industries. It also has a rich cultural history, with attractions such as the Bristol Old Vic theater and the Banksy graffiti art. If you&apos;re looking for a job in Bristol, there are plenty of opportunities to choose from. The city&apos;s economy is thriving, thanks to its strong commercial sector. Major employers in Bristol include Rolls-Royce, Airbus and Hewlett Packard. You&apos;ll find all kinds of jobs in Bristol, from entry-level positions to senior management roles. So if you&apos;re thinking about making a move to this vibrant city, now is the time to do it!
                </p>
            </div>
            <div className='flex flex-col gap-8 py-8'>
                <h3 className='text-4xl font-black'>
                    Living in Bristol and surrounding area
                </h3>
                <p className='lg:text-lg'>
                    Bristol is a great city for anyone looking for a place to reside. There are plenty of job opportunities, and the cost of living is relatively low. Bristol has a lot to offer, from its vibrant music scene to its beautiful parks and waterways. Whether you're looking for excitement or relaxation, Bristol is sure to deliver. So if you're thinking about making a move, Bristol should definitely be at the top of your list!
                </p>
            </div>
            <div className='flex flex-col gap-8 py-8'>
                <h3 className='text-4xl font-black'>
                    Jobs in Bristol
                </h3>
                <p className='lg:text-lg'>
                    There are plenty of job opportunities available, making it perfect for anyone looking for a new career. Whether you're looking for something in the tech industry or you're interested in administration, there are definitely jobs out there that will suit your needs. Plus, with its vibrant culture and friendly atmosphere, Bristol is a great place to settle down and start your career. Keep an eye on the job market in Bristol; you won't be disappointed!
                </p>
            </div>
        </div>

    </section>
    </>
  )
}
