"use client"

import ContactTeam from "@/app/components/ContactTeam"
import TeamInside from "@/app/components/TeamInside"
import Image from "next/image"

export default function RadoslawPlewa() {
    
    return(
        <>
        <section className="w-full lg:pt-16 pb-20">
            <div className="flex flex-col lg:flex-row w-11/12 lg:w-8/12 pt-16 m-auto">
                <div className='flex flex-col gap-4 w-11/12 lg:w-1/2'>
                    <div className='flex flex-col gap-4 w-11/12 lg:w-8/12 justify-start '>
                        <h2 className='text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]'>
                            Radoslaw Plewa
                        </h2>
                        <p>
                            Assistant Regional Manager
                        </p>                    
                    </div>
                    <Image src="/Radoslaw-Plewa.webp" width={1000} height={800} alt="Radoslaw Plewa" className="w-full h-auto"/>
                    <div className="flex flex-col gap-4 py-16">
                             <p>
                                Radoslaw, our Assistant Regional Manager, joined Accept in July 2021 as a Contracts Manager and swiftly climbed the professional ladder, earning a well-deserved promotion in January 2023. With a background in recruitment spanning many years, Radoslaw has proven his dedication, commitment, and adaptability. His journey at Accept has been marked by a continuous demonstration of drive and engagement, tackling every challenge, project, and team management opportunity with enthusiasm.
                            </p> 

                            <p>
                                In his current role, Radoslaw is an indispensable member of the team, highly regarded for his hands-on leadership style and expertise in the industrial, technical, and driving fields. Over his time at Accept, he has exhibited a relentless commitment to the growth and success of Accept Recruitment. He approaches his responsibilities with a sense of ownership, treating the company as if it were his own business. Always ready to lend a helping hand without waiting for orders, Radoslaw embodies a supportive and proactive leadership style, ensuring that every task is executed in the best interest of the business and its team members. His unwavering dedication has truly set him apart as an invaluable asset to Accept Recruitment.
                            </p>
                        </div>                
                </div>
                <div className="flex flex-col w-11/12 lg:w-1/2 lg:p-16 gap-8 pt-28">
                    <h2 className="text-4xl font-black tracking-tighter text-[#312252]">Contact Radoslaw directly</h2>
                    <ContactTeam contactname={"radoslaw"} />

                </div>
            </div>
            <TeamInside />
        </section>
        </>
    )
}