"use client"

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useRouter } from "next/navigation";
import PrimaryHero from "../components/Theme Components/PrimaryHero";
import Offices from "../components/Offices";

const GET_OFFICES = gql`
query getPayQuery {
  pages(where: {parent: "cG9zdDozMDY="}) {
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
}`

interface QueryResult {
  pages?: {
    edges: {
      node: Pages;
    }[];
  };
}

interface Pages {
  id: string; // Add the missing 'id' property
  slug: string;
  title: string;
  featuredImage: {
    node: {
      sourceUrl: string;
    };
  };
  // Add other properties as needed
}

  
  export default function OfficesPage() {

    const router = useRouter();

    const { data } = useSuspenseQuery<QueryResult>(GET_OFFICES);

    const pageData = data?.pages?.edges[0]?.node;
  
    if (!pageData) {
      return <div>No data available</div>;
    }
  
    return (
      <>
        <PrimaryHero title="Offices" bgimage="/officehero.webp" classname="bg-gradient-to-br from-white to-neutral-100 pb-10" />
        <Offices pages={data.pages} classname={'grid grid-cols-2 gap-8 w-11/12 lg:w-8/12 m-auto py-20'}/>
      </>
    );
  }
