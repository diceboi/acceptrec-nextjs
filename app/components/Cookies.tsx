"use client"

import { useEffect, useState } from 'react';
import CookieModal from '../components/CookieModal';

export default function Cookies() {
  const [isCookieModalOpen, setIsCookieModalOpen] = useState(true);

  const handleAcceptCookie = () => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30); // Set the cookie to expire in 30 days
  
    document.cookie = `cookieConsent=accepted; expires=${expirationDate.toUTCString()}; path=/`;
  
    setIsCookieModalOpen(false);
  };

  useEffect(() => {
    // Check for the 'cookieConsent' cookie on the client side
    const isCookieAccepted = document.cookie.includes('cookieConsent=accepted');
    if (isCookieAccepted) {
      setIsCookieModalOpen(false);
    }
  }, []); // Empty dependency array ensures this code runs once on the client side

  return (
    <div>
      {isCookieModalOpen ? <CookieModal isOpen={isCookieModalOpen} onRequestClose={handleAcceptCookie} /> : null}
    </div>
  );
}
