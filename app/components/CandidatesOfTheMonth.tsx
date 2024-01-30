import React from 'react'
import Candidate from './Candidate'

import { gql } from '@apollo/client'
import { getClient } from '../lib/client'

const query = gql`
query getCandidates {
  candidatesOfTheMonth(where: {orderby: {field: MENU_ORDER, order: ASC}}) {
    edges {
      node {
        candidatesOfTheMonth {
          name
          date
          description
          image {
            altText
            sourceUrl
          }
        }
      }
    }
  }
}
`

export default async function CandidatesOfTheMonth() {

  const { data: candidatesdata } = await getClient().query({query});

  const candidates = candidatesdata?.candidatesOfTheMonth?.edges;
  console.log(candidates)

  return (
    <> 
        <section className='grid lg:grid-cols-2 gap-8 w-11/12 lg:w-8/12 m-auto py-20'>

            {candidates.map(({ node }: any, index: number) => (

            <Candidate key={index} classname={''} image={node.candidatesOfTheMonth.image?.sourceUrl} alt={node.candidatesOfTheMonth.image?.altText} name={node.candidatesOfTheMonth.name} date={node.candidatesOfTheMonth.date} description={node.candidatesOfTheMonth.description}/>

            ))}

        </section>
    </>
  )
}
