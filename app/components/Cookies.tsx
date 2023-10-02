"use client"

import { useState } from 'react';
import CookieModal from '../components/CookieModal';

export default function Cookies() {
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(true);

  const handleAcceptCookie = () => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30); // Set the cookie to expire in 30 days
  
    document.cookie = `cookieConsent=accepted; expires=${expirationDate.toUTCString()}; path=/`;
  
    setIsCookieModalOpen(false);
  };

  const isCookieAccepted = document.cookie.includes('cookieConsent=accepted');

  return (
    <div>
    {isCookieAccepted ? null : <CookieModal isOpen={isCookieModalOpen} onRequestClose={handleAcceptCookie}/>}
    
    </div>
  );
}