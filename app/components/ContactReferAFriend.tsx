"use client"

import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { PiPaperPlaneTiltBold } from 'react-icons/pi'
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';

function isInputNamedElement(e: Element): e is HTMLInputElement & { name: string } {
  return 'value' in e && 'name' in e
}

export default function ContactReferAFriend({ classname }:any) {
  
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');

  const pathname = usePathname();

  async function handleOnSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    setFormStatus('submitting');

    try {

    const formData: Record<string, string> = {};

    Array.from(e.currentTarget.elements).filter(isInputNamedElement).forEach((field) => {
      if (!field.name) return;
      // Handle checkboxes to set 'yes' or 'no' values
      if (field.type === 'checkbox') {
        formData[field.name] = field.checked ? 'yes' : 'no';
      } else {
        formData[field.name] = field.value;
      }
    });

    await fetch('/api/referafriend', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        refername: formData.refername,
        refercontact: formData.refercontact,
        location: formData.referlocation,
        message: formData.message,
        path: pathname,
        informed: formData.informed,
        workforaccept: formData.workforaccept
      })
    });

      setFormStatus('submitted');
    } catch (error) {
      setFormStatus('error');
    }
  }

  return (
    <>
    <section className='flex justify-center w-full h-auto'>
        <div className='flex justify-center w-11/12 lg:w-8/12 py-20'>
            <form className={classname} onSubmit={handleOnSubmit}>
                <h2 className='text-4xl font-black'>Refer a friend</h2>
                <input required placeholder='Your name' type='name' name='name' className=' rounded-full p-4 text-lg shadow-special w-full'></input>
                <input required placeholder='Email (of you)' type='email' name='email' className=' rounded-full p-4 text-lg shadow-special w-full'></input>
                <input required placeholder='Who do you refer? (Full name)' type='text' name='refername' className=' rounded-full p-4 text-lg shadow-special w-full'></input>
                <input required placeholder='Email (of your referee)' type='email' name='refercontact' className=' rounded-full p-4 text-lg shadow-special w-full'></input>
                <input required placeholder='Location (of the referee)' type='text' name='referlocation' className=' rounded-full p-4 text-lg shadow-special w-full'></input>
                <textarea required placeholder='Message' name='message' rows={5} className='col-span-2 row-span-2 rounded-3xl p-4 text-lg shadow-special w-full'></textarea>
                <div className='flex gap-2'>
                    <input required id='friendaccept' name='informed' type='checkbox'></input>
                    <label htmlFor='friendaccept'>Have you informed your referee of that you sharing their details with Accept?</label>
                </div>
                <div className='flex gap-2'>
                    <input id='friendaccept' name='workforaccept' type='checkbox'></input>
                    <label htmlFor='friendaccept'>Do you work through Accept?</label>
                </div>
                
                <button
                  type="submit"
                  className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white text-xl hover:shadow-[#00afa93b] hover:w-fit p-4 rounded-full transition-all duration-200 gap-2"
                  disabled={formStatus === 'submitting' || formStatus === 'submitted'}
                >
                  {formStatus === 'submitting' ? (
                    <>
                    Sending
                    <div
                    className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                    role="status">
                    </div>
                    </>
                  ) : formStatus === 'submitted' ? (
                    <>
                      Successfully Sent
                      <BsCheckLg />
                    </>
                  ) : (
                    <>
                      Send
                      <PiPaperPlaneTiltBold className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200' />
                    </>
                  )}
                </button>
            </form>
        </div>
    </section>
    </>
  )
}
