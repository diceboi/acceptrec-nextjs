import { TbSquareRoundedNumber1 } from 'react-icons/tb'
import { TbCalendarStats } from 'react-icons/tb'
import { TbClipboardData } from 'react-icons/tb'
import { TbGraph } from 'react-icons/tb'
import { TbUserUp } from 'react-icons/tb'
import { TbReportMoney } from 'react-icons/tb'

export default function OurServices() {
  return (
    <>
        <section className="flex flex-col w-full gap-8 bg-neutral-100">
            <div className='flex flex-col gap-8 w-11/12 lg:w-8/12 py-20 m-auto'>
                <div className="flex flex-col gap-4 w-full justify-start ">
                    <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                        Services
                    </h3>
                    <h2 className="flex flex-wrap gap-3 text-6xl lg:text-6xl font-black tracking-tighter z-10 ">
                        Our offer
                    </h2>
                    <p className='font-medium w-full lg:w-1/2'>
                    At Accept, we provide a range of services that candidates in any sector can benefit from. We offer more than just a job.
                    </p>
                </div>
                <div className='grid lg:grid-cols-6 grid-cols-2 max-w-full h-[60vh] text-white'>
                    <div className='group relative flex flex-col justify-center gap-8 w-full hover:-mt-8 hover:w-[150%] hover:-ml-[25%] hover:z-20 hover:rounded-3xl h-full p-4 bg-[url("/consulting.webp")] bg-cover bg-center bg-no-repeat transition-all duration-500'>
                        <div className='absolute top-0 right-0 w-full h-full bg-[#312252] bg-opacity-50 group-hover:bg-opacity-75 group-hover:rounded-3xl transition-all duration-500'></div>
                        <TbCalendarStats className='absolute top-4 left-4 w-8 h-8 text-white z-10 text-center opacity-100 group-hover:opacity-0 transition-all duration-500' />
                        <h3 className='absolute top-16 left-4 z-10 font-black text-2xl uppercase opacity-100 group-hover:opacity-0 transition-all duration-500'>Candidate of the month</h3>
                        <p className='z-10 opacity-0 group-hover:opacity-100 transition-all duration-500'>Every week, we choose the candidate of the month.</p>
                    </div>
                    <div className='group relative flex flex-col justify-center gap-8 w-full hover:-mt-8 hover:w-[150%] hover:-ml-[25%] hover:z-20 hover:rounded-3xl h-full p-4 bg-[url("/contingent.webp")] bg-cover bg-center bg-no-repeat transition-all duration-500'>
                        <div className='absolute top-0 right-0 w-full h-full bg-[#312252] bg-opacity-50 group-hover:bg-opacity-75 group-hover:rounded-3xl transition-all duration-500'></div>
                        <TbClipboardData className='absolute top-4 left-4 w-8 h-8 text-white z-10 text-center opacity-100 group-hover:opacity-0 transition-all duration-500' />
                        <h3 className='absolute top-16 left-4 z-10 font-black text-2xl uppercase opacity-100 group-hover:opacity-0 transition-all duration-500'>Upskilling programmes</h3>
                        <p className='z-10 opacity-0 group-hover:opacity-100 transition-all duration-500'>Remote or site-based, our teams develop an excellent understanding of your business and its recruitment needs.</p>
                    </div>
                    <div className='group relative flex flex-col justify-center gap-8 w-full hover:-mt-8 hover:w-[150%] hover:-ml-[25%] hover:z-20 hover:rounded-3xl h-full p-4 bg-[url("/outsourcing.webp")] bg-cover bg-center bg-no-repeat transition-all duration-500'>
                        <div className='absolute top-0 right-0 w-full h-full bg-[#312252] bg-opacity-50 group-hover:bg-opacity-75 group-hover:rounded-3xl transition-all duration-500'></div>
                        <TbGraph className='absolute top-4 left-4 w-8 h-8 text-white z-10 text-center opacity-100 group-hover:opacity-0 transition-all duration-500' />
                        <h3 className='absolute top-16 left-4 z-10 font-black text-2xl uppercase opacity-100 group-hover:opacity-0 transition-all duration-500'>One-to-one career meeting</h3>
                        <p className='z-10 opacity-0 group-hover:opacity-100 transition-all duration-500'>Offering a wealth of innovation, added value and scalability without compromising on quality.</p>
                    </div>
                    <div className='group relative flex flex-col justify-center gap-8 w-full hover:-mt-8 hover:w-[150%] hover:-ml-[25%] hover:z-20 hover:rounded-3xl h-full p-4 bg-[url("/traning.webp")] bg-cover bg-center bg-no-repeat transition-all duration-500'>
                        <div className='absolute top-0 right-0 w-full h-full bg-[#312252] bg-opacity-50 group-hover:bg-opacity-75 group-hover:rounded-3xl transition-all duration-500'></div>
                        <TbUserUp className='absolute top-4 left-4 w-8 h-8 text-white z-10 text-center opacity-100 group-hover:opacity-0 transition-all duration-500' />
                        <h3 className='absolute top-16 left-4 z-10 font-black text-2xl uppercase opacity-100 group-hover:opacity-0 transition-all duration-500'>Refer a friend</h3>
                        <p className='z-10 opacity-0 group-hover:opacity-100 transition-all duration-500'>Helping you to achieve more with less. We have a track record of delivering savings which can cut your training spend to zero.</p>
                    </div>
                    <div className='group relative flex flex-col justify-center gap-8 w-full hover:-mt-8 hover:w-[150%] hover:-ml-[25%] hover:z-20 hover:rounded-3xl h-full p-4 bg-[url("/payment.webp")] bg-cover bg-center bg-no-repeat transition-all duration-500'>
                        <div className='absolute top-0 right-0 w-full h-full bg-[#312252] bg-opacity-50 group-hover:bg-opacity-75 group-hover:rounded-3xl transition-all duration-500'></div>
                        <TbReportMoney className='absolute top-4 left-4 w-8 h-8 text-white z-10 text-center opacity-100 group-hover:opacity-0 transition-all duration-500' />
                        <h3 className='absolute top-16 left-4 z-10 font-black text-2xl uppercase opacity-100 group-hover:opacity-0 transition-all duration-500'>First job in the UK</h3>
                        <p className='z-10 opacity-0 group-hover:opacity-100 transition-all duration-500'>Understanding the complexity of your tax calculations, benefit allowances, holiday accruals and more, we can relieve you of all your payroll headaches free of charge.</p>
                    </div>
                    <div className='group relative flex flex-col justify-center gap-8 w-full hover:-mt-8 hover:w-[150%] hover:-ml-[25%] hover:z-20 hover:rounded-3xl h-full p-4 bg-[url("/vendor.webp")] bg-cover bg-center bg-no-repeat transition-all duration-500'>
                        <div className='absolute top-0 right-0 w-full h-full bg-[#312252] bg-opacity-50 group-hover:bg-opacity-75 group-hover:rounded-3xl transition-all duration-500'></div>
                        <TbSquareRoundedNumber1 className='absolute top-4 left-4 w-8 h-8 text-white z-10 text-center opacity-100 group-hover:opacity-0 transition-all duration-500' />
                        <h3 className='absolute top-16 left-4 z-10 font-black text-2xl uppercase opacity-100 group-hover:opacity-0 transition-all duration-500'>Stronger together</h3>
                        <p className='z-10 opacity-0 group-hover:opacity-100 transition-all duration-500'>Eliminating the hassle of having to deal with multiple recruitment agencies and multiple invoices in order to maximise the efficiency of your staffing operations.</p>
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}
