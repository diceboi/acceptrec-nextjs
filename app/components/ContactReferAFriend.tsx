import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { PiPaperPlaneTiltBold } from 'react-icons/pi'

export default function ContactReferAFriend() {
  return (
    <>
    <section className='flex justify-center w-full h-auto'>
        <div className='flex justify-center w-11/12 lg:w-8/12 py-20'>
            <form className='flex flex-col items-center gap-8 w-full'>
                <h2 className='text-4xl font-black'>Refer a friend</h2>
                <input required placeholder='Your name' type='name' className=' rounded-full p-4 text-lg shadow-special w-full'></input>
                <input required placeholder='Who do you refer? (Full name)' type='text' className=' rounded-full p-4 text-lg shadow-special w-full'></input>
                <input required placeholder='Contact details (of your referee)' type='email' className=' rounded-full p-4 text-lg shadow-special w-full'></input>
                <input required placeholder='Location (of the referee)' type='text' className=' rounded-full p-4 text-lg shadow-special w-full'></input>
                <textarea required placeholder='Message' rows={5} className='col-span-2 row-span-2 rounded-3xl p-4 text-lg shadow-special w-full'></textarea>
                <div className='flex gap-2'>
                    <input required id='friendaccept' type='checkbox'></input>
                    <label htmlFor='friendaccept'>Have you informed your referee of that you sharing their details with Accept?*</label>
                </div>
                <div className='flex gap-2'>
                    <input id='friendaccept' type='checkbox'></input>
                    <label htmlFor='friendaccept'>Do you work through Accept?</label>
                </div>
                
                <button 
                  type="submit" 
                  className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white text-xl hover:shadow-[#00afa93b] hover:w-fit p-4 rounded-full transition-all duration-200 gap-2"
                  >
                  Send
                  <PiPaperPlaneTiltBold className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                  />
                </button>
            </form>
        </div>
    </section>
    </>
  )
}
