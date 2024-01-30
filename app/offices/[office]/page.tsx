import BristolOffice from "@/app/components/BristolOffice"
import OfficeHero from "@/app/components/Theme Components/OfficeHero"
import { gql } from "@apollo/client"
import { getClient } from "@/app/lib/client"
import Office from "@/app/components/Theme Components/Office";

const query = gql`
  query getOffices {
  offices {
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

export async function generateMetadata({params}:any) {

  const { data: officespagedata } = await getClient().query({query});

  const officesPageSlug = params.office;
  const edge = officespagedata.offices.edges.find((edge: { node: { slug: any; }; }) => edge.node.slug === officesPageSlug);

  const office = edge ? edge.node : null;

  return {
    title: office.title + ' - Offices - Accept Recruitment',
    description: office.officesNew.aboutTheCity
  }
  
}


export default async function OfficePage({params}:any) {

  const { data: officespagedata } = await getClient().query({query});

  const officesPageSlug = params.office;
  const edge = officespagedata.offices.edges.find((edge: { node: { slug: any; }; }) => edge.node.slug === officesPageSlug);

  const office = edge ? edge.node : null;

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
