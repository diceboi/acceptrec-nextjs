"use client"

import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/grid'
import ShortlistedCandidateTile from './ShortlistedCandidateTile';
import Link from 'next/link';
import { FiArrowUpRight } from 'react-icons/fi';

import { gql, useSuspenseQuery } from '@apollo/client';

const query = gql`
query getShortlistedCandidates {
  shortlistedCandidatesComponent(where: {orderby: {field: MENU_ORDER, order: ASC}}) {
    edges {
      node {
        shortlistedCandidates {
          name
          introduction
          location
          achievements
          skills
          salaryExpectation
        }
      }
    }
  }
}
`


export default function ShortlistedCandidates({title, subtitle, text, buttontext}:any) {

    const { data: shortlistedcandidatesdata }:any = useSuspenseQuery(query)

    const shortlistedcandidates = shortlistedcandidatesdata?.shortlistedCandidatesComponent?.edges || {};
    
    return(
        <section className="w-full py-20 bg-neutral-100">
            <div className='flex flex-col gap-8 w-11/12 lg:w-8/12 m-auto'>
                <div className='flex flex-col gap-4 w-11/12 lg:w-1/2 justify-start'>
                    <h3 className={`${subtitle ? 'flex' : 'hidden'}text-sm lg:text-lg font-medium tracking-widest uppercase`}>
                        {subtitle}
                    </h3>
                    <h2 className={`${title ? 'flex' : 'hidden'} text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]`}>
                        {title}
                    </h2>
                    <p className={`${text ? 'flex' : 'hidden'}`}>
                        {text}
                    </p>                  
                </div>
            </div>

            <div className='relative w-11/12 h-max lg:w-8/12 m-auto py-10'>
                <Swiper modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={40}
                        breakpoints={{
                            640: {
                              slidesPerView: 1,
                            },
                            768: {
                              slidesPerView: 1,
                            },
                            1024: {
                              slidesPerView: 1.5,
                            },
                          }}
                        navigation
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')} 
                        className=' transition-all duration-500 cursor-pointer'
                >
                    
                    {shortlistedcandidates.map(({ node }: any, index: number) => (

                    <SwiperSlide key={index} className='p-10'>
                        <ShortlistedCandidateTile 
                            
                            name={node.shortlistedCandidates.name} 
                            description={node.shortlistedCandidates.introduction} 
                            location={node.shortlistedCandidates.location} 
                            achievements={node.shortlistedCandidates.achievements} 
                            skills={node.shortlistedCandidates.skills} 
                            salary={node.shortlistedCandidates.salaryExpectation}
                        />
                    </SwiperSlide>

                    ))}

                </Swiper>
            </div>
            <Link href="/for-employers/shortlisted-candidates" className={`${buttontext ? 'flex' : 'hidden'} flex justify-center w-fit m-auto pt-16`}>
                <button  
                        className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white hover:shadow-[#00afa93b] hover:w-fit p-3 rounded-full transition-all duration-200 gap-2"
                        >
                        {buttontext}
                        <FiArrowUpRight className='right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200'
                        />
                </button>
            </Link>
        </section>
    )
}