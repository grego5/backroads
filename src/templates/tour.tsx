import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Tour, { ITourProps } from '../sections/Tour'

interface IProps {
  data: ITourProps
}

const singleTour = ({ data: { tour } }: IProps) => {
  const { name, start, images } = tour

  return (
    <Layout>
      <Hero image={images[0].fluid}>
        <Banner title={name} text={start} />
      </Hero>
      <Tour tour={tour} />
    </Layout>
  )
}

export default singleTour

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
