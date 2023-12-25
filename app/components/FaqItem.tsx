"use client"

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string | JSX.Element;
  isOpen: boolean;
  icon: any;
  toogleClassName: any;
  toggleItem: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, icon, toogleClassName, toggleItem}) => {
  return (
    <div className="p-4 shadow-special rounded-3xl">
      <div
        className={toogleClassName}
        onClick={toggleItem}
      >
        <p className="text-lg font-medium w-10/12">{question}</p>
        {icon}
      </div>
      {isOpen && <p className="mt-2 transition-all w-10/12">{answer}</p>}
    </div>
  );
};


export default FAQItem;