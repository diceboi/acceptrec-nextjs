"use client"

import { useState } from "react";
import FAQItem from "./FaqItem";
import Link from "next/link";
import { TbPlus, TbMinus } from 'react-icons/tb';

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/client";

const query = gql`
query getFAQs {
  fAQs(first:100, where: {orderby: {field: MENU_ORDER, order: ASC}}) {
    edges {
      node {
        faqs {
          question
          answer
        }
      }
    }
  }
}
`

export default function FAQComponent() {

const { data: faqdata }:any = useSuspenseQuery(query);

const faq = faqdata.fAQs.edges;

const [openItems, setOpenItems] = useState<number[]>([]);

const toggleItem = (index: number) => {
  if (openItems.includes(index)) {
    setOpenItems([]);
  } else {
    setOpenItems([index]);
  }
};

  return(
    <section className="w-full py-20">
      <div className="flex flex-col gap-4 w-11/12 lg:w-6/12 m-auto">
        {faq.map(({node}:any, index:number) => (
          <FAQItem
            key={index}
            question={node.faqs.question}
            answer={<div dangerouslySetInnerHTML={{ __html: node.faqs.answer }} />}
            isOpen={openItems.includes(index)}
            toggleItem={() => toggleItem(index)}
            toogleClassName={`relative flex items-center justify-between cursor-pointer transition-all ${openItems.includes(index) ? " faq-item-content-open" : ""}`}
            icon={openItems.includes(index) ? <TbMinus className="absolute top-1 right-1 w-6 h-6 text-[#00afaa]"/> : <TbPlus className="absolute top-1 right-1 w-6 h-6 text-[#00afaa]"/>}
          />
        ))}
      </div>
    </section>
  )
}
