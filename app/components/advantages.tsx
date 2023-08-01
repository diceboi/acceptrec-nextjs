import { TbHeartHandshake } from 'react-icons/tb'
import { TbMoodHeart } from 'react-icons/tb'
import { TbReportMoney } from 'react-icons/tb'
import { TbChartInfographic } from 'react-icons/tb'
import { TbBuildingSkyscraper } from 'react-icons/tb'
import { TbUsersGroup } from 'react-icons/tb'

export default function Advantages() {
    return(
        <>
        <section className="relative flex flex-col justify-between w-full h-screen pt-20 bg-[url('/tech-job.avif')] bg-cover bg-center">
        <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-b from-[#000000be] to-[#000000be] opacity-100 ease-out duration-200 rounded-b-3xl'></div>
            <div className="flex flex-col justify-between gap-8 w-11/12 h-full lg:w-8/12 m-auto">
                <div className=" flex flex-col justify-start gap-4 w-full bg-cover bg-center text-center">
                    <h1 className='text-sm lg:text-lg font-medium tracking-widest uppercase text-white z-10 '>The accept difference</h1>
                    <h2 className="flex justify-center gap-3 text-6xl lg:text-8xl font-black tracking-tighter text-white z-10 ">A <p className='text-[#00afaa] underline'>fresh</p> approach</h2>                    
                    <p className='font-medium text-neutral-300 z-10 w-1/2 m-auto'>As a tech based recruitment company we leverage the latest innovation to deliver outstanding results. Fresh ideas are the forefront of a collaborative approach, your success is our success! </p>
                </div>
                <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full z-10 border-t border-neutral-500 py-8">
                    <div className='flex flex-col gap-2 p-3'>
                        <div className='flex items-center gap-2 '>
                            <TbMoodHeart className='w-10 h-10 text-[#00afaa]'/>
                            <h3 className='text-2xl font-black tracking-tighter text-white'>Highly Rated</h3>
                        </div>                        
                        <p className='font-medium ml-12 text-white'>Rated highly by a number of platforms, including Google, which currently ranks Accept Recruitment as 4.8 stars from over 950+ reviews.</p>
                    </div>
                    <div className='flex flex-col gap-2 p-3'>
                        <div className='flex items-center gap-2'>
                            <TbReportMoney className='w-10 h-10 text-[#00afaa]'/>
                            <h3 className='text-2xl font-black tracking-tighter text-white'>Value for Money</h3>
                        </div>                        
                        <p className='font-medium ml-12 text-white'>The added extras included into our bespoke proposition means that we deliver outstanding value for the service we provide.</p>
                    </div>
                    <div className='flex flex-col gap-2 p-3'>
                        <div className='flex items-center gap-2'>
                            <TbChartInfographic className='w-10 h-10 text-[#00afaa]'/>
                            <h3 className='text-2xl font-black tracking-tighter text-white'>Tech Based</h3>
                        </div>                        
                        <p className='font-medium ml-12 text-white'>Using the very latest technologies and techniques we deliver cutting edge recruitment solutions, which are unique to Accept.</p>
                    </div>
                    <div className='flex flex-col gap-2 p-3'>
                        <div className='flex items-center gap-2'>
                            <TbHeartHandshake className='w-10 h-10 text-[#00afaa]'/>
                            <h3 className='text-2xl font-black tracking-tighter text-white'>Ethical and Compliant</h3>
                        </div>                        
                        <p className='font-medium ml-12 text-white'>Ensuring that we deliver ethical and compliant recruitment solutions are the very cornerstone of what we do.</p>
                    </div>
                    <div className='flex flex-col gap-2 p-3'>
                        <div className='flex items-center gap-2'>
                            <TbBuildingSkyscraper className='w-10 h-10 text-[#00afaa]'/>
                            <h3 className='text-2xl font-black tracking-tighter text-white'>Industry Expertise</h3>
                        </div>                        
                        <p className='font-medium ml-12 text-white'>We have recruited industry specialists to work within our business. Our teams understand your challenges and can offer advice and insights.</p>
                    </div>
                    <div className='flex flex-col gap-2 p-3'>
                        <div className='flex items-center gap-2'>
                            <TbUsersGroup className='w-10 h-10 text-[#00afaa]'/>
                            <h3 className='text-2xl font-black tracking-tighter text-white'>Sustainable Partner</h3>
                        </div>                        
                        <p className='font-medium ml-12 text-white'>Currently employing over 50 full time employees, we are able to offer clients a local partnership with a national approach.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}