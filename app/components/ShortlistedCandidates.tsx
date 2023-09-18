"use client"

import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/grid'
import ShortlistedCandidateTile from './ShortlistedCandidateTile';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';


export default function ShortlistedCandidates() {

    
    return(
        <>
        <section className="w-full py-20 bg-neutral-100">
            <div className='flex flex-col gap-8 w-11/12 lg:w-8/12 m-auto'>
                <div className='flex flex-col gap-4 w-11/12 lg:w-1/2 justify-start lg:py-16'>
                    <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                        Shortlisted candidates
                    </h3>
                    <h2 className='text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]'>
                        Someone got your attention?
                    </h2>
                    <p>
                        Every week, we choose a number of candidates with great skills and even better potential to grow in the warehousing, logistics or commercial industries and post their short profiles here. Let us know who sounds like an interesting fit to your team and we will send you their CV free of charge.
                    </p>                  
                </div>
            </div>

            <div className='relative w-11/12 h-max lg:w-8/12 m-auto py-10'>
                <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={40}
                        breakpoints={{
                            640: {
                              slidesPerView: 1,
                            },
                            768: {
                              slidesPerView: 1,
                            },
                            1024: {
                              slidesPerView: 1.5,
                            },
                          }}
                        navigation
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')} 
                        className=' transition-all duration-500 cursor-pointer'
                >
                    
                    <SwiperSlide>
                        <ShortlistedCandidateTile 
                            name={"Chris"} 
                            description={"Chris is looking for an Operations Supervisor/Contract support Manager Job in Leeds"} 
                            location={"Leeds, LS16"} 
                            achievements={"With over 19 years experience within logistics and Warhousing highly motivated and driven individual, with a passion to succeed in all areas of his professional life. Has managed teams of 50+ staff"} 
                            skills={"Production/Presentation of Valuations and results. Creating multiple Bills of Lading. Team training & Development"} 
                            salary={"£35k+"} 
                        />
                    </SwiperSlide>

                    <SwiperSlide>
                        <ShortlistedCandidateTile 
                            name={"Brendan"} 
                            description={"Brendan is looking for a job in Leicester."} 
                            location={"Leicester"} 
                            achievements={"24 years experience in Logistics, Distribution and Manufacturing."} 
                            skills={"Multi-functional Warehouse Op/FLT Driver (Bendi, Reach, CB & clamp truck), Supervisory experience, Worked in goods in/dispatch/stock control."} 
                            salary={"£35k+"} 
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            <Link href="/for-employers/shortlisted-candiates" className='flex justify-center w-fit m-auto pt-16'>
                <button  
                        className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white hover:shadow-[#00afa93b] hover:w-fit p-3 rounded-full transition-all duration-200 gap-2"
                        >
                        All candidates
                        <FiArrowUpRight className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                        />
                </button>
            </Link>
        </section>
        </>
    )
}