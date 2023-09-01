import React from 'react'

export default function Onboarding() {
  return (
    <>
    <section className="relative py-20 bg-neutral-100">
            <div className='flex flex-col w-11/12 lg:w-8/12 gap-8 m-auto'>
                <div className="flex flex-col gap-4 w-full justify-center items-center text-center bg-contain bg-bottom">                
                    <h2 className='text-6xl lg:text-6xl font-black tracking-tighter'>
                        Onboarding process
                    </h2>
                    <p className='font-medium w-1/2'>
                        To ensure that our recruitment process is a marketing leading experience for both Clients and Candidates alike, we always evaluate essential feedback to make the process as smooth, efficient and rewarding as possible.
                    </p>
                </div>
                <ul className="grid grid-cols-2 w-full">

                    <li id="onboarding-list-left" className="relative border-r border-neutral-300 pr-16 pt-20 before:content-['1']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter">Client confirmation</h2>
                            <p>Working towards a common goal and over-arching objectives is what we strive to achieve “A true partnership approach from the start of every new venture."</p>
                        </div>
                    </li>

                    <li id="onboarding-list-right" className="relative pl-16 pt-40 before:content-['2']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter">Contract update</h2>
                            <p>By agreeing a clear, precise and achievable roll-out plan – you will be kept up-to-date with progression every step of the way. We utilise the very latest technology, which allows us to give our Clients comprehensive updates at the touch of a button.</p>
                        </div>
                    </li>

                    <li id="onboarding-list-left" className="relative border-r border-neutral-300 pr-16 before:content-['3']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter">Credit assessment</h2>
                            <p>Prior to any joint ventures, we ascertain the sustainability of the proposed strategy and feedback accordingly.</p>
                        </div>
                    </li>

                    <li id="onboarding-list-right" className="relative pl-16 pt-20 before:content-['4']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter">Partnership set-up</h2>
                            <p>Understanding your business, growth plans and challenges is at the forefront of what we do. In order to gain this knowledge, we will work together to complete a clear and informative business plan.</p>
                        </div>
                    </li>

                    <li id="onboarding-list-left" className="relative border-r border-neutral-300 pr-16 before:content-['5']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter">Welcome Pack</h2>
                            <p>We will issue you with a descriptive overview of our company structure, roles and responsibilities, key contact details and a copy of our agreed SLA (service level agreement).maximum efficiency.</p>
                        </div>
                    </li>

                    <li id="onboarding-list-right" className="relative pl-16 pt-20 before:content-['6']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter">Client introductory meetings</h2>
                            <p>Prior to the commencement of any potential partnership, we will actively encourage the opportunity to meet with key stakeholders across your business. This will allow us to gather key information from various departments and ensure that we understand your internal supply chain in order to ensure that we are working at maximum efficiency.</p>
                        </div>
                    </li>

                    <li id="onboarding-list-left" className="relative border-r border-neutral-300 pr-16 before:content-['7']">
                        <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                            <h2 className="text-2xl font-black tracking-tighter">Account form</h2>
                            <p>You will be kept up to-date with detailed MI data that will allow you to monitor and assess spend, growth and potential cost savings across your business.</p>
                        </div>
                    </li>                    
                </ul>
            </div>
        </section>
        </>
  )
}
