import Onboarding from '../components/Onboarding'
import MainHero from '../components/Theme Components/MainHero'

import { gql } from '@apollo/client'
import { getClient } from '../lib/client'

const query = gql`
query getOnboardingPage {
  page(id: "1497", idType: DATABASE_ID) {
    onboardingProcesspage {
      heroTitle
      heroSubtitle
      heroText
      heroImage {
        altText
        sourceUrl
      }
      onboardingTitle
      onboardingText
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

  const { data: onboardingdata }: any = await getClient().query({ query });

  return {
    title: onboardingdata.page.seo.title,
    description: onboardingdata.page.seo.metaDesc,
    alternates: {
      canonical: `/onboarding-process`
    }
  }

}

export default async function OnboardingProcess() {

  const { data: onboardingdata }: any = await getClient().query({ query })

  const onboarding = onboardingdata?.page?.onboardingProcesspage || {};

  return (
    <>
      <MainHero MainTitle={onboarding.heroTitle} SmallTitle={onboarding.heroSubtitle} Text={onboarding.heroText} BackgroundImage={onboarding.heroImage?.sourceUrl} BackgroundImageAltText={onboarding.heroImage?.altText} />
      <Onboarding title={onboarding.onboardingTitle} text={onboarding.onboardingText} />
    </>
  )
}
