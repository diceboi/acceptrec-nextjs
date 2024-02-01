import ContactTeam from "@/app/components/ContactTeam"
import TeamInside from "@/app/components/TeamInside"
import Team from "@/app/components/Theme Components/Team"
import Image from "next/image"
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa"

export default function PeterCzinderi() {
    
    return(
        <>
        <section className="w-full lg:pt-16 pb-20">
            <div className="flex flex-col lg:flex-row w-11/12 lg:w-8/12 pt-16 m-auto">
                <div className='flex flex-col gap-4 w-11/12 lg:w-1/2'>
                    <div className='flex flex-col gap-4 w-11/12 lg:w-8/12 justify-start '>
                        <h2 className='text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]'>
                            Peter Czinderi
                        </h2>
                        <p>
                            IT Manager
                        </p>                    
                    </div>
                    <Image src="/Peter-turkus.webp" width={1000} height={800} alt="peter-czinderi" className="w-full h-auto rounded-3xl"/>
                    <Link href='https://www.linkedin.com/in/peter-czinderi-ba393b251/' target="_blank" className="w-fit"><button className="bg-[#0077b5] pl-1 pr-2 py-1 text-white font-bold rounded-md flex flex-nowrap items-center gap-2 hover:gap-3 transition-all"><FaLinkedin className="w-8 h-full"/><p>Connect with me on LinkedIn</p></button></Link>
                    <div className="flex flex-col gap-4 py-16">
                            <p>My passion has always been IT and my journey began in the industry when I was 16. With over 12 years of experience, I have acquired a wealth of knowledge working in a variety of positions such as IT manager to running an IT store. This has required me to think innovatively and take an analytical approach to problem-solving, which results in high-quality solutions. Using my IT background I push the use of technology within the recruitment sector, which drives the company forward and creates engaging, innovative applications.</p> 
                        </div>                
                </div>
                <div className="flex flex-col w-11/12 lg:w-1/2 lg:p-16 gap-8 pt-28">
                    <h2 className="text-4xl font-black tracking-tighter text-[#312252]">Contact Peter directly</h2>
                    <ContactTeam contactname={"peter"} />

                </div>
            </div>
            <Team teamSmallTitle={''} teamMainTitle={'Awesome team members'} teamCtaButtonText={null} teamText={''}/>
        </section>
        </>
    )
}