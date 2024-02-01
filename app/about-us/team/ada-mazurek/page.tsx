import ContactTeam from "@/app/components/ContactTeam"
import TeamInside from "@/app/components/TeamInside"
import Team from "@/app/components/Theme Components/Team"
import Image from "next/image"

export default function AdaMazurek() {
    
    return(
        <>
        <section className="w-full lg:pt-16 pb-20">
            <div className="flex flex-col lg:flex-row w-11/12 lg:w-8/12 pt-16 m-auto">
                <div className='flex flex-col gap-4 w-11/12 lg:w-1/2'>
                    <div className='flex flex-col gap-4 w-11/12 lg:w-8/12 justify-start '>
                        <h2 className='text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]'>
                            Ada Mazurek
                        </h2>
                        <p>
                            Operations Manager
                        </p>                    
                    </div>
                    <Image src="/Ada_Website_Picture.png" width={1000} height={800} alt="ada-mazurek" className="w-full h-auto"/>
                    <div className="flex flex-col gap-4 py-16">
                            <p>I am passionate about my work because I love what I do! I have a steady source of motivation that drives me to do my best. In my last job, this passion led me to challenge myself daily and learn new skills that I have transferred to my current position.</p> 

                            <p>I have been in recruitment for nearly 8 years, and have been lucky to work with Accept Recruitment to develop their recruitment strategy, progress my career and achieve great goals. I have experience of building contract recruitment teams from the ground up, most recently within Industrial/Driving Estates. I am a strong believer in partnering strategically with both candidates and clients, whilst working to achieve their long-term goals. As Operation Manager, I have big ambitions for the contract division and I look forward to offering my expertise to support business growth.</p>  

                            <p>I have a real passion for driving positive change and playing my part in making sure every individual always feels valued and I love working with clients and candidates who share the same outlook. </p>

                            <p>Away from work, I am a proud owner of a middle dog named Lea. Apart from this I try to keep fit and healthy… In the weekdays at least!</p>

                        </div>                
                </div>
                <div className="flex flex-col w-11/12 lg:w-1/2 lg:p-16 gap-8 pt-28">
                    <h2 className="text-4xl font-black tracking-tighter text-[#312252]">Contact Ada directly</h2>
                    <ContactTeam contactname={"ada"} />

                </div>
            </div>
            <Team teamSmallTitle={''} teamMainTitle={'Awesome team members'} teamCtaButtonText={null} teamText={''}/>
        </section>
        </>
    )
}