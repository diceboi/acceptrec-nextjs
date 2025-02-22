"use client"

import { PiPaperPlaneTiltBold } from 'react-icons/pi'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { BsCheckLg } from 'react-icons/bs';

// Custom type guard to check if an element is an input element with a name
function isInputNamedElement(e: Element): e is HTMLInputElement & { name: string } {
  return 'name' in e;
}

export default function JoblistForm({ classname, workname, uniquetitle }: any) {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle');
  const pathname = usePathname();

  async function handleOnSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const formData: Record<string, string> = {};
      const formElements = Array.from(e.currentTarget.elements);

      formElements.filter(isInputNamedElement).forEach((field) => {
        if (field.type === 'checkbox') {
          formData[field.name] = field.checked ? 'yes' : 'no';
        } else {
          formData[field.name] = field.value;
        }
      });

      const fileInput = formElements.find((el) => el instanceof HTMLInputElement && el.name === 'file') as HTMLInputElement;
      if (fileInput && fileInput.files?.length) {
        const file = fileInput.files[0];
        const uploadData = new FormData();
        uploadData.append('file', file);
        uploadData.append('email', formData.email);

        const uploadResponse = await fetch('/api/s3-upload', {
          method: 'POST',
          body: uploadData,
        });

        if (!uploadResponse.ok) {
          throw new Error('File upload failed');
        } else {

          const uploadResult = await uploadResponse.json();
          const formDataUrl = `https://acceptrec.s3.amazonaws.com/${formData.email}-CV-${uploadResult.fileName}`;

          await fetch('/api/joblist', {
            method: 'POST',
            body: JSON.stringify({
              firstname: formData.firstname,
              lastname: formData.lastname,
              tel: formData.tel,
              email: formData.email,
              zip: formData.zip,
              workname: workname,
              uniquetitle: uniquetitle,
              file: formDataUrl,
              path: pathname,
              policy: formData.policy
            }),
            headers: {
              'Content-Type': 'application/json',
            }
          });

          await fetch('/api/googlesheets', {
            method: 'POST',
            body: JSON.stringify({
              firstname: formData.firstname,
              lastname: formData.lastname,
              tel: formData.tel,
              email: formData.email,
              zip: formData.zip,
              workname: workname,
              uniquetitle: uniquetitle,
              file: formDataUrl,
              path: `https://acceptrec.co.uk${pathname}`,
              policy: formData.policy
            }),
            headers: {
              'Content-Type': 'application/json',
            },
          });

        }        
      }

      setFormStatus('submitted');
    } catch (error) {
      console.error(error);
      setFormStatus('error');
    }
  }

  return (
    <>
      <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
        <input required placeholder='Firstname' type='text' name="firstname" className='rounded-full p-4 text-lg shadow-special w-full py-4' />
        <input required placeholder='Lastname' type='text' name="lastname" className='rounded-full p-4 text-lg shadow-special w-full py-4' />
        <input required placeholder='Phone number' type='tel' name="tel" className='rounded-full p-4 text-lg shadow-special w-full py-4' />
        <input required placeholder='Email' type='email' name="email" className='rounded-full p-4 text-lg shadow-special w-full py-4' />
        <input required placeholder='Zip' type='text' name="zip" className='rounded-full p-4 text-lg shadow-special w-full py-4' />
        <label htmlFor="file">Upload your CV:</label>
        <input required type='file' name="file" className='rounded-full p-4 text-lg shadow-special w-full py-4' />
        <div className='flex gap-2'>
          <input required id='privacy-policy' name='policy' type='checkbox' />
          <label htmlFor='privacy-policy'>I have read and agree to acceptrec.co.uk&apos;s <Link href="/privacy-policy" className='text-[#00afaa] underline'>Privacy Policy</Link></label>
        </div>
        <button
          type="submit"
          className="group flex justify-between items-center self-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white text-xl hover:shadow-[#00afa93b] hover:w-fit p-4 rounded-full transition-all duration-200 gap-2"
          disabled={formStatus === 'submitting' || formStatus === 'submitted'}
        >
          {formStatus === 'submitting' ? (
            <>
              Applying
              <div
                className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"></div>
            </>
          ) : formStatus === 'submitted' ? (
            <>
              Successfully applied
              <BsCheckLg />
            </>
          ) : (
            <>
              Apply
              <PiPaperPlaneTiltBold className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200' />
            </>
          )}
        </button>
      </form>
    </>
  );
}
