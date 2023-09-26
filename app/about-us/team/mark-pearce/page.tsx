"use client"

import ContactMarkPearce from "@/app/components/ContactTeam"
import Image from "next/image"
import TeamInside from "@/app/components/TeamInside"

export default function MarkPierce() {
    
    return(
        <>
        <section className="w-full lg:pt-16 pb-20">
            <div className="flex flex-col lg:flex-row w-11/12 lg:w-8/12 pt-16 m-auto">
                <div className='flex flex-col gap-4 w-11/12 lg:w-1/2'>
                    <div className='flex flex-col gap-4 w-11/12 lg:w-8/12 justify-start '>
                        <h2 className='text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]'>
                            Mark Pearce
                        </h2>
                        <p>
                            Managing Director
                        </p>                    
                    </div>
                    <Image src="/Mark-front.webp" width={1000} height={800} alt="mark-pierce" className="w-full h-auto"/>
                    <div className="flex flex-col gap-4 py-16">
                        <p>I have been involved in the recruitment industry for over 20 years. Being a member of the Recruitment and Employment Confederation (REC), I have gained extensive national experience in sales and operations within the recruitment industry prior to founding Accept in 2015 together with Chris. Since then, Accept Recruitment supported more than 100 clients from 4 offices and 8 onsite operations, and found employment for more than 6700 people in the Leicestershire, West Midlands, and Yorkshire area.</p> 

                        <p>I am proud of likeminded and very talented people I am surrounded by. Our culture cultivates passionate problem-solvers focused on performance and responsiveness that work hard to gain deep understanding of our candidates and client&apos;s businesses alike. We have almost doubled in size despite the pandemic and Brexit, by expanding the company&apos;s staff numbers and becoming a recognisable strategic recruitment partner in the area.</p>  

                        <p>Despite the challenges, our main business pillar is to build long-lasting and trust-based relationships with our customers. This is why we are the top rated Recruitment Agency in Leicestershire and a partner of choice for job seekers and decision makers of the local businesses. </p> 

                        <p>As a director Mark naturally inspires, empowers, and develops his employees while building confidence and commitment within his team. His ability to gain trust quickly and lead by example with enthusiasm and drive has always achieved ambitious results within the recruitment field. With solid commerciality and personable charisma Mark has not only successfully built a business from scratch but also a credible reputation and loyal portfolio of clients to go with it.</p> 

                        <p>Fiona Townsend - Owner of Fiona Townsend Ltd</p>
                    </div>                
                </div>
                <div className="flex flex-col w-11/12 lg:w-1/2 lg:p-16 gap-8 pt-28">
                    <h2 className="text-4xl font-black tracking-tighter text-[#312252]">Contact Mark directly</h2>
                    <ContactMarkPearce />
                </div>
            </div>
            <TeamInside />
        </section>
        </>
    )
}