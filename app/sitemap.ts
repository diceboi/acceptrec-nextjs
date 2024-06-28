import { MetadataRoute } from "next";
import { gql } from "@apollo/client";
import { getClient } from "./lib/client";

// Define the GraphQL queries
const industriesQuery = gql`
  query getIndustries {
    industries {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

const oldPostsQuery = gql`
  query getOldPosts {
    oldPosts(first: 1000) {
      edges {
        node {
          slug
        }
      }
    }
  }
`;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Fetch the industries data
  const { data: industriesData }: any = await getClient().query({ query: industriesQuery });
  
  // Fetch the old posts data
  const { data: oldPostsData }: any = await getClient().query({ query: oldPostsQuery });

  // Map the industries data to generate sitemap entries
  const industryPages: MetadataRoute.Sitemap = industriesData.industries.edges.map(({ node }: any) => ({
    url: `https://acceptrec.co.uk/industries/${node.slug}`,
  }));

  // Map the old posts data to generate sitemap entries
  const oldPostPages: MetadataRoute.Sitemap = oldPostsData.oldPosts.edges.map(({ node }: any) => ({
    url: `https://acceptrec.co.uk/${node.slug}`,
  }));

  // Define the static URLs
  const staticUrls = [
    { url: 'https://acceptrec.co.uk/jobs' },
    { url: 'https://acceptrec.co.uk/about-us' },
    { url: 'https://acceptrec.co.uk/about-us/team' },
    { url: 'https://acceptrec.co.uk/clients/national-temporary-worker-day' },
    { url: 'https://acceptrec.co.uk/for-employers' },
    { url: 'https://acceptrec.co.uk/for-employers/shortlisted-candidates' },
    { url: 'https://acceptrec.co.uk/industries' },
    { url: 'https://acceptrec.co.uk/onboarding-process' },
    { url: 'https://acceptrec.co.uk/for-candidates' },
    { url: 'https://acceptrec.co.uk/candidate-of-the-month' },
    { url: 'https://acceptrec.co.uk/manual-handling' },
    { url: 'https://acceptrec.co.uk/refer-a-friend' },
    { url: 'https://acceptrec.co.uk/faq' },
    { url: 'https://acceptrec.co.uk/blogs' },
    { url: 'https://acceptrec.co.uk/contact-us' },
    { url: 'https://acceptrec.co.uk/registration' },
    { url: 'https://acceptrec.co.uk/offices' },
    { url: 'https://acceptrec.co.uk/complaints-policy' },
    { url: 'https://acceptrec.co.uk/covid-19' },
    { url: 'https://acceptrec.co.uk/gdpr' },
    { url: 'https://acceptrec.co.uk/join-our-team' },
    { url: 'https://acceptrec.co.uk/modern-slavery-statement' },
    { url: 'https://acceptrec.co.uk/pay-query' },
    { url: 'https://acceptrec.co.uk/privacy-policy' },
  ];

  // Combine static URLs with dynamically generated industry and old post URLs
  return [...staticUrls, ...industryPages, ...oldPostPages];
}
