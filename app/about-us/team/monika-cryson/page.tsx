"use client"

import ContactTeam from "@/app/components/ContactTeam"
import TeamInside from "@/app/components/TeamInside"
import Image from "next/image"
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa"

export default function MonikaCryson() {
    
    return(
        <>
        <section className="w-full lg:pt-16 pb-20">
            <div className="flex flex-col lg:flex-row w-11/12 lg:w-8/12 pt-16 m-auto">
                <div className='flex flex-col gap-4 w-11/12 lg:w-1/2'>
                    <div className='flex flex-col gap-4 w-11/12 lg:w-8/12 justify-start '>
                        <h2 className='text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]'>
                            Monika Cryson
                        </h2>
                        <p>
                            Resourcing Director
                        </p>                    
                    </div>
                    <Image src="/Monika_Cyrson_f.jpg" width={1000} height={800} alt="monika-cryson" className="w-full h-auto rounded-3xl"/>
                    <Link href='https://www.linkedin.com/in/monika-cyrson-b722611a1/' target="_blank" className="w-fit"><button className="bg-[#0077b5] pl-1 pr-2 py-1 text-white font-bold rounded-md flex flex-nowrap items-center gap-2 hover:gap-3 transition-all"><FaLinkedin className="w-8 h-full"/><p>Follow me in LinkedIn</p></button></Link>
                    <div className="flex flex-col gap-4 py-16">
                            <p>I&apos;m Monika and have over 3 years of experience within the recruitment industry in a variety of sectors. Being the resourcing manager, I co-ordinate large teams to work efficiently and in a systematic manner to ensure that candidates receive the assistance that they require. They are our number one priority and without them we wouldn&apos;t be here, so they deserve to be treated with the utmost respect and integrity. I believe that transparency is a key value and encourages honesty, which leads to a more open and confident team.</p> 
                        </div>                
                </div>
                <div className="flex flex-col w-11/12 lg:w-1/2 lg:p-16 gap-8 pt-28">
                    <h2 className="text-4xl font-black tracking-tighter text-[#312252]">Contact Monika directly</h2>
                    <ContactTeam contactname={"monika-cryson"} />

                </div>
            </div>
            <TeamInside />
        </section>
        </>
    )
}