"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

interface JobsHeroProps {
    title: string;
    subtitle: string;
    classname: string;
  }

  const JobsHero: React.FC<JobsHeroProps> = ({ MainTitle, SmallTitle, Text, BackgroundImage, BackgroundImageAltText}:any) => {
    return(
        <>
        <div className="bg-white pb-10 lg:pt-0 pt-16">
            <div className="relative flex flex-col justify-end gap-4 w-full min-h-[30vh] m-auto  ">
                <Image 
                    src={BackgroundImage}
                    alt={BackgroundImageAltText}
                    className={'bg-img'}
                    fill={true}
                    style={{objectFit: "cover", objectPosition: "center"}}
                /> 
              <div className="flex flex-col gap-4 justify-center items-center min-h-[30vh] w-full z-10">
                <h1 className="text-6xl lg:text-8xl font-black tracking-tighter  text-white ">{MainTitle}</h1>
                <h2 className="text-sm lg:text-md font-bold tracking-widest text-center uppercase text-white">{SmallTitle}</h2>
                <p className="text-lg text-center font-bold">{Text}</p>
              </div>
            </div>             
        </div>
        </>
    )
}

export default JobsHero;