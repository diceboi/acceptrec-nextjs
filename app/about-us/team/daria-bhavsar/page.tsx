"use client"

import ContactMarkPearce from "@/app/components/ContactTeam"
import Image from "next/image"

export default function DariaBhavsar() {
    
    return(
        <>
        <section className="w-full lg:pt-16 pb-20">
            <div className="flex flex-col lg:flex-row w-11/12 lg:w-8/12 pt-16 m-auto">
                <div className='flex flex-col gap-4 w-11/12 lg:w-1/2'>
                    <div className='flex flex-col gap-4 w-11/12 lg:w-8/12 justify-start '>
                        <h2 className='text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]'>
                            Daria Bhavsar
                        </h2>
                        <p>
                            General Manager
                        </p>                    
                    </div>
                    <Image src="/Daria_Bhavsar.jpg" width={1000} height={800} alt="daria-bhavsar" className="w-full h-auto"/>
                    <div className="flex flex-col gap-4 py-16">
                            <p>Daria joined the company in 2019 with over 10 years&apos; experience in high street and on-site recruitment, holding position from Industrial Divisional Manager to General Manager of Branch Network. Daria&apos;s expertise in all aspects of workforce management and designing bespoke staffing solutions with complex resourcing needs improved branch operations and help with the business growth.</p> 

                            <p>Today Daria leads the Midlands Branches together with National Resourcing Centre ensuring maximum Client&apos;s focus and consistency of service delivered as well as growing Client&apos;s portfolio. Daria is a one of kind specialist who is always looking for improvements and believe that team development is a key for a future personal and business progression. #skyisNOTthelimit</p>  

                            <p>It is very rare that you get to work with someone with a standout talent like Daria. I have been very fortunate to work alongside such an incredible individual. I have always been impressed by the efficiency and manner of the way Daria works, especially the ability in which she effortlessly handles the toughest clients in the most professional manner. A dream to work with and someone I hope to stay in touch with.</p>

                            <p>High Volume Hiring Recruiter - Amazon</p>

                        </div>                
                </div>
                <div className="flex flex-col w-11/12 lg:w-1/2 lg:p-16 gap-8 pt-28">
                    <h2 className="text-4xl font-black tracking-tighter text-[#312252]">Contact Daria directly</h2>
                    <ContactMarkPearce />

                </div>
            </div>
        </section>
        </>
    )
}