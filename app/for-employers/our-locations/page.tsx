import { gql } from "@apollo/client";
import { getClient } from "@/app/lib/client";
import PrimaryHero from "@/app/components/Theme Components/PrimaryHero";
import Offices from "@/app/components/Offices";
import MainHero from "@/app/components/Theme Components/MainHero";
import OfficesEmployers from "@/app/components/OfficesEmployers";

const query = gql`
query getOfficesPage {
  page(id: "306", idType: DATABASE_ID) {
    seo {
      metaDesc
      title
    }
    officespage {
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

  const { data: officespagedata }:any = await getClient().query({query});

  return {
    title: officespagedata.page.seo.title,
    description: officespagedata.page.seo.metaDesc
  }
  
}

  
  export default async function EmployersLocationPage() {

    const { data: officespagedata } = await getClient().query({query});

    const officespage = officespagedata?.page?.officespage;

    return (
      <>
        <MainHero MainTitle={officespage.heroTitle} SmallTitle={officespage.heroSubtitle} Text={''} BackgroundImage={officespage.heroImage?.sourceUrl} BackgroundImageAltText={officespage.heroImage?.altText} />
        <OfficesEmployers title={officespage.officesTitle} subtitle={officespage.officesSubtitle} text={''}/>
      </>
    );
  }
