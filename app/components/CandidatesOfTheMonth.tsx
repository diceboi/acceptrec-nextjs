import React from 'react'
import Candidate from './Candidate'

export default function CandidatesOfTheMonth() {
  return (
    <> 
        <section className='grid grid-cols-2 gap-8 w-11/12 lg:w-8/12 m-auto py-20'>
            <Candidate className='col-span-2' image={"/wisdom.webp"} alt={"Wisdom"} name={"Wisdom"} date={"Candidate of November 2022"} description={"We have chosen Wisdom as our Candidate of the Month due to his constant commitment and determination he has demonstrated whilst working with us. There has not been a time in which Wisdom did not save the day! Although he is a student, this does not prevent him from giving his all when it comes to work. He has helped us in and outside of Leicester, always willing to go that extra mile to help us out (literally speaking!). Overall, Wisdom is one of the kindest, most hardworking candidates we have had the pleasure to work with and for these reasons he has been rewarded with £20 Love2Shop voucher."}/>

            <Candidate image={"/zorica-burcin.webp"} alt={"Zoica-Burcin"} name={"Zoica Burcin"} date={"Candidate of April 2021"} description={"Zoica has been put forward for employee of the month due to her reliability, hard work and determination. She was hitting record-breaking numbers for one of our busiest clients this month, and we couldn't be more proud of her."}/>

            <Candidate image={"/pedro-de-silva.webp"} alt={"Pedro-de-Silva"} name={"Pedro de Silva"} date={"Candidate of March 2021"} description={"Pedro is working with us from September and is showing great work ethic. He is very helpful, supportive and positive. All the clients are giving him positive feedback and are happy with him no matter what role he is doing. Pedro is always showing his commitment, dedication and hard work. We are very happy to work with such a candidate!"}/>

            <Candidate image={"/raf.webp"} alt={"Raf"} name={"Raf"} date={"Candidate of January 2020"} description={"Rafal is flexible in his approach to work, often willing to assist at short notice and is well reviewed by all of our clients."}/>

            <Candidate image={"/jake-wilson.webp"} alt={"Jake-Wilson"} name={"Jake Wilson"} date={"Candidate of February 2021"} description={"Jake has been put forward for employee of the month due to how much he has grown since starting with our client. He takes everything on board and pushes himself as well as looking out for others and supporting them. Jake will go far with the client he is with and is on the list of candidates to be taken perm in the coming weeks."}/>

            <Candidate image={"/anna-siedlecka.webp"} alt={"Anna-Siedlecka"} name={"Anna Siedlecka"} date={"Candidate of December 2020"} description={"Anna has been put forward for employee of the month due her reliability, proactivity and 100% attendance. Anna was chosen by our client as one of the best workers onsite that leads by example."}/>
        </section>
    </>
  )
}
