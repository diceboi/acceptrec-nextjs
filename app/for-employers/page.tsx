import ManagedServices from '../components/ManagedServices'
import Onboarding from '../components/Onboarding'
import Industries from '../components/industries'
import Team from '../components/Theme Components/Team'
import { gql } from '@apollo/client'
import { getClient } from '../lib/client'
import Standards from '../components/standards'
import CTAHero from '../components/Theme Components/CTAHero'
import ShortBlogs from '../components/Theme Components/ShortBlogs'

export const revalidate = 5;

const query = gql`
query getForEmployers {
  page(id: "1448", idType: DATABASE_ID) {
    seo {
      metaDesc
      title
    }
    forEmployers {
      blogsButtonText
      blogsSubtitle
      blogsTitle
      blogType
      heroBackgroundImage {
        altText
        sourceUrl
      }
      heroCtaButtonLink
      heroCtaButtonText
      heroSlidingTexts
      heroSubtitle
      heroText
      heroTitle
      industriesSubtitle
      industriesText
      industriesTitle
      managedServicesSubtitle
      managedServicesText
      managedServicesTitle
      onboardingText
      onboardingTitle
      ourStandardsSubtitle
      ourStandardsText
      ourStandardsTitle
      teamButtonText
      teamSubtitle
      teamText
      teamTitle
    }
  }
}
`

export async function generateMetadata() {

  const { data: foremployersdata }: any = await getClient().query({ query })

  return {
    title: foremployersdata.page.seo.title,
    description: foremployersdata.page.seo.metaDesc,
    alternates: {
      canonical: '/for-employers',
    },
  }

}

export default async function ForEmployers() {

  const { data: foremployersdata }: any = await getClient().query({ query })

  const foremployers = foremployersdata?.page?.forEmployers || {};

  return (
    <>
      <CTAHero
        title={foremployers.heroTitle}
        subtitle={foremployers.heroSubtitle}
        text={foremployers.heroText}
        link={foremployers.heroCtaButtonLink}
        bgimage={foremployers.heroBackgroundImage?.sourceUrl}
        bgimagealt={foremployers.heroBackgroundImage?.altText}
        buttontext={foremployers.heroCtaButtonText}
        slidingtexts={foremployers.heroSlidingTexts}
      />
      <ManagedServices title={foremployers.managedServicesTitle} subtitle={foremployers.managedServicesSubtitle} text={foremployers.managedServicesText} />
      <Onboarding title={foremployers.onboardingTitle} text={foremployers.onboardingText} />
      <Industries industriesMainTitle={foremployers.industriesTitle} industriesSmallIntroduction={foremployers.industriesText} industriesSmallTitle={foremployers.industriesSubtitle} />
      <Standards title={foremployers.ourStandardsTitle} subtitle={foremployers.ourStandardsSubtitle} text={foremployers.ourStandardsText} />
      <Team teamSmallTitle={foremployers.teamSubtitle} teamMainTitle={foremployers.teamTitle} teamCtaButtonText={foremployers.teamButtonText} teamText={foremployers.teamText} />
      <ShortBlogs title={foremployers.blogsTitle} subtitle={foremployers.blogsSubtitle} buttontext={foremployers.blogsButtonText} blogtype={foremployers.blogType} />
    </>
  )
}
