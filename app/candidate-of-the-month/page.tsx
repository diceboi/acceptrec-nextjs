import CandidatesOfTheMonth from '../components/CandidatesOfTheMonth'
import MainHero from '../components/Theme Components/MainHero'

import { gql } from '@apollo/client'
import { getClient } from '../lib/client'

const query = gql`
query getCandidatePage {
  page(id: "1545", idType: DATABASE_ID) {
    candidateOfTheMonth {
      heroTitle
      heroSubtitle
      heroIntroduction
      heroImage {
        altText
        sourceUrl
      }
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

  const { data: candidatepagedata }:any = await getClient().query({query});

  return {
    title: candidatepagedata.page.seo.title,
    description: candidatepagedata.page.seo.metaDesc
  }
  
}


export default async function CandidateOfTheMonth() {

  const { data: candidatepagedata } = await getClient().query({query});

  const candidatepage = candidatepagedata?.page?.candidateOfTheMonth;

  return (
    <>
        <MainHero MainTitle={candidatepage.heroTitle} SmallTitle={''} Text={candidatepage.heroIntroduction} BackgroundImage={candidatepage.heroImage?.sourceUrl} BackgroundImageAltText={candidatepage.heroImage?.altText}/>
        <CandidatesOfTheMonth />
    </>
  )
}
