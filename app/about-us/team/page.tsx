import TeamInner from "@/app/components/TeamInner";
import TeamHero from "@/app/components/Theme Components/TeamHero";
import Team from "@/app/components/Team";
import MainHero from "@/app/components/Theme Components/MainHero";

import { gql } from "@apollo/client";
import { getClient } from "@/app/lib/client";
import { Metadata } from "next";

const query = gql`
query getMeetTheTeam {
  page(id: "1436", idType: DATABASE_ID) {
    meetTheTeam {
      heroTitle
      heroSubtitle
      heroPicture {
        altText
        sourceUrl
      }
      teamTitle
      teamSubtitle
      teamText
      teamButtonText
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

  const { data: meettheteampagedata }:any = await getClient().query({query});

  return {
    title: meettheteampagedata.page.seo.title,
    description: meettheteampagedata.page.seo.metaDesc
  }
  
}


export default async function TeamPage() {

const { data: meettheteampagedata }:any = await getClient().query({query});

const meettheteam = meettheteampagedata?.page?.meetTheTeam || {};

  return (
    <>
        <MainHero MainTitle={meettheteam.heroTitle} SmallTitle={meettheteam.heroSubtitle} BackgroundImage={meettheteam.heroPicture?.sourceUrl} BackgroundImageAltText={meettheteam.heroPicture?.altText} />
        <Team teamSmallTitle={meettheteam.teamSubtitle} teamMainTitle={meettheteam.teamTitle} teamCtaButtonText={meettheteam.teamButtonText} teamText={meettheteam.teamText}/>
    </>
  )
}
