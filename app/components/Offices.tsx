import Link from 'next/link';
import OfficeTile from './OfficeTile'
import { gql } from "@apollo/client";
import { getClient } from '../lib/client';

const query = gql`
  query getOffices {
  offices(where: {orderby: {field: MENU_ORDER, order: ASC}}) {
    edges {
      node {
        officesNew {
          aboutTheCity
          jobsInTheCity
          livingInTheCity
          mapCoordinates
          phoneNumber
          officeImage {
            altText
            sourceUrl
          }
        }
        slug
        id
        title
      }
    }
  }
}
`;


export default async function Offices({ title, subtitle, text }:any) {

  const { data: officesdata }:any = await getClient().query({query});

  const offices = officesdata?.offices?.edges || {};

  return (
    <>
    <div className='w-full pt-20'>
      <div className="flex flex-col gap-4 w-11/12 lg:w-8/12 justify-start m-auto text-[#312252]">
        <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
            {subtitle}
        </h3>
        <h2 className="flex flex-wrap gap-3 text-6xl lg:text-6xl font-black tracking-tighter z-10 ">
            {title}
        </h2>
        <p className='text-lg'>
            {text}
        </p>
      </div>
    </div>
    <section className='grid grid-cols-2 lg:grid-cols-3 gap-8 w-11/12 lg:w-8/12 m-auto py-20'>
      {offices.map(({ node }: any) => (
        <Link href={`/offices/${node.slug}`} key={node.id}>
          <OfficeTile name={node.title} image={node.officesNew.officeImage?.sourceUrl} />
        </Link>
      ))}
    </section>
    </>
    
  );
};