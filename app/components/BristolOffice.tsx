import React from 'react'
import { TbPhone } from 'react-icons/tb'
import BristolMap from './BristolMap'

export default function BristolOffice() {
  return (
    <>
    <section className='w-full py-20'>
        <div className='flex flex-col w-11/12 lg:w-8/12 m-auto'>            
            <div className='flex justify-center gap-8 lg:gap-20 w-full'>
                <div className='flex flex-col gap-8 w-full lg:w-1/2'>
                    <h2 className='text-4xl font-black'>Contact</h2>
                    <div className='flex gap-2'><TbPhone className="w-6 h-6 text-[#00afaa]"/>
                        <p>07949110380</p>
                    </div>
                    <h3>
                        Welcome to Bristol
                    </h3>

                </div>
                <div className='flex flex-col w-full h-[40vh] lg:w-1/2 rounded-3xl overflow-hidden'>
                    <BristolMap />
                </div>
                
            </div>
        </div>

    </section>
    </>
  )
}
