import ContactTeam from "@/app/components/ContactTeam"
import TeamInside from "@/app/components/TeamInside"
import Team from "@/app/components/Theme Components/Team"
import Image from "next/image"
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa"

export default function MonikaLoj() {
    
    return(
        <>
        <section className="w-full lg:pt-16 pb-20">
            <div className="flex flex-col lg:flex-row w-11/12 lg:w-8/12 pt-16 m-auto">
                <div className='flex flex-col gap-4 w-11/12 lg:w-1/2'>
                    <div className='flex flex-col gap-4 w-11/12 lg:w-8/12 justify-start '>
                        <h2 className='text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]'>
                            Monika Loj
                        </h2>
                        <p>
                            Operations Director
                        </p>                    
                    </div>
                    <Image src="/Monika-Beldycka-f.webp" width={1000} height={800} alt="monika-loj" className="w-full h-auto rounded-3xl"/>
                    <Link href='https://www.linkedin.com/in/monika-loj-beldycka-223a3414/' target="_blank" className="w-fit"><button className="bg-[#0077b5] pl-1 pr-2 py-1 text-white font-bold rounded-md flex flex-nowrap items-center gap-2 hover:gap-3 transition-all"><FaLinkedin className="w-8 h-full"/><p>Connect with me on LinkedIn</p></button></Link>
                    <div className="flex flex-col gap-4 py-16">
                            <p>Monika joined Accept Recruitment Industrial & Driving Branch in Leicester at the beginning of 2016 as a Branch Manager. Through hard work Monika achieved some great wins for the company by developing and growing client&apos;s portfolio and recruiting team of extremely talented recruiters. Monika looked after new business development, site implementations and projects, existing client delivery models and the welfare and development of the infrastructure of the business. Her dedication, understanding of client&apos;s needs and care about their business helped Accept Recruitment achieving 40% year on year growth.</p> 

                            <p>In 2018 Monika was promoted to Head of Operation. She continued developing value- added solutions through progressive and accountable client management. Monika took over the control of the Industrial Sector of the business across Branch Network and Managed Service Divisions.</p>  

                            <p>Thanks to her strong business operational mindset and management skills,  she successfully implemented new strategies to drive better operational and financial efficiency. Recognised for her invaluable contribution to Accept Recruitment growth, Monika was promoted in December 2019 to Operations Director role. As a key decision maker, Monika focuses on continues improvement, efficiency and functionality of all business areas including operations, finance, HR, compliance, marketing and company secretarial</p> 

                            <p>Monika understood our needs and gave us a recruitment solution that saved us thousands of pounds in just few months. I would highly recommend Monika for her professionalism, knowledge and her fantastic approach.</p> 

                        </div>                
                </div>
                <div className="flex flex-col w-11/12 lg:w-1/2 lg:p-16 gap-8 pt-28">
                    <h2 className="text-4xl font-black tracking-tighter text-[#312252]">Contact Monika directly</h2>
                    <ContactTeam contactname={"monika"} />

                </div>
            </div>
            <Team teamSmallTitle={''} teamMainTitle={'Awesome team members'} teamCtaButtonText={null} teamText={''}/>
        </section>
        </>
    )
}