"use client"

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleItem: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, toggleItem }) => {
  return (
    <div className="mb-4">
      <div
        className="flex items-center justify-between cursor-pointer transition-all"
        onClick={toggleItem}
      >
        <p className="text-lg font-medium">{question}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-transform transform ${
            isOpen ? 'rotate-180' : ''
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 2C5.03 2 2 5.03 2 10a8 8 0 1 0 16 0 8 8 0 0 0-8-8zM9 14a1 1 0 0 1 2 0v1a1 1 0 0 1-2 0v-1zm2-5a1 1 0 0 1-2 0V6a1 1 0 1 1 2 0v3z"
          />
        </svg>
      </div>
      {isOpen && <p className="mt-2 transition-all">{answer}</p>}
    </div>
  );
};


export default FAQItem;