"use client"

import { BiSolidQuoteRight } from 'react-icons/bi';
import { PiCheckCircleBold } from 'react-icons/pi';

import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/grid'

export default function DidYouKnow() {
    
    return(
        <>
        <section className="w-full py-20 bg-[#312252]">
            <div className='flex flex-col gap-8 w-11/12 lg:w-8/12 m-auto'>
                <div className='flex flex-col gap-4 w-11/12 lg:w-full justify-start lg:py-16'>
                    <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase text-neutral-300'>
                        in numbers
                    </h3>
                    <h2 className='text-6xl lg:text-6xl font-black tracking-tighter text-white'>
                        Did you know?
                    </h2>                    
                </div>
            </div>

            <div className='relative w-11/12 h-max lg:w-8/12 m-auto overflow-x-hidden py-10'>
                
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
                        className='transition-all duration-500 cursor-pointer'>
                    
                    <SwiperSlide className='flex flex-col justify-between gap-4 h-auto lg:h-[50vh] p-4 rounded-3xl border border-white border-opacity-10 bg-white bg-opacity-5'>
                        <div className='relative flex lg:flex-row flex-col p-4 gap-8 border-b pb-8 border-white border-opacity-10'>
                            <h2 className='text-8xl font-black tracking-tighter text-[#00afaa]'>36%</h2>
                            <p className='lg:text-xl font-bold text-white'>The percentage of people that say a lack of salary transparency is one of the reasons why they may reject job offers after completing the interview process.</p>
                            <BiSolidQuoteRight className='absolute top-0 right-0 text-[#00afaa] opacity-25 w-14 h-14'/>
                        </div>
                        <div className='relative bg-white bg-opacity-5 rounded-2xl p-4 shadow-special'>
                            <PiCheckCircleBold className='absolute bottom-2 right-2 text-[#00afaa] opacity-25 w-14 h-14'/>
                            <p className='lg:text-lg text-white '>Our unwavering commitment to transparent communication, empowering you to achieve financial well-being and career satisfaction through tailored offers that build trust.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='flex flex-col justify-between gap-4 h-auto lg:h-[50vh] p-4 rounded-3xl border border-white border-opacity-10 bg-white bg-opacity-5'>
                        <div className='relative flex lg:flex-row flex-col p-4 gap-8 border-b pb-8 border-white border-opacity-10'>
                            <h2 className='text-8xl font-black tracking-tighter text-[#00afaa]'>75%</h2>
                            <p className='lg:text-xl font-bold text-white'>The percentage of automotive employers that have admitted that they are finding it even more difficult to recruit skilled staff compared to just 12 moth ago.</p>
                            <BiSolidQuoteRight className='absolute top-0 right-0 text-[#00afaa] opacity-25 w-14 h-14'/>
                        </div>
                        <div className='relative bg-white bg-opacity-5 rounded-2xl p-4 shadow-special'>
                            <PiCheckCircleBold className='absolute bottom-2 right-2 text-[#00afaa] opacity-25 w-14 h-14'/>
                            <p className='lg:text-lg text-white '>Shift the burden of recruiting skilled automotive workers onto us and enjoy a stress-free journey to building your dream team.</p>
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide className='flex flex-col justify-between gap-4 h-auto lg:h-[50vh] p-4 rounded-3xl border border-white border-opacity-10 bg-white bg-opacity-5'>
                        <div className='relative flex lg:flex-row flex-col p-4 gap-8 border-b pb-8 border-white border-opacity-10'>
                            <h2 className='text-8xl font-black tracking-tighter text-[#00afaa]'>73%</h2>
                            <p className='lg:text-xl font-bold text-white'>The percentage of millenials that found their current roles through social media</p>
                            <BiSolidQuoteRight className='absolute top-0 right-0 text-[#00afaa] opacity-25 w-14 h-14'/>
                        </div>
                        <div className='relative bg-white bg-opacity-5 rounded-2xl p-4 shadow-special'>
                            <PiCheckCircleBold className='absolute bottom-2 right-2 text-[#00afaa] opacity-25 w-14 h-14'/>
                            <p className='lg:text-lg text-white '>We lead the way in delivering innovative talent solutions, cutting edge technology, and up to date online interfaces ahead of the competition</p>
                        </div>
                    </SwiperSlide>                   

                    <SwiperSlide className='flex flex-col justify-between gap-4 h-auto lg:h-[50vh] p-4 rounded-3xl border border-white border-opacity-10 bg-white bg-opacity-5'>
                        <div className='relative flex lg:flex-row flex-col p-4 gap-8 border-b pb-8 border-white border-opacity-10'>
                            <h2 className='text-8xl font-black tracking-tighter text-[#00afaa]'>85%</h2>
                            <p className='lg:text-xl font-bold text-white'>The percentage of candidate that trust online reviews as much as personal recommendations.</p>
                            <BiSolidQuoteRight className='absolute top-0 right-0 text-[#00afaa] opacity-25 w-14 h-14'/>
                        </div>
                        <div className='relative bg-white bg-opacity-5 rounded-2xl p-4 shadow-special'>
                            <PiCheckCircleBold className='absolute bottom-2 right-2 text-[#00afaa] opacity-25 w-14 h-14'/>
                            <p className='lg:text-lg text-white '>We are the best rated recruitment agency in the UK.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='flex flex-col justify-between gap-4 h-auto lg:h-[50vh] p-4 rounded-3xl border border-white border-opacity-10 bg-white bg-opacity-5'>
                        <div className='relative flex lg:flex-row flex-col p-4 gap-8 border-b pb-8 border-white border-opacity-10'>
                            <h2 className='text-8xl font-black tracking-tighter text-[#00afaa]'>2.2m</h2>
                            <p className='lg:text-xl font-bold text-white'>The number of job adverts posted in a week of 3rd to 9th July 2023, a 53.3% increase from 2022.</p>
                            <BiSolidQuoteRight className='absolute top-0 right-0 text-[#00afaa] opacity-25 w-14 h-14'/>
                        </div>
                        <div className='relative bg-white bg-opacity-5 rounded-2xl p-4 shadow-special'>
                            <PiCheckCircleBold className='absolute bottom-2 right-2 text-[#00afaa] opacity-25 w-14 h-14'/>
                            <p className='lg:text-lg text-white '>Do not need to search through all of them, you are in the best place.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='flex flex-col justify-between gap-4 h-auto lg:h-[50vh] p-4 rounded-3xl border border-white border-opacity-10 bg-white bg-opacity-5'>
                        <div className='relative flex lg:flex-row flex-col p-4 gap-8 border-b pb-8 border-white border-opacity-10'>
                            <h2 className='text-8xl font-black tracking-tighter text-[#00afaa]'>67%</h2>
                            <p className='lg:text-xl font-bold text-white'>The percentage of HR professionals who belive that AI has many benefits and  a positive impact on the recruitment process.</p>
                            <BiSolidQuoteRight className='absolute top-0 right-0 text-[#00afaa] opacity-25 w-14 h-14'/>
                        </div>
                        <div className='relative bg-white bg-opacity-5 rounded-2xl p-4 shadow-special'>
                            <PiCheckCircleBold className='absolute bottom-2 right-2 text-[#00afaa] opacity-25 w-14 h-14'/>
                            <p className='lg:text-lg text-white '>Our services are supported by AI to provide the most efficient operation possible.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='flex flex-col justify-between gap-4 h-auto lg:h-[50vh] p-4 rounded-3xl border border-white border-opacity-10 bg-white bg-opacity-5'>
                        <div className='relative flex lg:flex-row flex-col p-4 gap-8 border-b pb-8 border-white border-opacity-10'>
                            <h2 className='text-8xl font-black tracking-tighter text-[#00afaa]'>86%</h2>
                            <p className='lg:text-xl font-bold text-white'>The percentage of employees and job seekers who research company reviews and ratings to decide on where to apply for a job.</p>
                            <BiSolidQuoteRight className='absolute top-0 right-0 text-[#00afaa] opacity-25 w-14 h-14'/>
                        </div>
                        <div className='relative bg-white bg-opacity-5 rounded-2xl p-4 shadow-special'>
                            <PiCheckCircleBold className='absolute bottom-2 right-2 text-[#00afaa] opacity-25 w-14 h-14'/>
                            <p className='lg:text-lg text-white '>Our excellent rating on Google give us the opportunity to approach the best employees available.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='flex flex-col justify-between gap-4 h-auto lg:h-[50vh] p-4 rounded-3xl border border-white border-opacity-10 bg-white bg-opacity-5'>
                        <div className='relative flex lg:flex-row flex-col p-4 gap-8 border-b pb-8 border-white border-opacity-10'>
                            <h2 className='text-8xl font-black tracking-tighter text-[#00afaa]'>97%</h2>
                            <p className='lg:text-xl font-bold text-white'>The percentage of candidates with a positive experience refer other candidates.</p>
                            <BiSolidQuoteRight className='absolute top-0 right-0 text-[#00afaa] opacity-25 w-14 h-14'/>
                        </div>
                        <div className='relative bg-white bg-opacity-5 rounded-2xl p-4 shadow-special'>
                            <PiCheckCircleBold className='absolute bottom-2 right-2 text-[#00afaa] opacity-25 w-14 h-14'/>
                            <p className='lg:text-lg text-white '>We are the most highly recommended recruitment agency in the UK.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='flex flex-col justify-between gap-4 h-auto lg:h-[50vh] p-4 rounded-3xl border border-white border-opacity-10 bg-white bg-opacity-5'>
                        <div className='relative flex lg:flex-row flex-col p-4 gap-8 border-b pb-8 border-white border-opacity-10'>
                            <h2 className='text-8xl font-black tracking-tighter text-[#00afaa]'>67%</h2>
                            <p className='lg:text-xl font-bold text-white'>The percentage of UK employers are facing difficulties in finding candidates with the necessary skills and qualifications.</p>
                            <BiSolidQuoteRight className='absolute top-0 right-0 text-[#00afaa] opacity-25 w-14 h-14'/>
                        </div>
                        <div className='relative bg-white bg-opacity-5 rounded-2xl p-4 shadow-special'>
                            <PiCheckCircleBold className='absolute bottom-2 right-2 text-[#00afaa] opacity-25 w-14 h-14'/>
                            <p className='lg:text-lg text-white '>With all of our ratings and recommendations we could find the right candidates for your organisation.</p>
                        </div>
                    </SwiperSlide>                  

                </Swiper>
            </div>
        </section>
        </>
    )
}