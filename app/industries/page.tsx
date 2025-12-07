import IndustriesInner from "../components/IndustriesInner";
import MainHero from "../components/Theme Components/MainHero";

import { gql } from "@apollo/client";
import { getClient } from "../lib/client";
import Industries from "../components/industries";

const query = gql`
query getIndustriesPage {
  page(id: "1488", idType: DATABASE_ID) {
    industriespage {
      heroTitle
      heroSubtitle
      heroText
      heroImage {
        altText
        sourceUrl
      }
      industriesTitle
      industriesSubtitle
      industriesSmallIntroduction
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

  const { data: industriespagedata }: any = await getClient().query({ query });

  return {
    title: industriespagedata.page.seo.title,
    description: industriespagedata.page.seo.metaDesc,
    alternates: {
      canonical: `/industries`
    }
  }

}

export default async function IndustriesPage() {

  const { data: industriespagedata }: any = await getClient().query({ query })

  const industries = industriespagedata?.page?.industriespage || {};

  return (
    <>
      <MainHero MainTitle={industries.heroTitle} SmallTitle={industries.heroSubtitle} Text={industries.heroText} BackgroundImage={industries.heroImage?.sourceUrl} BackgroundImageAltText={industries.heroImage?.altText} />
      <Industries industriesMainTitle={industries.industriesTitle} industriesSmallIntroduction={industries.industriesSmallIntroduction} industriesSmallTitle={industries.industriesSubtitle} />
    </>
  )
}
