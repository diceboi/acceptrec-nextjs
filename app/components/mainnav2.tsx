"use client"

import { TbHome2, TbMenu2, TbPhone } from 'react-icons/tb'
import { MdClose } from 'react-icons/md'
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';


function isOpenNow() {
  const now = new Date();
  const dayOfWeek = now.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hour = now.getHours();
  const minute = now.getMinutes();

  if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    // Monday to Friday: 09:00 - 21:00
    const isOpenWeekday =
      (hour > 8 || (hour === 8 && minute >= 0)) &&
      (hour < 21 || (hour === 21 && minute <= 0));
    return isOpenWeekday;
  } else if (dayOfWeek === 6) {
    // Saturday: 10:00 - 21:00
    const isOpenSaturday =
      (hour > 9 || (hour === 9 && minute >= 0)) &&
      (hour < 21 || (hour === 21 && minute <= 0));
    return isOpenSaturday;
  }

  // Sunday: Closed
  return false;
}


export default function MainNav() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

    useEffect(() => {
        function handleScroll() {
            const menu = document.getElementById("desktop-menu");
            const innerMenu = document.getElementById("menu");
            const menucontainer = document.getElementById("menucontainer");
            const logo = document.getElementById("acceptrec-logo");
            const scrollY = window.scrollY;
    
            if (menu) {
                if (scrollY > 75) {
                    menu.style.height = "55px";
                    menu.style.paddingTop = "0px";
                    menu.style.backgroundColor = "var(--navy)";
                    if (innerMenu) innerMenu.style.justifyContent = "space-evenly";
                    if (innerMenu) innerMenu.style.marginLeft = "100px";
                    if (menucontainer) menucontainer.style.borderBottom = "0px solid var(--lightnavy)";
                    if (logo) logo.style.width = "75px";
                    if (logo) logo.style.opacity = "100";
                } else {
                    menu.style.height = "55x";
                    menu.style.paddingTop = "75px";
                    menu.style.backgroundColor = "transparent";
                    if (innerMenu) innerMenu.style.justifyContent = "space-between";
                    if (innerMenu) innerMenu.style.marginLeft = "0px";
                    if (menucontainer) menucontainer.style.borderBottom = "1px solid var(--lightnavy)";   
                    if (logo) logo.style.width = "0px";
                    if (logo) logo.style.opacity = "0"; 
                }
            }
        }
    
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const handleLinkClick = () => {
      setIsOpen(false);
    };

    const [isRestaurantOpen, setIsRestaurantOpen] = useState(isOpenNow());

  useEffect(() => {
    // Update the isOpen state every minute
    const timer = setInterval(() => {
      setIsRestaurantOpen(isOpenNow());
    }, 60000); // 60000 milliseconds = 1 minute

    return () => {
      clearInterval(timer); // Clean up the interval on unmount
    };
  }, []);
 
    return (
        <>
        <nav id='desktop-menu' style={{ height: "55px", backgroundColor: "transparent", marginBottom: "-75px", paddingTop: "75px" }} className="hidden xl:flex flex-wrap justify-center px-4 w-full mx-auto z-50 sticky top-0 ease-in-out duration-200">
            <div id='menucontainer' style={{ borderBottom: "1px solid var(--lightnavy)", }} className='relative container flex items-center justify-between gap-8 w-full'>
                <div id="logo" className="absolute flex shrink-0 items-center">
                    <Link href="/">
                        <Image src="https://admin.peboetterem.hu/wp-content/uploads/2023/10/pebo-typo-logo-white.svg" id='acceptrec-logo' alt="logo" width={0} height={0} priority className="ease-in-out duration-200" />
                    </Link>
                </div>
                
                
                <ul id="menu" className='flex justify-between items-center text-md w-1/2 text-[--grey]'>

                        <li id='mainlink' className='flex items-center border border-transparent hover:bg-[--okker] hover:text-[--navy] active:bg-[--okker] active:text-[--navy] focus:bg-[--okker] focus:text-[--navy] px-2 py-2 '><Link href="#napimenu" className="flex items-center gap-2"><span>Napi menü</span></Link></li>

                        <li id='mainlink' className='flex items-center border border-transparent hover:bg-[--okker] hover:text-[--navy] active:bg-[--okker] active:text-[--navy] focus:bg-[--okker] focus:text-[--navy] px-2 py-2'><Link href="#etlap" className="flex items-center gap-2"><span>Étlap</span></Link></li>
                                        
                        <li id='mainlink' className='flex items-center border border-transparent hover:bg-[--okker] hover:text-[--navy] active:bg-[--okker] active:text-[--navy] focus:bg-[--okker] focus:text-[--navy] px-2 py-2'><Link href="#rolunk" className="flex items-center gap-2"><span>Rólunk</span></Link></li>
                                       
                        <li id='mainlink' className='flex items-center border border-transparent hover:bg-[--okker] hover:text-[--navy] active:bg-[--okker] active:text-[--navy] focus:bg-[--okker] focus:text-[--navy] px-2 py-2'><Link href="#kapcsolat" className="flex items-center gap-2"><span>Kapcsolat</span></Link>
                        </li>
                </ul>
                <div className='flex flex-nowrap gap-16'>
                    <div className='flex flex-nowrap items-center gap-2 w-max'>
                        <div className='flex'>
                            <TbPhone className="text-[--okker] w-7 h-7"/>
                        </div>
                        <div className='flex flex-col gap-1'>
                            <Link href="tel:+3682310663"><p className="footerparagraph">+36 82 310 663</p></Link>
                            <Link href="tel:+36304940959"><p className="footerparagraph">+36 30 494 0959</p></Link>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p className="footerparagraph">Jelenleg:</p>
                        <p className={isRestaurantOpen ? "open text-2xl" : "close text-2xl"}>
                        {isRestaurantOpen ? "Nyitva" : "Zárva"}
                        </p>
                      
                        
                    </div> 
                </div>
                
            </div>    
        </nav> 

        <div id="mobile-menu" className={`fixed top-0 xl:hidden flex justify-between items-center w-full h-[64px] p-4 bg-[--navy] z-50 ${isOpen ? '' : ''}`}>
              <Link href="/"><Image src="https://admin.peboetterem.hu/wp-content/uploads/2023/10/pebo-typo-logo-white.svg" alt="logo" width={75} height={40} /></Link>
                <div className='flex flex-nowrap gap-4'>
                <div className='flex flex-nowrap gap-2 items-center'>
                        <p className="footerparagraph">Jelenleg:</p>
                        <p className={isRestaurantOpen ? "open text-2xl" : "close text-2xl"}>
                        {isRestaurantOpen ? "Nyitva" : "Zárva"}
                        </p>
                    </div> 
              <div className="flex gap-2">
                <button className="p-2" onClick={toggleMenu} aria-label="Menu"><TbMenu2 className={`h-8 w-auto cursor-pointe text-[--grey] ${isOpen ? ' hidden' : ''}`}/><MdClose className={`h-8 w-auto cursor-pointe text-[--grey] ${isOpen ? '' : ' hidden'}`}/></button>
                <div id="toggle-menu" className={`absolute top-[64px] right-0 bg-[--navy] h-auto w-full p-4 text-[--grey] transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0 transition-transform duration-200 ease-in-out`}>
                  <ul className="relative flex flex-col items-end gap-4">
                    <li className="relative group">
                      <Link href="#napimenu" onClick={handleLinkClick}>Napi menü</Link>
                      <span className="absolute inset-x-0 bottom-0 h-[1px] bg-black transition-all duration-200 transform origin-left scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100"></span>
                    </li>
                    <li className="relative group">
                      <Link href="#etlap" onClick={handleLinkClick}>Étlap</Link>
                      <span className="absolute inset-x-0 bottom-0 h-[1px] bg-black transition-all duration-200 transform origin-left scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100"></span>
                    </li>
                    <li className="relative group">
                      <Link href="#rolunk" onClick={handleLinkClick}>Rólunk</Link>
                      <span className="absolute inset-x-0 bottom-0 h-[1px] bg-black transition-all duration-200 transform origin-left scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100"></span>
                    </li>
                    <li className="relative group">
                      <Link href="#kapcsolat" onClick={handleLinkClick}>Kapcsolat</Link>
                      <span className="absolute inset-x-0 bottom-0 h-[1px] bg-black transition-all duration-200 transform origin-left scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100"></span>
                    </li>
                    <div className='flex flex-nowrap items-center justify-between gap-2 w-full p-4'>
                            <TbPhone className="text-[--okker] w-7 h-7"/>
                            <Link href="tel:+3682310663"><p className="footerparagraph">+36 82 310 663</p></Link>
                            <Link href="tel:+36304940959"><p className="footerparagraph">+36 30 494 0959</p></Link>
                    </div>  
                  </ul>
                </div>
              </div>
              </div>
            </div>
        </>    
    );
        
}