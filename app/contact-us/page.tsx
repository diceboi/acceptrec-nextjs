import { gql } from "@apollo/client";
import { getClient } from "../lib/client";
import ContactForm from '../components/ContactForm'
import Offices from '../components/Offices'
import MainHero from "../components/Theme Components/MainHero";
import { TbPhone  } from "react-icons/tb"

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
    <section className="flex flex-col items-center gap-8 w-full py-20">
      <div className="lg:w-8/12 w-11/12 flex flex-col items-center gap-8">
      <ContactForm classname={'flex flex-col lg:w-1/2 w-11/12 gap-4 m-auto py-10'}/>
      <div className="flex flex-row gap-4">
        <h2 className="text-2xl text-[#00afaa] font-bold">Call us:</h2>
          <a
            href="tel:01162182133"
            className="text-lg flex flex-nowrap justify-center items-center gap-2"
          >
            <TbPhone className="text-[#00afaa] min-h-6 w-auto" />
            0116 218 2133
          </a>

          <a
            href="tel:08453533237"
            className="text-lg flex flex-nowrap justify-center items-center gap-2"
          >
            <TbPhone className="text-[#00afaa] min-h-6 w-auto" />
            0845 353 3237
          </a>
          
          
        </div>
      </div>
      
    </section>
    </>
  )
}
