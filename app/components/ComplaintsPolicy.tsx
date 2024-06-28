"use client"

import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/client";

const GET_COMPLAINTS_POLICY = gql`
query getComplaintsPolicy {
  pages(where: {name: "Complaints policy and procedure"}) {
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

  export default function ComplaintsPolicy() {
    const { data } = useSuspenseQuery(GET_COMPLAINTS_POLICY);
  
    const pageData = (data as { pages?: { edges: { node: Pages }[] } })?.pages?.edges[0]?.node;
  
    if (!pageData) {
      return <div>No data available</div>;
    }
  
    return (
      <section className="w-full py-20">
        <div className="flex flex-col gap-4 w-11/12 lg:w-6/12 m-auto">
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
