"use client"

import { TbCookie } from 'react-icons/tb';
import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import Link from 'next/link';

function CookieModal({ isOpen, onRequestClose }: any) {
  const [isModalShown, setIsModalShown] = useState(isOpen);

  useEffect(() => {
    setIsModalShown(isOpen);
  }, [isOpen]);

  useEffect(() => {
    // Set the app element when the component mounts
    Modal.setAppElement('#__next');
  }, []);

  const handleAcceptCookie = () => {
    setIsModalShown(false);
    onRequestClose();
    // You can set a cookie here to remember the user's choice
  };

  return (
    <Modal
      isOpen={isModalShown}
      onRequestClose={() => {}}
      shouldCloseOnOverlayClick={false} // Prevent closing on overlay click
      contentLabel="Cookie Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.1)', // Semi-transparent overlay
          zIndex: 1000,
        },
        content: {
          zIndex: '1000',
        },
      }}
      className="flex flex-col w-11/12 lg:w-96 gap-2 items-start absolute bottom-10 -translate-x-[50%] left-[50%] bg-white shadow-special p-4 rounded-3xl z-[9999] focus:border-0 focus:outline-0 active:border"
    >
      <div className='flex flex-nowrap gap-2'>
        <TbCookie className='w-6 h-6'/>
        <h2 className='font-bold'>Cookie Consent</h2>
      </div>
      <p className='font-medium'>This website uses cookies to improve user experience. <Link href="/privacy-policy" className='text-[#00afaa] underline' onClick={onRequestClose}>Learn more</Link></p>
      
      <button className='px-2 py-1 rounded-full bg-neutral-100 border border-neutral-300 hover:border-black hover:bg-black text-black hover:text-white transition-all' onClick={onRequestClose}>Accept</button>
    </Modal>
  );
}

export default CookieModal;
