import ContactTeam from "@/app/components/ContactTeam"
import TeamInside from "@/app/components/TeamInside"
import Team from "@/app/components/Theme Components/Team"
import Image from "next/image"
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa"

export default function MagdaObraczka() {
    
    return(
        <>
        <section className="w-full lg:pt-16 pb-20">
            <div className="flex flex-col lg:flex-row w-11/12 lg:w-8/12 pt-16 m-auto">
                <div className='flex flex-col gap-4 w-11/12 lg:w-1/2'>
                    <div className='flex flex-col gap-4 w-11/12 lg:w-8/12 justify-start '>
                        <h2 className='text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]'>
                            Magda Obraczka
                        </h2>
                        <p>
                            Senior Account Manager
                        </p>                    
                    </div>
                    <Image src="/Magda-Obraczka.webp" width={1000} height={800} alt="Magda Obraczka" className="w-full h-auto rounded-3xl"/>
                    <Link href='https://www.linkedin.com/in/magdalena-obraczka-40b88ba5/' target="_blank" className="w-fit"><button className="bg-[#0077b5] pl-1 pr-2 py-1 text-white font-bold rounded-md flex flex-nowrap items-center gap-2 hover:gap-3 transition-all"><FaLinkedin className="w-8 h-full"/><p>Connect with me on LinkedIn</p></button></Link>
                    <div className="flex flex-col gap-4 py-16">
                            <p>
                                I&#39;m Magda, a Senior Account Manager at Accept Recruitment. My journey in recruitment began
                                six years ago with a focus on the warehousing sector. My goal is to deliver exceptional service,
                                placing communication and honesty at the core of building ideal relationships with clients and
                                candidates.
                            </p> 

                            <p>
                                While recruitment can pose challenges, putting heartfelt enthusiasm into your job brings highly
                                rewarding outcomes in client happiness and candidate satisfaction. Working in recruitment
                                instills qualities like empathy, reliability, and a natural curiosity.
                            </p>

                            <p>
                                My motto: “Together we stand, together we fall. All for one and one for all!”
                            </p>

                        </div>                
                </div>
                <div className="flex flex-col w-11/12 lg:w-1/2 lg:p-16 gap-8 pt-28">
                    <h2 className="text-4xl font-black tracking-tighter text-[#312252]">Contact Magda directly</h2>
                    <ContactTeam contactname={"magda"} />

                </div>
            </div>
            <Team teamSmallTitle={''} teamMainTitle={'Awesome team members'} teamCtaButtonText={null} teamText={''}/>
        </section>
        </>
    )
}