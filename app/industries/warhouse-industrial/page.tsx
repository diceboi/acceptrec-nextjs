import Industries from "@/app/components/industries";

export default function WarhouseIndustrial() {
  return (
    <>
        <section className="relative h-[50vh] pb-10 bg-[url('/warhouse-industries.webp')] bg-cover bg-center bg-no-repeat ">
            <div className='absolute top-0 right-0 w-full h-full bg-[#312252] opacity-75'></div>
            <div className="relative flex flex-col justify-between gap-4 w-11/12 lg:w-8/12 h-[50vh] m-auto ">
                <div className="flex flex-col gap-4 justify-center w-full h-full text-white">
                <h2 className="text-sm lg:text-lg font-medium tracking-widest uppercase text-center">Industries</h2>
                <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-center">Warhouse & Industrial</h1>
                </div>
            </div>             
        </section>
        <section className='flex justify-center items-center w-full'>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-20 w-11/12 lg:w-8/12 py-20'>
                <div className="lg:w-1/2 min-h-[50vh] bg-[url('/warhouse-industries-inner.webp')] bg-cover bg-center bg-no-repeat rounded-3xl">
                </div>
                <div className="flex flex-col lg:w-1/2 gap-8">
                    <h3 className='text-5xl font-black tracking-tighter'>Your ultimate warehouse and industrial recruitment solution</h3>
                    <p>We understand that recruiting a temporary warehouse workforce might be one of the most complex parts of your business. Why? Primarily due to the shortage of labour within the industrial marketplace and additionally due to the uncertainties around Brexit. Coronavirus has also increased the difficulties of recruiting staff with social distancing meaning that new methods of recruitment have been necessitated. Fortunately, we understand the distribution market challenges and know how to overcome them. By having access to millions of talented people within the industry across the UK, a great reputation, and many years of experience we are able to develop a cost-effective solution that will deliver the quality staff you require.</p>
                </div>
            </div>
        </section>

        <section className="flex flex-col lg:flex-row w-11/12 lg:w-8/12  gap-8 py-20 m-auto">
                <div className="flex flex-col gap-4 w-full lg:w-1/2 justify-start lg:bg-[url('/helping-hands.webp')] bg-contain bg-right lg:bg-left bg-no-repeat">
                    <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                        Who we recruit
                    </h3>
                    <h2 className="flex gap-3 text-6xl lg:text-6xl font-black tracking-tighter z-10 ">
                        Warhouse jobs
                    </h2>
                    <p>
                        Saving your time on job description briefing as well as advising on the best on-site recruiting practices, we make your business an attractive work destination for all. We have a real impact on transforming your company and our aim is to set your company up towards the success.
                    </p>              
                </div>
                <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-8 w-full lg:w-1/2">
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex items-center gap-2 '>                            
                            <h3 className='text-2xl font-black tracking-tighter '>Warehouse jobs</h3>
                        </div>                        
                        <ul className='font-medium list-disc ml-6'>
                            <li>Warehouse Operative jobs</li>
                            <li>Assembly Operative jobs</li>
                            <li>Picker and Packer jobs</li>
                            <li>Goods-in jobs</li>
                            <li>Goods-out jobs</li>
                            <li>Stock Control jobs</li>
                            <li>Dispatch jobs</li>                        
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex items-center gap-2 '>                            
                            <h3 className='text-2xl font-black tracking-tighter '>Forklift jobs</h3>
                        </div>                        
                        <ul className='font-medium list-disc ml-6'>
                            <li>Forklift Driver jobs</li>
                            <li>Counterbalance Driver jobs</li>
                            <li>Bendi Driver jobs</li>
                            <li>VNA Driver jobs</li>
                            <li>LLOP Driver jobs</li>
                            <li>PPT Driver jobs</li>                     
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex items-center gap-2 '>                            
                            <h3 className='text-2xl font-black tracking-tighter '>Management Jobs</h3>
                        </div>                        
                        <ul className='font-medium list-disc ml-6'>
                            <li>Warehouse Management jobs</li>
                            <li>Warehouse Teamleader jobs</li>
                            <li>Warehouse Supervisor Jobs</li>
                            <li>Shift Management Jobs</li>
                            <li>Quality Control jobs</li>
                            <li>Automotive jobs</li>                        
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex items-center gap-2 '>                            
                            <h3 className='text-2xl font-black tracking-tighter '>Development Jobs</h3>
                        </div>                        
                        <ul className='font-medium list-disc ml-6'>
                            <li>Development Jobs</li>
                            <li>Operations Director Jobs</li>
                            <li>Improvement Management Jobs</li>
                            <li>Projects Management Jobs</li>
                            <li>Distribution Management Jobs</li>
                            <li>Depot Management Jobs</li>
                            <li>Fleet Management Jobs</li>                        
                        </ul>
                    </div>
                </div>
                
        </section>
        <Industries />
    </>
  )
}
