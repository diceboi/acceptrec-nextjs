import Link from "next/link"
import Image from "next/image"
import { FiArrowUpRight } from "react-icons/fi"
import { gql } from "@apollo/client"
import { getClient } from "../lib/client"

const query = gql`
query getOldPosts {
  oldPosts (first: 1000) {
    edges {
      node {
        blocks {
          saveContent
          order
        }
        featuredImage {
          node {
            altText
            sourceUrl
          }
        }
        slug
        title
        date
        seo {
          title
          metaDesc
        }
      }
    }
  }
}`

export const revalidate = 5;

export async function generateMetadata({ params }:any) {

  const { oldpost } = params;

  const { data: oldpostdata }:any = await getClient().query({query});

  const posts = oldpostdata?.oldPosts?.edges || {};

  const foundOldpost = posts.find((post: { node: { slug: string | string[] } }) => post.node.slug === oldpost);

  return {
    title: foundOldpost?.node.seo?.title,
    description: foundOldpost?.node.seo?.metaDesc
  }
}

export default async function OldPosts({ params }:any) {

  const { oldpost } = params;

  const { data: oldpostdata }:any = await getClient().query({query})

  const posts = oldpostdata?.oldPosts?.edges || {};

  const foundOldpost = posts.find((post: { node: { slug: string | string[] } }) => post.node.slug === oldpost);

  if (foundOldpost) {
    return (
      <section className="w-full flex flex-col py-20 gap-10">
        <div className="relative flex flex-col ">
          <div className="relative flex flex-col w-11/12 lg:w-6/12 m-auto justify-end p-4 h-[50vh] rounded-t-3xl overflow-hidden">
            <Image
              src={foundOldpost.node.featuredImage.node.sourceUrl}
              alt={foundOldpost.node.featuredImage.node.altText}
              fill
              style={{objectFit: "cover", objectPosition: "center", zIndex: "-1"}}
            />
            <h1 className="text-5xl font-black text-left lg:text-center text-white z-10">{foundOldpost.node.title}</h1>
            <div className='absolute w-full h-3/4 lg:h-1/2 bottom-0 right-0 bg-gradient-to-t from-[#312252] to-[#31225200]'></div>
          </div>
          <div className='absolute w-full h-3/4 lg:h-full bottom-0 right-0 bg-gradient-to-t from-[#3122521f] to-[#31225200]'></div>
        </div>

        <article className="flex flex-col w-11/12 lg:w-6/12 m-auto gap-4">
          {/* Adjust the field name accordingly */}
          {foundOldpost.node.blocks.map((block: any, index: any) => (
          <div
            key={index}
            className="flex flex-col gap-2"
            dangerouslySetInnerHTML={{ __html: block.saveContent }}
          />
          ))}
        </article>
        
      </section>
    );
  } else {
    return <div>Loading...</div>; // or display an error message
  }
}