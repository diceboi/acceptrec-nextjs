"use client"

import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"
import { FiArrowUpRight } from "react-icons/fi"
import { gql } from "@apollo/client"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr"

const query = gql`
query getBanners {
  banners {
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

type Banner = {
  node: {
    heroBanner: {
      bannerPicture: {
        altText: string;
        sourceUrl: string;
      };
      bannerTitle: string;
      shortIntroduction: string;
      content: string;
      buttonLinkIfAButtonIsNeeded: string;
      buttonLabel: string;
    };
    slug: string;
  };
};

type QueryResult = {
  banners: {
    edges: Banner[];
  };
};

export default function Bannerslug() {

  const { data } = useSuspenseQuery<QueryResult>(query);
  const { bannerslug } = useParams();

  const banner = data?.banners?.edges?.find(banner => banner.node.slug === bannerslug);

  if(banner) {
  return (
    <section className='w-full py-20'>
        <div className='flex flex-col w-11/12 lg:w-6/12 gap-20 m-auto'>
            <h1 className="text-5xl font-black text-left lg:text-center">{banner.node.heroBanner.bannerTitle}</h1>
            <Image src={banner.node.heroBanner.bannerPicture.sourceUrl} width={1280} height={853} alt=""/>
            <article className="flex flex-col gap-4">
                <p className="font-bold">{banner.node.heroBanner.shortIntroduction}</p>
                <div dangerouslySetInnerHTML={{ __html: banner.node.heroBanner.content }} />
            </article>

            {banner.node.heroBanner.buttonLinkIfAButtonIsNeeded && ( // Check if it's not null
              <Link href={banner.node.heroBanner.buttonLinkIfAButtonIsNeeded} target="_blank" className="w-fit m-auto">
                <button
                  type="submit"
                  className="group flex justify-between items-center w-fit bg-[#00afaa] hover:bg-[#00a39e] hover:shadow-xl hover:gap-4 shadow-lg text-white text-xl hover:shadow-[#00afa93b] hover:w-fit p-4 rounded-full transition-all duration-200 gap-2"
                >
                  {banner.node.heroBanner.buttonLabel}
                  <FiArrowUpRight className="right-4 recruitment-icon w-6 h-6 group-hover:right-6 ease-out duration-200" />
                </button>
              </Link>
            )}
        </div>

    </section>
  ) 
} else {
  // Handle the case where `banner` is undefined
  return <div>Loading...</div>; // or display an error message
}
}
