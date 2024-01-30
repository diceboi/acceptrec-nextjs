import { TbCalendarStats } from 'react-icons/tb'
import Image from 'next/image'

import { gql } from '@apollo/client'
import { getClient } from '@/app/lib/client'

const query = gql`
query getServices {
  services(where: {orderby: {field: MENU_ORDER, order: ASC}}) {
    edges {
      node {
        servicesComponent {
          text
          title
          backgroundImage {
            altText
            sourceUrl
          }
        }
      }
    }
  }
}
`

export default async function Services({ title, subtitle, text }:any) {

const { data: servicesdata }:any = await getClient().query({query});

const services = servicesdata?.services?.edges || {};

  return (
    <>
        <section className="flex flex-col w-11/12 lg:w-8/12  gap-8 py-20 m-auto">
            <div className="flex flex-col gap-4 w-full justify-start ">
                <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
                    {subtitle}
                </h3>
                <h2 className="flex flex-wrap gap-3 text-6xl lg:text-6xl font-black tracking-tighter z-10  text-[#312252]">
                    {title}
                </h2>
                <p className='font-medium w-full lg:w-2/3'>
                    {text}
                </p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 max-w-full text-white gap-4'>

                {services.map(({ node }: any, index: number) => (

                <div key={index} className='group relative flex flex-col justify-center gap-8 w-full hover:lg:-mt-8 hover:lg:w-[150%] hover:lg:-ml-[25%] hover:lg:z-20 rounded-3xl min-h-[30vh] p-4 transition-all duration-500'>
                    <Image 
                    src={node.servicesComponent.backgroundImage?.sourceUrl} 
                    alt={node.servicesComponent.backgroundImage?.altText}
                    fill={true}
                    className='rounded-3xl'
                    style={{objectFit: "cover", objectPosition: "center"}}
                    />
                    <div className='absolute top-0 right-0 w-full h-full bg-[#312252] bg-opacity-50 group-hover:bg-opacity-75 rounded-3xl transition-all duration-500'></div>
                    <TbCalendarStats className='lg:absolute top-4 left-4 w-8 h-8 text-[#00afaa] z-10 text-center opacity-100 group-hover:opacity-0 transition-all duration-500' />
                    <h3 className='lg:absolute top-16 left-4 z-10 font-black text-lg lg:text-2xl uppercase opacity-100 group-hover:opacity-0 transition-all duration-500'>{node.servicesComponent.title}</h3>
                    <p className='z-10 text-xs lg:text-lg lg:opacity-0 group-hover:opacity-100 transition-all duration-500'>{node.servicesComponent.text}</p>
                </div>

                ))}

            </div>
        </section>
        </>
  )
}