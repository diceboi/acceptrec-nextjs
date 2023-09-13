import Industries from "@/app/components/industries";

export default function FoodProduction() {
  return (
    <>
        <section className="relative h-[50vh] pb-10 bg-[url('/food-industries.webp')] bg-cover bg-center bg-no-repeat ">
            <div className='absolute top-0 right-0 w-full h-full bg-[#312252] opacity-75'></div>
            <div className="relative flex flex-col justify-between gap-4 w-11/12 lg:w-8/12 h-[50vh] m-auto ">
                <div className="flex flex-col gap-4 justify-center w-full h-full text-white">
                <h2 className="text-sm lg:text-lg font-medium tracking-widest uppercase text-center">Industries</h2>
                <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-center">Food Production</h1>
                </div>
            </div>             
        </section>
        <section className='flex justify-center items-center w-full'>
            <div className='flex gap-20 w-11/12 lg:w-8/12 py-20'>
                <div className="w-1/2 bg-[url('/food-industries-inner.webp')] bg-cover bg-center bg-no-repeat rounded-3xl">
                </div>
                <div className="flex flex-col w-1/2 gap-8">
                <h3 className='text-5xl font-black tracking-tighter'>Your ultimate food production recruitment solution</h3>
                <p>We understand that recruiting a temporary food production workforce might be one of the most complex parts of your business. Why? Primarily due to the shortage of labour within the food production and manufacturing marketplace and additionally due to the uncertainties around Brexit. Coronavirus has also increased the difficulties of recruiting staff with social distancing meaning that new methods of recruitment have been necessitated. Fortunately, we understand the food production and distribution market challenges and know how to overcome them. Our Directors are specialising with FMCG market for more than 20 combined years and are able to relate to our clients&apos;s operational demands and challenges, whilst applying their recruitment expertise and knowledge to ensure the absolute &apos;best in class recruitment solution&apos; is implemented to the highest of standards. On the other hand, we recruit experienced in managing temporary labour in the food industry consultants, so they are prepared for our client demands straight away. By having access to millions of talented people within the food industry across the UK, a great reputation, and many years of experience we are able to develop a cost-effective solution that will deliver the quality staff you require.</p>
                </div>
            </div>
        </section>

        <section className="flex flex-col lg:flex-row w-11/12 lg:w-8/12  gap-8 py-20 m-auto">
                <div className="flex flex-col gap-4 w-full lg:w-1/2 justify-start bg-[url('/helping-hands.webp')] bg-contain bg-left bg-no-repeat">
                    <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                        Who we recruit
                    </h3>
                    <h2 className="flex gap-3 text-6xl lg:text-6xl font-black tracking-tighter z-10 ">
                        Food Production jobs
                    </h2>
                    <p>
                        Saving your time on job description briefing as well as advising on the best on-site recruiting practices, we make your business an attractive work destination for all. We have a real impact on transforming your company and our aim is to set your company up towards the success.
                    </p>              
                </div>
                <div className="grid grid-cols-2 grid-rows-2 gap-8 w-full lg:w-1/2">
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex items-center gap-2 '>                            
                            <h3 className='text-2xl font-black tracking-tighter '>Management Jobs</h3>
                        </div>                        
                        <ul className='font-medium list-disc ml-6'>
                            <li>Production Manager jobs</li>
                            <li>Warehouse Manager jobs</li>
                            <li>Beverage Manager jobs</li>
                            <li>Quality Manager jobs</li>
                            <li>General Manager jobs</li>
                            <li>Technical Manager jobs</li>                        
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex items-center gap-2 '>                            
                            <h3 className='text-2xl font-black tracking-tighter '>Development Jobs</h3>
                        </div>                        
                        <ul className='font-medium list-disc ml-6'>
                            <li>Process Technologist jobs</li>
                            <li>Specification Technologist jobs</li>
                            <li>Development Technologist jobs</li>
                            <li>Food Technologist jobs</li>
                            <li>NPD Manager jobs</li>
                            <li>Production Planner jobs</li>   
                            <li>Product Manager jobs</li>                      
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex items-center gap-2 '>                            
                            <h3 className='text-2xl font-black tracking-tighter '>Food Production Jobs</h3>
                        </div>                        
                        <ul className='font-medium list-disc ml-6'>
                            <li>Dispatch jobs</li>
                            <li>Food Production Operative jobs</li>
                            <li>Line Operative jobs</li>
                            <li>High-risk Operative jobs</li>
                            <li>Baker jobs</li>
                            <li>Live Stock jobs</li>                        
                        </ul>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex items-center gap-2 '>                            
                            <h3 className='text-2xl font-black tracking-tighter '>Technical and Engineering Jobs</h3>
                        </div>                        
                        <ul className='font-medium list-disc ml-6'>
                            <li>Front Line Engineer jobs</li>
                            <li>Multi-skilled Engineer jobs</li>
                            <li>Multi-skilled Technician jobs</li>
                            <li>Shift Technician jobs</li>
                            <li>Maintenance Engineer jobs</li>
                            <li>Quality Controller jobs</li>
                            <li>Hygiene Manager</li>                        
                        </ul>
                    </div>
                </div>
        </section>
        <Industries />
    </>
  )
}
