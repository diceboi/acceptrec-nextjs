"use client"

import { useState, useEffect, useRef } from 'react';
import { FcGoogle } from "react-icons/fc";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

const GoogleReviewNumber = () => {
  const [rating, setRating] = useState(4.8);
  const [targetReviewCount, setTargetReviewCount] = useState(1200);
  const [number, setNumber] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch real review data from API
  useEffect(() => {
    fetch('/api/google-reviews')
      .then(res => res.json())
      .then(data => {
        setRating(data.rating);
        setTargetReviewCount(data.reviewCount);
      })
      .catch(err => {
        console.error('Failed to load reviews:', err);
        // Keep fallback values
      });
  }, []);

  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <AiFillStar key={`full-${i}`} className="text-yellow-300 text-xl md:text-2xl" />
      );
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <BsStarHalf key="half" className="text-yellow-300 text-xl md:text-2xl" />
      );
    }

    // Empty stars
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <AiOutlineStar key={`empty-${i}`} className="text-yellow-300 text-xl md:text-2xl" />
      );
    }

    return stars;
  };

  // Animate number counter
  const increaseNumber = () => {
    setNumber((prevNumber) => {
      const nextNumber = prevNumber + 1;
      if (nextNumber >= targetReviewCount) {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
        }
      }
      return nextNumber;
    });
  };

  useEffect(() => {
    if (targetReviewCount > 0 && number < targetReviewCount) {
      // Start increasing the number every 2ms
      intervalRef.current = setInterval(increaseNumber, 2);

      // Clean up the interval when the component unmounts
      return () => {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
        }
      };
    }
  }, [targetReviewCount, number]);

  return (
    <div className="w-full bg-gradient-to-r from-[#00afaa] via-[#312252] to-[#00afaa] bg-[length:200%_100%] animate-gradient-x shadow-lg border-b border-[#00afaa]">
      {/* Content wrapper with max-width for centering */}
      <div className="flex flex-col md:flex-row md:flex-nowrap items-center justify-center gap-2 md:gap-3 lg:gap-4 px-3 md:px-6 lg:px-8 py-2 w-full xl:mt-0 mt-16 mx-auto">

        {/* TEAL VERSION - Replace outer div bg with: bg-[#00afaa] */}

        {/* Slogan Text */}
        <div className="flex items-center justify-center gap-2 text-center w-full md:w-auto">
          <span className="text-xs md:text-sm lg:text-base font-semibold text-white">
            We give a shift. Check our reviews
          </span>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px h-8 bg-white bg-opacity-30"></div>

        {/* Mobile: Row with Google, Rating, and Reviews */}
        <div className="flex items-center justify-center gap-2 md:gap-3 lg:gap-4 w-full md:w-auto">
          {/* Google Icon */}
          <div className="flex items-center gap-1 md:gap-1.5">
            <FcGoogle className="text-xl md:text-2xl lg:text-3xl" />
            <span className="text-sm md:text-base lg:text-lg font-bold text-white">Google</span>
          </div>

          {/* Divider */}
          <div className="w-px h-6 md:h-8 bg-white bg-opacity-30"></div>

          {/* Rating Section */}
          <div className="flex items-center gap-1.5 md:gap-2">
            <div className="flex items-center gap-0.5">
              {renderStars(rating)}
            </div>
            <span className="text-sm md:text-base lg:text-lg font-bold text-white">{rating.toFixed(1)}</span>
          </div>

          {/* Divider */}
          <div className="w-px h-6 md:h-8 bg-white bg-opacity-30"></div>

          {/* Review Count */}
          <div className="flex items-center gap-1 md:gap-1.5">
            <span className="text-lg md:text-xl lg:text-2xl font-black text-white tabular-nums">
              {number.toLocaleString()}
            </span>
            <span className="text-xs md:text-sm lg:text-base text-white font-medium">Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleReviewNumber;
