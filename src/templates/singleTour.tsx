import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

const singleTour = ({ data }: any) => {
  const {
    name,
    price,
    country,
    start,
    description: { description },
    journey,
    images,
  } = data.tour

  const [mainImage, ...tourImages] = images

  return (
    <Layout>
      <h1>{name}</h1>

      <Hero image={mainImage.fluid}>
        <Banner title={name} text={start} />
      </Hero>
    </Layout>
  )
}

export default singleTour
