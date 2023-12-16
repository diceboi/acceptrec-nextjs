"use client"

import Link from 'next/link';
import OfficeTile from './OfficeTile'
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

const GET_OFFICES = gql`
  query getPayQuery {
    pages(where: { parent: "cG9zdDozMDY=" }) {
      edges {
        node {
          slug
          title
          id
          offices {
            aboutTheCity
            jobsInTheCity
            livingInTheCity
            phoneNumber
          }
          featuredImage {
            node {
              altText
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

interface QueryResult {
  pages?: {
    edges: {
      node: Pages;
    }[];
  };
}

interface Pages {
  id: string;
  slug: string;
  title: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
  // Add other properties as needed
}

interface OfficesProps {
  pages?: {
    edges: {
      node: Pages;
    }[];
  };
  classname: string;
}

const Offices: React.FC<OfficesProps> = ({ classname }) => {
  const { data } = useSuspenseQuery<QueryResult>(GET_OFFICES);

  const pages = data?.pages?.edges || [];

  if (pages.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <>
    <div className='w-full pt-20'>
      <div className="flex flex-col gap-4 w-11/12 lg:w-8/12 justify-start m-auto text-[#312252]">
        <h3 className='text-sm lg:text-lg font-medium tracking-widest uppercase'>
            Offices
        </h3>
        <h2 className="flex flex-wrap gap-3 text-6xl lg:text-6xl font-black tracking-tighter z-10 ">
            Contact us
        </h2>
      </div>
    </div>
    <section className={classname}>
      {pages.map(({ node }: any) => (
        <Link href={`/offices/${node.slug}`} key={node.id}>
          <OfficeTile name={node.title} image={node.featuredImage.node.sourceUrl} />
        </Link>
      ))}
    </section>
    </>
    
  );
};

export default Offices;
