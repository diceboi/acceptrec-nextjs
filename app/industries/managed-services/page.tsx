import ManagedServices from "@/app/components/ManagedServices";
import Industries from "@/app/components/industries";

export default function ManagedServicesPage() {
  return (
    <>
        
        <section className="relative h-[50vh] pb-10 bg-[url('/managed-industries.webp')] bg-cover bg-center bg-no-repeat ">
            <div className='absolute top-0 right-0 w-full h-full bg-[#312252] opacity-75'></div>
            <div className="relative flex flex-col justify-between gap-4 w-11/12 lg:w-8/12 h-[50vh] m-auto ">
                <div className="flex flex-col gap-4 justify-center w-full h-full text-white">
                <h2 className="text-sm lg:text-lg font-medium tracking-widest uppercase text-center">Industries</h2>
                <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-center">Managed Services</h1>
                </div>
            </div>             
        </section>
        <ManagedServices />
        <section className='flex justify-center items-center w-full'>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-20 w-11/12 lg:w-8/12 py-20'>
                <div className="lg:w-1/2 min-h-[50vh] bg-[url('/commercial-inner.webp')] bg-cover bg-center bg-no-repeat rounded-3xl">
                </div>
                <div className="flex flex-col lg:w-1/2 gap-8">
                <h3 className='text-5xl font-black tracking-tighter'>Your ultimate Managed Services solution</h3>
                <p>At Accept, we provide a range of workforce solutions which employers in any sector can benefit from. Working with senior level Logistics, Warehousing and Distribution professionals within an organisation, we are able to design and implement highly customisable solutions which optimise the performance and productivity of its workforce.

                These solutions, based on our unique technology and supported by our in-house resourcing expertise, include but aren&apos;t limited to; Contingent Workforce, Recruitment Process Outsourcing, Training and Development support, Consultancy and payroll support.

                To find out more, please contact us to arrange a demo</p>
                </div>
            </div>
        </section>

        <section className="flex flex-col lg:flex-row w-11/12 lg:w-8/12 gap-8 py-20 m-auto">
                <div className="flex flex-col gap-4 w-full lg:w-1/2 justify-start lg:bg-[url('/helping-hands.webp')] bg-contain bg-left bg-no-repeat">
                    <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                        Cost saving
                    </h3>
                    <h2 className="flex gap-3 text-6xl lg:text-6xl font-black tracking-tighter z-10 ">
                        Recruitment Process Outsourcing
                    </h2>
                    <p>
                        Our experience and expertise ensure that we are a trusted advisor to our clients, taking accountability for entire end-to-end outsourcing functions including recruitment and talent acquisition, compliance, onsite induction packages, pension administration and payroll processes.
                    </p>              
                </div>
                <div className="flex flex-col gap-8 w-full lg:w-1/2">
                    <div className='flex flex-col gap-2 w-full lg:p-3'>                      
                        <ul className='font-medium list-disc ml-6'>
                            <li>End-to-end management of all vacancies, providing a seamless link between all types of temporary and permanent recruitment - experienced hires and emerging talent</li>
                            <li>Innovative sourcing solutions for talent discovery and acquisition</li>
                            <li>Maximising direct hire, including internal channels and redeployment to help develop and strengthen clients&apos; employer brands</li>
                            <li>Marketing collaboration to increase client visibility online</li>
                            <li>Selection and management of external agencies for volume-based recruitment</li>
                            <li>Response screening compliance and assessment, through the short-listing and initial interview, to job offers and on-boarding</li>
                            <li>Customised invoicing and real-time management information by introduction of KPIs or MIs</li> 
                            <li>Cross-border services, from UK-based recruitment campaigns to supporting clients’ internal mobility programmes</li>                         
                        </ul>
                    </div>                
                </div>
        </section>
        <Industries />
    </>
  )
}
