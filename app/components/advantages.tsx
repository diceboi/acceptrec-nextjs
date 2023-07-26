import { FiArrowRight } from 'react-icons/fi'
import { TbMessageStar } from 'react-icons/tb'
import { GiReceiveMoney } from 'react-icons/gi'
import { GiMaterialsScience } from 'react-icons/gi'

export default function Advantages() {
    return(
        <>
        <section className="flex flex-col gap-8 w-full ">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 w-11/12 lg:w-8/12 m-auto">
                <div className="group flex gap-4 w-full lg:w-1/3  p-4 ">
                    <div className='flex flex-col items-start justify-start w-28'>
                        <TbMessageStar className='w-12 h-12 text-[#00afaa]'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-3xl font-black justify-start tracking-tighter'>Highly Rated</h3>
                        <p>Rated highly by a number of platforms, including Google, which currently ranks Accept Recruitment as 4.8 stars from over 950 reviews.</p>    
                    </div>
                </div>

                <div className="group flex gap-4 w-full lg:w-1/3  p-4 ">
                    <div className='flex flex-col items-start justify-start w-28'>
                        <GiReceiveMoney className='w-12 h-12 text-[#00afaa]'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-3xl font-black justify-start tracking-tighter'>Value for Money</h3>
                        <p>The added extras included into our bespoke proposition means that we deliver outstanding value for the service we provide.</p>    
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 w-11/12 lg:w-8/12 m-auto">
                <div className="group flex gap-4 w-full lg:w-1/3  p-4 ">
                    <div className='flex flex-col items-start justify-start w-28'>
                        <TbMessageStar className='w-12 h-12 text-[#00afaa]'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-3xl font-black justify-start tracking-tighter'>Highly Rated</h3>
                        <p>Rated highly by a number of platforms, including Google, which currently ranks Accept Recruitment as 4.8 stars from over 950 reviews.</p>    
                    </div>
                </div>

                <div className='relative flex flex-col gap-4 w-full lg:w-1/3 justify-start m-auto py-16 border rounded-xl shadow-sm bg-[#00afaa]'>
                    <h2 className='text-6xl lg:text-6xl text-white text-center font-black tracking-tighter'>
                        The accept difference
                    </h2>
                    <h3 className='text-sm lg:text-lg text-center font-medium tracking-widest uppercase'>
                    A Fresh Approach
                    </h3>
                    <div className='absolute h-16 w-[1px] border-dashed border-neutral-300 left-16 -top-16 bg-neutral-300'></div>
                </div>

                <div className="group flex gap-4 w-full lg:w-1/3  p-4 ">
                    <div className='flex flex-col items-start justify-start w-28'>
                        <GiMaterialsScience className='w-12 h-12 text-[#00afaa]'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-3xl font-black justify-start tracking-tighter'>Tech Based</h3>
                        <p>Using the very latest technologies and techniques we deliver cutting edge recruitment solutions, which are unique to Accept.</p>    
                    </div>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 w-11/12 lg:w-8/12 m-auto">
                <div className="group flex gap-4 w-full lg:w-1/3  p-4 ">
                    <div className='flex flex-col items-start justify-start w-28'>
                        <TbMessageStar className='w-12 h-12 text-[#00afaa]'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-3xl font-black justify-start tracking-tighter'>Ethical and Compliant</h3>
                        <p>Ensuring that we deliver ethical and compliant recruitment solutions are the very cornerstone of what we do.</p>    
                    </div>
                </div>

                <div className="group flex gap-4 w-full lg:w-1/3  p-4 ">
                    <div className='flex flex-col items-start justify-start w-28'>
                        <TbMessageStar className='w-12 h-12 text-[#00afaa]'/>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-3xl font-black justify-start tracking-tighter'>Industry Expertise</h3>
                        <p>We have recruited industry specialists to work within our business. Our teams understand your challenges and can offer advice and insights.</p>    
                    </div>
                </div>
            </div>

        </section>
        </>
    )
}