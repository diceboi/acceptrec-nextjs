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
            <div className='grid lg:grid-cols-3 lg:grid-rows-3 grid-cols-2 w-11/12 lg:w-8/12 m-auto rounded-3xl'>

            <Link href="/about-us/team/mark-pearce" className="recruitment-tile lg:h-[450px] h-[250px] group flex flex-col cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end bg-[url('/Mark-front.webp')] bg-cover bg-center bg-opacity-40 h-full p-4 lg:rounded-tl-3xl ease-out duration-200">
                        <div className="flex flex-nowrap justify-between w-full z-10 ">
                            <div className="flex flex-col">
                                <h3 className="text-2xl font-black text-white">Mark Pearce</h3>
                                <p className="font-medium text-white">Managing Director</p>
                            </div>                            
                            <FiArrowRight className='absolute right-8 bottom-4 recruitment-icon text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#000000c0] to-[#0000] opacity-30 group-hover:opacity-100 ease-out duration-200'>
                        </div>
                    </div>                    
                </Link>

                <Link href="/about-us/team/monika-loj" className="recruitment-tile lg:h-[450px] h-[250px] group flex flex-col cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end bg-[url('/Monika-Beldycka-f.webp')] bg-cover bg-center bg-opacity-40 h-full p-4 ease-out duration-200">
                        <div className="flex flex-nowrap justify-between w-full z-10 ">
                            <div className="flex flex-col">
                                <h3 className="text-2xl font-black text-white">Monika Loj</h3>
                                <p className="font-medium text-white">Operations Director</p>
                            </div>                            
                            <FiArrowRight className='absolute right-8 bottom-4 recruitment-icon text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#000000c0] to-[#0000] opacity-30 group-hover:opacity-100 ease-out duration-200'>
                        </div>
                    </div>                    
                </Link>

                <Link href="/about-us/team/natalia-wielgosz" className="recruitment-tile lg:h-[450px] h-[250px] group flex flex-col cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end bg-[url('/Talki_New.webp')] bg-cover bg-center bg-opacity-40 h-full p-4 lg:rounded-tr-3xl ease-out duration-200">
                        <div className="flex flex-nowrap justify-between w-full z-10 ">
                            <div className="flex flex-col">
                                <h3 className="text-2xl font-black text-white">Natalia Wielgosz</h3>
                                <p className="font-medium text-white">Head of Accounts & Payroll</p>
                            </div>                            
                            <FiArrowRight className='absolute right-8 bottom-4 recruitment-icon text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#000000c0] to-[#0000] opacity-30 group-hover:opacity-100 ease-out duration-200'>
                        </div>
                    </div>                    
                </Link>

                <Link href="/about-us/team/daria-bhavsar" className="recruitment-tile lg:h-[450px] h-[250px] group flex flex-col cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end bg-[url('/Daria_Bhavsar.jpg')] bg-cover bg-center bg-opacity-40 h-full p-4 ease-out duration-200">
                        <div className="flex flex-nowrap justify-between w-full z-10 ">
                            <div className="flex flex-col">
                                <h3 className="text-2xl font-black text-white">Daria Bhavsar</h3>
                                <p className="font-medium text-white">General Manager</p>
                            </div>                            
                            <FiArrowRight className='absolute right-8 bottom-4 recruitment-icon text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#000000c0] to-[#0000] opacity-30 group-hover:opacity-100 ease-out duration-200'>
                        </div>
                    </div>                    
                </Link>

                <Link href="/about-us/team/agnieszka-jasinska" className="recruitment-tile lg:h-[450px] h-[250px] group flex flex-col cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end bg-[url('/Aggie-Jasinska-f.webp')] bg-cover bg-center bg-opacity-40 h-full p-4 ease-out duration-200">
                        <div className="flex flex-nowrap justify-between w-full z-10 ">
                            <div className="flex flex-col">
                                <h3 className="text-2xl font-black text-white">Agnieszka Jasinska</h3>
                                <p className="font-medium text-white">Regional Manager - Managed Services</p>
                            </div>                            
                            <FiArrowRight className='absolute right-8 bottom-4 recruitment-icon text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#000000c0] to-[#0000] opacity-30 group-hover:opacity-100 ease-out duration-200'>
                        </div>
                    </div>                    
                </Link>

                <Link href="/about-us/team/aliona-cozacenco" className="recruitment-tile lg:h-[450px] h-[250px] group flex flex-col cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end bg-[url('/Aliona_Cozacenco_f.webp')] bg-cover bg-center bg-opacity-40 h-full p-4 ease-out duration-200">
                        <div className="flex flex-nowrap justify-between w-full z-10 ">
                            <div className="flex flex-col">
                                <h3 className="text-2xl font-black text-white">Aliona Cozacenco</h3>
                                <p className="font-medium text-white">Branch Manager</p>
                            </div>                            
                            <FiArrowRight className='absolute right-8 bottom-4 recruitment-icon text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#000000c0] to-[#0000] opacity-30 group-hover:opacity-100 ease-out duration-200'>
                        </div>
                    </div>                    
                </Link>

                <Link href="/about-us/team/ada-mazurek" className="recruitment-tile lg:h-[450px] h-[250px] group flex flex-col cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end bg-[url('/Ada_Website_Picture.png')] bg-cover bg-center bg-opacity-40 h-full lg:rounded-bl-3xl p-4 ease-out duration-200">
                        <div className="flex flex-nowrap justify-between w-full z-10 ">
                            <div className="flex flex-col">
                                <h3 className="text-2xl font-black text-white">Ada Mazurek</h3>
                                <p className="font-medium text-white">Industrial Divisional Manager</p>
                            </div>                            
                            <FiArrowRight className='absolute right-8 bottom-4 recruitment-icon text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#000000c0] to-[#0000] lg:rounded-bl-3xl opacity-30 group-hover:opacity-100 ease-out duration-200'>
                        </div>
                    </div>                    
                </Link>

                <Link href="/about-us/team/monika-cryson" className="recruitment-tile lg:h-[450px] h-[250px] group flex flex-col cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end bg-[url('/Monika_Cyrson_f.jpg')] bg-cover bg-center bg-opacity-40 h-full p-4 ease-out duration-200">
                        <div className="flex flex-nowrap justify-between w-full z-10 ">
                            <div className="flex flex-col">
                                <h3 className="text-2xl font-black text-white">Monika Cyrson</h3>
                                <p className="font-medium text-white">Resourcing Manager</p>
                            </div>                            
                            <FiArrowRight className='absolute right-8 bottom-4 recruitment-icon text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#000000c0] to-[#0000] opacity-30 group-hover:opacity-100 ease-out duration-200'>
                        </div>
                    </div>                    
                </Link>

                <Link href="/about-us/team/peter-czinderi" className="recruitment-tile lg:h-[450px] h-[250px] group flex flex-col cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end bg-[url('/Peter-turkus.webp')] bg-cover bg-center bg-opacity-40 h-full lg:rounded-br-3xl p-4 ease-out duration-200">
                        <div className="flex flex-nowrap justify-between w-full z-10 ">
                            <div className="flex flex-col">
                                <h3 className="text-2xl font-black text-white">Peter Czinderi</h3>
                                <p className="font-medium text-white">IT Manager</p>
                            </div>                            
                            <FiArrowRight className='absolute right-8 bottom-4 recruitment-icon text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#000000c0] to-[#0000] lg:rounded-br-3xl opacity-30 group-hover:opacity-100 ease-out duration-200'>
                        </div>
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