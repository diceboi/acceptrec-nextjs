"use client"

import { TbBriefcase, TbHome2, TbMenu2 } from 'react-icons/tb'
import { MdClose } from 'react-icons/md'
import {BiChevronDown} from 'react-icons/bi'
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { TbBuildingFactory2, TbCheckupList, TbChevronLeft, TbChevronRight, TbFriends, TbListSearch, TbMessages, TbMoodPlus, TbPencil, TbPower, TbQuestionMark, TbRosetteNumber1, TbUsers, TbWeight } from 'react-icons/tb';
import { FiArrowUpRight } from 'react-icons/fi';


export default function MainNav() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [submenu1Open, setSubmenu1Open] = useState(false);
    const [submenu2Open, setSubmenu2Open] = useState(false);
    const [submenu3Open, setSubmenu3Open] = useState(false);
    const mobileMenuRef = useRef(null);

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    useEffect(() => {
        // Event listener to close mobile menu on outside click
        function handleClickOutside(event: MouseEvent) {
            if (mobileMenuRef.current && !(mobileMenuRef.current as Node).contains(event.target as Node)) {
                closeMobileMenu();
            }
        }

        // Add the event listener when the mobile menu is open
        if (mobileMenuOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            // Remove the event listener when the mobile menu is closed
            document.removeEventListener('click', handleClickOutside);
        }

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [mobileMenuOpen]);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const toggleSubmenu1 = () => {
        setSubmenu1Open(!submenu1Open);
    };

    const toggleSubmenu2 = () => {
        setSubmenu2Open(!submenu2Open);
    };

    const toggleSubmenu3 = () => {
        setSubmenu3Open(!submenu3Open);
    };

    useEffect(() => {
        function handleScroll() {
            const menu = document.getElementById("desktop-menu");
            const menuInner = document.getElementById("menu");
            const logo = document.getElementById("acceptrec-logo");
            const submenu1 = document.getElementById("submenu1");
            const submenu2 = document.getElementById("submenu2");
            const submenu3 = document.getElementById("submenu3");
            const scrollY = window.scrollY;
    
            if (menu) {
                if (scrollY > 0) {
                    menu.style.height = "55px";
                    menu.style.boxShadow = "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)";
                    menu.style.backgroundColor = "#ffffffd5";
                    menu.style.borderBottom = "1px solid #d4d4d4";
                    if (logo) logo.style.width = "100px";
                    if (menuInner) menuInner.style.height = "55px";
                    if (submenu1) submenu1.style.top = "40px";
                    if (submenu2) submenu2.style.top = "40px";
                    if (submenu3) submenu3.style.top = "40px";
                } else {
                    menu.style.height = "96px";
                    menu.style.boxShadow = "0 0 0 0";
                    menu.style.backgroundColor = "#ffffff00";
                    menu.style.borderBottom = "0px solid #d4d4d4";
                    if (logo) logo.style.width = "200px";
                    if (menuInner) menuInner.style.height = "96px";
                    if (submenu1) submenu1.style.top = "60px";
                    if (submenu2) submenu2.style.top = "60px";
                    if (submenu3) submenu3.style.top = "60px";
                }
            }
        }
    
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
 
    return (
        <>
        <nav id='desktop-menu' style={{ height: "75px", backgroundColor: "#ffffff00" }} className="hidden xl:flex flex-wrap justify-center px-4 w-full mx-auto z-50 sticky top-0 backdrop-blur-sm ease-in-out duration-200">
            <div className='flex justify-between items-center gap-8 w-full min-[1919px]:w-8/12'>
                <div id="logo" className="flex shrink-0 items-center">
                    <Link href="/">
                        <Image src="/Accept-Stacked-Logo-with-Strapline-RGB300.webp" id='acceptrec-logo' alt="logo" width={200} height={150} priority className="w-[200px] h-auto ease-in-out duration-200" />
                    </Link>
                </div>
                
                
                <ul id="menu" className='flex items-center gap-2 text-md font-bold h-24'>

                        <li id='mainlink' className='flex items-center border border-transparent hover:border-neutral-300 rounded-full hover:bg-[#0001] px-2 '><Link href="/" className="flex items-center gap-2"><span className='flex flex-nowrap items-center gap-1'><TbHome2 />Home</span></Link></li>

                        <li id='mainlink' className='flex items-center border border-transparent hover:border-neutral-300 rounded-full hover:bg-[#0001] px-2 '><Link href="/jobs" className="flex items-center gap-2"><span>Jobs</span></Link></li>
                                        
                        <li id='mainlink' className='flex items-center border border-transparent hover:border-neutral-300 rounded-full hover:bg-[#0001] px-2'><Link href="/about-us" className="flex items-center gap-2"><span>About Us</span></Link>
                        <BiChevronDown className='text-2xl'/>
                            <ul id='submenu1' className='hidden absolute grid-cols-2 grid-rows-2 gap-2 flex-col top-[60px] p-2 shadow-special rounded-xl bg-white submenu z-10 w-[350px] transition-all'>
                                <li className='group relative row-span-3 flex w-full rounded-lg text-white text-xl transition-all '>
                                    
                                    <Link href="/about-us" className=' w-full h-full px-2 py-3 rounded-xl bg-[url("/about-us.webp")] bg-center bg-cover bg-no-repeat'>
                                        <p className='absolute bottom-2 text-xl z-10'>About us</p>
                                        <FiArrowUpRight className="absolute text-white top-2 right-2 z-10" />
                                        <div className='absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-[#312252] to-[#31225283] rounded-xl group-hover:opacity-70 transition-all'></div>
                                    </Link>
                                </li>
                                <li className='row-span-1 flex w-full rounded-lg text-black border border-neutral-100 hover:border-transparent transition-all'><Link href="/about-us/team" className='flex flex-nowrap gap-2 w-full px-2 py-3'><TbUsers className="w-5 h-5 group-hover:text-[#00afaa] transition-all"/><span>Meet the team</span></Link></li>
                                <li className='row-span-1 flex w-full rounded-lg text-black border border-neutral-100 hover:border-transparent transition-all'><Link href="/national-temporary-worker-day" className='flex flex-nowrap gap-2 w-full px-2 py-3'><TbBriefcase className="w-5 h-5 group-hover:text-[#00afaa] transition-all"/><span>National Temporary Worker Day</span></Link></li>                        
                            </ul>
                        </li>
                    
                    
                        <li id='mainlink' className='flex items-center border border-transparent hover:border-neutral-300 rounded-full hover:bg-[#0001] px-2 transition-all'><Link href="/for-employers" className="flex items-center gap-2"><span>For Employers</span></Link><BiChevronDown className='text-2xl'/>
                            <ul id='submenu2' className='hidden absolute grid-cols-3 grid-rows-3 gap-2 flex-col top-[60px] p-2 shadow-special rounded-xl bg-white submenu z-10 w-[550px] transition-all'>
                                <li className='group relative row-span-3 flex w-full rounded-lg text-white text-xl transition-all '>
                                    
                                    <Link href="/for-employers" className=' w-full h-full px-2 py-3 rounded-xl bg-[url("/accepted-job.webp")] bg-center bg-cover bg-no-repeat'>
                                        <p className='absolute bottom-2 text-xl z-10'>For Employers</p>
                                        <FiArrowUpRight className="absolute text-white top-2 right-2 z-10" />
                                        <div className='absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-[#312252] to-[#31225283] rounded-xl group-hover:opacity-70 transition-all'></div>
                                    </Link>
                                </li>
                                <li className='row-span-1 flex w-full rounded-lg text-black border border-neutral-100 hover:border-transparent transition-all'><Link href="/for-employers/shortlisted-candidates" className='flex flex-nowrap gap-2 w-full px-2 py-3'><TbUsers className="w-6 h-6 group-hover:text-[#00afaa] transition-all"/><span>Shortlisted Candidates</span></Link></li>
                                <li className='row-span-1 flex w-full rounded-lg text-black border border-neutral-100 hover:border-transparent transition-all'><Link href="/blog/how-to-write-a-successful-job-description" className='flex flex-nowrap gap-2 w-full px-2 py-3'><TbPencil className="w-6 h-6 group-hover:text-[#00afaa] transition-all"/><span>Writing a good job description</span></Link></li>
                                <li className='row-span-1 flex w-full rounded-lg text-black border border-neutral-100 hover:border-transparent transition-all'><Link href="/blog/interview-techniques" className='flex flex-nowrap gap-2 w-full px-2 py-3'><TbMoodPlus className="w-6 h-6 group-hover:text-[#00afaa] transition-all"/><span>Interview Techniques</span></Link></li>
                                <li className='row-span-1 flex w-full rounded-lg text-black border border-neutral-100 hover:border-transparent transition-all'><Link href="/onboarding-process" className='flex flex-nowrap gap-2 w-full px-2 py-3'><TbCheckupList className="w-5 h-5 group-hover:text-[#00afaa] transition-all"/><span>Onboarding process</span></Link></li>
                                <li className='row-span-1 flex w-full rounded-lg text-black border border-neutral-100 hover:border-transparent transition-all'><Link href="/industries" className='flex flex-nowrap gap-2 w-full px-2 py-3'><TbBuildingFactory2 className="w-5 h-5 group-hover:text-[#00afaa] transition-all"/><span>Industries</span></Link></li>
                            </ul>
                        </li>
                        <li id='mainlink' className='flex items-center border border-transparent hover:border-neutral-300 rounded-full hover:bg-[#0001] px-2 transition-all'><Link href="/for-employers" className="flex items-center gap-2"><span>For Candidates</span></Link><BiChevronDown className='text-2xl'/>
                            <ul id='submenu3' className='hidden absolute grid-cols-3 grid-rows-3 gap-2 flex-col top-[60px] p-2 shadow-special rounded-xl bg-white submenu z-10 w-[450px] transition-all'>
                                <li className='group relative row-span-3 flex w-full rounded-lg text-white text-xl transition-all '>
                                    
                                    <Link href="/for-candidates" className=' w-full h-full px-2 py-3 rounded-xl bg-[url("/for-candidates.webp")] bg-center bg-cover bg-no-repeat'>
                                        <p className='absolute bottom-2 text-xl z-10'>For Candidates</p>
                                        <FiArrowUpRight className="absolute text-white top-2 right-2 z-10" />
                                        <div className='absolute top-0 right-0 w-full h-full bg-gradient-to-tr from-[#28a19d] to-[#00afa936] rounded-xl group-hover:opacity-70 transition-all'></div>
                                    </Link>
                                </li>
                                <li className='row-span-1 flex w-full rounded-lg text-black border border-neutral-100 hover:border-transparent transition-all'><Link href="/candidate-of-the-month" className='flex flex-nowrap gap-2 w-full px-2 py-3'><TbRosetteNumber1 className="w-6 h-6 group-hover:text-[#00afaa] transition-all"/><span>Candidate of the month</span></Link></li>
                                <li className='row-span-1 flex w-full rounded-lg text-black border border-neutral-100 hover:border-transparent transition-all'><Link href="/refer-a-friend" className='flex flex-nowrap gap-2 w-full px-2 py-3'><TbFriends className="w-5 h-5 group-hover:text-[#00afaa] transition-all"/><span>Refer a friend</span></Link></li>
                                <li className='row-span-1 flex w-full rounded-lg text-black border border-neutral-100 hover:border-transparent transition-all'><Link href="/blog/first-job-in-the-uk" className='flex flex-nowrap gap-2 w-full px-2 py-3'><TbQuestionMark className="w-6 h-6 group-hover:text-[#00afaa] transition-all"/><span>First Job in the UK</span></Link></li>
                                <li className='row-span-1 flex w-full rounded-lg text-black border border-neutral-100 hover:border-transparent transition-all'><Link href="/registration" className='flex flex-nowrap gap-2 w-full px-2 py-3'><TbPower className="w-6 h-6 group-hover:text-[#00afaa] transition-all"/><span>Sign-in / Registration</span></Link></li>
                                <li className='row-span-1 flex w-full rounded-lg text-black border border-neutral-100 hover:border-transparent transition-all'><Link href="/jobs" className='flex flex-nowrap gap-2 w-full px-2 py-3'><TbListSearch className="w-5 h-5 group-hover:text-[#00afaa] transition-all"/><span>Jobs</span></Link></li>
                                <li className='row-span-1 flex w-full rounded-lg text-black border border-neutral-100 hover:border-transparent transition-all'><Link href="/manual-handling" className='flex flex-nowrap gap-2 w-full px-2 py-3'><TbWeight className="w-5 h-5 group-hover:text-[#00afaa] transition-all"/><span>Manual handling</span></Link></li>
                            </ul>
                        </li>

                        <li id='mainlink' className='flex items-center border border-transparent hover:border-neutral-300 rounded-full hover:bg-[#0001] px-2'><Link href="/faq" className="flex items-center gap-2 ">FAQ</Link></li>

                        <li id='mainlink' className='flex items-center border border-transparent hover:border-neutral-300 rounded-full hover:bg-[#0001] px-2'><Link href="/blog" className="flex items-center gap-2 ">Blog</Link></li>
                    
                        <li id='mainlink' className='flex items-center border border-transparent hover:border-neutral-300 rounded-full hover:bg-[#0001] px-2'><Link href="/contact-us" className="flex items-center gap-2 ">Contact Us</Link></li>

                        <li id='mainlink' className='flex items-center button-85 bg-[#312252] hover:bg-[#4e3780] hover:shadow-md text-white hover:shadow-[#3122523b] px-3 py-2 rounded-full transition-all'><Link href="/registration" className="flex items-center gap-2 ">Sign in / Register</Link></li>
                    
                </ul>
                
            </div>

            
        </nav> 

        <nav className='xl:hidden sticky top-0 z-50 min-h-16 w-full overflow-x-clip' ref={mobileMenuRef}>
            <div className='flex justify-between items-center h-16 px-4 shadow-lg bg-white'>
                <div id="logo" className="flex shrink-0 items-center w-40 h-14">
                    <Link href="/">
                        <Image src="/Accept-Stacked-Logo-with-Strapline-RGB300.webp" alt="logo" className="w-40" width={150} height={40} />
                    </Link>
                </div>
                <menu className=' flex justify-center items-center gap-4'>
                    <button onClick={toggleMobileMenu}><TbMenu2 className={`h-8 w-auto cursor-pointe ${mobileMenuOpen ? ' hidden' : ''}`}/><MdClose className={`h-8 w-auto cursor-pointe ${mobileMenuOpen ? '' : ' hidden'}`}/></button>
                    <ul className={`menu-mobile absolute top-[64px] right-0 grid grid-cols-1 justify-start items-center w-screen sm:w-96 bg-white shadow-special${mobileMenuOpen ? ' active' : ''}`}>
                        <div className={`absolute w-full h-full bg-[#312252] opacity-80 ${submenu1Open ? '' : ' hidden'} `}></div>
                        <li className='flex justify-between border-t border-neutral-300'>
                            <Link href="/jobs" className='w-full p-2 font-black text-xl'>Jobs</Link>
                        </li>
                        <li className='flex justify-between border-t border-neutral-300'>
                            <Link href="/about-us" className='w-full p-2 font-black text-xl'>About Us</Link>
                            <div onClick={toggleSubmenu1} className='flex justify-center items-center border-l border-neutral-300 p-1 w-14 cursor-pointer'>
                                <TbChevronRight className="w-6 h-6 " />
                            </div>

                            <ul className={`mobilesubmenu absolute top-0 right-0 grid grid-cols-1 justify-start items-center w-screen sm:w-96 bg-white shadow-special${submenu1Open ? ' active' : ''}`}>
                                <li onClick={toggleSubmenu1} className='flex justify-between items-center border-t border-neutral-300 h-[45px] p-2 cursor-pointer'>
                                    <TbChevronLeft className="w-6 h-6"/>
                                </li>
                                <li className='flex justify-between border-t border-neutral-300'>
                                    <Link href="/about-us/team" className='w-full p-2 font-black text-xl'>Meet the team</Link>
                                </li>
                                <li className='flex justify-between border-t border-neutral-300'>
                                    <Link href="/national-temporary-worker-day" className='w-full p-2 font-black text-xl'>National Temporary Worker Day</Link>
                                </li>
                            </ul>
                        </li>
                        <li className='flex justify-between border-t border-neutral-300'>
                            <Link href="/for-employers" className='w-full p-2 font-black text-xl'>For Employers</Link>
                            <div onClick={toggleSubmenu2} className='flex justify-center items-center border-l border-neutral-300 p-1 w-14 cursor-pointer'>
                                <TbChevronRight className="w-6 h-6 " />
                            </div>

                            <ul className={`mobilesubmenu absolute top-0 right-0 grid grid-cols-1 justify-start items-center w-screen sm:w-96 bg-white shadow-special${submenu2Open ? ' active' : ''}`}>
                                <li onClick={toggleSubmenu2} className='flex justify-between items-center border-t border-neutral-300 h-[45px] p-2 cursor-pointer'>
                                    <TbChevronLeft className="w-6 h-6"/>
                                </li>
                                <li className='flex justify-between border-t border-neutral-300'>
                                    <Link href="/for-employers/shortlisted-candidates" className='w-full p-2 font-black text-xl'>Shortlisted candidates</Link>
                                </li>
                                <li className='flex justify-between border-t border-neutral-300'>
                                    <Link href="/blog/how-to-write-a-successful-job-description" className='w-full p-2 font-black text-xl'>Writing a good job description</Link>
                                </li>
                                <li className='flex justify-between border-t border-neutral-300'>
                                    <Link href="/blog/interview-techniques" className='w-full p-2 font-black text-xl'>Interview Techniques</Link>
                                </li>
                                <li className='flex justify-between border-t border-neutral-300'>
                                    <Link href="/onboarding-process" className='w-full p-2 font-black text-xl'>Onboarding process</Link>
                                </li>
                                <li className='flex justify-between border-t border-neutral-300'>
                                    <Link href="/industries" className='w-full p-2 font-black text-xl'>Industries</Link>
                                </li>
                            </ul>

                        </li>
                        <li className='flex justify-between border-t border-neutral-300'>
                            <Link href="/for-candidates" className='w-full p-2 font-black text-xl'>For Candidates</Link>
                            <div onClick={toggleSubmenu3} className='flex justify-center items-center border-l border-neutral-300 p-1 w-14 cursor-pointer'>
                                <TbChevronRight className="w-6 h-6 " />
                            </div>

                            <ul className={`mobilesubmenu absolute top-0 right-0 grid grid-cols-1 justify-start items-center w-screen sm:w-96 bg-white shadow-special${submenu3Open ? ' active' : ''}`}>
                                <li onClick={toggleSubmenu3} className='flex justify-between items-center border-t border-neutral-300 h-[45px] p-2 cursor-pointer'>
                                    <TbChevronLeft className="w-6 h-6"/>
                                </li>
                                <li className='flex justify-between border-t border-neutral-300'>
                                    <Link href="/candidate-of-the-month" className='w-full p-2 font-black text-xl'>Candidate of the month</Link>
                                </li>
                                <li className='flex justify-between border-t border-neutral-300'>
                                    <Link href="/refer-a-friend" className='w-full p-2 font-black text-xl'>Refer a friend</Link>
                                </li>
                                <li className='flex justify-between border-t border-neutral-300'>
                                    <Link href="/blog/first-job-in-the-uk" className='w-full p-2 font-black text-xl'>First Job in the UK</Link>
                                </li>
                                <li className='flex justify-between border-t border-neutral-300'>
                                    <Link href="/registration" className='w-full p-2 font-black text-xl'>Sign-in / Registration</Link>
                                </li>
                                <li className='flex justify-between border-t border-neutral-300'>
                                    <Link href="/jobs" className='w-full p-2 font-black text-xl'>Jobs</Link>
                                </li>
                                <li className='flex justify-between border-t border-neutral-300'>
                                    <Link href="/manual-handling" className='w-full p-2 font-black text-xl'>Manual handling</Link>
                                </li>
                            </ul>

                        </li>
                        <li className='flex justify-between border-t border-neutral-300'>
                            <Link href="/faq" className='w-full p-2 font-black text-xl'>FAQ</Link>
                        </li>
                        <li className='flex justify-between border-t border-neutral-300'>
                            <Link href="/blog" className='w-full p-2 font-black text-xl'>Blog</Link>
                        </li>
                        <li className='flex justify-between border-t border-neutral-300'>
                            <Link href="/contact-us" className='w-full p-2 font-black text-xl'>Contact Us</Link>
                        </li>
                        <li className='flex justify-between bg-[#312252]'>
                            <Link href="/registration" className='w-full p-2 font-black text-xl text-white'>Sign Up / Register</Link>
                        </li>
                    </ul>
                </menu>
            </div>
        </nav>  
        </>    
    );
        
}

