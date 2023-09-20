"use client"

import CareerJob from "./CareerJob";
import { gql } from "@apollo/client";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { Key } from "react";

const GET_CAREER_JOBS = gql`
query getPrivacyPolicy {
    pages(where: {parent: "cG9zdDoyNzA="}) {
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

  export default function CareerJobs(){
    const { data } = useSuspenseQuery(GET_CAREER_JOBS) as { data: { pages?: { edges: { node: Pages }[] } } };

  
    const careerJobsData = (data as { pages?: { edges: { node: Pages }[] } })?.pages?.edges[0]?.node;
    const pages = data?.pages?.edges;
  
    if (!careerJobsData) {
      return <div>No data available</div>;
    }

    function stripHtmlTags(html: string): string {
        return html.replace(/(<([^>]+)>)/gi, "");
      }
  
    return (
      <section className="w-full py-20">
        <div className="grid lg:grid-cols-2 gap-8 w-11/12 lg:w-8/12 m-auto">
        {pages?.map((page) => (
          <CareerJob
            key={page.node.slug}
            name={page.node.title}
            description={page.node.blocks.map((block) => (
              <div
                key={block.saveContent} // Assuming 'saveContent' is unique
                dangerouslySetInnerHTML={{ __html: block.saveContent }}
              />
            ))}
          />
        ))}
        </div>
      </section>
    );
  }
