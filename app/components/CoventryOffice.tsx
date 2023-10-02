import React from 'react'
import { TbPhone } from 'react-icons/tb'
import CoventryMap from './CoventryMap'
import ContactForm from './ContactForm'

export default function CoventryOffice() {
  return (
    <>
    <section className='w-full py-20'>
        <div className='flex flex-col w-11/12 lg:w-8/12 m-auto'>            
            <div className='flex flex-col-reverse lg:flex-row justify-center gap-16 lg:gap-20 w-full pb-20'>
                <div className='flex flex-col gap-8 w-full lg:w-1/2'>
                    <div className='flex flex-col gap-8'>
                        <h3 className='text-6xl font-black'>
                            Contact Us
                        </h3>
                        <ContactForm />
                    </div>                  
                </div>
                <div className='flex flex-col  gap-8 lg:w-1/2'>
                    <div className='w-full h-[50vh]  rounded-3xl overflow-hidden'>
                        <CoventryMap />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-8 py-8'>
                <h3 className='text-4xl font-black'>
                    About Coventry
                </h3>
                <p className='lg:text-lg'>
                    Situated in the West Midlands, Coventry is the second largest city in the county with a population of 425,000. Coventry is a very diverse city with a growing population growth in recent years of people in the age range of 18-29. In 2019, Coventry started their &apos;Year of Wellbeing&apos; campaign which their council invested in sport and physical activities, this amounted to the opening of the Wave water park. Coventry is home to some successful sport teams in a variety of sports including Coventry City (football) and Wasps RFC (rugby) who are one of the best teams in Europe.
                </p>
            </div>
            <div className='flex flex-col gap-8 py-8'>
                <h3 className='text-4xl font-black'>
                    Living in Coventry
                </h3>
                <p className='lg:text-lg'>
                    Being in the top 30 cities to live in the United Kingdom, Coventry won the 2021 City of Culture which is a prestigious award given every 4 years. The estimated cost for a family of four living in Coventry is £3,330 which is slightly cheaper than neighboring city Birmingham. For a single person living the city of Coventry, it is estimated monthly cost is just over £1,800 which is a huge 31% cheaper than London. 
                </p>
            </div>
            <div className='flex flex-col gap-8 py-8'>
                <h3 className='text-4xl font-black'>
                    Jobs in Coventry
                </h3>
                <p className='lg:text-lg'>
                Coventry and Warwickshire have over 1,500 automotive suppliers in the county which 13% of them jobs are in manufacturing. Coventry is known for its development in driverless technology which will provide more and new jobs for the future years to come. Due to Coventry being awarded the UK&apos;s City of Culture, there will be more jobs opportunities all over the city for places such as sport venues, historical sites and for the many attractions around Coventry for the tourists that will want to visit the award winners.
                </p>
            </div>
        </div>

    </section>
    </>
  )
}
