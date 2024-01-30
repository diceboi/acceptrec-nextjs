"use client"

import { useState } from 'react';
import { FiArrowUpRight } from 'react-icons/fi'
import Link from 'next/link';

import { gql } from '@apollo/client'
import { useSuspenseQuery } from '@apollo/client'
import BgImageTile from './Theme Components/BgImageTile';

const query = gql`
query getIndustries {
  industries {
    edges {
      node {
        title
        uri
        industries {
          mainTitle
          mainText
          mainSubtitle
          mainImage {
            sourceUrl
            altText
          }
        }
      }
    }
  }
}
`

export default function Industries({industriesMainTitle, industriesSmallIntroduction, industriesSmallTitle}:any) {

    const { data: industriesdata }:any = useSuspenseQuery(query);

    const industries = industriesdata?.industries?.edges || {};

    const [activeButton, setActiveButton] = useState('manufacturing');

    const handleButtonClick = (node: any) => {
      console.log('activeButton:', activeButton);
      console.log('node.industries.mainTitle.toLowerCase():', node.industries.mainTitle.toLowerCase());
      setActiveButton(node.industries.mainTitle.toLowerCase());
    };
    
    return(
        <>
        <section className="w-full py-20">
            <div className='flex flex-col gap-8 w-11/12 lg:w-8/12 m-auto'>
                <div className='flex flex-col gap-4 w-11/12 lg:w-1/2 justify-start'>
                    <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                        {industriesSmallTitle}
                    </h3>
                    <h2 className='text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]'>
                        {industriesMainTitle}
                    </h2>
                    <p>
                        {industriesSmallIntroduction}
                    </p>                    
                </div>
                <div className='flex flex-wrap justify-start items-end text-[#312252] w-full gap-1 lg:gap-4 pb-8'>

                  {industries.map(({ node }: any, index: number) => (
                    <button
                      key={index}
                      className={`font-bold w-auto p-2 px-2 border ${
                        activeButton === node.industries.mainTitle.toLowerCase()
                          ? 'border-[#00afaa]'
                          : 'border-neutral-300'
                      } hover:shadow-special hover:bg-neutral-200 hover:border-neutral-200 focus:bg-neutral-200 focus:border-neutral-200 active:bg-neutral-200 active:border-neutral-200 ease-in-out duration-200 rounded-full`}
                      onClick={() => handleButtonClick(node)}
                    >
                      {node.title}
                    </button>
                  ))}

                </div>
            </div>
            
              {industries.map(({ node }: any, index: number) => (
                <BgImageTile 
                  key={index}
                  title={node.title}
                  uri={node.uri}
                  subtitle={node.industries.mainSubtitle} 
                  text={node.industries.mainText} 
                  bgimage={node.industries.mainImage.sourceUrl}
                  bgimagealt={node.industries.mainImage.altText}
                  show={activeButton === node.industries.mainTitle.toLowerCase()}
                />
              ))}

        </section>
        </>
    )
}