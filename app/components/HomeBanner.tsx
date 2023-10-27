'use client'

import { gql } from "@apollo/client"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"
import Image from "next/image"
import Link from "next/link"

const query = gql`
query getBanners {
  banners(where: {status: PUBLISH}) {
    edges {
      node {
        heroBanner {
          bannerPicture {
            altText
            sourceUrl
          }
          bannerTitle
          shortIntroduction
          content
          buttonLinkIfAButtonIsNeeded
          buttonLabel
        }
        slug
      }
    }
  }
}`

export default function HomeBanner({ classname }:any) {

    const { data: bannerdata }:any = useSuspenseQuery(query);

    if (!bannerdata || !bannerdata.banners || !bannerdata.banners.edges || bannerdata.banners.edges.length === 0) {
        // Handle the case where banner data is missing or empty
        return null; // or display an error message
      }
    
      const banner = bannerdata.banners.edges[0].node;

      if (!banner || !banner.slug) {
        // Handle the case where banner or slug is undefined
        return null; // or display an error message
      }

  return (
    <section className={classname}>
        <Link href={bannerdata.banners.edges[0].node.slug}>
        <div className="relative w-11/12 lg:w-8/12 h-[300px] m-auto rounded-3xl -mb-[150px]">
            <Image 
                src={banner.heroBanner.bannerPicture.sourceUrl}  
                fill
                className="w-full"
                placeholder="blur"
                blurDataURL={banner.heroBanner.bannerPicture.sourceUrl}
                style={{
                    objectFit: 'contain'
                }}
                alt={banner.heroBanner.bannerPicture.altText}
            />

        </div>
        </Link>
    </section>
  )
}
