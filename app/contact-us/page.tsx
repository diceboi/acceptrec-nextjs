import { gql } from "@apollo/client";
import { getClient } from "../lib/client";
import ContactForm from '../components/ContactForm'
import Offices from '../components/Offices'
import MainHero from "../components/Theme Components/MainHero";

const query = gql`
query getContactPage {
  page(id: "1602", idType: DATABASE_ID) {
    seo {
      metaDesc
      title
    }
    contactUs {
      heroTitle
      heroSubtitle
      heroImage {
        altText
        sourceUrl
      }
      officesTitle
      officesSubtitle
    }
  }
}`

export const revalidate = 5;

export async function generateMetadata() {

  const { data: contactpagedata }:any = await getClient().query({query});

  return {
    title: contactpagedata.page.seo.title,
    description: contactpagedata.page.seo.metaDesc
  }
  
}

export default async function ContactUs() {

  const { data: contactpagedata } = await getClient().query({query});

  const contactpage = contactpagedata?.page?.contactUs;

  return (
    <>
    <MainHero MainTitle={contactpage.heroTitle} SmallTitle={contactpage.heroSubtitle} Text={''} BackgroundImage={contactpage.heroImage?.sourceUrl} BackgroundImageAltText={contactpage.heroImage?.altText}/>
    <ContactForm classname={'flex flex-col lg:w-1/2 w-11/12 gap-4 m-auto py-10'}/>
    <Offices title={contactpage.officesTitle} subtitle={contactpage.officesSubtitle} text={''}/>
    </>
  )
}
