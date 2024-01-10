"use client"

import Image from "next/image"
import Link from "next/link"
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi"

export default function Team() {
    
    return(
        <>
        <section className="w-full py-20">
            <div className='flex flex-col gap-8 w-11/12 lg:w-8/12 m-auto'>
                <div className='flex flex-col gap-4 w-11/12 lg:w-8/12 justify-start py-16'>
                    <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                        our employees
                    </h3>
                    <h2 className='text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]'>
                        Awesome team members
                    </h2>                    
                </div>                
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-3 lg:grid-rows-2 grid-cols-2 w-11/12 lg:w-8/12 m-auto rounded-3xl overflow-hidden'>

            <Link href="/about-us/team/mark-pearce" className="recruitment-tile lg:h-[450px] h-[250px] group flex flex-col cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end bg-[url('/Mark-front.webp')] bg-cover bg-top bg-opacity-40 h-full p-4 ease-out duration-200">
                        <div className="flex flex-nowrap justify-between w-full z-10 ">
                            <div className="flex flex-col">
                                <h3 className="text-xl lg:text-2xl font-black text-white">Mark Pearce</h3>
                                <p className="text-sm font-medium text-white">Managing Director</p>
                            </div>                            
                            <FiArrowRight className='absolute right-8 bottom-4 recruitment-icon text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#000000c0] to-[#0000] opacity-30 group-hover:opacity-100 ease-out duration-200'>
                        </div>
                    </div>                    
                </Link>

                <Link href="/about-us/team/monika-loj" className="recruitment-tile lg:h-[450px] h-[250px] group flex flex-col cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end bg-[url('/Monika-Beldycka-f.webp')] bg-cover bg-top bg-opacity-40 h-full p-4 ease-out duration-200">
                        <div className="flex flex-nowrap justify-between w-full z-10 ">
                            <div className="flex flex-col">
                                <h3 className="text-xl lg:text-2xl font-black text-white">Monika Loj</h3>
                                <p className="text-sm font-medium text-white">Operations Director</p>
                            </div>                            
                            <FiArrowRight className='absolute right-8 bottom-4 recruitment-icon text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#000000c0] to-[#0000] opacity-30 group-hover:opacity-100 ease-out duration-200'>
                        </div>
                    </div>                    
                </Link>

                <Link href="/about-us/team/kim-blackburn" className="recruitment-tile lg:h-[450px] h-[250px] group flex flex-col cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end bg-[url('/Kim-Blackburn.webp')] bg-cover bg-top bg-opacity-40 h-full p-4  ease-out duration-200">
                        <div className="flex flex-nowrap justify-between w-full z-10 ">
                            <div className="flex flex-col">
                                <h3 className="text-xl lg:text-2xl font-black text-white">Kim Blackburn</h3>
                                <p className="text-sm font-medium text-white">Commercial Director</p>
                            </div>                            
                            <FiArrowRight className='absolute right-8 bottom-4 recruitment-icon text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#000000c0] to-[#0000] opacity-30 group-hover:opacity-100 ease-out duration-200'>
                        </div>
                    </div>                    
                </Link>

                <Link href="/about-us/team/natalia-wielgosz" className="recruitment-tile lg:h-[450px] h-[250px] group flex flex-col cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end bg-[url('/Talki_New.webp')] bg-cover bg-top bg-opacity-40 h-full p-4  ease-out duration-200">
                        <div className="flex flex-nowrap justify-between w-full z-10 ">
                            <div className="flex flex-col">
                                <h3 className="text-xl lg:text-2xl font-black text-white">Natalia Wielgosz</h3>
                                <p className="text-sm font-medium text-white">Head of Accounts & Payroll</p>
                            </div>                            
                            <FiArrowRight className='absolute right-8 bottom-4 recruitment-icon text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#000000c0] to-[#0000] opacity-30 group-hover:opacity-100 ease-out duration-200'>
                        </div>
                    </div>                    
                </Link>

                <Link href="/about-us/team/agnieszka-jasinska" className="recruitment-tile lg:h-[450px] h-[250px] group flex flex-col cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end bg-[url('/Aggie-Jasinska-f.webp')] bg-cover bg-top bg-opacity-40 h-full p-4 ease-out duration-200">
                        <div className="flex flex-nowrap justify-between w-full z-10 ">
                            <div className="flex flex-col">
                                <h3 className="text-xl lg:text-2xl font-black text-white">Agnieszka Jasinska</h3>
                                <p className="text-sm font-medium text-white">Regional Manager - Managed Services</p>
                            </div>                            
                            <FiArrowRight className='absolute right-8 bottom-4 recruitment-icon text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#000000c0] to-[#0000] opacity-30 group-hover:opacity-100 ease-out duration-200'>
                        </div>
                    </div>                    
                </Link>

                <Link href="/about-us/team/alan-lathwell" className="recruitment-tile lg:h-[450px] h-[250px] group flex flex-col cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end bg-[url('/Alan-Lathwell.webp')] bg-cover bg-top bg-opacity-40 h-full p-4 ease-out duration-200">
                        <div className="flex flex-nowrap justify-between w-full z-10 ">
                            <div className="flex flex-col">
                                <h3 className="text-xl lg:text-2xl font-black text-white">Alan Lathwell</h3>
                                <p className="text-sm font-medium text-white">Regional Driving Manager</p>
                            </div>                            
                            <FiArrowRight className='absolute right-8 bottom-4 recruitment-icon text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#000000c0] to-[#0000] opacity-30 group-hover:opacity-100 ease-out duration-200'>
                        </div>
                    </div>                    
                </Link>

                <Link href="/about-us/team/monika-cryson" className="recruitment-tile lg:h-[450px] h-[250px] group flex flex-col cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end bg-[url('/Monika_Cyrson_f.jpg')] bg-cover bg-top bg-opacity-40 h-full p-4 ease-out duration-200">
                        <div className="flex flex-nowrap justify-between w-full z-10 ">
                            <div className="flex flex-col">
                                <h3 className="text-xl lg:text-2xl font-black text-white">Monika Cyrson</h3>
                                <p className="text-sm font-medium text-white">Resourcing Manager</p>
                            </div>                            
                            <FiArrowRight className='absolute right-8 bottom-4 recruitment-icon text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#000000c0] to-[#0000] opacity-30 group-hover:opacity-100 ease-out duration-200'>
                        </div>
                    </div>                    
                </Link>

                <Link href="/about-us/team/radoslaw-plewa" className="recruitment-tile lg:h-[450px] h-[250px] group flex flex-col cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end bg-[url('/Radoslaw-Plewa.webp')] bg-cover bg-top bg-opacity-40 h-full  p-4 ease-out duration-200">
                        <div className="flex flex-nowrap justify-between w-full z-10 ">
                            <div className="flex flex-col">
                                <h3 className="text-xl lg:text-2xl font-black text-white">Radoslaw Plewa</h3>
                                <p className="text-sm font-medium text-white">Assistant Regional Manager</p>
                            </div>                            
                            <FiArrowRight className='absolute right-8 bottom-4 recruitment-icon text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#000000c0] to-[#0000]  opacity-30 group-hover:opacity-100 ease-out duration-200'>
                        </div>
                    </div>                    
                </Link>

                <Link href="/about-us/team/magda-obraczka" className="recruitment-tile lg:h-[450px] h-[250px] group flex flex-col cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end bg-[url('/Magda-Obraczka.webp')] bg-cover bg-top bg-opacity-40 h-full  p-4 ease-out duration-200">
                        <div className="flex flex-nowrap justify-between w-full z-10 ">
                            <div className="flex flex-col">
                                <h3 className="text-xl lg:text-2xl font-black text-white">Magda Obraczka</h3>
                                <p className="text-sm font-medium text-white">Senior Account Manager</p>
                            </div>                            
                            <FiArrowRight className='absolute right-8 bottom-4 recruitment-icon text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#000000c0] to-[#0000]  opacity-30 group-hover:opacity-100 ease-out duration-200'>
                        </div>
                    </div>                    
                </Link>

                <Link href="/about-us/team/peter-czinderi" className="recruitment-tile lg:h-[450px] h-[250px] group flex flex-col cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end bg-[url('/Peter-turkus.webp')] bg-cover bg-top bg-opacity-40 h-full  p-4 ease-out duration-200">
                        <div className="flex flex-nowrap justify-between w-full z-10 ">
                            <div className="flex flex-col">
                                <h3 className="text-xl lg:text-2xl font-black text-white">Peter Czinderi</h3>
                                <p className="text-sm font-medium text-white">IT Manager</p>
                            </div>                            
                            <FiArrowRight className='absolute right-8 bottom-4 recruitment-icon text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#000000c0] to-[#0000]  opacity-30 group-hover:opacity-100 ease-out duration-200'>
                        </div>
                    </div>                    
                </Link>

                <Link href="/about-us/team/jamie-ellis" className="recruitment-tile lg:h-[450px] h-[250px] group flex flex-col cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end bg-[url('/Jamie-Ellis.webp')] bg-cover bg-top bg-opacity-40 h-full  p-4 ease-out duration-200">
                        <div className="flex flex-nowrap justify-between w-full z-10 ">
                            <div className="flex flex-col">
                                <h3 className="text-xl lg:text-2xl font-black text-white">Jamie Ellis</h3>
                                <p className="text-sm font-medium text-white">Marketing Team Leader</p>
                            </div>                            
                            <FiArrowRight className='absolute right-8 bottom-4 recruitment-icon text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#000000c0] to-[#0000]  opacity-30 group-hover:opacity-100 ease-out duration-200'>
                        </div>
                    </div>                    
                </Link>

                <Link href="/join-our-team" className="recruitment-tile lg:h-[450px] h-[250px] group flex flex-col cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end bg-[url('/join-our-team.webp')] bg-cover bg-center bg-opacity-40 h-full  p-4 ease-out duration-200">
                    </div>                    
                </Link>
                
            </div>
            <Link href="/about-us/team" className='flex justify-center w-fit m-auto py-16'>
                <button  
                        className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white hover:shadow-[#00afa93b] hover:w-fit p-3 rounded-full transition-all duration-200 gap-2"
                        >
                        About our team
                        <FiArrowUpRight className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                        />
                </button>
            </Link>
        </section>
        </>
    )
}