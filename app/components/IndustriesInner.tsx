"use client"

import { FiArrowUpRight } from 'react-icons/fi'
import Link from 'next/link';

export default function IndustriesInner() {
    
    return(
        <>
        <section className='w-11/12 lg:w-8/12 m-auto'>
        <div className="grid lg:grid-cols-2 gap-8 w-full py-20">
            <div id='warhouse' className={`group relative flex bg-[url('/warhouse-industries.webp')] bg-cover bg-center gap-8 h-[60vh] m-auto p-8 rounded-3xl ease-in-out duration-200 cursor-pointer`}>
                <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-r from-[#312252c9] to-[#00afaa00] opacity-100 ease-out duration-200 rounded-3xl'></div>
                <div className='flex flex-col justify-start lg:justify-between gap-4 h-full'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-4xl font-black tracking-tight text-white z-10'>Warehousing & Industrial</h3>
                        <p className="text-sm lg:text-lg font-medium tracking-widest uppercase text-white z-10 lg:w-1/2">Picking, Packing, Operatives & FLT</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className="text-neutral-200 text-md font-medium z-10 lg:w-1/2">We understand that recruiting a temporary warehouse workforce might be one of the most complex parts of your business.</p>
                    </div>
                </div>
                <div className='absolute flex items-center gap-2 right-8 lg:right-16 bottom-8 lg:opacity-0 group-hover:opacity-100 group-hover:right-8 ease-out duration-200'>
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
            <div id='commercial' className={`group relative flex bg-[url('/commercial-industries.webp')] bg-cover bg-center gap-8 h-[60vh] m-auto p-8 rounded-3xl ease-in-out duration-200  cursor-pointer `}>
                <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-r from-[#312252c9] to-[#00afaa00] opacity-100 ease-out duration-200 rounded-3xl'></div>
                <div className='flex flex-col justify-start lg:justify-between gap-4 h-full'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-4xl font-black tracking-tight text-white z-10'>Commerical</h3>
                        <p className="text-sm lg:text-lg font-medium tracking-widest uppercase text-white z-10 lg:w-1/2">Office, Call Centre & Administration</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className="text-neutral-200 text-md font-medium z-10 lg:w-1/2">We know that your company`&apos;`s success depends on the work, knowledge and commitment of each team member.</p>
                    </div>
                </div>
                <div className='absolute flex items-center gap-2 right-8 lg:right-16 bottom-8 lg:opacity-0 group-hover:opacity-100 group-hover:right-8 ease-out duration-200'>
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
            <div id='driving' className={`group relative flex bg-[url('/driving-industries.webp')] bg-cover bg-center gap-8 h-[60vh] m-auto p-8 rounded-3xl ease-in-out duration-200  cursor-pointer `}>
                <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-r from-[#312252c9] to-[#00afaa00] opacity-100 ease-out duration-200 rounded-3xl'></div>
                <div className='flex flex-col justify-start lg:justify-between gap-4 h-full'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-4xl font-black tracking-tight text-white z-10'>Driving & Logistics</h3>
                        <p className="text-sm lg:text-lg font-medium tracking-widest uppercase text-white z-10 lg:w-1/2">HGV, LGV & Transport</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className="text-neutral-200 text-md font-medium z-10 lg:w-1/2">The logistics and driving markets have become unpredictable, and as the British economy is currently facing completely new challenges, you probably struggling even more when it comes to finding the best recruitment agency that can help.</p>
                    </div>
                </div>
                <div className='absolute flex items-center gap-2 right-8 lg:right-16 bottom-8 lg:opacity-0 group-hover:opacity-100 group-hover:right-8 ease-out duration-200'>
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
            <div id='food' className={`group relative flex bg-[url('/food-industries.webp')] bg-cover bg-center gap-8 h-[60vh] m-auto p-8 rounded-3xl ease-in-out duration-200  cursor-pointer `}>
                <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-r from-[#312252c9] to-[#00afaa00] opacity-100 ease-out duration-200 rounded-3xl'></div>
                <div className='flex flex-col justify-start lg:justify-between gap-4 h-full'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-4xl font-black tracking-tight text-white z-10'>Food Production</h3>
                        <p className="text-sm lg:text-lg font-medium tracking-widest uppercase text-white z-10 lg:w-1/2">QC, Catering & Production Line</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className="text-neutral-200 text-md font-medium z-10 lg:w-1/2">We understand that recruiting a temporary food production workforce might be one of the most complex parts of your business.</p>
                    </div>
                </div>
                <div className='absolute flex items-center gap-2 right-8 lg:right-16 bottom-8 lg:opacity-0 group-hover:opacity-100 group-hover:right-8 ease-out duration-200'>
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
            <div id='managed' className={`group relative flex bg-[url('/managed-industries.webp')] bg-cover bg-center gap-8 h-[60vh] m-auto p-8 rounded-3xl ease-in-out duration-200  cursor-pointer `}>
                <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-r from-[#312252c9] to-[#00afaa00] opacity-100 ease-out duration-200 rounded-3xl'></div>
                <div className='flex flex-col justify-start lg:justify-between gap-4 h-full'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-4xl font-black tracking-tight text-white z-10'>Managed Services</h3>
                        <p className="text-sm lg:text-lg font-medium tracking-widest uppercase text-white z-10 lg:w-1/2">Contingent Workforce Planning, Large Scale Labour Solutions (100+)</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className="text-neutral-200 text-md font-medium z-10 lg:w-1/2">At Accept, we provide a range of workforce solutions which employers in any sector can benefit from.</p>
                    </div>
                </div>
                <div className='absolute flex items-center gap-2 right-8 lg:right-16 bottom-8 lg:opacity-0 group-hover:opacity-100 group-hover:right-8 ease-out duration-200'>
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
            <div id='technical' className={`group relative flex bg-[url('/technical-industries.webp')] bg-cover bg-center gap-8 h-[60vh] m-auto p-8 rounded-3xl ease-in-out duration-200  cursor-pointer `}>
                <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-r from-[#312252c9] to-[#00afaa00] opacity-100 ease-out duration-200 rounded-3xl'></div>
                <div className='flex flex-col justify-start lg:justify-between gap-4 h-full'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-4xl font-black tracking-tight text-white z-10'>Technical</h3>
                        <p className="text-sm lg:text-lg font-medium tracking-widest uppercase text-white z-10 lg:w-1/2">Engineering, Technical Support & Management</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className="text-neutral-200 text-md font-medium z-10 lg:w-1/2">We know that behind every prosperous business there are tons of people who make it possible to grow and having that dependable on technical support is key to success. </p>
                    </div>
                </div>
                <div className='absolute flex items-center gap-2 right-8 lg:right-16 bottom-8 lg:opacity-0 group-hover:opacity-100 group-hover:right-8 ease-out duration-200'>
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
            <div id='ecommerce' className={`group relative flex bg-[url('/ecommerce.webp')] bg-cover bg-center gap-8 h-[60vh] m-auto p-8 rounded-3xl ease-in-out duration-200  cursor-pointer `}>
                <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-r from-[#312252c9] to-[#00afaa00] opacity-100 ease-out duration-200 rounded-3xl'></div>
                <div className='flex flex-col justify-start lg:justify-between gap-4 h-full'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-4xl font-black tracking-tight text-white z-10'>E-commerce</h3>
                        <p className="text-sm lg:text-lg font-medium tracking-widest uppercase text-white z-10 lg:w-1/2">Engineering, Technical Support & Management</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className="text-neutral-200 text-md font-medium z-10 lg:w-1/2">We know that behind every prosperous business there are tons of people who make it possible to grow and having that dependable on technical support is key to success. </p>
                    </div>
                </div>
                <div className='absolute flex items-center gap-2 right-8 lg:right-16 bottom-8 lg:opacity-0 group-hover:opacity-100 group-hover:right-8 ease-out duration-200'>
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
            <div id='manufacturing' className={`group relative flex bg-[url('/manufacturing.webp')] bg-cover bg-center gap-8 h-[60vh] m-auto p-8 rounded-3xl ease-in-out duration-200  cursor-pointer `}>
                <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-r from-[#312252c9] to-[#00afaa00] opacity-100 ease-out duration-200 rounded-3xl'></div>
                <div className='flex flex-col justify-start lg:justify-between gap-4 h-full'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='text-4xl font-black tracking-tight text-white z-10'>Manufacturing</h3>
                        <p className="text-sm lg:text-lg font-medium tracking-widest uppercase text-white z-10 w-1/2">Engineering, Technical Support & Management</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className="text-sm lg:text-lg font-medium tracking-widest uppercase text-white z-10 lg:w-1/2">We know that behind every prosperous business there are tons of people who make it possible to grow and having that dependable on technical support is key to success. </p>
                    </div>
                </div>
                <div className='absolute flex items-center gap-2 right-8 lg:right-16 bottom-8 lg:opacity-0 group-hover:opacity-100 group-hover:right-8 ease-out duration-200'>
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
        </div>
        </section>
        </>
    )
}