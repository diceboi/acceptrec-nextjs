import { FiArrowRight } from 'react-icons/fi'

export default function Recruitment() {
    return(
        <>
        <section className="w-full py-20">
            <div className='flex flex-col gap-4 w-11/12 lg:w-8/12 justify-start m-auto py-16'>
                <h2 className='text-6xl lg:text-6xl font-black tracking-tighter'>
                    Recruitment
                </h2>
                <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                    It begins with people
                </h3>

            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center gap-8 w-11/12 lg:w-8/12 m-auto">
                <div className="recruitment-tile group flex flex-col w-full lg:w-1/3 border border-white rounded-xl hover:shadow-sm hover:border-white cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end bg-[url('/people.webp')] bg-cover bg-center bg-opacity-40 group-hover:bg-opacity-100 h-64 p-4 bg-[#312252] rounded-t-xl ease-out duration-200">
                        <div className="flex flex-nowrap justify-between w-full z-10">
                            <h3 className="text-3xl text-white font-black justify-start uppercase tracking-tighter">Register</h3>
                            <FiArrowRight className='absolute right-8 recruitment-icon text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        <div className='absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#312252] to-[#31225200] opacity-0 group-hover:opacity-100 ease-out duration-200'>
                        </div>
                    </div>
                    <div className="p-4">
                        <p className=" text-md">Choose a job you love from our wide range of vacancies. From warehouse roles to driving jobs, you are sure to find the perfect one for you!</p>
                    </div>
                </div>

                <div className="recruitment-tile group flex flex-col w-full lg:w-1/3 border border-white rounded-xl hover:shadow-sm hover:border-white cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end bg-[url('/people-2.webp')] bg-cover bg-center bg-opacity-40 group-hover:bg-opacity-100 h-64 p-4 bg-[#00afaa] rounded-t-xl ease-out duration-200">
                        <div className="flex flex-nowrap justify-between w-full z-10">
                            <h3 className="text-3xl text-white font-black justify-start uppercase tracking-tighter">Candidates</h3>
                            <FiArrowRight className='absolute right-8 recruitment-icon text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        <div className='absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#00afaa] to-[#00afaa00] opacity-0 group-hover:opacity-100 ease-out duration-200'>
                        </div>
                    </div>
                    <div className="p-4">
                        <p className=" text-md">With over 950+ reviews we are the highest-rated agency in the UK, so you know that we will go above and beyond to help you!</p>
                    </div>
                </div>

                <div className="recruitment-tile group flex flex-col w-full lg:w-1/3 border border-white rounded-xl hover:shadow-sm hover:border-white cursor-pointer ease-out duration-200">
                    <div className="relative flex flex-col justify-end bg-[url('/people.webp')] bg-cover bg-center bg-opacity-40 group-hover:bg-opacity-100 h-64 p-4 bg-[#ff914d] rounded-t-xl ease-out duration-200">
                        <div className="flex flex-nowrap justify-between w-full z-10">
                            <h3 className="text-3xl text-white font-black justify-start uppercase tracking-tighter">Clients</h3>
                            <FiArrowRight className='absolute right-8 recruitment-icon text-white w-8 h-8 opacity-0 group-hover:opacity-100 group-hover:right-4 ease-out duration-200'/>
                        </div>
                        <div className='absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-[#ff914d] to-[#ff914d00] opacity-0 group-hover:opacity-100 ease-out duration-200'>
                        </div>
                    </div>
                    <div className="p-4">
                        <p className=" text-md">We offer a range of services tailored to your need, so please get in touch with one of our professional team.</p>
                    </div>
                </div>
            </div>

        </section>
        </>
    )
}