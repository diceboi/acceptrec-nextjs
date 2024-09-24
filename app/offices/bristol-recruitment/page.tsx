import BristolOffice from "@/app/components/BristolOffice"
import OfficeHero from "@/app/components/Theme Components/OfficeHero"
import { gql } from "@apollo/client"
import { getClient } from "@/app/lib/client"
import Office from "@/app/components/Theme Components/Office";

const query = gql`
  query getOffices {
  offices(where: {title: "Bristol"}) {
    edges {
      node {
        officesNew {
          aboutTheCity
          jobsInTheCity
          livingInTheCity
          mapCoordinates
          phoneNumber
          officeImage {
            altText
            sourceUrl
          }
        }
        slug
        id
        title
      }
    }
  }
}
`;

export const revalidate = 5;

export async function generateMetadata() {

  const { data: officespagedata } = await getClient().query({query});
  
  const office = officespagedata?.offices?.edges?.[0]?.node;

  return {
    title: office.title + ' - Offices - Accept Recruitment',
    description: office.officesNew.aboutTheCity,
    alternates: {
      canonical: `https://www.acceptrec.co.uk/offices/${office.slug}`
    }
  }
  
}


export default async function BristolOfficePage() {

    const { data: officespagedata } = await getClient().query({query});
  
    const office = officespagedata?.offices?.edges?.[0]?.node;

  return (
    <>
        <OfficeHero 
          title={office.title} 
          subtitle={'Offices'} 
          bgimage={office.officesNew.officeImage?.sourceUrl}
        />
        <Office 
          phonenumber={office.officesNew.phoneNumber} 
          about={office.officesNew.aboutTheCity} 
          living={office.officesNew.livingInTheCity} 
          jobs={office.officesNew.jobsInTheCity} 
          coordinates={office.officesNew.mapCoordinates}
        />
    </>
  )
}
