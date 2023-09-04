"use client"

import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/grid'
import Link from 'next/link';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi';

export default function CandidateSuccessStories() {
  return (
    <>
        <section className="w-full py-20 bg-neutral-100">
            <div className='flex flex-col gap-8 w-11/12 lg:w-8/12 m-auto'>
                <div className='flex flex-col gap-4 w-11/12 lg:w-1/2 justify-start lg:py-16'>
                    <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                        Candidate Success Stories
                    </h3>
                    <h2 className='text-6xl lg:text-6xl font-black tracking-tighter'>
                        Stories from our Candidates
                    </h2>                 
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
                    
                    <SwiperSlide className='w-10/12'>
                        <div className='group flex gap-4 p-4 lg:min-h-[30vh] rounded-3xl shadow-special bg-white w-full mb-16'>
                        <div className='relative flex flex-col justify-end p-4 w-1/2 bg-[url("/jake-wilson.webp")] rounded-2xl bg-cover bg-right bg-no-repeat h-auto'>
                        </div>
                        <div className='flex flex-col w-1/2 gap-4 p-4'>
                            <h2 className='text-6xl font-black tracking-tighter text-[#00afaa]'>Jake</h2>
                            <div className='p-2'>
                                <h4 className='lg:text-lg font-bold'>Story:</h4>
                                <p className='text-sm'>This is the first time in my working life that I've signed with an agency which meant I was a little hesitant to begin with. But I had no choice, as I have lost my job due to COVID and it was very difficult for me to find a new employment.</p>
                            </div>
                            <FiArrowRight className='absolute right-8 bottom-20 recruitment-icon w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide >
                        <div className='group flex gap-4 p-4 lg:min-h-[30vh] rounded-3xl shadow-special bg-white w-full mb-16'>
                        <div className='relative flex flex-col justify-end p-4 w-1/2 bg-[url("/claire.webp")] rounded-2xl bg-cover bg-right bg-no-repeat h-auto'>
                        </div>
                        <div className='flex flex-col w-1/2 gap-4 p-4'>
                            <h2 className='text-6xl font-black tracking-tighter text-[#00afaa]'>Claire</h2>
                            <div className='p-2'>
                                <h4 className='lg:text-lg font-bold'>Story:</h4>
                                <p className='text-sm'>When I first walked into Accept's offices, I was a little confused. Here were people who were friendly, warm and engaged - Something I haven't experienced in any other recruitment agency.</p>
                            </div>
                            <FiArrowRight className='absolute right-8 bottom-20 recruitment-icon w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </section>
        </>
  )
}
