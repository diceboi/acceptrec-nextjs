import MainHero from "@/app/components/Theme Components/MainHero";

import { gql } from "@apollo/client";
import { getClient } from "@/app/lib/client";
import ShortlistedCandidates from "@/app/components/ShortlistedCandidates";

const query = gql`
query getShortlistedCandidates {
  page(id: "1479", idType: DATABASE_ID) {
    shortlistedCandidatesPage {
      heroTitle
      heroSubtitle
      heroText
      heroImage {
        altText
        sourceUrl
      }
      shortlistedTitle
      shortlistedSubtitle
      shortlistedText
      shortlistedButtonText
    }
    seo {
      metaDesc
      title
    }
  }
}
`

export const revalidate = 5;

export async function generateMetadata() {

  const { data: shortlistedcandidatesdata }: any = await getClient().query({ query });

  return {
    title: shortlistedcandidatesdata.page.seo.title,
    description: shortlistedcandidatesdata.page.seo.metaDesc,
    alternates: {
      canonical: `/for-employers/shortlisted-candidates`
    }
  }

}


export default async function ShortlistedCandidatesPage() {

  const { data: shortlistedcandidatesdata }: any = await getClient().query({ query })

  const shortlistedcandidates = shortlistedcandidatesdata?.page?.shortlistedCandidatesPage || {};

  return (
    <>
      <MainHero MainTitle={shortlistedcandidates.heroTitle} SmallTitle={shortlistedcandidates.heroSubtitle} Text={shortlistedcandidates.heroText} BackgroundImage={shortlistedcandidates.heroImage?.sourceUrl} BackgroundImageAltText={shortlistedcandidates.heroImage?.altText} classname={"bg-gradient-to-br from-white to-[#00afa917] pb-10 pt-16 lg:pt-0"} />
      <ShortlistedCandidates title={shortlistedcandidates.shortlistedTitle} subtitle={shortlistedcandidates.shortlistedSubtitle} text={shortlistedcandidates.shortlistedText} buttontext={shortlistedcandidates.shortlistedButtonText} />
    </>
  )
}

