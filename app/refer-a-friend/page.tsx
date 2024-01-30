import ReferAFriend from "../components/ReferAFriend"
import ContactReferAFriend from "../components/ContactReferAFriend"
import MainHero from "../components/Theme Components/MainHero"

import { gql } from "@apollo/client"
import { getClient } from "../lib/client"
import LeftRightCollumn from "../components/Theme Components/LeftRightCollumn"
import Link from "next/link"

const query = gql`
query getReferAFriend {
    page(id: "1549", idType: DATABASE_ID) {
    referAFriend {
      heroTitle
      heroSubtitle
      heroImage {
        altText
        sourceUrl
      }
      paragraph1Text
      paragraph1Title
      paragraph2Text
      paragraph2Title
      paragraph3Text
      paragraph3Title
      recommendationImage {
        altText
        sourceUrl
      }
      recommendationText
      recommendationTitle
      referBlockImage {
        altText
        sourceUrl
      }
      referBlockText
      referBlockTitle
      referralBonus1
      referralBonus1Text
      referralBonus2
      referralBonus2Text
      referralBonusesTitle
      recommendationButtonLink
      recommendationButtonText
      recommendationImagePosition
      recommendationIntroduction
      recommendationSubtitle
      referBlockButtonLink
      referBlockButtonTitle
      referBlockImagePosition
      referBlockIntroduction
      referBlockSubtitle
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

  const { data: referpagedata }:any = await getClient().query({query});

  return {
    title: referpagedata.page.seo.title,
    description: referpagedata.page.seo.metaDesc
  }
  
}


export default async function ReferAFriendPage() {

  const { data: referpagedata } = await getClient().query({query});

  const referpage = referpagedata?.page?.referAFriend;

  return (
    <>
        <MainHero MainTitle={referpage.heroTitle} SmallTitle={referpage.heroSubtitle} Text={''} BackgroundImage={referpage.heroImage?.sourceUrl} BackgroundImageAltText={referpage.heroImage?.altText}/>
        <LeftRightCollumn 
                title={referpage.referBlockTitle} 
                subtitle={referpage.referBlockSubtitle} 
                introduction={referpage.referBlockIntroduction} 
                text={referpage.referBlockText} 
                image={referpage.referBlockImage?.sourceUrl} 
                imagealt={referpage.referBlockImage?.altText} 
                imageposition={referpage.referBlockImagePosition} 
                link={referpage.referBlockButtonLink} 
                buttontitle={referpage.referBlockButtonTitle}
        />
        <LeftRightCollumn 
                title={referpage.recommendationTitle} 
                subtitle={referpage.recommendationSubtitle} 
                introduction={referpage.recommendationIntroduction} 
                text={referpage.recommendationText} 
                image={referpage.recommendationImage?.sourceUrl} 
                imagealt={referpage.recommendationImage?.altText} 
                imageposition={referpage.recommendationImagePosition} 
                link={referpage.recommendationButtonLink} 
                buttontitle={referpage.recommendationButtonText}
        />
        <div className="flex flex-col gap-8 w-11/12 lg:w-8/12 m-auto">
            <div className="flex flex-col items-center w-full">
                <h2 className="text-4xl font-black">{referpage.referralBonusesTitle}</h2>
                <div className="flex flex-col lg:flex-row gap-8 w-full py-20">
                    <div className="flex flex-col gap-8 items-center justify-center">
                        <h3 className="w-1/2 bg-[#00afaa] rounded-3xl text-5xl text-center text-white font-black p-8 shadow-special">{referpage.referralBonus1}</h3>
                        <p className="lg:w-1/2 text-center">{referpage.referralBonus1Text}</p>
                    </div>
                    <div className="flex flex-col gap-8 items-center justify-center">
                        <h3 className="w-1/2 bg-[#00afaa] rounded-3xl text-5xl text-center text-white font-black p-8 shadow-special">{referpage.referralBonus2}</h3>
                        <p className="lg:w-1/2 text-center">{referpage.referralBonus2Text}</p>
                    </div>

                </div>
            </div>
            
            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-black">{referpage.paragraph1Title}</h2>
                <p>{referpage.paragraph1Text}</p>
            </div>

            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-black">{referpage.paragraph2Title}</h2>
                <p>{referpage.paragraph2Text}</p>
            </div>

            <div className="flex flex-col gap-4">
                <h2 className="text-2xl font-black">{referpage.paragraph3Title}</h2>
                <p>{referpage.paragraph3Text}</p>
                <Link href="/refer-terms-and-conditions" className="underline">Terms and conditions</Link>
            </div>
        </div>
        <ContactReferAFriend classname={'flex flex-col w-11/12 lg:w-8/12 gap-4 m-auto py-10'}/>
    </>
  )
}
