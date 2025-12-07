import React from 'react'
import OurPromise from '../components/OurPromise'
import OurServices from '../components/OurServices'
import CandidateSuccessStories from '../components/CandidateSuccessStories'
import Offices from '../components/Offices'
import CTAHero from '../components/Theme Components/CTAHero'

import { gql } from '@apollo/client'
import { getClient } from '../lib/client'
import ShortBlogs from '../components/Theme Components/ShortBlogs'
import LeftRightGrid from '../components/Theme Components/LeftRightGrid'
import LeftRightCollumn from '../components/Theme Components/LeftRightCollumn'
import Services from '../components/Theme Components/Services'

const query = gql`
query getForCandidatesPage {
  page(id: "1506", idType: DATABASE_ID) {
    seo {
      metaDesc
      title
    }
    forCandidates {
      blogType
      blogsSubtitle
      blogsTitle
      candidateSubtitle
      candidateTitle
      contactUsSubtitle
      contactUsTitle
      heroButtonText
      heroCtaButtonLink
      heroBackgroundImage {
        altText
        sourceUrl
      }
      heroSlidingTexts
      heroSubtitle
      heroText
      heroTitle
      jobFilteringButtonLink
      jobFilteringButtonText
      jobFilteringImage {
        altText
        sourceUrl
      }
      jobFilteringSubtitle
      jobFilteringText
      jobFilteringTitle
      listeningSibtitle
      registrationButtonLink
      listeningTitle
      registrationButtonText
      registrationImage {
        altText
        sourceUrl
      }
      registrationSubtitle
      registrationText
      registrationTitle
      servicesSubtitle
      servicesText
      servicesTitle
      slaveryButtonLink
      slaveryButtonText
      slaveryImage {
        altText
        sourceUrl
      }
      slaverySubtitle
      slaveryText
      slaveryTitle
      jobFilteringIntroduction
      jobFilteringImagePosition
      registrationIntroduction
      registrationImagePosition
      slaveryIntroduction
      slaveryImagePosition
    }
  }
}
`
export const revalidate = 5;

export async function generateMetadata() {

  const { data: forcandidatesdata }: any = await getClient().query({ query })
  const forcandidates = forcandidatesdata?.page?.forCandidates || {};

  return {
    title: forcandidatesdata.page.seo.title,
    description: forcandidatesdata.page.seo.metaDesc,
    alternates: {
      canonical: '/for-candidates',
    },
  }

}


export default async function ForCandidates() {

  const { data: forcandidatesdata }: any = await getClient().query({ query })
  const forcandidates = forcandidatesdata?.page?.forCandidates || {};

  return (
    <>
      <CTAHero
        title={forcandidates.heroTitle}
        subtitle={forcandidates.heroSubtitle}
        text={forcandidates.heroText}
        link={forcandidates.heroCtaButtonLink}
        bgimage={forcandidates.heroBackgroundImage?.sourceUrl}
        bgimagealt={forcandidates.heroBackgroundImage?.altText}
        buttontext={forcandidates.heroButtonText}
        slidingtexts={forcandidates.heroSlidingTexts}
      />
      <OurPromise />
      <LeftRightCollumn
        title={forcandidates.registrationTitle}
        subtitle={forcandidates.registrationSubtitle}
        introduction={forcandidates.registrationIntroduction}
        text={forcandidates.registrationText}
        image={forcandidates.registrationImage?.sourceUrl}
        imagealt={forcandidates.registrationImage?.altText}
        imageposition={forcandidates.registrationImagePosition}
        link={forcandidates.registrationButtonLink}
        buttontitle={forcandidates.registrationButtonText}
      />
      <LeftRightCollumn
        title={forcandidates.jobFilteringTitle}
        subtitle={forcandidates.jobFilteringSubtitle}
        introduction={forcandidates.jobFilteringIntroduction}
        text={forcandidates.jobFilteringText}
        image={forcandidates.jobFilteringImage?.sourceUrl}
        imagealt={forcandidates.jobFilteringImage?.altText}
        imageposition={forcandidates.jobFilteringImagePosition}
        link={forcandidates.jobFilteringButtonLink}
        buttontitle={forcandidates.jobFilteringButtonText}
      />
      <LeftRightCollumn
        title={forcandidates.slaveryTitle}
        subtitle={forcandidates.slaverySubtitle}
        introduction={forcandidates.slaveryIntroduction}
        text={forcandidates.slaveryText}
        image={forcandidates.slaveryImage?.sourceUrl}
        imagealt={forcandidates.slaveryImage?.altText}
        imageposition={forcandidates.slaveryImagePosition}
        link={forcandidates.slaveryButtonLink}
        buttontitle={forcandidates.slaveryButtonText}
      />
      <Services title={forcandidates.servicesTitle} subtitle={forcandidates.servicesSubtitle} text={forcandidates.servicesText} />
      <CandidateSuccessStories />
      <Offices title={forcandidates.contactUsTitle} subtitle={forcandidates.contactUsSubtitle} text={forcandidates.contactUsText} />
      <ShortBlogs title={forcandidates.blogsTitle} subtitle={forcandidates.blogsSubtitle} buttontext={forcandidates.blogsButtonText} blogtype={forcandidates.blogType} />
    </>
  )
}
