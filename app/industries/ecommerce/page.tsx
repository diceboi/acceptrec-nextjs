import Industries from "@/app/components/industries";

export default function Ecommerce() {
  return (
    <>
        <section className="relative h-[50vh] pb-10 bg-[url('/ecommerce.webp')] bg-cover bg-center bg-no-repeat ">
            <div className='absolute top-0 right-0 w-full h-full bg-[#312252] opacity-75'></div>
            <div className="relative flex flex-col justify-between gap-4 w-11/12 lg:w-8/12 h-[50vh] m-auto ">
                <div className="flex flex-col gap-4 justify-center w-full h-full text-white">
                <h2 className="text-sm lg:text-lg font-medium tracking-widest uppercase text-center">Industries</h2>
                <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-center">E-commerce</h1>
                </div>
            </div>             
        </section>
        <section className='flex justify-center items-center w-full'>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-20 w-11/12 lg:w-8/12 py-20'>
                <div className="lg:w-1/2 min-h-[50vh] bg-[url('/ecommerce-inner.webp')] bg-cover bg-center bg-no-repeat rounded-3xl">
                </div>
                <div className="flex flex-col lg:w-1/2 gap-8">
                <h3 className='text-5xl font-black tracking-tighter'>Strategic e-commerce labour management for scalable workforce solutions</h3>
                <p>In the e-commerce industry, success depends on the right team. Our recruitment agency can help you find the perfect talent, giving your online business a competitive edge.</p>
                </div>
            </div>
        </section>

        <section className="flex flex-col lg:flex-row w-11/12 lg:w-8/12  gap-8 py-20 m-auto">
                <div className="flex flex-col gap-4 w-full lg:w-1/2 justify-start lg:bg-[url('/helping-hands.webp')] bg-contain bg-left bg-no-repeat">
                    <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                        Who we recruit
                    </h3>
                    <h2 className="flex gap-3 text-6xl lg:text-6xl font-black tracking-tighter z-10 ">
                        E-commerce jobs
                    </h2>
                    <p>
                        Saving your time on job description briefing as well as advising on the best on-site recruiting practices, we make your business an attractive work destination for all. We have a real impact on transforming your company and our aim is to set your company up towards the success.
                    </p>              
                </div>
                <div className="grid lg:grid-cols-2 grid-rows-2 gap-8 w-full lg:w-1/2">
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex items-center gap-2 '>                            
                            <h3 className='text-2xl font-black tracking-tighter '>Technical jobs</h3>
                        </div>                        
                        <ul className='font-medium list-disc ml-6'>
                            <li>Technical Support jobs</li>
                            <li>Senior Technical Manager jobs</li>
                            <li>Maintenance Technician jobs</li>
                            <li>Senior Review jobs</li>                    
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex items-center gap-2 '>                            
                            <h3 className='text-2xl font-black tracking-tighter '>Engineering jobs</h3>
                        </div>                        
                        <ul className='font-medium list-disc ml-6'>
                            <li>Maintenance Engineer jobs</li>
                            <li>Mechanical Engineer jobs</li>
                            <li>Project Engineer jobs</li>
                            <li>Design Engineer jobs</li>
                            <li>Migration Engineer jobs</li>
                            <li>Service Engineer jobs</li>                        
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex items-center gap-2 '>                            
                            <h3 className='text-2xl font-black tracking-tighter '>CNC and CAD jobs</h3>
                        </div>                        
                        <ul className='font-medium list-disc ml-6'>
                            <li>CNC Machine Operator jobs</li>
                            <li>CNC Programmer jobs</li>
                            <li>CNC Setter jobs</li>
                            <li>CAD Technician Jobs</li>
                            <li>CAD Designer Jobs</li>                     
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex items-center gap-2 '>                            
                            <h3 className='text-2xl font-black tracking-tighter '>Manufacturing Jobs</h3>
                        </div>                        
                        <ul className='font-medium list-disc ml-6'>
                            <li>MIG Welder Jobs</li>
                            <li>TIG Welder Jobs</li>
                            <li>Fabricator Jobs</li>
                            <li>Electrician jobs</li>
                            <li>Fitter jobs</li>                        
                        </ul>
                    </div>
                </div>
        </section>
        <Industries />
    </>
  )
}
