"use client"

import ContactTeam from "@/app/components/ContactTeam"
import TeamInside from "@/app/components/TeamInside"
import Image from "next/image"
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa"

export default function JamieEllis() {
    
    return(
        <>
        <section className="w-full lg:pt-16 pb-20">
            <div className="flex flex-col lg:flex-row w-11/12 lg:w-8/12 pt-16 m-auto">
                <div className='flex flex-col gap-4 w-11/12 lg:w-1/2'>
                    <div className='flex flex-col gap-4 w-11/12 lg:w-8/12 justify-start '>
                        <h2 className='text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]'>
                            Jamie Ellis
                        </h2>
                        <p>
                            Marketing Team Leader
                        </p>                    
                    </div>
                    <Image src="/Jamie-Ellis.webp" width={1000} height={800} alt="Jamie Ellis" className="w-full h-auto rounded-3xl"/>
                    <Link href='https://www.linkedin.com/in/jamie-ellis-6b1764201/' target="_blank" className="w-fit"><button className="bg-[#0077b5] pl-1 pr-2 py-1 text-white font-bold rounded-md flex flex-nowrap items-center gap-2 hover:gap-3 transition-all"><FaLinkedin className="w-8 h-full"/><p>Follow me in LinkedIn</p></button></Link>
                    <div className="flex flex-col gap-4 py-16">
                            <p>
                                Jamie is our Marketing Team Leader at Accept Recruitment. He joined the Accept team in
                                December 2020, initially starting as a Digital Marketing Apprentice. With a professional
                                marketing career spanning over three years, Jamie&#39;s journey into the field began with a solid
                                foundation in Graphic Design and Media Studies, cultivated over five years during college. In
                                the current role at Accept, Jamie oversees the entirety of our marketing efforts, from crafting
                                engaging social media content to managing email marketing campaigns and designing print
                                advertising. Jamie ensures that every aspect of our marketing strategy meets the high
                                standards that define our service.
                            </p> 

                            <p>
                                In addition to managing various marketing channels, Jamie is driven by personal and
                                professional growth. The goal is to continue learning and evolving within the dynamic landscape
                                of marketing while simultaneously expanding Accept&#39;s reach to a broader audience as the
                                company continues to thrive. Described as hardworking and a perfectionist, Jamie is committed
                                to supporting the team to the best of their abilities, contributing to the success and growth of
                                Accept. With a passion for excellence and a focus on continual improvement, Jamie plays a key
                                role in shaping Accept&#39;s marketing presence and achieving its future goals.
                            </p>

                        </div>                
                </div>
                <div className="flex flex-col w-11/12 lg:w-1/2 lg:p-16 gap-8 pt-28">
                    <h2 className="text-4xl font-black tracking-tighter text-[#312252]">Contact Jamie directly</h2>
                    <ContactTeam contactname={"jamie"} />

                </div>
            </div>
            <TeamInside />
        </section>
        </>
    )
}