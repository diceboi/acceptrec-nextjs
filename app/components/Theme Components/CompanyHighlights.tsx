"use client"

import { gql } from "@apollo/client"
import { useSuspenseQuery } from "@apollo/client"

const query = gql`
query getCompanyhighlights {
  companyHighlights (first:100) {
    edges {
      node {
        companyHighlights {
          companyHighlightsText
          companyHighlightsTitle
        }
        title
      }
    }
  }
}
`

export default function CompanyHighlights({title, text}:any) {

const { data: companyHighlightsdata }:any = useSuspenseQuery(query);

const companyHighlights = companyHighlightsdata?.companyHighlights?.edges;

  return (
    <section className="relative py-20 bg-neutral-100">
            <div className='flex flex-col w-11/12 lg:w-8/12 gap-8 m-auto'>
                <div className="flex flex-col gap-4 w-full justify-center items-center text-center bg-contain bg-bottom">                
                    <h2 className='text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]'>
                        {title}
                    </h2>
                    <p className='font-medium lg:w-1/2'>
                        {text}
                    </p>
                </div>
                <ul className="grid lg:grid-cols-2 w-full">

                    {companyHighlights.map(({ node }: any, index: number) => (

                        <li 
                        key={index} 
                        id={`${
                            index % 2 === 0
                            ? 'highlights-list-left'
                            : 'highlights-list-right'
                        }`} 
                        className={`relative ${
                            index % 2 === 0
                            ? 'lg:border-r lg:border-neutral-300 lg:pr-28 mt-20 lg:mt-0 lg:pt-20'
                            : 'lg:pl-28 lg:pt-60 pt-20'
                        }`}
                        >
                            <span 
                                className={`absolute w-40 text-center ${index % 2 === 0 ? 'right-4 lg:-right-20 -top-4 lg:top-24' : 'left-4 lg:-left-20 top-16 lg:top-72'} rounded-full font-bold text-white bg-[#00afaa] py-1 px-2`}
                                >
                                    {node.title}
                            </span>
                            <div className="flex flex-col justify-center p-4 w-full min-h-[20vh] bg-white rounded-3xl shadow-highlights">
                                <h2 className="text-2xl font-black tracking-tighter text-[#312252]">{node.companyHighlights.companyHighlightsTitle}</h2>
                                <p>{node.companyHighlights.companyHighlightsText}</p>
                            </div>
                        </li>

                    ))}
 
                </ul>
            </div>
        </section>
  )
}
