"use client"

import { useState, useEffect, useRef } from 'react';
import { FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import { BiSearchAlt } from 'react-icons/bi';
import Link from 'next/link';

export default function Industries() {

    const [selectedDiv, setSelectedDiv] = useState('warehouse');
    const [activeButton, setActiveButton] = useState('warehouse');
  
    const handleButtonClick = (divId: string) => {
      setSelectedDiv(divId);
      setActiveButton(divId);
    };
    
    return(
        <>
        <section className="w-full py-20">
            <div className='flex flex-col gap-8 w-11/12 lg:w-8/12 m-auto'>
                <div className='flex flex-col gap-4 w-11/12 lg:w-1/2 justify-start'>
                    <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                        what we cover
                    </h3>
                    <h2 className='text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]'>
                        Industries
                    </h2>
                    <p>
                        Specialising within niche industries, we use our expertise and systems to source the staff you need. We provide both temporary staffing and permanent solutions.
                    </p>                    
                </div>
                <div className='flex flex-wrap justify-start items-end w-full gap-4 pb-8'>
                    <button onClick={() => handleButtonClick('warehouse')} onMouseEnter={() => setActiveButton('warehouse')} onMouseLeave={() => setActiveButton(selectedDiv)} className={`font-bold w-auto p-2 px-2 border border-neutral-300 hover:shadow-special hover:bg-neutral-200 hover:border-neutral-200 focus:bg-neutral-200 focus:border-neutral-200 ease-in-out duration-200 rounded-full ${activeButton === 'warehouse' ? 'bg-neutral-200 border-neutral-200' : ''}`}>Warehousing & Industrial</button>
                    <button onClick={() => handleButtonClick('commercial')} className=' font-bold w-auto p-2 px-2 border border-neutral-300 hover:shadow-special hover:bg-neutral-200 hover:border-neutral-200 focus:bg-neutral-200 focus:border-neutral-200 active:bg-neutral-200 active:border-neutral-200 ease-in-out duration-200 rounded-full'>Commerical</button>
                    <button onClick={() => handleButtonClick('driving')} className=' font-bold w-auto p-2 px-2 border border-neutral-300 hover:shadow-special hover:bg-neutral-200 hover:border-neutral-200 focus:bg-neutral-200 focus:border-neutral-200 active:bg-neutral-200 active:border-neutral-200 ease-in-out duration-200 rounded-full'>Driving & Logistics</button>
                    <button onClick={() => handleButtonClick('food')} className=' font-bold w-auto p-2 px-2 border border-neutral-300 hover:shadow-special hover:bg-neutral-200 hover:border-neutral-200 focus:bg-neutral-200 focus:border-neutral-200 active:bg-neutral-200 active:border-neutral-200 ease-in-out duration-200 rounded-full'>Food Production</button>
                    <button onClick={() => handleButtonClick('managed')} className=' font-bold w-auto p-2 px-2 border border-neutral-300 hover:shadow-special hover:bg-neutral-200 hover:border-neutral-200 focus:bg-neutral-200 focus:border-neutral-200 active:bg-neutral-200 active:border-neutral-200 ease-in-out duration-200 rounded-full'>Managed Services</button>
                    <button onClick={() => handleButtonClick('technical')} className=' font-bold w-auto p-2 px-2 border border-neutral-300 hover:shadow-special hover:bg-neutral-200 hover:border-neutral-200 focus:bg-neutral-200 focus:border-neutral-200 active:bg-neutral-200 active:border-neutral-200 ease-in-out duration-200 rounded-full'>Technical</button>
                    <button onClick={() => handleButtonClick('ecommerce')} className=' font-bold w-auto p-2 px-2 border border-neutral-300 hover:shadow-special hover:bg-neutral-200 hover:border-neutral-200 focus:bg-neutral-200 focus:border-neutral-200 active:bg-neutral-200 active:border-neutral-200 ease-in-out duration-200 rounded-full'>E-commerce</button>
                    <button onClick={() => handleButtonClick('manufacturing')} className=' font-bold w-auto p-2 px-2 border border-neutral-300 hover:shadow-special hover:bg-neutral-200 hover:border-neutral-200 focus:bg-neutral-200 focus:border-neutral-200 active:bg-neutral-200 active:border-neutral-200 ease-in-out duration-200 rounded-full'>Manufacturing</button>
                </div>
            </div>
            <div id='warhouse' className={`group relative flex bg-[url('/warhouse-industries.webp')] bg-cover bg-center gap-8 w-11/12 lg:w-8/12 h-[60vh] m-auto p-8 rounded-3xl ease-in-out duration-200 cursor-pointer ${selectedDiv === 'warehouse' ? 'visible' : 'hidden'}`}>
                <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-r from-[#312252c9] to-[#00afaa00] opacity-100 ease-out duration-200 rounded-3xl'></div>
                <div className='flex flex-col justify-between h-full'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-4xl font-black tracking-tight text-white z-10'>Warehousing & Industrial</h3>
                        <p className="text-sm lg:text-lg font-medium tracking-widest uppercase text-white z-10 w-1/2">Picking, Packing, Operatives & FLT</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className="text-neutral-200 text-md font-medium z-10 lg:w-1/2">We understand that recruiting a temporary warehouse workforce might be one of the most complex parts of your business.</p>
                    </div>
                </div>
                <div className='absolute flex items-center gap-2 right-16 bottom-8 opacity-0 group-hover:opacity-100 group-hover:right-8 ease-out duration-200'>
                <Link href="/industries/warhouse-industrial" className='w-fit'>
                    <button  
                            className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white hover:shadow-[#00afa93b] hover:w-fit p-3 rounded-full transition-all duration-200 gap-2"
                            >
                            Read more
                            <FiArrowUpRight className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                            />
                    </button>
                </Link> 
                </div>
            </div>
            <div id='commercial' className={`group relative flex bg-[url('/commercial-industries.webp')] bg-cover bg-center gap-8 w-11/12 lg:w-8/12 h-[60vh] m-auto p-8 rounded-3xl ease-in-out duration-200  cursor-pointer ${selectedDiv === 'commercial' ? 'visible' : 'hidden'}`}>
                <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-r from-[#312252c9] to-[#00afaa00] opacity-100 ease-out duration-200 rounded-3xl'></div>
                <div className='flex flex-col justify-between h-full'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-4xl font-black tracking-tight text-white z-10'>Commerical</h3>
                        <p className="text-sm lg:text-lg font-medium tracking-widest uppercase text-white z-10 w-1/2">Office, Call Centre & Administration</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className="text-neutral-200 text-md font-medium z-10 lg:w-1/2">We know that your company`&apos;`s success depends on the work, knowledge and commitment of each team member.</p>
                    </div>
                </div>
                <div className='absolute flex items-center gap-2 right-16 bottom-8 opacity-0 group-hover:opacity-100 group-hover:right-8 ease-out duration-200'>
                    <Link href="/industries/commercial" className='w-fit'>
                        <button  
                                className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white hover:shadow-[#00afa93b] hover:w-fit p-3 rounded-full transition-all duration-200 gap-2"
                                >
                                Read more
                                <FiArrowUpRight className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                                />
                        </button>
                    </Link>
                </div>                
            </div>
            <div id='driving' className={`group relative flex bg-[url('/driving-industries.webp')] bg-cover bg-center gap-8 w-11/12 lg:w-8/12 h-[60vh] m-auto p-8 rounded-3xl ease-in-out duration-200  cursor-pointer ${selectedDiv === 'driving' ? 'visible' : 'hidden'}`}>
                <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-r from-[#312252c9] to-[#00afaa00] opacity-100 ease-out duration-200 rounded-3xl'></div>
                <div className='flex flex-col justify-between h-full'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-4xl font-black tracking-tight text-white z-10'>Driving & Logistics</h3>
                        <p className="text-sm lg:text-lg font-medium tracking-widest uppercase text-white z-10 w-1/2">HGV, LGV & Transport</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className="text-neutral-200 text-md font-medium z-10 lg:w-1/2">The logistics and driving markets have become unpredictable, and as the British economy is currently facing completely new challenges, you probably struggling even more when it comes to finding the best recruitment agency that can help.</p>
                    </div>
                </div>
                <div className='absolute flex items-center gap-2 right-16 bottom-8 opacity-0 group-hover:opacity-100 group-hover:right-8 ease-out duration-200'>
                <Link href="/industries/driving-logistics" className='w-fit'>
                        <button  
                                className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white hover:shadow-[#00afa93b] hover:w-fit p-3 rounded-full transition-all duration-200 gap-2"
                                >
                                Read more
                                <FiArrowUpRight className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                                />
                        </button>
                    </Link>
                </div>                
            </div>
            <div id='food' className={`group relative flex bg-[url('/food-industries.webp')] bg-cover bg-center gap-8 w-11/12 lg:w-8/12 h-[60vh] m-auto p-8 rounded-3xl ease-in-out duration-200  cursor-pointer ${selectedDiv === 'food' ? 'visible' : 'hidden'}`}>
                <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-r from-[#312252c9] to-[#00afaa00] opacity-100 ease-out duration-200 rounded-3xl'></div>
                <div className='flex flex-col justify-between h-full'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-4xl font-black tracking-tight text-white z-10'>Food Production</h3>
                        <p className="text-sm lg:text-lg font-medium tracking-widest uppercase text-white z-10 w-1/2">QC, Catering & Production Line</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className="text-neutral-200 text-md font-medium z-10 lg:w-1/2">We understand that recruiting a temporary food production workforce might be one of the most complex parts of your business.</p>
                    </div>
                </div>
                <div className='absolute flex items-center gap-2 right-16 bottom-8 opacity-0 group-hover:opacity-100 group-hover:right-8 ease-out duration-200'>
                    <Link href="/industries/food-production" className='w-fit'>
                        <button  
                                className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white hover:shadow-[#00afa93b] hover:w-fit p-3 rounded-full transition-all duration-200 gap-2"
                                >
                                Read more
                                <FiArrowUpRight className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                                />
                        </button>
                    </Link>
                </div>             
            </div>
            <div id='managed' className={`group relative flex bg-[url('/managed-industries.webp')] bg-cover bg-center gap-8 w-11/12 lg:w-8/12 h-[60vh] m-auto p-8 rounded-3xl ease-in-out duration-200  cursor-pointer ${selectedDiv === 'managed' ? 'visible' : 'hidden'}`}>
                <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-r from-[#312252c9] to-[#00afaa00] opacity-100 ease-out duration-200 rounded-3xl'></div>
                <div className='flex flex-col justify-between h-full'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-4xl font-black tracking-tight text-white z-10'>Managed Services</h3>
                        <p className="text-sm lg:text-lg font-medium tracking-widest uppercase text-white z-10 w-1/2">Contingent Workforce Planning, Large Scale Labour Solutions (100+)</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className="text-neutral-200 text-md font-medium z-10 lg:w-1/2">At Accept, we provide a range of workforce solutions which employers in any sector can benefit from.</p>
                    </div>
                </div>
                <div className='absolute flex items-center gap-2 right-16 bottom-8 opacity-0 group-hover:opacity-100 group-hover:right-8 ease-out duration-200'>
                    <Link href="/industries/managed-services" className='w-fit'>
                        <button  
                                className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white hover:shadow-[#00afa93b] hover:w-fit p-3 rounded-full transition-all duration-200 gap-2"
                                >
                                Read more
                                <FiArrowUpRight className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                                />
                        </button>
                    </Link>
                </div>                
            </div>
            <div id='technical' className={`group relative flex bg-[url('/technical-industries.webp')] bg-cover bg-center gap-8 w-11/12 lg:w-8/12 h-[60vh] m-auto p-8 rounded-3xl ease-in-out duration-200  cursor-pointer ${selectedDiv === 'technical' ? 'visible' : 'hidden'}`}>
                <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-r from-[#312252c9] to-[#00afaa00] opacity-100 ease-out duration-200 rounded-3xl'></div>
                <div className='flex flex-col justify-between h-full'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-4xl font-black tracking-tight text-white z-10'>Technical</h3>
                        <p className="text-sm lg:text-lg font-medium tracking-widest uppercase text-white z-10 w-1/2">Engineering, Technical Support & Management</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className="text-neutral-200 text-md font-medium z-10 lg:w-1/2">We know that behind every prosperous business there are tons of people who make it possible to grow and having that dependable on technical support is key to success. </p>
                    </div>
                </div>
                <div className='absolute flex items-center gap-2 right-16 bottom-8 opacity-0 group-hover:opacity-100 group-hover:right-8 ease-out duration-200'>
                    <Link href="/industries/technical" className='w-fit'>
                        <button  
                                className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white hover:shadow-[#00afa93b] hover:w-fit p-3 rounded-full transition-all duration-200 gap-2"
                                >
                                Read more
                                <FiArrowUpRight className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                                />
                        </button>
                    </Link>
                </div>               
            </div>
            <div id='ecommerce' className={`group relative flex bg-[url('/ecommerce.webp')] bg-cover bg-center gap-8 w-11/12 lg:w-8/12 h-[60vh] m-auto p-8 rounded-3xl ease-in-out duration-200  cursor-pointer ${selectedDiv === 'ecommerce' ? 'visible' : 'hidden'}`}>
                <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-r from-[#312252c9] to-[#00afaa00] opacity-100 ease-out duration-200 rounded-3xl'></div>
                <div className='flex flex-col justify-between h-full'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-4xl font-black tracking-tight text-white z-10'>E-commerce</h3>
                        <p className="text-sm lg:text-lg font-medium tracking-widest uppercase text-white z-10 w-1/2">Engineering, Technical Support & Management</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className="text-neutral-200 text-md font-medium z-10 lg:w-1/2">We know that behind every prosperous business there are tons of people who make it possible to grow and having that dependable on technical support is key to success. </p>
                    </div>
                </div>
                <div className='absolute flex items-center gap-2 right-16 bottom-8 opacity-0 group-hover:opacity-100 group-hover:right-8 ease-out duration-200'>
                    <Link href="/industries/ecommerce" className='w-fit'>
                        <button  
                                className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white hover:shadow-[#00afa93b] hover:w-fit p-3 rounded-full transition-all duration-200 gap-2"
                                >
                                Read more
                                <FiArrowUpRight className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                                />
                        </button>
                    </Link>
                </div>               
            </div>
            <div id='manufacturing' className={`group relative flex bg-[url('/manufacturing.webp')] bg-cover bg-center gap-8 w-11/12 lg:w-8/12 h-[60vh] m-auto p-8 rounded-3xl ease-in-out duration-200  cursor-pointer ${selectedDiv === 'manufacturing' ? 'visible' : 'hidden'}`}>
                <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-r from-[#312252c9] to-[#00afaa00] opacity-100 ease-out duration-200 rounded-3xl'></div>
                <div className='flex flex-col justify-between h-full'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-4xl font-black tracking-tight text-white z-10'>Manufacturing</h3>
                        <p className="text-sm lg:text-lg font-medium tracking-widest uppercase text-white z-10 w-1/2">Engineering, Technical Support & Management</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className="text-neutral-200 text-md font-medium z-10 lg:w-1/2">We know that behind every prosperous business there are tons of people who make it possible to grow and having that dependable on technical support is key to success. </p>
                    </div>
                </div>
                <div className='absolute flex items-center gap-2 right-16 bottom-8 opacity-0 group-hover:opacity-100 group-hover:right-8 ease-out duration-200'>
                    <Link href="/industries/manufacturing" className='w-fit'>
                        <button  
                                className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white hover:shadow-[#00afa93b] hover:w-fit p-3 rounded-full transition-all duration-200 gap-2"
                                >
                                Read more
                                <FiArrowUpRight className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                                />
                        </button>
                    </Link>
                </div>               
            </div>

        </section>
        </>
    )
}