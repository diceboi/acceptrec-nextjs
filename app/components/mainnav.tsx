"use client"

import { IoIosSearch, IoIosMenu } from 'react-icons/io'
import {BiChevronDown} from 'react-icons/bi'
import {BiChevronRight} from 'react-icons/bi'
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';


export default function MainNav() {

    useEffect(() => {
        function handleScroll() {
          const menu = document.getElementById("desktop-menu");
          const menuInner = document.getElementById("menu");
          const logo = document.getElementById("acceptrec-logo");
          const links = document.getElementById("mainlink");
          const submenu = document.getElementById("submenu");
          const scrollY = window.scrollY;
    
          // A menü magasságának és háttérszínének módosítása
          if (scrollY > 0) {
            menu.style.height = "55px";
            menu.style.boxShadow = "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)";
            menu.style.backgroundColor = "#ffffffd5"; // Itt megadhatod a kívánt háttérszínt
            logo.style.width = "150px";
            menuInner.style.height = "55px";
            submenu.style.top = "43px";

          } else {
            menu.style.height = "96px"; // Itt megadhatod a kívánt háttérszínt
            menu.style.boxShadow = "0 0 0 0";
            menu.style.backgroundColor = "#ffffff00";
            logo.style.width = "200px";
            menuInner.style.height = "96px";
            submenu.style.top = "63px";

          }
        }
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
 
    return (
        <>
        <nav id='desktop-menu' style={{ height: "75px", backgroundColor: "#ffffff00" }} className="hidden lg:flex flex-wrap justify-center px-4 w-full mx-auto z-50 fixed backdrop-blur-sm ease-in-out duration-200">
            <div className='flex justify-between items-center gap-8 w-8/12'>
                <div id="logo" className="flex shrink-0 items-center">
                    <Link href="/">
                        <Image src="/Accept-Stacked-Logo-with-Strapline-RGB300.webp" id='acceptrec-logo' alt="logo" width={200} height={100} className=" w-52 ease-in-out duration-200" />
                    </Link>
                </div>
                
                
                <ul id="menu" className='flex items-center gap-8 text-lg font-bold h-24'>

                        <li id='mainlink' className='flex items-center border border-transparent hover:border-neutral-300 rounded-full hover:bg-[#0001] px-3 '><Link href="/jobs" className="flex items-center gap-2"><span>Jobs</span></Link></li>
                                        
                        <li id='mainlink' className='flex items-center border border-transparent hover:border-neutral-300 rounded-full hover:bg-[#0001] px-3'><Link href="/jobs" className="flex items-center gap-2"><span>About Us</span></Link></li>
                    
                    
                        <li id='mainlink' className='flex items-center border border-transparent hover:border-neutral-300 rounded-full hover:bg-[#0001] px-3'><Link href="/jobs" className="flex items-center gap-2"><span>For Employers</span></Link><BiChevronDown className='text-2xl'/>
                            <ul id='submenu' className='hidden absolute top-[63px] p-2 flex-col shadow-special rounded-xl bg-white submenu z-10 w-80'>
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
                                    <ul className='hidden absolute -top-2 left-[300px] p-2 flex-col shadow-special rounded-xl bg-white h-fit submenu z-10 w-80'>
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
                        <li id='mainlink' className='flex items-center border border-transparent hover:border-neutral-300 rounded-full hover:bg-[#0001] px-3'><Link href="/jobs" className="flex items-center gap-2 "><span>For Candidates</span></Link><BiChevronDown className='text-2xl'/>
                            <ul id='submenu' className='hidden absolute top-[63px] p-2 flex-col shadow-special rounded-xl bg-white submenu z-10 w-80'>
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
                    
                        <li id='mainlink' className='flex items-center border border-transparent hover:border-neutral-300 rounded-full hover:bg-[#0001] px-3'><Link href="/jobs" className="flex items-center gap-2 ">Contact Us</Link></li>
                    
                </ul>
                
            </div>

            
        </nav> 


        <nav className='lg:hidden sticky top-0 flex justify-between items-center w-full h-16 px-4 shadow-lg z-50'>
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

