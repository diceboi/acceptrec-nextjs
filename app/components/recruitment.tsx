import Link from 'next/link'
import { FiArrowRight } from 'react-icons/fi'

export default function Recruitment({recruitmentMainTitle, recruitmentSmallTitle}:any) {
    
    return(
        <>
        <section className="w-full py-20 bg-gradient-to-b from-white to-neutral-100">
            <div className='flex flex-col gap-4 w-11/12 lg:w-8/12 justify-start m-auto pb-16'>
                <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                    {recruitmentSmallTitle}
                </h3>
                <h2 className='text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]'>
                    {recruitmentMainTitle}
                </h2>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-start gap-8 w-11/12 lg:w-8/12 m-auto">

                <Link href="/for-employers" className="group flex flex-col w-full lg:w-1/3 rounded-3xl shadow-special hover:lg:shadow-special hover:bg-white cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end border-b-8 border-[#312252] bg-[url('/accepted-job.webp')] bg-cover bg-center bg-opacity-40 group-hover:bg-opacity-100 h-64 p-4 group-hover:bg-[#ff914d] rounded-t-3xl ease-out duration-200">
                        <div className="flex flex-nowrap justify-between w-full z-10">
                            <h3 className="text-4xl font-black tracking-tighter text-white">For Clients</h3>
                            <FiArrowRight className='absolute right-8 text-white w-8 h-8 lg:opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#000000c0] to-[#0000] opacity-100 ease-out duration-200'>
                        </div>
                    </div>
                    <div className="p-4">
                        <p className=" text-md font-medium">We offer a range of services tailored to your need, so please get in touch with one of our professional team.</p>
                    </div>
                </Link>

                <Link href="/for-candidates" className="group flex flex-col w-full lg:w-1/3 rounded-3xl shadow-special hover:lg:shadow-special hover:bg-white cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end border-b-8 border-[#00afaa] bg-[url('/business-done.avif')] bg-cover bg-center bg-opacity-40 group-hover:bg-opacity-100 h-64 p-4 group-hover:bg-[#00afaa] rounded-t-3xl ease-out duration-200">
                        <div className="flex flex-nowrap justify-between w-full z-10">
                            <h3 className="text-4xl font-black tracking-tighter text-white">For Candidates</h3>
                            <FiArrowRight className='absolute right-8 text-white w-8 h-8 lg:opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#000000c0] to-[#0000] opacity-100 ease-out duration-200'>
                        </div>
                    </div>
                    <div className="p-4">
                        <p className=" text-md font-medium">With over 950+ reviews we are the highest-rated agency in the UK, so you know that we will go above and beyond to help you!</p>
                    </div>
                </Link>

                <Link href="/registration" className="group flex flex-col w-full lg:w-1/3 rounded-3xl shadow-special hover:lg:shadow-special hover:bg-white cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end border-b-8 border-[#ff914d] bg-[url('/truck-driver.avif')] bg-cover bg-center bg-opacity-40 group-hover:bg-opacity-100 h-64 p-4 group-hover:bg-[#312252] rounded-t-3xl ease-out duration-200">
                        <div className="flex flex-nowrap justify-between w-full z-10 ">
                            <h3 className="text-4xl font-black tracking-tighter text-white">Register</h3>
                            <FiArrowRight className='absolute right-8 text-white w-8 h-8 lg:opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        <div className='absolute bottom-0 left-0 h-full w-full bg-gradient-to-t from-[#000000c0] to-[#0000] opacity-100 ease-out duration-200'>
                        </div>
                    </div>
                    <div className="p-4">
                        <p className=" text-md font-medium">Choose a job you love from our wide range of vacancies. From warehouse roles to driving jobs, you are sure to find the perfect one for you!</p>
                    </div>
                </Link>
                
            </div>

        </section>
        </>
    )
}