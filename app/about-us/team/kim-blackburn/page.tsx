"use client"

import ContactTeam from "@/app/components/ContactTeam"
import TeamInside from "@/app/components/TeamInside"
import Image from "next/image"

export default function KimBlackburn() {
    
    return(
        <>
        <section className="w-full lg:pt-16 pb-20">
            <div className="flex flex-col lg:flex-row w-11/12 lg:w-8/12 pt-16 m-auto">
                <div className='flex flex-col gap-4 w-11/12 lg:w-1/2'>
                    <div className='flex flex-col gap-4 w-11/12 lg:w-8/12 justify-start '>
                        <h2 className='text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]'>
                            Kim Blackburn
                        </h2>
                        <p>
                            Commercial Director
                        </p>                    
                    </div>
                    <Image src="/Kim-Blackburn.webp" width={1000} height={800} alt="Kim Blackburn" className="w-full h-auto"/>
                    <div className="flex flex-col gap-4 py-16">
                            <p>
                                Kim, our Commercial Director, joined Accept Recruitment in November 2024. With an
                                impressive career in the recruitment industry since June 2003, Kim brings a wealth of
                                experience, having previously made significant contributions at blueArrow and Encore/Gi Group.
                            </p> 

                            <p>
                                In his current role at Accept, serving on the board of directors, Kim actively contributes to
                                shaping the business for future growth and provides vital support to teams, enabling them to
                                reach their full potential. With a forward-thinking and solutions-based approach, Kim aims to
                                expand our geographical coverage and position Accept as the recruitment agency of choice in
                                each location.
                            </p>

                            <p>
                                Known for being approachable and fostering a collaborative work environment, Kim is dedicated
                                to ensuring the success and growth of Accept. With their strategic vision and extensive industry
                                experience, Kim plays a pivotal role in driving the company towards excellence in the world of
                                recruitment.
                            </p>

                        </div>                
                </div>
                <div className="flex flex-col w-11/12 lg:w-1/2 lg:p-16 gap-8 pt-28">
                    <h2 className="text-4xl font-black tracking-tighter text-[#312252]">Contact Kim directly</h2>
                    <ContactTeam contactname={"kim"} />

                </div>
            </div>
            <TeamInside />
        </section>
        </>
    )
}