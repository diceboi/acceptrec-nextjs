import { TbZoomMoney, TbClipboardCheck, TbMoodSmileBeam, TbBook, TbHeart, TbMoodHeart } from 'react-icons/tb'

export default function OurPromise() {
  return (
    <>
        <section className="flex flex-col lg:flex-row w-11/12 lg:w-8/12  gap-8 py-20 m-auto">
            <div className="flex flex-col gap-4 w-full lg:w-1/2 justify-start bg-[url('/helping-hand.webp')] bg-contain bg-no-repeat bg-right lg:bg-bottom">
                <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                    Our promise
                </h3>
                <h2 className="flex flex-wrap gap-3 text-6xl lg:text-6xl font-black tracking-tighter z-10 ">
                    We are <p className='text-[#00afaa] underline'>listening</p>
                </h2>
                
            </div>
            <div className="grid grid-cols-2 grid-rows-3 gap-8 w-full lg:w-1/2">
                <div className='flex flex-col gap-2 w-full lg:p-3'>
                    <div className='flex flex-col lg:flex-row items-left gap-2 '>
                        <TbBook className='w-10 h-10 text-[#00afaa]'/>
                        <h3 className='text-2xl font-black tracking-tighter '>Transparency</h3>
                    </div>                        
                    <p className='font-medium lg:ml-12'>You will know what to expect from our consultants right from the start.</p>
                </div>
                <div className='flex flex-col gap-2 w-full lg:p-3'>
                    <div className='flex flex-col lg:flex-row items-left gap-2'>
                        <TbHeart className='w-10 h-10 text-[#00afaa]'/>
                        <h3 className='text-2xl font-black tracking-tighter'>Care</h3>
                    </div>                        
                    <p className='font-medium lg:ml-12'>You will walk away from our office willing to come back. A smile is for free!</p>
                </div>
                <div className='flex flex-col gap-2 w-full lg:p-3'>
                    <div className='flex flex-col lg:flex-row items-left gap-2'>
                        <TbClipboardCheck className='w-10 h-10 text-[#00afaa]'/>
                        <h3 className='text-2xl font-black tracking-tighter'>Easy registration process</h3>
                    </div>                        
                    <p className='font-medium lg:ml-12'>From submitting your application to receiving job alerts, you will only need few clicks to complete it.</p>
                </div>
                <div className='flex flex-col gap-2 w-full lg:p-3'>
                    <div className='flex flex-col lg:flex-row items-left gap-2'>
                        <TbMoodSmileBeam className='w-10 h-10 text-[#00afaa]'/>
                        <h3 className='text-2xl font-black tracking-tighter'>Satisfaction</h3>
                    </div>                        
                    <p className='font-medium lg:ml-12'>We understand what you’re going through because we have been there before.</p>
                </div>
                <div className='flex flex-col gap-2 w-full lg:p-3'>
                    <div className='flex flex-col lg:flex-row items-left gap-2'>
                        <TbZoomMoney className='w-10 h-10 text-[#00afaa]'/>
                        <h3 className='text-2xl font-black tracking-tighter'>Great rates of pay</h3>
                    </div>                        
                    <p className='font-medium lg:ml-12'>Our carefully selected clients offer higher that average rates of pay in the area.</p>
                </div>
                <div className='flex flex-col gap-2 w-full lg:p-3'>
                    <div className='flex flex-col lg:flex-row items-left gap-2'>
                        <TbMoodHeart className='w-10 h-10 text-[#00afaa]'/>
                        <h3 className='text-2xl font-black tracking-tighter'>Honesty</h3>
                    </div>                        
                    <p className='font-medium lg:ml-12'>We always strive to improve and we will always encourage you to do the same for yourself.</p>
                </div>
            </div>

        </section>
        </>
  )
}
