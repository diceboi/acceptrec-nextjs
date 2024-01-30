import { MetadataRoute } from "next";
import { gql } from "@apollo/client";
import { getClient } from "./lib/client";

const query1 = gql`
query getIndustries {
  industries {
    edges {
        node {
            industries {
                mainTitle
                mainText
                mainSubtitle
                mainImage {
                    sourceUrl
                    altText
                }
                innerTitle
                innerText
                innerImage {
                    sourceUrl
                    altText
                }
                gridTitle
                gridText
                gridSubtitle
                gridItem4Title
                gridItem4Text
                gridItem3Title
                gridItem3Text
                gridItem2Title
                gridItem2Text
                gridItem1Title
                gridItem1Text
            }
            title
            uri
            slug
        }
    }
  }
}
`

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

   // const { data: industriesdata }:any = await getClient().query({query: query1});
    //const industriepages: MetadataRoute.Sitemap = industriesdata.industries.edges.map(({ node }: any) => ({
     //   url: `https://acceptrec.co.uk/industries/${node.slug}`,
    //}))

    return [
        {
            url: 'https://acceptrec.co.uk/jobs'
        },
        {
            url: 'https://acceptrec.co.uk/about-us'
        },
        {
            url: 'https://acceptrec.co.uk/about-us/team'
        },
        {
            url: 'https://acceptrec.co.uk/clients/national-temporary-worker-day'
        },
        {
            url: 'https://acceptrec.co.uk/for-employers'
        },
        {
            url: 'https://acceptrec.co.uk/for-employers/shortlisted-candidates'
        },
        {
            url: 'https://acceptrec.co.uk/industries'
        },
        //    ...industriepages,
        {
            url: 'https://acceptrec.co.uk/onboarding-process'
        },
        {
            url: 'https://acceptrec.co.uk/for-candidates'
        },
        {
            url: 'https://acceptrec.co.uk/candidate-of-the-month'
        },
        {
            url: 'https://acceptrec.co.uk/manual-handling'
        },
        {
            url: 'https://acceptrec.co.uk/refer-a-friend'
        },
        {
            url: 'https://acceptrec.co.uk/faq'
        },
        {
            url: 'https://acceptrec.co.uk/blogs'
        },
        {
            url: 'https://acceptrec.co.uk/contact-us'
        },
        {
            url: 'https://acceptrec.co.uk/registration'
        },
        {
            url: 'https://acceptrec.co.uk/offices'
        },
        {
            url: 'https://acceptrec.co.uk/complaints-policy'
        },
        {
            url: 'https://acceptrec.co.uk/covid-19'
        },
        {
            url: 'https://acceptrec.co.uk/gdpr'
        },
        {
            url: 'https://acceptrec.co.uk/join-our-team'
        },
        {
            url: 'https://acceptrec.co.uk/manual-handling'
        },
        {
            url: 'https://acceptrec.co.uk/modern-slavery-statement'
        },
        {
            url: 'https://acceptrec.co.uk/pay-query'
        },
        {
            url: 'https://acceptrec.co.uk/privacy-policy'
        },
        {
            url: 'https://acceptrec.co.uk/manual-handling'
        },
        {
            url: 'https://acceptrec.co.uk/manual-handling'
        },
        {
            url: 'https://acceptrec.co.uk/manual-handling'
        },
        {
            url: 'https://acceptrec.co.uk/manual-handling'
        },
        {
            url: 'https://acceptrec.co.uk/manual-handling'
        },
        {
            url: 'https://acceptrec.co.uk/manual-handling'
        },
        {
            url: 'https://acceptrec.co.uk/manual-handling'
        },
    ]
}