import { AiOutlineCreditCard } from 'react-icons/ai'
import { IoIosSearch, IoIosMenu } from 'react-icons/io'
import {BiChevronDown} from 'react-icons/bi'
import {BiChevronRight} from 'react-icons/bi'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';


export default function MainNav() {
 
    return (
        <>
        <nav className="hidden lg:flex flex-wrap justify-center px-4 w-full py-4 mx-auto z-50 sticky">
            <div className='flex justify-between items-center gap-8 w-8/12 h-16'>
                <div id="logo" className="flex shrink-0 items-center">
                    <Link href="/">
                        <Image src="/Accept-Stacked-Logo-with-Strapline-RGB300.webp" alt="logo" width={200} height={100} className=" w-52" />
                    </Link>
                </div>
                
                
                <ul id="menu" className='flex items-center gap-8 text-lg font-bold h-24'>

                        <li className='flex items-center hover:border-b-4 hover:mt-1 hover:text-[#00afaa] border-[#00afaa] '><Link href="/jobs" className="flex items-center gap-2 py-8"><span>Jobs</span></Link></li>
                                        
                        <li className='flex items-center hover:border-b-4 hover:mt-1 hover:text-[#00afaa] border-[#00afaa] '><Link href="/jobs" className="flex items-center gap-2 py-8"><span>About Us</span></Link></li>
                    
                    
                        <li className='flex items-center hover:border-b-4 hover:mt-1 hover:text-[#00afaa] border-[#00afaa] '><Link href="/jobs" className="flex items-center gap-2 py-8"><span>For Employers</span></Link><BiChevronDown className='text-2xl'/>
                            <ul className='hidden absolute top-20 p-2 flex-col shadow-sm rounded-xl bg-white submenu z-10 w-80'>
                                <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                                <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                                <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                                <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                                <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                                <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                                <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                                <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                                <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                                <li className='relative flex w-full justify-between items-center rounded-lg text-black'><Link href="/read-first" className='w-full flex justify-between items-center px-2 py-3'><span>Read first</span><BiChevronRight className='text-2xl'/></Link>
                                    <ul className='hidden absolute -top-2 left-[300px] p-2 flex-col shadow-sm rounded-xl bg-white h-fit submenu z-10 w-80'>
                                        <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                                        <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                                        <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                                        <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                                    </ul>
                                </li>  
                                <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                                <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                                <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                            </ul>
                        </li>
                        <li className='flex items-center h-24 hover:border-b-4 hover:mt-1 hover:text-[#00afaa] border-[#00afaa] '><Link href="/jobs" className="flex items-center gap-2 "><span>For Candidates</span></Link><BiChevronDown className='text-2xl'/>
                            <ul className='hidden absolute top-20 p-2 flex-col shadow-sm rounded-xl bg-white h-fit submenu z-10 w-80'>
                                <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                                <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                                <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                                <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                                <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                                <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                                <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                                <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                                <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                                <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                                <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                                <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>
                                <li className='flex w-full rounded-lg text-black'><Link href="/read-first" className='w-full px-2 py-3'><span>Read first</span></Link></li>                     
                            </ul>
                        </li>
                    
                        <li className='flex items-center h-24 hover:border-b-4 hover:mt-1 border-[#00afaa] '><Link href="/jobs" className="flex items-center gap-2 ">Contact Us</Link></li>
                    
                </ul>
                
            </div>

            
        </nav> 


        <nav className='lg:hidden sticky top-0 flex justify-between items-center w-full h-16 px-4 shadow-lg bg-white z-50'>
            <div id="logo" className="flex shrink-0 items-center w-40 h-14">
                <Link href="/">
                    <Image src="/Accept-Stacked-Logo-with-Strapline-RGB300.webp" alt="logo" className="w-40" width={150} height={40} />
                </Link>
            </div>
            <menu className='flex justify-center items-center gap-4'>
                <button><IoIosSearch className='h-6 w-auto'/></button>    
                <button><IoIosMenu className='h-8 w-auto'/></button>
            </menu>
        </nav>   
        </>    
    );
        
}

