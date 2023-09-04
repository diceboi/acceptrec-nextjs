import React from 'react'
import ContactUsHero from '../components/Theme Components/ContactUsHero'
import ContactForm from '../components/ContactForm'

export default function ContactUs() {
  return (
    <>
    <ContactUsHero title={"Contact us"} subtitle={"Please complete the contact form and one of our team will be in touch as soon as possible."} classname={"bg-gradient-to-br from-white to-[#00afa917] pb-10 "}/>
    <ContactForm />
    </>
  )
}
