"use client"

import ContactTeam from "@/app/components/ContactTeam"
import TeamInside from "@/app/components/TeamInside"
import Image from "next/image"

export default function AlionaCozacenco() {
    
    return(
        <>
        <section className="w-full lg:pt-16 pb-20">
            <div className="flex flex-col lg:flex-row w-11/12 lg:w-8/12 pt-16 m-auto">
                <div className='flex flex-col gap-4 w-11/12 lg:w-1/2'>
                    <div className='flex flex-col gap-4 w-11/12 lg:w-8/12 justify-start '>
                        <h2 className='text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]'>
                            Aliona Cozacenco
                        </h2>
                        <p>
                            Industrial Manager
                        </p>                    
                    </div>
                    <Image src="/Aliona_Cozacenco_f.webp" width={1000} height={800} alt="aliiona-cozacenco" className="w-full h-auto"/>
                    <div className="flex flex-col gap-4 py-16">
                            <p>My name is Aliona and I would like to welcome you to my page. I have been in the recruitment industry for over 4 years starting as an account coordinator, and have worked my way up through hard work and determination to become who I am now. My journey with Accept Recruitment started in 2019, where I was appointed as an Account Manager. One of my superpowers is to work efficiently and ensure all my candidates and clients are well looked after. Thanks to my passion and diligence, I have recently been promoted to an Industrial Manager. I am an energetic and enthusiastic individual who enjoys the day-to-day challenges in the recruitment business. I am also the one that organises lunches for my team. (Well... most of the times) :)</p> 

                            <p>As a manager, I believe that motivation is the key to success. I coach and support my team, my candidates and even some of my clients by giving them my honest advice on whatever it might be. We are the best recruitment agency in Leicester and we work in a very effective and professional way to ensure the goal is achieved, whether that is to secure a placement for our candidates or guarantee meeting our clients&apos; demands.</p>  

                            <p>At all times, I have found Aliona to be reliable, conscientious, and dedicated. She is flexible and willing to work on any project that is assigned to her. In addition, she is extremely organised and computer literate. Aliona is a tremendous asset for any company.</p>

                            <p>Ula Gosek - Food Production Supervisor, Leicester</p>

                        </div>                
                </div>
                <div className="flex flex-col w-11/12 lg:w-1/2 lg:p-16 gap-8 pt-28">
                    <h2 className="text-4xl font-black tracking-tighter text-[#312252]">Contact Aliona directly</h2>
                    <ContactTeam contactname={"aliona"} />

                </div>
            </div>
            <TeamInside />
        </section>
        </>
    )
}