import { FiArrowUpRight } from "react-icons/fi"
import { TbHeartHandshake } from 'react-icons/tb'
import { TbUserHeart } from 'react-icons/tb'
import { LiaFistRaisedSolid } from 'react-icons/lia'
import { LuHelpingHand } from 'react-icons/lu'
import { FiSmile } from 'react-icons/fi'
import { TbUsersGroup } from 'react-icons/tb'
import Link from "next/link"

import Abouthero from "../components/Theme Components/AboutHero"
import Team from "../components/team"
import DidYouKnow from "../components/DidYouKnow"

export default function AboutUs() {
    return(
        <>
        <Abouthero />
        <section className="flex justify-center items-center w-full">
            <div className="flex flex-col lg:flex-row w-11/12 lg:w-8/12 gap-16 py-20">
                <div className="w-11/12 lg:w-1/2 flex justify-center flex-col gap-8">
                    <h1 className="text-5xl font-black tracking-tighter  text-[#312252]">Our why</h1>
                    <p className="text-xl font-bold">As someone famously said it all begins with `why`. Why are you in business? Why are you different? Why do you do what you do?</p>
                    <p className="text-lg">
                        Our why is uniquely simple
                        `To improve the lives of the temporary workers that are employed by us`
                        Our workforce are valued both by us and the end client. We look after them, we have a relationship with them. They are individuals with individual needs and we have their back. We support them, we help them, we counsel them. We do everything we can to make their working life a happy and enjoyable place. 
                        Our entire focus is this. With this one, simple proposition we have clear direction and can find new ways to help our temporary workforce with their goals and ambitions.

                        This is why so many temporary workers choose Accept as their employer of choice.
                        Our clients benefit from a happy and stable workforce. This is why we are the supplier of choice to over 100 clients on a weekly basis.
                        If you need help with flexible workers, then please speak with us. We can show `why` we do what we do.
                    </p>
                </div>
                <div className="w-11/12 lg:w-1/2 lg:h-[60vh] min-h-[40vh] bg-[url('/about-us.webp')] bg-contain bg-center bg-no-repeat"></div>
            </div>
        </section>

        <section className="flex flex-col lg:flex-row w-11/12 lg:w-8/12  gap-8 py-20 m-auto">
                <div className="flex flex-col gap-4 w-full lg:w-1/2 justify-start lg:bg-[url('/helping-hands.webp')] bg-contain bg-left bg-no-repeat">
                    <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                        Our values
                    </h3>
                    <h2 className="flex gap-3 text-6xl lg:text-6xl font-black tracking-tighter z-10  text-[#312252]">
                        Trust and honesty
                    </h2>                
                </div>
                <div className="grid grid-cols-2 grid-rows-3 gap-8 w-full lg:w-1/2">
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex flex-col lg:flex-row items-left gap-2 '>
                            <TbUserHeart className='w-10 h-8 text-[#00afaa]'/>
                            <h3 className='text-2xl font-black tracking-tighter  text-[#312252]'>Truthfulness</h3>
                        </div>                        
                        <p className='font-medium lg:ml-12'>Our greatest asset is our team members. Open and honest communication improves strengths of the team.</p>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex flex-col lg:flex-row items-left gap-2'>
                            <LiaFistRaisedSolid className='w-10 h-10 text-[#00afaa]'/>
                            <h3 className='text-2xl font-black tracking-tighter text-[#312252]'>Relentless</h3>
                        </div>                        
                        <p className='font-medium lg:ml-12'>We are passionate recruiters with a continuous desire to learn and innovate. We exceed our customer’s expectations.</p>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex flex-col lg:flex-row items-left gap-2'>
                            <LuHelpingHand className='w-10 h-10 text-[#00afaa]'/>
                            <h3 className='text-2xl font-black tracking-tighter text-[#312252]'>Understanding</h3>
                        </div>                        
                        <p className='font-medium lg:ml-12'>Our knowledge makes us specialists while our compassion makes us human beings - a perfect combo to a long-lasting relationship.</p>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex flex-col lg:flex-row items-left gap-2'>
                            <TbHeartHandshake className='w-10 h-10 text-[#00afaa]'/>
                            <h3 className='text-2xl font-black tracking-tighter text-[#312252]'>Supportive</h3>
                        </div>                        
                        <p className='font-medium lg:ml-12'>We recognize the unique value in everyone while working as a team. We promote an environment of collaboration and respect.</p>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex flex-col lg:flex-row items-left gap-2'>
                            <TbUsersGroup className='w-10 h-10 text-[#00afaa]'/>
                            <h3 className='text-2xl font-black tracking-tighter text-[#312252]'>Teamwork</h3>
                        </div>                        
                        <p className='font-medium lg:ml-12'>When we respect one another, we can work as a team to achieve at a high level. Our strongest asset is the power of “we”.</p>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex flex-col lg:flex-row items-left gap-2'>
                            <FiSmile className='w-10 h-10 text-[#00afaa]'/>
                            <h3 className='text-2xl font-black tracking-tighter text-[#312252]'>Honesty</h3>
                        </div>                        
                        <p className='font-medium lg:ml-12'>Everything changes with time and the only way to address the differences is to remain honest. Always.</p>
                    </div>
                </div>
        </section>

        <section className="relative py-20 bg-neutral-100">
            <div className='flex flex-col w-11/12 lg:w-8/12 gap-8 m-auto'>
                <div className="flex flex-col gap-4 w-full justify-center items-center text-center bg-contain bg-bottom">                
                    <h2 className='text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]'>
                        Key Company Highlights
                    </h2>
                    <p className='font-medium lg:w-1/2'>
                        Accept Recruitment offers staffing solutions for business since 2015 but our recruitment knowledge is from far beyond that date. We have been supporting more than 7,000 candidates annually in Leicester, West Yorkshire and Derbyshire, thanks to the wide range of jobs we offer and here is our story.
                    </p>
                </div>
                <ul className="grid lg:grid-cols-2 w-full">

                    <li id="highlights-list-left" className="relative lg:border-r lg:border-neutral-300 lg:pr-28 mt-20 lg:mt-0 lg:pt-20 before:content-['2023.May']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter text-[#312252]">Best rated recruitment agency</h2>
                            <p>Officially the best rated recruitment company in the UK backed by an over 900 Google reviews with a 4.8 star rating overall.</p>
                        </div>
                    </li>

                    <li id="highlights-list-right" className="relative lg:pl-28 lg:pt-60 pt-20 before:content-['2023.January']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter text-[#312252]">Integrated biometric scanners</h2>
                            <p>Development of integrated Biometric scanners with new system completed allowing real time information for users.</p>
                        </div>
                    </li>

                    <li id="highlights-list-left" className="relative lg:border-r lg:border-neutral-300 mt-20 lg:mt-0 lg:pr-28 before:content-['2022.November']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter text-[#312252]">Second National Temporary Worker Day</h2>
                            <p>Celebrated the second year of NTWD with continuous expansion as the special day gains increasing recognition.</p>
                        </div>
                    </li>

                    <li id="highlights-list-right" className="relative lg:pl-28 lg:pt-40 pt-20 before:content-['2022.September']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter text-[#312252]">Raised £1000 for Macmillan Coffee Morning</h2>
                            <p>Together with our staff, workers and clients, we raised an amazing £1000 for Macmillan Cancer Support as a part of their Coffee Morning event.</p>
                        </div>
                    </li>

                    <li id="highlights-list-left" className="relative lg:border-r lg:border-neutral-300 mt-20 lg:mt-0 lg:pr-28 before:content-['2022.August']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter text-[#312252]">New IT system</h2>
                            <p>New IT system bought and developed, significantly enhancing our operational efficiency and streamlining workflows.</p>
                        </div>
                    </li>

                    <li id="highlights-list-right" className="relative lg:pl-28 lg:pt-40 pt-20 before:content-['2022.August']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter text-[#312252]">National Resourcing Centre launched</h2>
                            <p>The successful launch of the National Resourcing Centre propelled us into a new era of resource management and efficiency.</p>
                        </div>
                    </li>

                    <li id="highlights-list-left" className="relative lg:border-r lg:border-neutral-300 mt-20 lg:mt-0 lg:pr-28 before:content-['2022.May']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter text-[#312252]">Office renovation</h2>
                            <p>Complete renovation of the office, showcasing a modern workspace that incorporates a thoughtfully designed relaxation area for our staff.</p>
                        </div>
                    </li>

                    <li id="highlights-list-right" className="relative lg:pl-28 lg:pt-40 pt-20 before:content-['2022.February']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter text-[#312252]">New branch location</h2>
                            <p>New branch officially opens in Bristol.</p>
                        </div>
                    </li>

                    <li id="highlights-list-left" className="relative lg:border-r lg:border-neutral-300 mt-20 lg:mt-0 lg:pr-28  before:content-['2022.January']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter text-[#312252]">New head office</h2>
                            <p>New head office opens in Leicester.</p>
                        </div>
                    </li>

                    <li id="highlights-list-right" className="relative lg:pl-28 lg:pt-40 pt-20 before:content-['2021.December']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter text-[#312252]">Supporting Rainbows Hospice</h2>
                            <p>Rainbows Hospice in Loughborough chosen as Accept&apos;s Charity.</p>
                        </div>
                    </li>

                    <li id="highlights-list-left" className="relative lg:border-r lg:border-neutral-300 mt-20 lg:mt-0 lg:pr-28  before:content-['2021.November']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter text-[#312252]">National Temporary Worker Day launch</h2>
                            <p>We celebrated National Temporary Worker Day, our own event to celebrate the efforts of temporary workers across the UK.</p>
                        </div>
                    </li>

                    <li id="highlights-list-right" className="relative lg:pl-28 lg:pt-40 pt-20 before:content-['2020.May']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter text-[#312252]">ISO 9001 accredited</h2>
                            <p>We successfully attained ISO 9001 accreditation, marking a significant milestone in our journey towards excellence.</p>
                        </div>
                    </li>

                    <li id="highlights-list-left" className="relative lg:border-r lg:border-neutral-300 mt-20 lg:mt-0 lg:pr-28  before:content-['2019.September']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter text-[#312252]">Company growth during Covid-19</h2>
                            <p>Another successful and profitable year during uncertain times (Covid-19 and Brexit).</p>
                        </div>
                    </li>

                    <li id="highlights-list-right" className="relative lg:pl-28 lg:pt-40 pt-20 before:content-['2019.October']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter text-[#312252]">Marketing Division launch</h2>
                            <p>Marketing Division launched to promote visibility and PR of business.</p>
                        </div>
                    </li>

                    <li id="highlights-list-left" className="relative lg:border-r lg:border-neutral-300 mt-20 lg:mt-0 lg:pr-28  before:content-['2019.September']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter text-[#312252]">New office</h2>
                            <p>New office opens in Coventry with onsite win.</p>
                        </div>
                    </li>

                    <li id="highlights-list-right" className="relative lg:pl-28 lg:pt-40 pt-20 before:content-['2019.October']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter text-[#312252]">New division</h2>
                            <p>Managed Services Division launched to support onsite operations.</p>
                        </div>
                    </li>

                    <li id="highlights-list-left" className="relative lg:border-r lg:border-neutral-300 mt-20 lg:mt-0 lg:pr-28  before:content-['2018.November']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter text-[#312252]">New larger premises</h2>
                            <p>Premise relocation to our own unit due to significant business growth.</p>
                        </div>
                    </li>

                    <li id="highlights-list-right" className="relative lg:pl-28 lg:pt-40 pt-20 before:content-['2017.August']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter text-[#312252]">First onsite</h2>
                            <p>First onsite operation won in Leicester.</p>
                        </div>
                    </li>

                    <li id="highlights-list-left" className="relative lg:border-r lg:border-neutral-300 mt-20 lg:mt-0 lg:pr-28  before:content-['2016.August']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter text-[#312252]">Moved to a larger office</h2>
                            <p>We outgrow our present office and move premises.</p>
                        </div>
                    </li>

                    <li id="highlights-list-right" className="relative lg:pl-28 lg:pt-40 pt-20 before:content-['2016.February']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter text-[#312252]">Successful first financial year</h2>
                            <p>First Financial year ends and the business is profitable.</p>
                        </div>
                    </li>

                    <li id="highlights-list-left" className="relative lg:border-r lg:border-neutral-300 mt-20 lg:mt-0 lg:pr-28  before:content-['2015.May']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter text-[#312252]">First workers supplied</h2>
                            <p>Company launches and the first temporary workers are recruited, ready for our first assignment at Creation Finishing.</p>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </section>

        <section className="flex justify-center items-center w-full">
            <div className="flex flex-col lg:flex-row w-11/12 lg:w-8/12 gap-16 py-16">
                <div className="w-11/12 lg:w-1/2 flex justify-center flex-col gap-8">
                    <h1 className="text-5xl font-black tracking-tighter  text-[#312252]">Join Us</h1>
                    <p className="text-xl font-bold">Want to be part of our team?</p>
                    <p className="text-lg">
                    By helping people to build their future based on trust and integrity, we create long-lasting relationships and the environment of choice for many talented recruiters. Together, we make our candidates and clients’ life successful and trouble-free wherever they might be. Our goal is to become the most transparent and technologically advanced recruitment agency in the UK and we are constantly on the look-out for likeminded people. We have superpowers, because we have each other. Does this sound like you? If yes, then send us your CV!
                    </p>
                    <Link href="/career"
                        className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white text-xl hover:shadow-[#00afa93b] hover:w-fit p-4 rounded-full transition-all duration-200 gap-2"
                        >
                        Read more
                        <FiArrowUpRight className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                        />
                    </Link>
                </div>
                <div className="w-11/12 lg:w-1/2 lg:h-[60vh] min-h-[40vh] bg-[url('/join-us.webp')] bg-contain bg-center bg-no-repeat"></div>
            </div>
        </section>
        <Team />
        </>
    )
}