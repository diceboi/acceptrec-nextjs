"use client"

import { useState } from "react";
import FAQItem from "./FaqItem";
import Link from "next/link";
import { TbPlus, TbMinus } from 'react-icons/tb';

const FAQComponent = () => {
    const faqData = [
      {
        question: 'How do I apply for a job with Accept Recruitment?',
        answer: (
          <>
          To apply for a job with Accept Recruitment, simply visit our <Link href="/jobs" className=" underline text-[#00afaa]">Jobs</Link> page. Browse through the available positions and click on the one you are interested in. Follow the instructions to submit your application online. Alternatively, get in touch with our National Resourcing Centre at 0845 353 3237, and they can guide you through the application process.
          </>
          ),
      },
      {
        question: 'What types of positions does Accept Recruitment offer?',
        answer: (
          <>
          Accept Recruitment offers a wide range of job opportunities across various industries. We specialise in sectors such as manufacturing, logistics, warehousing, customer service, administration, and more. Click <Link href="/jobs" className=" underline text-[#00afaa]">here</Link> to explore the current available positions and their specific requirements.
          </>
          )
      },
      {
        question: 'How do I register with Accept Recruitment?',
        answer: (
          <>
          To register online with us, click to <Link href="/registration" className=" underline text-[#00afaa]">Registration</Link>, or visit your local, please find all our locations on our contact us page
          </>
          )
      },
      {
        question: 'What documents do I need to send in order to start working?',  
        answer: 'We following the government guidelines regarding eligibility to work, and it can be found at https://www.gov.uk/government/publications/right-to-work-checks-employers-guide',
      },
      {
        question: 'How long does registering take and will I need to bring anything with me?',
        answer: 'We are technology driven and use the latest technology to help you complete your registration efficiently. We will need to see your eligibility documents and any certificates related to your qualification (E.g. Forklift or Driving licence).',
      },
      {
        question: 'Will I need to complete any tests when I register with you?',
        answer: 'For some of our positions, you may be required to complete comprehension assessments.',
      },
      {
        question: 'How can I update my registration profile?',
        answer: (
          <>
          Once you have completed your registration, you can update your details via the registration portal <Link href="https://accept.iqxanywhere.net/login" className="underline text-[#00afaa]">here</Link>. Alternatively, give our National Resourcing Centre a call on 0845 353 3237.
          </>
          
          )
      },
      {
        question: 'I have forgotten my password for the registration portal, can you reset it for me?',
        answer: (
          <>
          Sure! You can reset your password, click <Link href="https://accept.iqxanywhere.net/resetpassword" className="underline text-[#00afaa]">here</Link> or send an email request to <Link href="mailto:admin@acceptrec.co.uk" className="underline text-[#00afaa]">admin@acceptrec.co.uk</Link> and we will assist you.
          </>
          
          )
      },
      {
        question: 'I have registered online, what will happen next?',
        answer: 'Great to have you onboard! After you complete your online registration, our recruitment team will get in touch with you within the next two working days.',
      },
      {
        question: 'How can I contact Accept Recruitment for further inquiries?',
        answer: (
          <>
          Click <Link href="contact-us" className="underline text-[#00afaa]">here</Link> to fill out the contact form, and we will get back to you as soon as possible. If you want a quick answer or you want to chat with us, just click on the chat icon, in the bottom right corner of the website.
          </>
          )
      },
      {
        question: 'How can I stay updated on new job openings at Accept Recruitment? ',
        answer: (
          <>
          To stay informed about new job openings at Accept Recruitment, we recommend visiting our website regularly and checking the <Link href="/jobs" className="underline text-[#00afaa]">Jobs section</Link>. Additionally, you can subscribe to our newsletter or follow our social media channels where we often share updates on new job opportunities, company news, and industry insights.
          </>
          
          )
      },
      {
        question: 'Are you available to speak about current vacancies via online chat?',
        answer: 'Yes! Our National Resourcing Team is available to chat with you via our online chatbot throughout the working week (Monday to Friday, 08:00 - 17:00). The online chat is in the bottom right corner of the website.',
      },
      {
        question: 'How do I unsubscribe from job alerts or email notifications? ',
        answer: 'Click the "Unsubscribe" link at the bottom of our emails to opt-out from general email notifications like newsletters or company updates. You can also contact our team at admin@acceptrec.co.uk to request unsubscribing from job alerts or email notifications. Our team will assist you promptly in updating your preferences to stop receiving unwanted communications.',
      },
      {
        question: 'How do you protect the confidentiality of my personal information?',
        answer: "We prioritise the protection of your personal information and maintain strict privacy practices. Here's how we ensure data security: We use industry-standard encryption for transmitting your information, securely store it on protected servers, and grant access only to authorised personnel trained in data privacy. We obtain your consent and give you control over your data, allowing you to review, update, or delete it at any time. When necessary, we share information with trusted third-party partners who maintain high data protection standards. Additionally, we comply with relevant data protection laws, such as GDPR UK.",
      },
      // Add more FAQ items here
    ];
  
    const [openItems, setOpenItems] = useState<number[]>([]);
  
    const toggleItem = (index: number) => {
      if (openItems.includes(index)) {
        setOpenItems([]);
      } else {
        setOpenItems([index]);
      }
    };
  
    return (
      <section className="w-full py-20">
        <div className="flex flex-col gap-4 w-11/12 lg:w-6/12 m-auto">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openItems.includes(index)}
              toggleItem={() => toggleItem(index)}
              toogleClassName={`relative flex items-center justify-between cursor-pointer transition-all ${openItems.includes(index) ? " faq-item-content-open" : ""}`}
              icon={openItems.includes(index) ? <TbMinus className="absolute top-1 right-1 w-6 h-6 text-[#00afaa]"/> : <TbPlus className="absolute top-1 right-1 w-6 h-6 text-[#00afaa]"/>}
            />
          ))}
        </div>
      </section>
    );
  };
  
  export default FAQComponent;