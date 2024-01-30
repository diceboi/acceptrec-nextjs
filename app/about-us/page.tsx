import Team from "../components/Team"
import MainHero from "../components/Theme Components/MainHero"
import LeftRightCollumn from "../components/Theme Components/LeftRightCollumn"
import LeftRightGrid from "../components/Theme Components/LeftRightGrid"
import CompanyHighlights from "../components/Theme Components/CompanyHighlights"

import { gql } from "@apollo/client"
import { getClient } from "../lib/client"

const query = gql`
query getAboutUsPage {
    page(id: "1399", idType: DATABASE_ID) {
      aboutUs {
        aboutUsTitle
        aboutUsSubtitle
        aboutUsHeroImage {
          sourceUrl
          altText
        }
        companyHighlightsText
        companyHighlightsTitle
        joinUsButtonTitle
        joinUsButtonLink
        joinUsIntroduction
        joinUsImage {
          sourceUrl
          altText
        }
        joinUsText
        joinUsTitle
        ourWhyIntroduction
        ourWhyText
        ourWhyTitle
        ourWhyImage {
          altText
          sourceUrl
        }
        ourWhyImageLeftOrRight
        teamButtonTitle
        teamSubtitle
        teamTitle
        trust1Text
        trust1Title
        trust2Text
        trust2Title
        trust3Text
        trust3Title
        trust4Text
        trust4Title
        trust5Text
        trust5Title
        trust6Text
        trust6Title
        trustSubtitle
        trustTitle
      }
      uri
      title
      slug
      seo {
        title
        metaDesc
      }
    }
  }
`
export const revalidate = 5;

export async function generateMetadata() {

  const { data: aboutuspagedata }:any = await getClient().query({query});

  const aboutUs = aboutuspagedata?.page?.aboutUs || {};

  return {
    title: aboutuspagedata.page.seo.title,
    description: aboutuspagedata.page.seo.metaDesc
  }
  
}


export default async function AboutUs() {

const { data: aboutuspagedata }:any = await getClient().query({query});

const aboutUs = aboutuspagedata?.page?.aboutUs || {};

    return(
        <>
            <MainHero 
                MainTitle={aboutUs.aboutUsTitle} 
                SmallTitle={aboutUs.aboutUsSubtitle} 
                BackgroundImage={aboutUs.aboutUsHeroImage?.sourceUrl} 
                BackgroundImageAltText={aboutUs.aboutUsHeroImage?.altText} 
            />
            <LeftRightCollumn 
                title={aboutUs.ourWhyTitle} 
                subtitle={''} 
                introduction={aboutUs.ourWhyIntroduction} 
                text={aboutUs.ourWhyText} 
                image={aboutUs.ourWhyImage.sourceUrl} 
                imagealt={aboutUs.ourWhyImage.altText} 
                imageposition={aboutUs.ourWhyImageLeftOrRight} 
                link={''} 
                buttontitle={''}
            />
            <LeftRightGrid 
                title={aboutUs.trustTitle} 
                subtitle={aboutUs.trustSubtitle} 
                text={''} 
                trust1Text={aboutUs.trust1Text}
                trust1Title={aboutUs.trust1Title}
                trust2Text={aboutUs.trust2Text}
                trust2Title={aboutUs.trust2Title}
                trust3Text={aboutUs.trust3Text}
                trust3Title={aboutUs.trust3Title}
                trust4Text={aboutUs.trust4Text}
                trust4Title={aboutUs.trust4Title}
                trust5Text={aboutUs.trust5Text}
                trust5Title={aboutUs.trust5Title}
                trust6Text={aboutUs.trust6Text}
                trust6Title={aboutUs.trust6Title}
            />
            <CompanyHighlights 
                title={aboutUs.companyHighlightsTitle} 
                text={aboutUs.companyHighlightsText}
            />
            <LeftRightCollumn 
                title={aboutUs.joinUsTitle} 
                subtitle={''} 
                introduction={aboutUs.joinUsIntroduction} 
                text={aboutUs.joinUsText} 
                image={aboutUs.joinUsImage.sourceUrl} 
                imagealt={aboutUs.joinUsImage.altText} 
                imageposition={aboutUs.ourWhyImageLeftOrRight} 
                link={aboutUs.joinUsButtonLink} 
                buttontitle={aboutUs.joinUsButtonTitle}
            />
            <Team 
                teamSmallTitle={aboutUs.teamSubtitle} 
                teamMainTitle={aboutUs.teamTitle} 
                teamCtaButtonText={aboutUs.teamButtonTitle} 
            />
        </>
    )
}