import { FiSmile } from 'react-icons/fi'
import { LiaFistRaisedSolid } from 'react-icons/lia'
import { LuHelpingHand } from 'react-icons/lu'
import { TbHeartHandshake, TbUserHeart, TbUsersGroup } from 'react-icons/tb'

export default function LeftRightGrid({title, subtitle, text}:any) {


  return (
    <section className="flex flex-col lg:flex-row w-11/12 lg:w-8/12 gap-8 py-20 m-auto">
            <div className="flex flex-col gap-4 w-full lg:w-1/3 justify-start lg:bg-[url('/helping-hands.webp')] bg-contain bg-left bg-no-repeat">
                <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                    {subtitle}
                </h3>
                <h2 className="flex gap-3 text-6xl lg:text-6xl font-black tracking-tighter z-10  text-[#312252]">
                    {title}
                </h2>
                <p>
                    {text}                    
                </p>                
            </div>
            <div className="grid grid-cols-2 grid-rows-3 gap-8 w-full lg:w-2/3">
                <div className='flex flex-col gap-2 w-full lg:p-3'>
                    <div className='flex flex-col lg:flex-row items-left gap-2 '>
                        <div className='flex justify-center items-center w-10 h-10 text-[#00afaa]'>
                            <TbUserHeart className='w-full h-auto'/>
                        </div>
                        <h3 className='text-2xl font-black tracking-tighter  text-[#312252]'>Truthfulness</h3>
                    </div>                        
                    <p className='font-medium lg:ml-12'>Our greatest asset is our team members. Open and honest communication improves strengths of the team.</p>
                </div>
                <div className='flex flex-col gap-2 w-full lg:p-3'>
                    <div className='flex flex-col lg:flex-row items-left gap-2'>
                        <div className='flex justify-center items-center w-10 h-10 text-[#00afaa]'>
                            <LiaFistRaisedSolid className='w-full h-auto'/>
                        </div>
                        <h3 className='text-2xl font-black tracking-tighter text-[#312252]'>Relentless</h3>
                    </div>                        
                    <p className='font-medium lg:ml-12'>We are passionate recruiters with a continuous desire to learn and innovate. We exceed our customer’s expectations.</p>
                </div>
                <div className='flex flex-col gap-2 w-full lg:p-3'>
                    <div className='flex flex-col lg:flex-row items-left gap-2'>
                        <div className='flex justify-center items-center w-10 h-10 text-[#00afaa]'>
                            <LuHelpingHand className='w-full h-auto'/>
                        </div>
                        <h3 className='text-2xl font-black tracking-tighter text-[#312252]'>Understanding</h3>
                    </div>                        
                    <p className='font-medium lg:ml-12'>Our knowledge makes us specialists while our compassion makes us human beings - a perfect combo to a long-lasting relationship.</p>
                </div>
                <div className='flex flex-col gap-2 w-full lg:p-3'>
                    <div className='flex flex-col lg:flex-row items-left gap-2'>
                        <div className='flex justify-center items-center w-10 h-10 text-[#00afaa]'>
                            <TbHeartHandshake className='w-full h-auto'/>
                        </div>
                        <h3 className='text-2xl font-black tracking-tighter text-[#312252]'>Supportive</h3>
                    </div>                        
                    <p className='font-medium lg:ml-12'>We recognize the unique value in everyone while working as a team. We promote an environment of collaboration and respect.</p>
                </div>
                <div className='flex flex-col gap-2 w-full lg:p-3'>
                    <div className='flex flex-col lg:flex-row items-left gap-2'>
                        <div className='flex justify-center items-center w-10 h-10 text-[#00afaa]'>
                            <TbUsersGroup className='w-full h-auto'/>
                        </div>
                        <h3 className='text-2xl font-black tracking-tighter text-[#312252]'>Teamwork</h3>
                    </div>                        
                    <p className='font-medium lg:ml-12'>When we respect one another, we can work as a team to achieve at a high level. Our strongest asset is the power of “we”.</p>
                </div>
                <div className='flex flex-col gap-2 w-full lg:p-3'>
                    <div className='flex flex-col lg:flex-row items-left gap-2'>
                        <div className='flex justify-center items-center w-10 h-10 text-[#00afaa]'>
                            <FiSmile className='w-full h-auto'/>
                        </div>
                        <h3 className='text-2xl font-black tracking-tighter text-[#312252]'>Honesty</h3>
                    </div>                        
                    <p className='font-medium lg:ml-12'>Everything changes with time and the only way to address the differences is to remain honest. Always.</p>
                </div>
            </div>
    </section>
  )
}
