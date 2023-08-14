"use client"

import Image from "next/image"
import { FiArrowRight } from "react-icons/fi"

export default function Team() {
    
    return(
        <>
        <section className="w-full py-20">
            <div className='flex flex-col gap-8 w-11/12 lg:w-8/12 m-auto'>
                <div className='flex flex-col gap-4 w-11/12 lg:w-8/12 justify-start py-16'>
                    <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                        our employees
                    </h3>
                    <h2 className='text-6xl lg:text-6xl font-black tracking-tighter'>
                        Awesome team members
                    </h2>                    
                </div>                
            </div>
            <div className='grid grid-cols-3 grid-rows-3 w-11/12 lg:w-8/12 m-auto rounded-3xl'>

                <div className="recruitment-tile h-[450px] group flex flex-col cursor-pointer ease-out duration-200">
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
                </div>

                <div className="recruitment-tile group flex flex-col cursor-pointer ease-out duration-200">
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
                </div>

                <div className="recruitment-tile group flex flex-col cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end bg-[url('/Talki_New.webp')] bg-cover bg-center bg-opacity-40 h-full p-4 lg:rounded-tr-3xl ease-out duration-200">
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
                </div>

                <div className="recruitment-tile group flex flex-col cursor-pointer ease-out duration-200">
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
                </div>

                <div className="recruitment-tile group flex flex-col cursor-pointer ease-out duration-200">
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
                </div>

                <div className="recruitment-tile group flex flex-col cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end bg-[url('/Aliona_Cozacenco_f.webp')] bg-cover bg-center bg-opacity-40 h-full p-4 ease-out duration-200">
                        <div className="flex flex-nowrap justify-between w-full z-10 ">
                            <div className="flex flex-col">
                                <h3 className="text-2xl font-black text-white">Aliona Cozacenco</h3>
                                <p className="font-medium text-white">Industrial Team Manager</p>
                            </div>                            
                            <FiArrowRight className='absolute right-8 bottom-4 recruitment-icon text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#000000c0] to-[#0000] opacity-30 group-hover:opacity-100 ease-out duration-200'>
                        </div>
                    </div>                    
                </div>

                <div className="recruitment-tile group flex flex-col cursor-pointer ease-out duration-200">
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
                </div>

                <div className="recruitment-tile group flex flex-col cursor-pointer ease-out duration-200">
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
                </div>

                <div className="recruitment-tile group flex flex-col cursor-pointer ease-out duration-200">
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
                </div>
                
            </div>
        </section>
        </>
    )
}