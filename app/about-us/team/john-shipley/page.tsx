import ContactTeam from "@/app/components/ContactTeam"
import TeamInside from "@/app/components/TeamInside"
import Team from "@/app/components/Theme Components/Team"
import Image from "next/image"
import Link from "next/link"
import { FaLinkedin } from "react-icons/fa"

export default function JohnShipley() {
    
    return(
        <>
        <section className="w-full lg:pt-16 pb-20">
            <div className="flex flex-col lg:flex-row w-11/12 lg:w-8/12 pt-16 m-auto">
                <div className='flex flex-col gap-4 w-11/12 lg:w-1/2'>
                    <div className='flex flex-col gap-4 w-11/12 lg:w-8/12 justify-start '>
                        <h2 className='text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]'>
                            John Shipley
                        </h2>
                        <p>
                            Sales Director
                        </p>                    
                    </div>
                    <Image src="/john-shipley.jpg" width={1000} height={800} alt="John Shipley" className="w-full h-auto rounded-3xl"/>
                    <Link href='https://www.linkedin.com/in/john-shipley-9b058b58/' target="_blank" className="w-fit"><button className="bg-[#0077b5] pl-1 pr-2 py-1 text-white font-bold rounded-md flex flex-nowrap items-center gap-2 hover:gap-3 transition-all"><FaLinkedin className="w-8 h-full"/><p>Connect with me on LinkedIn</p></button></Link>
                    <div className="flex flex-col gap-4 py-16">
                            <p>
                                John joined Accept in January 2024 as the Sales Director, bringing with him a wealth of
                                experience spanning both the recruitment and logistics industries. With five years dedicated to
                                recruitment and a prior fourteen-year tenure in Warehouse and Logistics Management, John
                                possesses a comprehensive understanding of diverse operational landscapes. His role at
                                Accept revolves around spearheading the development and nurturing of the new and upcoming
                                sales team, crucial for driving the company's growth and expansion initiatives. Leveraging his
                                extensive background, John aims not only to achieve personal sales targets but also to cultivate
                                a vibrant and competitive culture within the sales department.
                            </p> 

                            <p>
                                In his capacity, John harbours ambitious goals for Accept's trajectory, aspiring to foster its
                                footprint across multiple locations while maintaining a positive and dynamic work environment.
                                His ethos encapsulates relentless forward momentum, driven by an inherent competitiveness
                                that propels him and his team towards excellence. John's unwavering energy permeates the
                                workplace, inspiring colleagues to share in his fervour and drive for continuous improvement.
                                With an unwavering commitment to progress and a keen eye on the horizon, John stands as a
                                catalyst for innovation and growth within Accept, poised to lead the company towards
                                unprecedented success in the recruitment landscape.
                            </p>

                        </div>                
                </div>
                <div className="flex flex-col w-11/12 lg:w-1/2 lg:p-16 gap-8 pt-28">
                    <h2 className="text-4xl font-black tracking-tighter text-[#312252]">Contact John directly</h2>
                    <ContactTeam contactname={"john.shipley"} />

                </div>
            </div>
            <Team teamSmallTitle={''} teamMainTitle={'Awesome team members'} teamCtaButtonText={null} teamText={''}/>
        </section>
        </>
    )
}