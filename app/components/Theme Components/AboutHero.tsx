"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function Abouthero() {
    return(
        <>
        
        <div className="relative h-[50vh] pb-10 bg-[url('/team.webp')] bg-cover bg-bottom bg-no-repeat ">
            <div className='absolute top-0 right-0 w-full h-full bg-[#312252] opacity-75'></div>
            <div className="relative flex flex-col justify-between gap-4 w-11/12 lg:w-8/12 h-[50vh] m-auto ">
              <div className="flex flex-col justify-center w-full h-full text-white">
                <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-center">About us</h1>
                <h2 className="text-sm lg:text-lg font-medium tracking-widest uppercase text-center">Recruitment - Our love</h2>
              </div>
            </div>             
        </div>
        </>
    )
}