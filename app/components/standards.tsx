import Image from 'next/image'
import { gql } from '@apollo/client'
import { getClient } from '../lib/client'

const query = gql`
query getStandards {
  standards(where: {orderby: {field: MENU_ORDER, order: ASC}}) {
    edges {
      node {
        standards {
          title
          text
          illustration {
            altText
            sourceUrl
          }
        }
      }
    }
  }
}
`

export default async function Standards({ title, subtitle, text }:any) {

const { data: standardsdata }:any = await getClient().query({query});

const standards = standardsdata?.standards?.edges || {};
    
    return(
        <>
        <section className="relative py-20 bg-gradient-to-b from-neutral-100 to-white min-h-screen">
            <div className='flex flex-col w-11/12 lg:w-8/12 gap-8 m-auto'>
                <div className="flex flex-col gap-4 w-full justify-center lg:items-center lg:text-center bg-contain bg-bottom">
                    <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                        {subtitle}
                    </h3>
                    <h2 className='text-6xl lg:text-6xl font-black tracking-tighter text-[#312252]'>
                        {title}
                    </h2>
                    <p className='font-medium'>
                        {text}
                    </p>
                </div>
                <div className="grid grid-cols-1 grid-rows-4 w-full pt-20">

                    {standards.map(({ node }: any, index: number) => (

                    <div key={index} className='flex lg:gap-8 lg:w-full min-h-[30vh]'>
                        <div className='flex justify-center lg:items-center items-start w-1/3 lg:w-1/2 my-8'>
                            <Image src={node.standards.illustration.sourceUrl} width={200} height={300} alt={node.standards.illustration.altText}/>

                        </div>
                        <div className='relative flex justify-center items-center w-1 border-r mx-8 border-neutral-300'>
                            <p className='absolute -left-3 top-14 lg:top-[50%] flex items-center justify-center w-8 h-8 font-black bg-neutral-300 border border-neutral-300 rounded-full'>{index +1}</p>
                        </div>
                        <div className='flex flex-col gap-4 justify-center w-1/2'>
                            <h3 className='text-2xl font-black tracking-tighter text-[#312252]'>{node.standards.title}</h3>
                            <p className='font-medium'>{node.standards.text}</p>
                        </div>
                    </div>

                    ))}

                </div>
            </div>
        </section>
        </>
    )
}