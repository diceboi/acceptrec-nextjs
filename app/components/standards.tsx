import { FiArrowRight } from 'react-icons/fi'
import Image from 'next/image'

export default function Standards() {
    
    return(
        <>
        <section className="relative py-20 bg-gradient-to-b from-neutral-100 to-white min-h-screen">
            <div className='flex flex-col w-11/12 lg:w-8/12 gap-8 m-auto'>
                <div className="flex flex-col gap-4 w-full justify-center lg:items-center lg:text-center bg-contain bg-bottom">
                    <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                        Our promise
                    </h3>
                    <h2 className='text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]'>
                        Our
                        Standards
                    </h2>
                    <p className='font-medium'>
                        Effective recruitment and strategic workforce planning comes with a support package.
                    </p>
                </div>
                <div className="grid grid-cols-1 grid-rows-4 w-full pt-20">
                    <div className='flex lg:gap-8 lg:w-full min-h-[30vh]'>
                        <div className='flex justify-center lg:items-center items-start w-1/3 lg:w-1/2 my-8'>
                            <Image src="/support-illustration.svg" width={200} height={300} alt=""/>

                        </div>
                        <div className='relative flex justify-center items-center w-1 border-r mx-8 border-neutral-300'>
                            <p className='absolute -left-3 top-14 lg:top-[50%] flex items-center justify-center w-8 h-8 font-black bg-neutral-300 border border-neutral-300 rounded-full'>1</p>
                        </div>
                        <div className='flex flex-col gap-4 justify-center w-1/2'>
                            <h3 className='text-2xl font-black tracking-tighter text-[#312252]'>The highest quality of services</h3>
                            <p className='font-medium'>We use cutting edge technology to deliver clients the staff they need when they need them. Modern recruitment tools enable us recruit staff, verify ID and check compliance online with results immediately available.</p>
                        </div>
                    </div>
                    <div className='flex lg:gap-8 w-full min-h-[30vh]'>
                        <div className='flex justify-center lg:items-center items-start w-1/3 lg:w-1/2 my-8'>
                            <Image src="/payroll-illustration.svg" width={200} height={300} alt=""/>

                        </div>
                        <div className='relative flex justify-center items-center w-1 border-r mx-8 border-neutral-300'>
                            <p className='absolute -left-3 top-14 lg:top-[50%] flex items-center justify-center w-8 h-8 font-black bg-neutral-300 border border-neutral-300 rounded-full'>2</p>
                        </div>
                        <div className='flex flex-col gap-4 justify-center w-1/2 min-h-fit'>
                            <h3 className='text-2xl font-black tracking-tighter text-[#312252]'>Timely and accurate payroll processing</h3>
                            <p className='font-medium'>We have simplified the processing of bulk hours for large scale users. Using online systems clients are able to track spend and current usage in real time.</p>
                        </div>
                    </div>
                    <div className='flex lg:gap-8 w-full min-h-[30vh]'>
                        <div className='flex justify-center lg:items-center items-start w-1/3 lg:w-1/2 my-8'>
                            <Image src="/data-illustration.svg" width={150} height={300} alt=""/>

                        </div>
                        <div className='relative flex justify-center items-center w-1 border-r mx-8 border-neutral-300'>
                            <p className='absolute -left-3 top-14 lg:top-[50%] flex items-center justify-center w-8 h-8 font-black bg-neutral-300 border border-neutral-300 rounded-full'>3</p>
                        </div>
                        <div className='flex flex-col gap-4 justify-center w-1/2 min-h-fit'>
                            <h3 className='text-2xl font-black tracking-tighter text-[#312252]'>Ongoing and effective support</h3>
                            <p className='font-medium'>By using a variety of data sources, we are able to advise on employment trends for your local area. These include availability of labour and pay rates, which allows an effective partnership to pro-actively plan and budget for future requirements.</p>
                        </div>
                    </div>
                    <div className='flex lg:gap-8 w-full min-h-[30vh]'>
                        <div className='flex justify-center lg:items-center items-start w-1/3 lg:w-1/2 my-8'>
                            <Image src="/app-illustration.svg" width={200} height={300} alt=""/>

                        </div>
                        <div className='relative flex justify-center items-center w-1 border-r mx-8 border-neutral-300'>
                            <p className='absolute -left-3 top-14 lg:top-[50%] flex items-center justify-center w-8 h-8 font-black bg-neutral-300 border border-neutral-300 rounded-full'>4</p>
                        </div>
                        <div className='flex flex-col gap-4 justify-center w-1/2 min-h-fit'>
                            <h3 className='text-2xl font-black tracking-tighter text-[#312252]'>Our App ensures we deliver for you</h3>
                            <p className='font-medium'>Leverage the relationship your workers have with their phones and take control over booking management in real time. Speed up recruitment process, receive automatic updates and check your workers arrival time by picking up their smartphones signal.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}