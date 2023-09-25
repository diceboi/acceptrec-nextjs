import Industries from "@/app/components/industries";

export default function Commercial() {
  return (
    <>
        <section className="relative h-[50vh] pb-10 bg-[url('/commercial-industries.webp')] bg-cover bg-center bg-no-repeat ">
            <div className='absolute top-0 right-0 w-full h-full bg-[#312252] opacity-75'></div>
            <div className="relative flex flex-col justify-between gap-4 w-11/12 lg:w-8/12 h-[50vh] m-auto ">
                <div className="flex flex-col gap-4 justify-center w-full h-full text-white">
                <h2 className="text-sm lg:text-lg font-medium tracking-widest uppercase text-center">Industries</h2>
                <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-center">Commercial</h1>
                </div>
            </div>             
        </section>
        <section className='flex justify-center items-center w-full'>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-20 w-11/12 lg:w-8/12 py-20'>
                <div className="lg:w-1/2 min-h-[50vh] bg-[url('/commercial-inner.webp')] bg-cover bg-center bg-no-repeat rounded-3xl">
                </div>
                <div className="flex flex-col lg:w-1/2 gap-8">
                <h3 className='text-5xl font-black tracking-tighter'>Your ultimate Commercial recruitment solution</h3>
                <p>We know that your company&apos;s success depends on the work, knowledge and commitment of each team member. By having access to millions of talented people within the Commercial industry across the UK, a great reputation, and many years of experience we are able to develop the cost-effective solution that can take the whole labour recruitment hassle of your shoulder.</p>
                </div>
            </div>
        </section>

        <section className="flex flex-col lg:flex-row w-11/12 lg:w-8/12  gap-8 py-20 m-auto">
                <div className="flex flex-col gap-4 w-full lg:w-1/2 justify-start lg:bg-[url('/helping-hands.webp')] bg-contain bg-left bg-no-repeat">
                    <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                        Who we recruit
                    </h3>
                    <h2 className="flex gap-3 text-6xl lg:text-6xl font-black tracking-tighter z-10 ">
                        Commercial jobs
                    </h2>
                    <p>
                        Saving your time on job description briefing as well as advising on the best on-site recruiting practices, we make your business an attractive work destination for all. We have a real impact on transforming your company and our aim is to set your company up towards the success.
                    </p>              
                </div>
                <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-8 w-full lg:w-1/2">
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex items-center gap-2 '>                            
                            <h3 className='text-2xl font-black tracking-tighter '>Management Jobs</h3>
                        </div>                        
                        <ul className='font-medium list-disc ml-6'>
                            <li>Office Management jobs</li>
                            <li>Commercial Management</li>
                            <li>Improvement Management jobs</li>
                            <li>Business Management jobs</li>
                            <li>Operations jobs</li>
                            <li>Relationship Management jobs</li>                        
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex items-center gap-2 '>                            
                            <h3 className='text-2xl font-black tracking-tighter '>Finance and HR jobs</h3>
                        </div>                        
                        <ul className='font-medium list-disc ml-6'>
                            <li>Office Administration jobs</li>
                            <li>Payroll jobs</li>
                            <li>Credit Control jobs</li>
                            <li>Consultation jobs</li>
                            <li>HR Jobs</li>
                            <li>Finance & Accountancy Jobs</li>                      
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex items-center gap-2 '>                            
                            <h3 className='text-2xl font-black tracking-tighter '>Sales Jobs</h3>
                        </div>                        
                        <ul className='font-medium list-disc ml-6'>
                            <li>Sales Administrator jobs</li>
                            <li>Sales Executive jobs</li>
                            <li>Telesales executive jobs</li>
                            <li>Advisory Jobs</li>
                            <li>Lead Sales Specialists jobs</li>
                            <li>Account Manager jobs</li>                        
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex items-center gap-2 '>                            
                            <h3 className='text-2xl font-black tracking-tighter '>Admin Jobs</h3>
                        </div>                        
                        <ul className='font-medium list-disc ml-6'>
                            <li>Warehouse Administrator jobs</li>
                            <li>Book Keeper Jobs</li>
                            <li>Office Support jobs</li>
                            <li>Office Clerk jobs</li>
                            <li>Goods-out Admin jobs</li>
                            <li>Admin Officer jobs</li>
                            <li>Shopping Administrator jobs</li>                        
                        </ul>
                    </div>
                </div>
        </section>
        <Industries />
    </>
  )
}
