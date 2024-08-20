"use client"

import { FiArrowRight } from "react-icons/fi"
import { motion } from "framer-motion"

export default function ChatMessage() {
  return (
    <motion.div 
    initial={{ opacity: 0, x: -200 }}
    animate={{ opacity: [0, 100, 100, 0], x: [-200, 0, 0, -200] }}
    transition={{ duration: 10, times: [0, 0.05, 0.95, 1], ease: "circInOut" }}
    className='fixed flex flex-nowrap items-center gap-4 bottom-[48px] right-[100px] h-[52px] bg-[#00afaa] z-50 rounded-full p-4'>
        <div className='flex flex-col'>
            <h4 className='font-bold text-white text-md'>Chat with us here</h4>
            <p className='text-sm text-white lg:block hidden'>for quick answers to most questions</p>
        </div>
        <FiArrowRight className='w-6 h-6 text-white'/>
    </motion.div>
  )
}
