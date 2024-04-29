"use client"

import { PiPaperPlaneTiltBold } from 'react-icons/pi'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';


function isInputNamedElement(e: Element): e is HTMLInputElement & { name: string } {
  return 'value' in e && 'name' in e
}

export default function ContactTeam({contactname}: any) {

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

    await fetch(`../../api/${contactname}`, {
      method: 'POST',
      body: JSON.stringify({
        name: formData.name,
        tel: formData.tel,
        email: formData.email,
        location: formData.location,
        message: formData.message,
        path: pathname,
        policy: formData.policy
      })
    });

        setFormStatus('submitted');
      } catch (error) {
        setFormStatus('error');
      }
    }

  return (
    <>
            <form className='flex flex-col items-center gap-8 w-full' onSubmit={handleOnSubmit}>
                <input required placeholder='Full Name' type='name' name='name' className=' rounded-full p-4 text-lg shadow-special w-full'></input>
                <input required placeholder='Phone number' type='tel' name='tel' className=' rounded-full p-4 text-lg shadow-special w-full'></input>
                <input required placeholder='Email' type='email' name='email' className=' rounded-full p-4 text-lg shadow-special w-full'></input>
                <input required placeholder='Location' type='text' name='location' className=' rounded-full p-4 text-lg shadow-special w-full'></input>
                <textarea required placeholder='How can I help you?' name='message' rows={5} className='col-span-2 row-span-2 rounded-3xl p-4 text-lg shadow-special w-full'></textarea>
                <div className='flex gap-2'>
                    <input required id='privacy-policy' name='policy' type='checkbox'></input>
                    <label htmlFor='privacy-policy'>I have read and agree to acceptrec.co.uk&apos;s <Link href="/privacy-policy" className='text-[#00afaa] underline'>Privacy Policy</Link></label>
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
    </>
  )
}
