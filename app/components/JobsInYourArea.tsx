import { BiSolidCircle } from 'react-icons/bi'
import { TbMapPinFilled } from 'react-icons/tb'
import Image from 'next/image'

export default function JobsInYourArea() {
  return (
    <>
        <section className='w-full h-max bg-gradient-to-b from-slate-400  to-slate-300'>
            <div className='flex flex-col justify-center w-full lg:w-8/12 h-full m-auto py-20'>
                <div className="flex flex-col gap-4 w-full justify-center items-center text-center">                
                    <h2 className='text-6xl lg:text-6xl font-black text-white tracking-tighter'>
                        Jobs in your area
                    </h2>
                    <p className='font-medium lg:w-1/2 text-white'>
                        Whether you are looking for a warehouse, logistics, driving or commercial job, it is worth to know more about the job market in your local area.
                    </p>
                </div>
                <div className='w-full h-[60vh] m-auto my-20'>
                    <div className='relative w-1/2 h-full bg-contain bg-center lg:bg-bottom bg-no-repeat'>
                        <Image src="/uk-map.webp" width={1000} height={1000} className='w-auto h-full' alt={'uk map'}/>
                        <div className='group absolute lg:top-[500px] lg:right-[42%]'>
                            <div className='after:content-["Leichester"] after:absolute after:opacity-0 after:group-hover:opacity-100 after:bg-white after:bottom-1 after:w-auto after:h-auto after:p-1 after:rounded-full after:-translate-x-[35%] after:transition-all after:z-10'>
                                <BiSolidCircle className="absolute text-white w-6 h-6 cursor-pointer"/>
                                <BiSolidCircle className="absolute text-white w-6 h-6 animate-ping "/>
                                
                            </div>
                        </div>

                        <div className='group absolute lg:top-[70%] lg:right-[43.5%]'>
                            <div className='after:content-["Coalville"] after:absolute after:opacity-0 after:group-hover:opacity-100 after:bg-white after:bottom-1 after:w-auto after:h-auto after:p-1 after:rounded-full after:-translate-x-[35%] after:transition-all after:z-10'>
                                <BiSolidCircle className="absolute text-white w-6 h-6 animate-ping "/>
                                <BiSolidCircle className="absolute text-white w-6 h-6 cursor-pointer"/>
                            </div>
                        </div>

                        <div className='group absolute lg:top-[65%] lg:right-[43%]'>
                            <div className='after:content-["Sheffield"] after:absolute after:opacity-0 after:group-hover:opacity-100 after:bg-white after:bottom-1 after:w-auto after:h-auto after:p-1 after:rounded-full after:-translate-x-[35%] after:transition-all after:z-10'>
                                <BiSolidCircle className="absolute text-white w-6 h-6 animate-ping "/>
                                <BiSolidCircle className="absolute text-white w-6 h-6 cursor-pointer"/>
                            </div>
                        </div>

                        <div className='group absolute lg:top-[64%] lg:right-[42%]'>
                            <div className='after:content-["Rotherham"] after:absolute after:opacity-0 after:group-hover:opacity-100 after:bg-white after:bottom-1 after:w-auto after:h-auto after:p-1 after:rounded-full after:-translate-x-[35%] after:transition-all after:z-10'>
                                <BiSolidCircle className="absolute text-white w-6 h-6 animate-ping "/>
                                <BiSolidCircle className="absolute text-white w-6 h-6 cursor-pointer"/>
                            </div>
                        </div>

                        <div className='group absolute lg:top-[60%] lg:right-[43%]'>
                            <div className='after:content-["Bradford"] after:absolute after:opacity-0 after:group-hover:opacity-100 after:bg-white after:bottom-1 after:w-auto after:h-auto after:p-1 after:rounded-full after:-translate-x-[35%] after:transition-all after:z-10'>
                                <BiSolidCircle className="absolute text-white w-6 h-6 animate-ping "/>
                                <BiSolidCircle className="absolute text-white w-6 h-6 cursor-pointer"/>
                            </div>
                        </div>
                    </div>
                    <div className='w-1/2'>

                    </div>
                    
                </div>
            </div>
        </section>
    </>
  )
}
