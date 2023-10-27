"use client"

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useRouter } from "next/navigation";
import ContactUsHero from '../components/Theme Components/ContactUsHero'
import ContactForm from '../components/ContactForm'
import ContactUsMap from '../components/ContactUsMap'
import Offices from '../components/Offices'

const GET_OFFICES = gql`
query getOffices {
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

export default function ContactUs() {

  const router = useRouter();

  const { data } = useSuspenseQuery<QueryResult>(GET_OFFICES);

  const pageData = data?.pages?.edges[0]?.node;

  if (!pageData) {
    return <div>No data available</div>;
  }

  return (
    <>
    <ContactUsHero title={"Contact us"} subtitle={"Please complete the contact form and one of our team will be in touch as soon as possible."} classname={"bg-gradient-to-br from-white to-[#00afa917] pb-10 "}/>
    <ContactForm classname={'flex flex-col w-8/12 gap-4 m-auto py-10'}/>
    <Offices pages={data.pages} classname={'grid lg:grid-cols-3 gap-8 w-11/12 lg:w-8/12 m-auto py-20'}/>
    </>
  )
}
