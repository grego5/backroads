import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import TourList from '../sections/CardList'
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
          id: contentful_id
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

export default ({ data }: any) => {
  return (
    <Layout>
      <Hero small image={data.bg.childImageSharp.fluid} />
      <TourList data={data.tours} type="tours" heading="our tours" as="h1" />
    </Layout>
  )
}
