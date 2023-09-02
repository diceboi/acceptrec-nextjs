"use client"

import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/grid'


export default function ShortlistedCandidates() {

    
    return(
        <>
        <section className="w-full py-20 bg-neutral-100">
            <div className='flex flex-col gap-8 w-11/12 lg:w-8/12 m-auto'>
                <div className='flex flex-col gap-4 w-11/12 lg:w-1/2 justify-start lg:py-16'>
                    <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                        Shortlisted candidates
                    </h3>
                    <h2 className='text-6xl lg:text-6xl font-black tracking-tighter'>
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
                    
                    <SwiperSlide className='flex flex-col justify-between gap-4 p-4 lg:min-h-[50vh] rounded-3xl shadow-special bg-white'>
                        <div className='relative flex flex-col p-4 gap-8 border-b pb-8 border-blackborder-opacity-10 h-1/2'>
                            <h2 className='text-6xl lg:text-8xl font-black tracking-tighter text-[#00afaa]'>Chris</h2>
                            <p className='lg:text-xl font-bold'>Chris is looking for an Operations Supervisor/ Contract support Manager Job in Leeds.</p>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-4 p-4 h-fit'>
                            <div className='p-2'>
                                <h4 className='lg:text-lg font-bold'>Location:</h4>
                                <p className='text-sm'>Leeds, LS16</p>
                            </div>
                            <div className='p-2'>
                                <h4 className='lg:text-lg font-bold'>Achievements:</h4>
                                <p className='text-sm'>With over 19 years&apos; experience within logistics and Warehousing. highly motivated and driven individual, with a passion to succeed in all areas of his professional life. Has managed teams of 50+ staff.</p>
                            </div>
                            <div className='p-2'>
                                <h4 className='lg:text-lg font-bold'>Skills:</h4>
                                <p className='text-sm'>Production/Presentation of Valuations and results, Creating and managing multiple Bills of Lading, Team training & Development.</p>
                            </div>
                            <div className='p-2'>
                                <h4 className='lg:text-lg font-bold'>Salary expectation:</h4>
                                <p className='text-sm'>£35k+</p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='flex flex-col justify-between gap-4 p-4 lg:min-h-[50vh] rounded-3xl shadow-special bg-white'>
                        <div className='relative flex flex-col p-4 gap-8 border-b pb-8 border-blackborder-opacity-10 h-1/2'>
                            <h2 className='text-6xl lg:text-8xl font-black tracking-tighter text-[#00afaa]'>Brendan</h2>
                            <p className='lg:text-xl font-bold'>Brendan is looking for a job in Leicester.</p>
                        </div>
                        <div className='flex flex-col lg:flex-row gap-4 p-4 h-fit'>
                            <div className='p-2'>
                                <h4 className='lg:text-lg font-bold'>Location:</h4>
                                <p className='text-sm'>Leicester</p>
                            </div>
                            <div className='p-2'>
                                <h4 className='lg:text-lg font-bold'>Achievements:</h4>
                                <p className='text-sm'>24 years&apos; experience in Logistics, Distribution and Manufacturing.</p>
                            </div>
                            <div className='p-2'>
                                <h4 className='lg:text-lg font-bold'>Skills:</h4>
                                <p className='text-sm'>Multi-functional Warehouse Op/FLT Driver (Bendi, Reach, CB & clamp truck), Supervisory experience, Worked in goods in/dispatch/stock control.</p>
                            </div>
                            <div className='p-2'>
                                <h4 className='lg:text-lg font-bold'>Salary expectation:</h4>
                                <p className='text-sm'>£35k+</p>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
        </>
    )
}