import Hero from './components/hero'
import Recruitment from './components/recruitment'
import Advantages from './components/advantages'
import Logocarousel from './components/logocarousel'
import Industries from './components/industries'
import Rated from './components/rated'
import Team from './components/Team'

import { gql } from '@apollo/client'
import { getClient } from './lib/client'

/*Fetch*/

const query = gql`
query getHomePage {
  page(id: "1368", idType: DATABASE_ID) {
    homepage {
      advantagesIntroduction
      advantagesMainTitle
      advantagesSmallTitle
      fieldGroupName
      industriesMainTitle
      industriesSmallIntroduction
      industriesSmallTitle
      recruitmentMainTitle
      recruitmentSmallTitle
      strengthsIntroduction
      strengthsMainTitle
      strengthsSmallTitle
      teamCtaButtonText
      teamMainTitle
      teamSmallTitle
    }
    title
    seo {
      metaDesc
      focuskw
      title
    }
  }
}`


export const revalidate = 5;

export async function generateMetadata() {

  const { data: hompagedata }:any = await getClient().query({query});

  const homepage = hompagedata?.page?.homepage || {};

  return {
    title: hompagedata.page.seo.title,
    description: hompagedata.page.seo.metaDesc
  }
  
}


export default async function Home() {

  const { data: hompagedata }:any = await getClient().query({query});

  const homepage = hompagedata?.page?.homepage || {};

  return (
    <>
      <Hero/>
      <Industries industriesMainTitle={homepage.industriesMainTitle} industriesSmallIntroduction={homepage.industriesSmallIntroduction} industriesSmallTitle={homepage.industriesSmallTitle}/> 
      <Recruitment recruitmentMainTitle={homepage.recruitmentMainTitle} recruitmentSmallTitle={homepage.recruitmentSmallTitle}/>
      <Advantages advantagesIntroduction={homepage.advantagesIntroduction} advantagesMainTitle={homepage.advantagesMainTitle} advantagesSmallTitle={homepage.advantagesSmallTitle}/>
      <Rated strengthsIntroduction={homepage.strengthsIntroduction} strengthsMainTitle={homepage.strengthsMainTitle} strengthsSmallTitle={homepage.strengthsSmallTitle}/>
      <Team teamCtaButtonText={homepage.teamCtaButtonText} teamMainTitle={homepage.teamMainTitle} teamSmallTitle={homepage.teamSmallTitle}/>
      <Logocarousel/>
    </>
  )
}