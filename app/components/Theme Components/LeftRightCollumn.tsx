import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

export default function LeftRightCollumn({title, subtitle, introduction, text, image, imagealt, imageposition, link, buttontitle}:any) {
  return (
    <>
        <section className="flex justify-center items-center w-full py-8 lg:py-20">
            <div className={`flex ${imageposition === 'left' ? 'flex-col lg:flex-row-reverse' : 'flex-col-reverse lg:flex-row'} w-11/12 lg:w-8/12 gap-16 lg:py-8 pb-20`}>
                <div className="w-11/12 lg:w-1/2 flex justify-center flex-col gap-8 text-[#312252]">
                    <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                        {subtitle}
                    </h3>
                    <h1 className="text-5xl font-black tracking-tighter ">{title}</h1>
                    <h4 className='font-bold text-lg'>{introduction}</h4>
                    <p className="text-lg">
                        {text}
                    </p>

                    <Link href={link? link : '/'} className={`${link ? 'block' : 'hidden'} w-fit`}>
                        <button 
                            type="submit" 
                            className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white text-xl hover:shadow-[#00afa93b] hover:w-fit p-4 rounded-full transition-all duration-200 gap-2"
                            >
                            {buttontitle}
                            <FiArrowUpRight className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                            />
                        </button>
                    </Link>

                </div>
                <div className="relative flex justify-center items-center w-11/12 lg:w-1/2 lg:h-[60vh] min-h-[40vh]">
                <Image 
                    src={image}
                    alt={imagealt}
                    className={'w-full h-auto rounded-3xl'}
                    width={500}
                    height={500}
                />
                </div>
            </div>
        </section>
    </>
  )
}
