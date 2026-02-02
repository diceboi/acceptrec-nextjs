"use client"

import { useState, useEffect } from 'react';

export default function DynamicReviewCount() {
  const [reviewCount, setReviewCount] = useState<string | number>("950+");

  useEffect(() => {
    fetch('/api/google-reviews')
      .then(res => res.json())
      .then(data => {
        if (data && data.reviewCount) {
            setReviewCount(data.reviewCount.toLocaleString());
        }
      })
      .catch(err => {
        console.error('Failed to load reviews:', err);
        // Keep fallback "950+"
      });
  }, []);

  return <>{reviewCount}</>;
}
