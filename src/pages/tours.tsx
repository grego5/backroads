import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import TourList from '../sections/TourList'
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
          contentful_id: id
          name
          country
          price
          days
          slug
          images {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const tours = ({ data }: any) => (
  <Layout>
    <Hero small image={data.bg.childImageSharp.fluid} />
    <TourList tours={data.tours} />
  </Layout>
)

export default tours
