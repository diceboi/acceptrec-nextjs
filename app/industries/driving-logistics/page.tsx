import Industries from "@/app/components/industries";

export default function DrivingLogistics() {
  return (
    <>
        <section className="relative h-[50vh] pb-10 bg-[url('/driving-industries.webp')] bg-cover bg-center bg-no-repeat ">
            <div className='absolute top-0 right-0 w-full h-full bg-[#312252] opacity-75'></div>
            <div className="relative flex flex-col justify-between gap-4 w-11/12 lg:w-8/12 h-[50vh] m-auto ">
                <div className="flex flex-col gap-4 justify-center w-full h-full text-white">
                <h2 className="text-sm lg:text-lg font-medium tracking-widest uppercase text-center">Industries</h2>
                <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-center">Driving & Logistics</h1>
                </div>
            </div>             
        </section>
        <section className='flex justify-center items-center w-full'>
            <div className='flex gap-20 w-11/12 lg:w-8/12 py-20'>
                <div className="w-1/2 bg-[url('/driving-logistics-inner.webp')] bg-cover bg-center bg-no-repeat rounded-3xl">
                </div>
                <div className="flex flex-col w-1/2 gap-8">
                <h3 className='text-5xl font-black tracking-tighter'>Your ultimate Transport and Logistics recruitment solution</h3>
                <p>The logistics and driving markets have become unpredictable, and as the British economy is currently facing completely new challenges, you probably struggling even more when it comes to finding the best recruitment agency that can help. Fortunately, we might have the answer to what you&apos;re looking for. By having access to millions of talented people within the Driving and Logistics industry across the UK, a great reputation, and many years of experience we are able to develop the cost-effective solution that can take the whole labour recruitment hassle of your shoulder. Having our own Directors rich with the experience and a history as previous Transport / Logistics Management within the distribution industry, we really understand our client expectations, that is why our solutions are right the first time. </p>
                </div>
            </div>
        </section>

        <section className="flex flex-col lg:flex-row w-11/12 lg:w-8/12  gap-8 py-20 m-auto">
                <div className="flex flex-col gap-4 w-full lg:w-1/2 justify-start bg-[url('/helping-hands.webp')] bg-contain bg-left bg-no-repeat">
                    <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                        Who we recruit
                    </h3>
                    <h2 className="flex gap-3 text-6xl lg:text-6xl font-black tracking-tighter z-10 ">
                        Driving & Logistic jobs
                    </h2>
                    <p>
                        Saving your time on job description briefing as well as advising on the best on-site recruiting practices, we make your business an attractive work destination for all. We have a real impact on transforming your company and our aim is to set your company up towards the success.
                    </p>              
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-8 w-full lg:w-1/2">
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex items-center gap-2 '>                            
                            <h3 className='text-2xl font-black tracking-tighter '>Transport Jobs</h3>
                        </div>                        
                        <ul className='font-medium list-disc ml-6'>
                            <li>Transport Management jobs</li>
                            <li>Transport Planning jobs</li>
                            <li>Transport Administration jobs</li>
                            <li>Support jobs</li>
                            <li>Transport Operatives jobs</li>                  
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex items-center gap-2 '>                            
                            <h3 className='text-2xl font-black tracking-tighter '>Logistics Jobs</h3>
                        </div>                        
                        <ul className='font-medium list-disc ml-6'>
                            <li>Logistics Clerk jobs</li>
                            <li>Logistics Planning jobs</li>
                            <li>Logistics Administration jobs</li>
                            <li>Logistics office and support jobs</li>
                            <li>Quality Control jobs</li>                     
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex items-center gap-2 '>                            
                            <h3 className='text-2xl font-black tracking-tighter '>Management Jobs</h3>
                        </div>                        
                        <ul className='font-medium list-disc ml-6'>
                            <li>Management and Control jobs</li>
                            <li>Continuous Improvement jobs</li>
                            <li>Project Management jobs</li>
                            <li>Logistics Operations jobs</li>
                            <li>Distribution Management jobs</li>                       
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex items-center gap-2 '>                            
                            <h3 className='text-2xl font-black tracking-tighter '>Driving Jobs</h3>
                        </div>                        
                        <ul className='font-medium list-disc ml-6'>
                            <li>HGV Class 1 Driver jobs</li>
                            <li>HGV Class 2 Driver jobs</li>
                            <li>LGV 7.5t Driver jobs</li>
                            <li>Driver Mate jobs</li>
                            <li>Van Driver jobs</li>                      
                        </ul>
                    </div>
                </div>
        </section>
        <Industries />
    </>
  )
}
