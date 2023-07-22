import { gql } from '@apollo/client';

export const GET_JOBS = gql`
query GET_JOBS {
  posts(where: {categoryName: "Jobs"}) {
    edges {
      node {
        jobs {
          category
          contractType
          fieldGroupName
          longDescription
          region
          salary
          shortDescription
          type
        }
        date
        title
        slug
      }
    }
  }
}`;