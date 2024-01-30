import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

export default function TeamMemberTile({slug, profilepicture, name, position}:any) {
  return (
    <Link href={`/about-us/team/${slug}`} className="recruitment-tile lg:h-[450px] h-[250px] group flex flex-col cursor-pointer ease-out duration-200">
        <div className={`relative flex flex-col justify-end h-full p-4 ease-out duration-200`}>
            <Image 
                src={profilepicture}
                alt={name}
                className={'bg-img'}
                fill={true}
                style={{objectFit: "cover", objectPosition: "top"}}
            />
            <div className="flex flex-nowrap justify-between w-full z-10 ">
                <div className="flex flex-col">
                    <h3 className="text-xl lg:text-2xl font-black text-white">{name}</h3>
                    <p className="text-sm font-medium text-white">{position}</p>
                </div>                            
                <FiArrowRight className='absolute right-8 bottom-4 recruitment-icon text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
            </div>
            <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#000000c0] to-[#0000] opacity-30 group-hover:opacity-100 ease-out duration-200'>
            </div>
        </div>                    
    </Link>
)}


