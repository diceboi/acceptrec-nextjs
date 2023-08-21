"use client"

import React, { useState, useEffect, useRef } from 'react';
import ProgressBar from './progressbar/progressbar';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

export default function Rated() {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        console.log("Element is in view: ", isInView)
      }, [isInView])

    useEffect(() => {
        const interval = setInterval(() => {
          setPercentage((prevPercentage) =>
            prevPercentage < 100 ? prevPercentage + 10 : prevPercentage
          );
        }, 500); // Adjust the interval time to control the speed of animation
    
        return () => clearInterval(interval);
      }, []);

      const progressBarDelays = [0, 500, 1000];
    
    return(
        <>
        <section className="flex flex-col items-center justify-center py-20 w-full bg-gradient-to-br from-[#312252] to-[#1f1635] overflow-hidden">
            <div className='relative flex flex-col gap-4 w-11/12 lg:w-8/12 justify-start m-auto pb-16'>
                <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase text-white'>
                    Rated by established clients
                </h3>
                <h2 className='text-6xl lg:text-6xl font-black tracking-tighter  text-white'>
                    Our Strengths
                </h2>
                <p className="font-medium text-neutral-300">
                    Take a look at how our established clients rank some of our recruitment services.
                </p>
                <Image src="/rated.webp" width={400} height={300} alt="" className='absolute -top-32 right-[15%] opacity-20'/>
            </div>

            <div ref={ref} className="w-8/12 m-auto grid grid-cols-3 grid-rows-1 gap-8 text-white z-10">
                <div className="flex flex-col gap-4 font-medium bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl shadow-special p-4 ">
                    <div className="flex justify-between items-center">
                        <h3 className='text-2xl font-medium tracking-tight text-white'>Booking fill rate</h3>
                    </div>
                    <motion.div                    
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .6, ease: "easeOut"}}
                    >
                        <ProgressBar percentage={98} color="#00afaa" delay={0} />
                    </motion.div>
                </div>
                <div className="flex flex-col gap-4 font-medium bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl shadow-special p-4 ">
                    <div className="flex justify-between items-center">
                        <h3 className='text-2xl font-medium tracking-tight text-white'>Attendance vs Booked</h3>
                    </div>
                    <div>
                        <ProgressBar percentage={99} color="#ff914d" delay={200}/>
                    </div>
                    
                </div>
                <div className="flex flex-col gap-4 font-medium bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl shadow-special p-4 ">
                    <div className="flex justify-between items-center">
                        <h3 className='text-2xl font-medium tracking-tight text-white'>Invoice Accuracy</h3>
                    </div>
                    <div>
                        <ProgressBar percentage={100} color="blue" delay={400}/>
                    </div>
                    
                </div>
                
            </div>           
        </section>
        </>
    )
}

