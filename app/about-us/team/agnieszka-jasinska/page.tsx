"use client"

import ContactMarkPearce from "@/app/components/ContactTeam"
import Image from "next/image"

export default function AgnieszkaJasinska() {
    
    return(
        <>
        <section className="w-full lg:pt-16 pb-20">
            <div className="flex flex-col lg:flex-row w-11/12 lg:w-8/12 pt-16 m-auto">
                <div className='flex flex-col gap-4 w-11/12 lg:w-1/2'>
                    <div className='flex flex-col gap-4 w-11/12 lg:w-8/12 justify-start '>
                        <h2 className='text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]'>
                            Agnieszka Jasinska
                        </h2>
                        <p>
                            Regional Manager - Managed Services
                        </p>                    
                    </div>
                    <Image src="/Aggie-Jasinska-f.webp" width={1000} height={800} alt="agnieszka-jsinska" className="w-full h-auto"/>
                    <div className="flex flex-col gap-4 py-16">
                            <p>Hi! My name is Aggie and I am a multilingual professional with 7 years of experience in recruitment industry. During those years I have been promoted multiple times and exposed to the opportunity of learning recruitment in many aspects from On-Site to Branch based positions. Being a Divisional Manager of Construction and Technical department has affected in gaining extensive knowledge and experience in sales and business development. At Accept, we all work towards the same goal. Mine is to ensure the business is moving forward in a more structured and efficient way. I believe that having a successful recruitment business is not only about employing the right people but, once they are employed, looking after their journey and support them along the way. I work for the best recruitment agency in Leicester and I am here to help, should you need it.</p> 

                            <p>My motto: &apos;Success isn't about how much money you make. It's about the difference you make in people's lives.&apos; </p>  

                            <p>I worked alongside Aggie for well over a year, she was an absolute pleasure to work with. Providing an exceptionally high service level, aligned with outstanding communication skills. Aggie held an extremely demanding role within the business, even when under pressure she was one of the most approachable individuals within the business. Without a doubt, Aggie is the best recruiter I ever worked with.</p>

                            <p>Adrian Smith, Head of Operations</p>

                        </div>                
                </div>
                <div className="flex flex-col w-11/12 lg:w-1/2 lg:p-16 gap-8 pt-28">
                    <h2 className="text-4xl font-black tracking-tighter text-[#312252]">Contact Aggie directly</h2>
                    <ContactMarkPearce />

                </div>
            </div>
        </section>
        </>
    )
}