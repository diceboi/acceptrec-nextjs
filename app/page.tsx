import Hero from './components/hero'
import Recruitment from './components/recruitment'
import Advantages from './components/advantages'
import Logocarousel from './components/logocarousel'
import Industries from './components/industries'
import Rated from './components/rated'
import Team from './components/Theme Components/Team'
import RecentBlogs from './components/RecentBlogs'

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

  const { data: hompagedata }: any = await getClient().query({ query });

  const homepage = hompagedata?.page?.homepage || {};

  return {
    title: hompagedata.page.seo.title,
    description: hompagedata.page.seo.metaDesc,
    alternates: {
      canonical: '/',
    },
  }

}


export default async function Home() {

  const { data: hompagedata }: any = await getClient().query({ query });

  const homepage = hompagedata?.page?.homepage || {};

  // Schema.org structured data for Organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EmploymentAgency",
    "name": "Accept Recruitment",
    "url": "https://acceptrec.co.uk",
    "logo": "https://acceptrec.co.uk/Accept-Stacked-Logo-with-Strapline-RGB300.webp",
    "description": "Leading recruitment agency in Leicester, Coventry & Tamworth. Specialising in Industrial, Warehouse & Driving roles. Highest rated with 4.8 stars from 950+ reviews.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "950",
      "bestRating": "5"
    },
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Unit 4, Oswin Rd, Forest Business Park",
        "addressLocality": "Leicester",
        "addressRegion": "Leicestershire",
        "postalCode": "LE3 1HR",
        "addressCountry": "GB"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "First Floor, Office, 1 Harnall Row",
        "addressLocality": "Coventry",
        "addressRegion": "West Midlands",
        "postalCode": "CV1 5DW",
        "addressCountry": "GB"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Unit 2, Manor Court, 95 Lichfield St",
        "addressLocality": "Tamworth",
        "addressRegion": "Staffordshire",
        "postalCode": "B79 7QF",
        "addressCountry": "GB"
      }
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+44-116-218-2133",
        "contactType": "customer service",
        "areaServed": "GB",
        "availableLanguage": "English",
        "name": "Leicester Office"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+44-247-718-0356",
        "contactType": "customer service",
        "areaServed": "GB",
        "availableLanguage": "English",
        "name": "Coventry Office"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+44-1827-438334",
        "contactType": "customer service",
        "areaServed": "GB",
        "availableLanguage": "English",
        "name": "Tamworth Office"
      }
    ],
    "sameAs": [
      "https://www.google.com/search?q=accept+recruitment+leicester"
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Leicester"
      },
      {
        "@type": "City",
        "name": "Coventry"
      },
      {
        "@type": "City",
        "name": "Tamworth"
      },
      {
        "@type": "City",
        "name": "Nuneaton"
      },
      {
        "@type": "City",
        "name": "Warwick"
      }
    ],
    "knowsAbout": [
      "Warehouse Recruitment",
      "Industrial Recruitment",
      "Driving Jobs",
      "Food Production Recruitment",
      "Technical Recruitment",
      "Logistics Recruitment"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <Hero />
      <Industries industriesMainTitle={homepage.industriesMainTitle} industriesSmallIntroduction={homepage.industriesSmallIntroduction} industriesSmallTitle={homepage.industriesSmallTitle} />
      <Recruitment recruitmentMainTitle={homepage.recruitmentMainTitle} recruitmentSmallTitle={homepage.recruitmentSmallTitle} />
      <Advantages advantagesIntroduction={homepage.advantagesIntroduction} advantagesMainTitle={homepage.advantagesMainTitle} advantagesSmallTitle={homepage.advantagesSmallTitle} />
      <Rated strengthsIntroduction={homepage.strengthsIntroduction} strengthsMainTitle={homepage.strengthsMainTitle} strengthsSmallTitle={homepage.strengthsSmallTitle} />
      <Team teamCtaButtonText={homepage.teamCtaButtonText} teamMainTitle={homepage.teamMainTitle} teamSmallTitle={homepage.teamSmallTitle} />
      <RecentBlogs />
      <Logocarousel />
    </>
  )
}