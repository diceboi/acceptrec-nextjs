import FAQComponent from "../components/FaqComponent"
import MainHero from "../components/Theme Components/MainHero"

import { gql } from "@apollo/client"
import { getClient } from "../lib/client"

const query = gql`
query getFAQPage {
  page(id: "1584", idType: DATABASE_ID) {
    seo {
      metaDesc
      title
    }
    faq {
      heroTitle
      heroSubtitle
      heroImage {
        altText
        sourceUrl
      }
    }
  }
}
`

export const revalidate = 5;

export async function generateMetadata() {

  const { data: faqpagedata }:any = await getClient().query({query});

  return {
    title: faqpagedata.page.seo.title,
    description: faqpagedata.page.seo.metaDesc
  }
  
}


export default async function Faqpage() {

  const { data: faqpagedata } = await getClient().query({query});

  const faqpage = faqpagedata?.page?.faq;

  return (
    <>
    <MainHero MainTitle={faqpage.heroTitle} SmallTitle={faqpage.heroSubtitle} Text={''} BackgroundImage={faqpage.heroImage?.sourceUrl} BackgroundImageAltText={faqpage.heroImage?.altText}/>
    <FAQComponent />
    </>
  )
}
