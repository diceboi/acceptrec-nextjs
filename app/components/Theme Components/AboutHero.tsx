"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function Abouthero() {
    return(
        <>
        
        <div className="relative bg-gradient-to-br from-white to-[#00afa917] h-[50vh] pb-10">
            <div className="relative flex flex-col justify-between gap-4 w-11/12 lg:w-8/12 h-[50vh] m-auto ">
              <div className="flex flex-col justify-end w-full h-[20vh]">
                <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-center text-[#312252]">About us</h1>
                <h2 className="text-sm lg:text-lg font-medium tracking-widest uppercase text-center">Recruitment - Our love</h2>
              </div>
                
                <div className="w-full h-[30vh] bg-[url('/team.webp')] bg-contain bg-bottom bg-no-repeat">
                </div>
            </div>             
        </div>
        </>
    )
}