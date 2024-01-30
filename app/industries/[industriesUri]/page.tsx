import Industries from "@/app/components/industries";
import { gql } from '@apollo/client'
import { getClient } from "@/app/lib/client";
import Image from "next/image";

const query = gql`
query getIndustries {
  industries {
    edges {
        node {
            industries {
                mainTitle
                mainText
                mainSubtitle
                mainImage {
                    sourceUrl
                    altText
                }
                innerTitle
                innerText
                innerImage {
                    sourceUrl
                    altText
                }
                gridTitle
                gridText
                gridSubtitle
                gridItem4Title
                gridItem4Text
                gridItem3Title
                gridItem3Text
                gridItem2Title
                gridItem2Text
                gridItem1Title
                gridItem1Text
            }
            title
            uri
            slug
        }
    }
  }
}
`

export const revalidate = 5;

export async function generateMetadata({params}:any) {

  const { data: industriesdata }:any = await getClient().query({query});

  const industrySlug = params.industriesUri;
  const edge = industriesdata.industries.edges.find((edge: { node: { slug: any; }; }) => edge.node.slug === industrySlug);
  
  const industry = edge ? edge.node : null;

  return {
    title: industry.title + '- Industries - Accept Recruitment',
    description: industry.industries.innerText
  }
  
}


export default async function IndustriesInner({params}:any) {

    const { data: industriesdata }: any = await getClient().query({query});

    // Use the correct property from params to find the industry by slug
    const industrySlug = params.industriesUri;
    const edge = industriesdata.industries.edges.find((edge: { node: { slug: any; }; }) => edge.node.slug === industrySlug);
  
    const industry = edge ? edge.node : null;
  
    if (!industry) {
      return <div>Industry not found.</div>;
    }

  return (
    <>
        <section className="relative h-[50vh] pb-10">
            <div className='absolute top-0 right-0 w-full h-full bg-[#312252] opacity-75 z-10'></div>
            <div className="relative flex flex-col justify-between gap-4 w-11/12 lg:w-8/12 h-[50vh] m-auto z-10">
                <div className="flex flex-col gap-4 justify-center w-full h-full text-white">
                <h2 className="text-sm lg:text-lg font-medium tracking-widest uppercase text-center">Industries</h2>
                <h1 className="text-6xl lg:text-8xl font-black tracking-tighter text-center">{industry.title}</h1>
                </div>
            </div>
            <Image 
                src={industry.industries.mainImage.sourceUrl}
                alt={industry.industries.mainImage.altText}
                fill={true}
                className="z-0"
                style={{objectFit: "cover", objectPosition: "center"}}
            />             
        </section>
        <section className='flex justify-center items-center w-full'>
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-20 w-11/12 lg:w-8/12 py-20'>
                <div className="relative lg:w-1/2 min-h-[50vh] rounded-3xl">
                <Image 
                    src={industry.industries.innerImage.sourceUrl}
                    alt={industry.industries.innerImage.altText}
                    fill={true}
                    className="rounded-3xl"
                    style={{objectFit: "cover", objectPosition: "center"}}
                />
                </div>
                
                <div className="flex flex-col lg:w-1/2 gap-8">
                <h3 className='text-5xl font-black tracking-tighter text-[#312252]'>{industry.industries.innerTitle}</h3>
                <p>{industry.industries.innerText}</p>
                </div>
            </div>
        </section>

        <section className="flex flex-col lg:flex-row w-11/12 lg:w-8/12  gap-8 py-20 m-auto">
                <div className="flex flex-col gap-4 w-full lg:w-1/2 justify-start bg-contain bg-left bg-no-repeat">
                    <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase text-[#312252]'>
                        {industry.industries.gridSubtitle}
                    </h3>
                    <h2 className="flex gap-3 text-6xl lg:text-6xl font-black tracking-tighter z-10 text-[#312252]">
                        {industry.industries.gridTitle}
                    </h2>
                    <p>
                        {industry.industries.gridText}
                    </p>              
                </div>
                <div className="grid lg:grid-cols-2 lg:grid-rows-2 gap-8 w-full lg:w-1/2">
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex items-center gap-2 '>                            
                            <h3 className='text-2xl font-black tracking-tighter text-[#00afaa]'>{industry.industries.gridItem1Title}</h3>
                        </div>                        
                        <ul className='font-medium list-disc' dangerouslySetInnerHTML={{ __html: industry.industries.gridItem1Text }}/>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex items-center gap-2 '>                            
                            <h3 className='text-2xl font-black tracking-tighter text-[#00afaa]'>{industry.industries.gridItem2Title}</h3>
                        </div>                        
                        <ul className='font-medium list-disc' dangerouslySetInnerHTML={{ __html: industry.industries.gridItem2Text }}/>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex items-center gap-2 '>                            
                            <h3 className='text-2xl font-black tracking-tighter text-[#00afaa]'>{industry.industries.gridItem3Title}</h3>
                        </div>                        
                        <ul className='font-medium list-disc' dangerouslySetInnerHTML={{ __html: industry.industries.gridItem3Text }}/>
                    </div>
                    <div className='flex flex-col gap-2 w-full lg:p-3'>
                        <div className='flex items-center gap-2 '>                            
                            <h3 className='text-2xl font-black tracking-tighter text-[#00afaa]'>{industry.industries.gridItem4Title}</h3>
                        </div>                        
                        <ul className='font-medium list-disc' dangerouslySetInnerHTML={{ __html: industry.industries.gridItem4Text }}/>
                    </div>
                </div>
        </section>
        <Industries industriesMainTitle={'Other industries'} industriesSmallIntroduction={''} industriesSmallTitle={''} />
    </>
  )
}
