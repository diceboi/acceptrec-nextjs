"use client"

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { useParams, useRouter } from "next/navigation";
import { gql, useQuery } from "@apollo/client";
import he from "he";
import { Key } from "react";

const GET_PRIVACY_POLICY = gql`
query getPrivacyPolicy {
  pages(where: {name: "Privacy Policy"}) {
    edges {
      node {
        slug
        title
        blocks {
          saveContent
        }
      }
    }
  }
}`

interface Pages {
    slug: string;
    title: string;
    blocks: Block[];
  }

  interface Block {
    saveContent: string;
  }

  export default function PrivacyPolicy() {
    const { loading, error, data } = useQuery(GET_PRIVACY_POLICY); // Execute the query
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    const pageData = data?.pages?.edges[0]?.node;
  
    if (!pageData) {
      return <div>No data available</div>;
    }
  
    return (
      <section className="w-full py-20">
        <div className="flex flex-col gap-4 w-11/12 lg:w-8/12 m-auto">
              {he.decode(pageData.title)}
            {pageData.blocks.map((block: Block, index: number) => (
              <div
                key={index}
                className=""
                dangerouslySetInnerHTML={{ __html: block.saveContent }}
              />
            ))}
        </div>
      </section>
    );
  }
