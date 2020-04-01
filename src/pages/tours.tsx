import React from 'react'
import { FixedObject } from 'gatsby-image'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Tour, { ITour } from '../components/Tour'

import { graphql } from 'gatsby'

export const query = graphql`
  {
    bg: file(name: { eq: "defaultBcg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    tours: allContentfulTour {
      edges {
        node {
          id
          name
          country
          price
          days
          images {
            fixed {
              src
            }
          }
        }
      }
    }
  }
`

const tours = ({ data }: any) => (
  <Layout>
    <h1>Tours Page</h1>
    <Hero small image={data.bg.childImageSharp.fluid} />

    <ul className={'tour-list'}>
      {data.tours.edges.map(({ node }: any) => {
        return <Tour key={node.id} {...node} />
      })}
    </ul>
  </Layout>
)

export default tours
