"use client"

import { useState, useEffect, useRef } from 'react';

const GoogleReviewNumber = () => {
  const [number, setNumber] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Function to simulate number growth and stop at 950
  const increaseNumber = () => {
    setNumber((prevNumber) => {
      const nextNumber = prevNumber + 1;
      if (nextNumber >= 950) {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current); // Stop the interval when the number reaches 950
        }
      }
      return nextNumber;
    });
  };

  useEffect(() => {
    // Start increasing the number every 2ms (you can adjust this according to your needs)
    intervalRef.current = setInterval(increaseNumber, 2);

    // Clean up the interval when the component unmounts
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return <div>{number}</div>;
};

export default GoogleReviewNumber;
