import { TbBrandGoogleAnalytics, TbEye, TbSquareRoundedNumber1, TbUserBolt } from 'react-icons/tb'
import { TbCalendarStats } from 'react-icons/tb'
import { TbClipboardData } from 'react-icons/tb'
import { TbGraph } from 'react-icons/tb'
import { TbUserUp } from 'react-icons/tb'
import { TbReportMoney } from 'react-icons/tb'

export default function ManagedServices() {
  return (
    <>
        <section className="flex flex-col w-11/12 lg:w-8/12  gap-8 py-20 m-auto">
            <div className="flex flex-col gap-4 w-full justify-start ">
                <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                    Managed Services
                </h3>
                <h2 className="flex flex-wrap gap-3 text-6xl lg:text-6xl font-black tracking-tighter z-10  text-[#312252]">
                    Your success - Our people
                </h2>
                <p className='font-medium w-full lg:w-2/3'>
                These solutions, based on our unique technology and supported by our in-house resourcing expertise, include but aren&apos;t limited to; Contingent Workforce, Recruitment Process Outsourcing, Training and Development support, Consultancy and payroll support.
                </p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 max-w-full text-white gap-4'>
                <div className='group relative flex flex-col justify-center gap-8 w-full hover:lg:-mt-8 hover:lg:w-[150%] hover:lg:-ml-[25%] hover:lg:z-20 rounded-3xl min-h-[30vh] p-4 bg-[url("/consulting.webp")] bg-cover bg-center bg-no-repeat transition-all duration-500'>
                    <div className='absolute top-0 right-0 w-full h-full bg-[#312252] bg-opacity-50 group-hover:bg-opacity-75 rounded-3xl transition-all duration-500'></div>
                    <TbCalendarStats className='lg:absolute top-4 left-4 w-8 h-8 text-[#00afaa] z-10 text-center opacity-100 group-hover:opacity-0 transition-all duration-500' />
                    <h3 className='lg:absolute top-16 left-4 z-10 font-black text-lg lg:text-2xl uppercase opacity-100 group-hover:opacity-0 transition-all duration-500'>Consultancy</h3>
                    <p className='z-10 text-xs lg:text-lg lg:opacity-0 group-hover:opacity-100 transition-all duration-500'>Removing the shortcomings that can expose your company to significant business, financial, and public relations risks.</p>
                </div>
                <div className='group relative flex flex-col justify-center gap-8 w-full hover:lg:-mt-8 hover:lg:w-[150%] hover:lg:-ml-[25%] hover:lg:z-20 rounded-3xl min-h-[30vh] p-4 bg-[url("/contingent.webp")] bg-cover bg-center bg-no-repeat transition-all duration-500'>
                    <div className='absolute top-0 right-0 w-full h-full bg-[#312252] bg-opacity-50 group-hover:bg-opacity-75 rounded-3xl transition-all duration-500'></div>
                    <TbClipboardData className='lg:absolute top-4 left-4 w-8 h-8 text-[#00afaa] z-10 text-center opacity-100 group-hover:opacity-0 transition-all duration-500' />
                    <h3 className='lg:absolute top-16 left-4 z-10 font-black text-lg lg:text-2xl uppercase opacity-100 group-hover:opacity-0 transition-all duration-500'>Contingent Workforce Solutions</h3>
                    <p className='z-10 text-xs lg:text-lg lg:opacity-0 group-hover:opacity-100 transition-all duration-500'>Remote or site-based, our teams develop an excellent understanding of your business and its recruitment needs.</p>
                </div>
                <div className='group relative flex flex-col justify-center gap-8 w-full hover:lg:-mt-8 hover:lg:w-[150%] hover:lg:-ml-[25%] hover:lg:z-20 rounded-3xl min-h-[30vh] p-4 bg-[url("/outsourcing.webp")] bg-cover bg-center bg-no-repeat transition-all duration-500'>
                    <div className='absolute top-0 right-0 w-full h-full bg-[#312252] bg-opacity-50 group-hover:bg-opacity-75 rounded-3xl transition-all duration-500'></div>
                    <TbGraph className='lg:absolute top-4 left-4 w-8 h-8 text-[#00afaa] z-10 text-center opacity-100 group-hover:opacity-0 transition-all duration-500' />
                    <h3 className='lg:absolute top-16 left-4 z-10 font-black text-lg lg:text-2xl uppercase opacity-100 group-hover:opacity-0 transition-all duration-500'>Recruitment Process Outsourcing</h3>
                    <p className='z-10 text-xs lg:text-lg lg:opacity-0 group-hover:opacity-100 transition-all duration-500'>Offering a wealth of innovation, added value and scalability without compromising on quality.</p>
                </div>
                <div className='group relative flex flex-col justify-center gap-8 w-full hover:lg:-mt-8 hover:lg:w-[150%] hover:lg:-ml-[25%] hover:lg:z-20 rounded-3xl min-h-[30vh] p-4 bg-[url("/traning.webp")] bg-cover bg-center bg-no-repeat transition-all duration-500'>
                    <div className='absolute top-0 right-0 w-full h-full bg-[#312252] bg-opacity-50 group-hover:bg-opacity-75 rounded-3xl transition-all duration-500'></div>
                    <TbUserUp className='lg:absolute top-4 left-4 w-8 h-8 text-[#00afaa] z-10 text-center opacity-100 group-hover:opacity-0 transition-all duration-500' />
                    <h3 className='lg:absolute top-16 left-4 z-10 font-black text-lg lg:text-2xl uppercase opacity-100 group-hover:opacity-0 transition-all duration-500'>Training & Development Support</h3>
                    <p className='z-10 text-xs lg:text-lg lg:opacity-0 group-hover:opacity-100 transition-all duration-500'>Helping you to achieve more with less. We have a track record of delivering savings which can cut your training spend to zero.</p>
                </div>
                <div className='group relative flex flex-col justify-center gap-8 w-full hover:lg:-mt-8 hover:lg:w-[150%] hover:lg:-ml-[25%] hover:lg:z-20 rounded-3xl min-h-[30vh] p-4 bg-[url("/payment.webp")] bg-cover bg-center bg-no-repeat transition-all duration-500'>
                    <div className='absolute top-0 right-0 w-full h-full bg-[#312252] bg-opacity-50 group-hover:bg-opacity-75 rounded-3xl transition-all duration-500'></div>
                    <TbReportMoney className='lg:absolute top-4 left-4 w-8 h-8 text-[#00afaa] z-10 text-center opacity-100 group-hover:opacity-0 transition-all duration-500' />
                    <h3 className='lg:absolute top-16 left-4 z-10 font-black text-lg lg:text-2xl uppercase opacity-100 group-hover:opacity-0 transition-all duration-500'>Payroll Support</h3>
                    <p className='z-10 text-xs lg:text-lg lg:opacity-0 group-hover:opacity-100 transition-all duration-500'>Understanding the complexity of your tax calculations, benefit allowances, holiday accruals and more, we can relieve you of all your payroll headaches free of charge.</p>
                </div>
                <div className='group relative flex flex-col justify-center gap-8 w-full hover:lg:-mt-8 hover:lg:w-[150%] hover:lg:-ml-[25%] hover:lg:z-20 rounded-3xl min-h-[30vh] p-4 bg-[url("/vendor.webp")] bg-cover bg-center bg-no-repeat transition-all duration-500'>
                    <div className='absolute top-0 right-0 w-full h-full bg-[#312252] bg-opacity-50 group-hover:bg-opacity-75 rounded-3xl transition-all duration-500'></div>
                    <TbReportMoney className='lg:absolute top-4 left-4 w-8 h-8 text-[#00afaa] z-10 text-center opacity-100 group-hover:opacity-0 transition-all duration-500' />
                    <h3 className='lg:absolute top-16 left-4 z-10 font-black text-lg lg:text-2xl uppercase opacity-100 group-hover:opacity-0 transition-all duration-500'>Master Vendor</h3>
                    <p className='z-10 text-xs lg:text-lg lg:opacity-0 group-hover:opacity-100 transition-all duration-500'>Eliminating the hassle of having to deal with multiple recruitment agencies and multiple invoices in order to maximise the efficiency of your staffing operations.</p>
                </div>
            </div>
            <div className='flex flex-col gap-20 w-full m-auto pt-10'>
                <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase text-center'>
                    The benefits
                </h3>
                <div className='w-full grid lg:grid-cols-3 gap-8 '>
                    <div className='flex flex-col gap-4 p-4 shadow-special rounded-3xl'>
                        <div className='flex gap-2'>
                            <TbUserBolt className="w-8 h-8 bg-neutral-200 p-1 rounded-full" />
                            <h3 className='text-bold text-xl'>Better quality candidates</h3>
                        </div>                        
                        <p>Our candidate sourcing process ensures you only ever get the best talent available. Unlike a traditional recruiter, we&apos;re not restricted by a limited database or an inability to attract jobseekers. Instead, we invest in technology that allows us to appeal to the right candidate in the right time.</p>
                    </div>
                    <div className='flex flex-col gap-4 p-4 shadow-special rounded-3xl'>
                        <div className='flex gap-2'>
                            <TbEye className="w-8 h-8 bg-neutral-200 p-1 rounded-full" />
                            <h3 className='text-bold text-xl'>Visibility and control</h3>
                        </div>
                        <p>We build our partnership on trust and transparency by providing reports and analytics. This allows you to stay in control, track recruitment spends and have complete visibility of your agency staff, whenever you need it.</p>
                    </div>
                    <div className='flex flex-col gap-4 p-4 shadow-special rounded-3xl'>
                        <div className='flex gap-2'>
                            <TbBrandGoogleAnalytics className="w-8 h-8 bg-neutral-200 p-1 rounded-full" />
                            <h3 className='text-bold text-xl'>Streamlined process</h3>
                        </div>
                        <p>At Accept, we automate, simplify and speed up workforce management processes. Paper-based systems become a thing of the past and consolidated billing ensures minimal back-office support is needed, allowing you to make even more savings.</p>
                    </div>
                </div>
            </div>

        </section>
        </>
  )
}