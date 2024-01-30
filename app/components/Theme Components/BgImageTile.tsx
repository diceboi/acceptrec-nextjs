import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

export default function BgImageTile({title, uri, subtitle, text, bgimage, bgimagealt, show}:any) {
  return (
    <div id='commercial' className={`group relative ${show === true ? 'flex' : 'hidden'} bg-[url('/commercial-industries.webp')] bg-cover bg-center gap-8 w-11/12 lg:w-8/12 h-[60vh] m-auto p-8 rounded-3xl ease-in-out duration-200  cursor-pointer visible`}>
        <Image 
        src={bgimage} 
        alt={bgimagealt}
        className='rounded-3xl'
        fill={true}
        style={{objectFit: "cover", objectPosition: "center"}}
        />
        <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-r from-[#312252c9] to-[#00afaa00] opacity-100 ease-out duration-200 rounded-3xl'></div>
        <div className='flex flex-col justify-start lg:justify-between gap-4 h-full'>
            <div className='flex flex-col gap-4'>
                <h3 className='text-4xl font-black tracking-tight text-white z-10'>{title}</h3>
                <p className="text-sm lg:text-lg font-medium tracking-widest uppercase text-white z-10 lg:w-1/2">{subtitle}</p>
            </div>
            <div className='flex flex-col'>
                <p className="text-neutral-200 text-md font-medium z-10 lg:w-1/2">{text}</p>
            </div>
        </div>
        <div className='absolute flex items-center gap-2 right-8 lg:right-16 bottom-8 lg:opacity-0 group-hover:opacity-100 group-hover:right-8 ease-out duration-200'>
            <Link href={uri} className='w-fit'>
                <button  
                        className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white hover:shadow-[#00afa93b] hover:w-fit p-3 rounded-full transition-all duration-200 gap-2"
                        >
                        Read more
                        <FiArrowUpRight className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                        />
                </button>
            </Link>
        </div>                
    </div>
  )
}
