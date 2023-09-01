"use client"

import { useState, useEffect } from 'react';
import { BiSolidQuoteRight } from 'react-icons/bi';
import { FiArrowRight, FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { PiCheckCircleBold } from 'react-icons/pi';

export default function ShortlistedCandidates() {

    const [activeSlide, setActiveSlide] = useState(0);
    const [dragStartX, setDragStartX] = useState(0);
    const [dragging, setDragging] = useState(false);
    const sensitivityFactor = 0.5;

    const handleSlideClick = (index: number) => {
        setActiveSlide(index);
    };

    const handleSlideArrowClick = (direction: string) => {
        if (direction === 'left') {
            setActiveSlide(activeSlide - 1);
        } else if (direction === 'right') {
            setActiveSlide(activeSlide + 1);
        }
    };

    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        setDragging(true);
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        setDragStartX(clientX);
    };

    const handleDragEnd = () => {
        setDragging(false);
    };

    const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!dragging) return;
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const diff = clientX - dragStartX;
        const slideWidth = window.innerWidth <= 600 ? 82 : 41.65;
        const slidesToMove = Math.round(diff * sensitivityFactor / slideWidth);
        const newActiveSlide = Math.max(0, Math.min(8, activeSlide - slidesToMove));
        if (newActiveSlide !== activeSlide) {
            setActiveSlide(newActiveSlide);
            setDragStartX(clientX); // Reset the drag start X to prevent abrupt movements
        }
    };

    const slideStyles = {
        transform: `translateX(-${activeSlide * 41.65}vw)`,
    };

    const mobileSlideStyles = {
        transform: `translateX(-${activeSlide * 82}vw)`,
    };

    const showLeftArrow = activeSlide > 0;
    const showRightArrow = activeSlide < 1;
    
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

            <div className='relative w-11/12 h-max lg:w-8/12 m-auto overflow-x-hidden py-10' 
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
                onMouseUp={handleDragEnd}
                onTouchEnd={handleDragEnd}
                onMouseMove={handleDragMove}
                onTouchMove={handleDragMove}
                >
                <div className='absolute top-0 right-0 w-1/2 lg:w-2/3 h-full bg-gradient-to-l from-neutral-100 to-[#31225200] z-10'></div>
                    {showLeftArrow && (
                        <FiChevronLeft
                            className='absolute left-0 top-1/2 text-[#312252] w-14 h-14 z-20 cursor-pointer'
                            onClick={() => handleSlideArrowClick('left')}
                        />
                    )}
                    {showRightArrow && (
                        <FiChevronRight
                            className='absolute right-0 top-1/2 text-[#312252] w-14 h-14 z-20 cursor-pointer'
                            onClick={() => handleSlideArrowClick('right')}
                        />
                    )}
                <div className='grid gap-8 grid-cols-10 w-max transition-all duration-500 cursor-pointer' style={window.innerWidth <= 600 ? mobileSlideStyles : slideStyles}>
                    
                    <div className='flex flex-col justify-between gap-4 w-[75vw] lg:w-[40vw] h-auto lg:h-[50vh] p-4 rounded-3xl shadow-special bg-white'>
                        <div className='relative flex flex-col p-4 gap-8 border-b pb-8 border-white border-opacity-10'>
                            <h2 className='text-8xl font-black tracking-tighter text-[#00afaa]'>Chris</h2>
                            <p className='lg:text-xl font-bold'>Chris is looking for an Operations Supervisor/ Contract support Manager Job in Leeds.</p>
                        </div>
                        <div className='flex gap-4'>
                            <div className='p-2'>
                                <h4 className='lg:text-lg font-bold'>Location:</h4>
                                <p className='text-sm'>Leeds, LS16</p>
                            </div>
                            <div className='p-2'>
                                <h4 className='lg:text-lg font-bold'>Achievements:</h4>
                                <p className='text-sm'>With over 19 years’ experience within logistics and Warehousing. highly motivated and driven individual, with a passion to succeed in all areas of his professional life. Has managed teams of 50+ staff.</p>
                            </div>
                            <div className='p-2'>
                                <h4 className='lg:text-lg font-bold'>Skills:</h4>
                                <p className='text-sm'>Production/Presentation of Valuations and results, Creating and managing multiple Bills of Lading, Team training & Development</p>
                            </div>
                            <div className='p-2'>
                                <h4 className='lg:text-lg font-bold'>Salary expectation:</h4>
                                <p className='text-sm'>£35k+</p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col justify-between gap-4 w-[75vw] lg:w-[40vw] h-auto lg:h-[50vh] p-4 rounded-3xl shadow-special bg-white'>
                        <div className='relative flex flex-col p-4 gap-8 border-b pb-8 border-white border-opacity-10'>
                            <h2 className='text-8xl font-black tracking-tighter text-[#00afaa]'>Brendan</h2>
                            <p className='lg:text-xl font-bold'>Brendan is looking for a job in Leicester.</p>
                        </div>
                        <div className='flex gap-4'>
                            <div className='p-2'>
                                <h4 className='lg:text-lg font-bold'>Location:</h4>
                                <p className='text-sm'>Leicester</p>
                            </div>
                            <div className='p-2'>
                                <h4 className='lg:text-lg font-bold'>Achievements:</h4>
                                <p className='text-sm'>24 years’ experience in Logistics, Distribution and Manufacturing.</p>
                            </div>
                            <div className='p-2'>
                                <h4 className='lg:text-lg font-bold'>Skills:</h4>
                                <p className='text-sm'>Multi-functional Warehouse Op/FLT Driver (Bendi, Reach, CB & clamp truck), Supervisory experience, Worked in goods in/dispatch/stock control</p>
                            </div>
                            <div className='p-2'>
                                <h4 className='lg:text-lg font-bold'>Salary expectation:</h4>
                                <p className='text-sm'>£35k+</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <ul className='flex flex-nowrap justify-center items-center w-11/12 lg:w-8/12 gap-2 m-auto'>
                {Array.from<number>({ length: 9 }).map((_, index: number) => (
                    <li
                        key={index}
                        className={`w-3 h-3 bg-white rounded-full transition-all duration-200 cursor-pointer ${activeSlide === index ? 'opacity-100 w-6' : 'opacity-10'}`}
                        style={{
                            opacity: activeSlide === index ? 1 : 0.5,
                        }}
                        onClick={() => handleSlideClick(index)}
                    ></li>
                ))}
            </ul>

        </section>
        </>
    )
}