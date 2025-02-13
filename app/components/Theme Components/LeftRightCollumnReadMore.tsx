"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { BiMinus, BiPlus } from "react-icons/bi";

export default function LeftRightCollumnReadMore({title, subtitle, introduction, text, image, imagealt, imageposition, link, buttontitle, bgcolor}:any) {

    const [isTextExpanded, setIsTextExpanded] = useState(false);

    const toggleText = () => {
        setIsTextExpanded(!isTextExpanded);
      }
    
      const getTruncatedText = (text: any) => {
        const maxLength = 300; // Adjust the maxLength as needed
        return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
      }

  return (
    <>
        <section className={`flex flex-col gap-8 justify-center items-center w-full py-20 lg:py-20 ${bgcolor}`}>
            
            <div className={`flex ${imageposition === 'left' ? 'flex-col lg:flex-row-reverse' : 'flex-col-reverse lg:flex-row'} w-11/12 lg:w-8/12 gap-16 lg:py-8`}>
            <div className='relative w-11/12 lg:w-8/12 h-[50vh]'>
                <Image 
                    src={image}
                    alt={imagealt}
                    className={'w-11/12 lg:w-8/12 h-auto rounded-3xl'}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
                <div className="w-11/12 lg:w-full flex justify-center flex-col gap-8 text-[#312252]">
                <div className='flex flex-col gap-8 w-full'>
                    {subtitle &&
                    <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                        {subtitle}
                    </h3>
                    }
                    {title &&
                    <h1 className="text-5xl font-black tracking-tighter ">{title}</h1>
                    }
                    {introduction &&
                    <h4 className='font-bold text-lg'>{introduction}</h4>
                    }
                    
                </div>
                <div className='flex flex-col gap-8 w-full'>
                    {text &&
                    <div className='text-lg text-black' dangerouslySetInnerHTML={{__html: isTextExpanded ? text : getTruncatedText(text)}}/>
                    }
                    <button 
                        onClick={toggleText}
                        className="flex flex-nowrap items-center gap-2 text-[#00afaa] underline text-lg font-bold w-fit"
                    >
                        {isTextExpanded ? <><BiMinus />Read Less</> : <><BiPlus /> Read More</>}
                    </button>
                    {link &&
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
                    }
                </div>
                    

                </div>
            </div>
        </section>
    </>
  )
}
