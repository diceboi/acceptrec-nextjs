import ContactTeam from "@/app/components/ContactTeam"
import TeamInside from "@/app/components/TeamInside"
import Team from "@/app/components/Theme Components/Team"
import Image from "next/image"
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa"

export default function AlanLathwell() {
    
    return(
        <>
        <section className="w-full lg:pt-16 pb-20">
            <div className="flex flex-col lg:flex-row w-11/12 lg:w-8/12 pt-16 m-auto">
                <div className='flex flex-col gap-4 w-11/12 lg:w-1/2'>
                    <div className='flex flex-col gap-4 w-11/12 lg:w-8/12 justify-start '>
                        <h2 className='text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]'>
                            Alan Lathwell
                        </h2>
                        <p>
                            Regional Driving Manager
                        </p>                    
                    </div>
                    <Image src="/Alan-Lathwell.webp" width={1000} height={800} alt="Alan Lathwell" className="w-full h-auto rounded-3xl"/>
                    <Link href='https://www.linkedin.com/in/alan-lathwell-61b82263/' target="_blank" className="w-fit"><button className="bg-[#0077b5] pl-1 pr-2 py-1 text-white font-bold rounded-md flex flex-nowrap items-center gap-2 hover:gap-3 transition-all"><FaLinkedin className="w-8 h-full"/><p>Connect with me on LinkedIn</p></button></Link>
                    <div className="flex flex-col gap-4 py-16">
                            <p>
                                Alan has been an integral part of the Accept team since joining in February 2023, taking on the
                                role of Regional Driving Manager. His journey in the recruitment industry commenced in March
                                2012, following two decades of experience in motor industry-related roles. Throughout his

                                recruitment career, Alan has consistently been involved in driving and has held operational
                                positions across Northamptonshire, Cambridgeshire, Warwickshire, and Leicestershire. His
                                extensive background uniquely positions him to contribute significantly to Accept&#39;s success in
                                the dynamic field of recruitment.
                            </p> 

                            <p>
                                In his current capacity at Accept, Alan plays a crucial role in driving the division&#39;s growth, both
                                with existing clients and in expanding the customer base. As a manager, Alan distinguishes
                                himself as a valuable team player by actively supporting Maja&#39;s professional development,
                                demonstrating a commitment to the success and growth of his colleagues. Alan also maintains
                                a sharp focus on upholding high standards and ensuring compliance within the organisation. His
                                overarching goal at Accept is to establish the company as the leading choice for clients seeking
                                drivers and for candidates searching for opportunities in Leicestershire.
                            </p>

                            <p>
                                Described as a dedicated professional, Alan is known for his commitment to delivering excellent
                                service. A true team player, he collaborates seamlessly with colleagues to achieve shared
                                objectives. Alan&#39;s approach to work is well-balanced, combining a strong work ethic with a
                                sense of humour that contributes to a positive and enjoyable work environment. His vision for
                                Accept Recruitment reflects not only a commitment to excellence but also a desire to create a
                                company culture that stands out as the preferred destination for driving opportunities in
                                Leicestershire.
                            </p>

                        </div>                
                </div>
                <div className="flex flex-col w-11/12 lg:w-1/2 lg:p-16 gap-8 pt-28">
                    <h2 className="text-4xl font-black tracking-tighter text-[#312252]">Contact Alan directly</h2>
                    <ContactTeam contactname={"alan"} />

                </div>
            </div>
            <Team teamSmallTitle={''} teamMainTitle={'Awesome team members'} teamCtaButtonText={null} teamText={''}/>
        </section>
        </>
    )
}