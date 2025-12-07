import { TbHeartHandshake } from 'react-icons/tb'
import { TbMoodHeart } from 'react-icons/tb'
import { TbReportMoney } from 'react-icons/tb'
import { TbChartInfographic } from 'react-icons/tb'
import { TbBuildingSkyscraper } from 'react-icons/tb'
import { TbUsersGroup } from 'react-icons/tb'

export default function Advantages({ advantagesIntroduction, advantagesMainTitle, advantagesSmallTitle }: any) {
    return (
        <>
            <section className="flex flex-col lg:flex-row w-11/12 lg:w-8/12  gap-8 py-20 m-auto">
                <div className="flex flex-col gap-4 w-full lg:w-1/2 justify-start ">
                    <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                        {advantagesSmallTitle}
                    </h3>
                    <h2 className="flex flex-wrap gap-3 text-6xl lg:text-6xl font-black tracking-tighter z-10  text-[#312252]">
                        {advantagesMainTitle}
                    </h2>
                    <p className='font-medium w-full lg:w-2/3'>
                        {advantagesIntroduction}
                    </p>
                </div>
                <div className="grid grid-cols-2 grid-rows-3 gap-8 w-full lg:w-1/2">
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex flex-col lg:flex-row items-left gap-2 '>
                            <TbMoodHeart className='w-10 h-10 text-[#00afaa]' />
                            <h3 className='text-2xl font-black tracking-tighter  text-[#312252]'>Highly Rated</h3>
                        </div>
                        <p className='font-medium lg:ml-12'>Rated highly by a number of platforms, including Google, which currently ranks Accept Recruitment as 4.8 stars from over 950+ reviews.</p>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex flex-col lg:flex-row items-left gap-2'>
                            <TbReportMoney className='w-10 h-10 text-[#00afaa]' />
                            <h3 className='text-2xl font-black tracking-tighter text-[#312252]'>Value for Money</h3>
                        </div>
                        <p className='font-medium lg:ml-12'>The added extras included into our bespoke proposition means that we deliver outstanding value for the service we provide.</p>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex flex-col lg:flex-row items-left gap-2'>
                            <TbChartInfographic className='w-10 h-10 text-[#00afaa]' />
                            <h3 className='text-2xl font-black tracking-tighte text-[#312252]r'>Tech Based</h3>
                        </div>
                        <p className='font-medium lg:ml-12'>Using the very latest technologies and techniques we deliver cutting edge recruitment solutions, which are unique to Accept.</p>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex flex-col lg:flex-row items-left gap-2'>
                            <TbHeartHandshake className='w-10 h-10 text-[#00afaa]' />
                            <h3 className='text-2xl font-black tracking-tighter text-[#312252]'>Ethical and Compliant</h3>
                        </div>
                        <p className='font-medium lg:ml-12'>Ensuring that we deliver ethical and compliant recruitment solutions are the very cornerstone of what we do.</p>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex flex-col lg:flex-row items-left gap-2'>
                            <TbBuildingSkyscraper className='w-10 h-10 text-[#00afaa]' />
                            <h3 className='text-2xl font-black tracking-tighter text-[#312252]'>Industry Expertise</h3>
                        </div>
                        <p className='font-medium lg:ml-12'>We have recruited industry specialists to work within our business. Our teams understand your challenges and can offer advice and insights.</p>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex flex-col lg:flex-row items-left gap-2'>
                            <TbUsersGroup className='w-10 h-10 text-[#00afaa]' />
                            <h3 className='text-2xl font-black tracking-tighter text-[#312252]'>Sustainable Partner</h3>
                        </div>
                        <p className='font-medium lg:ml-12'>Currently employing over 50 full time employees, we are able to offer clients a local partnership with a national approach.</p>
                    </div>
                </div>

            </section>
        </>
    )
}