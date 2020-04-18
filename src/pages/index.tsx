import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import Link from 'gatsby-plugin-transition-link/AniLink'

import Banner from '../components/Banner'

import About from '../sections/About'
import Hero from '../components/Hero'
import Services from '../sections/Services'
import TourList from '../sections/TourList'

export const query = graphql`
  {
    file(name: { eq: "defaultBcg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    tours: allContentfulTour(filter: { featured: { eq: true } }, limit: 3) {
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

const IndexPage = ({ data }: any) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero image={data.file.childImageSharp.fluid}>
      <Banner title="It's the home page" text="Welcome to it">
        <Link fade className="btn btn--white" to="/tours">
          explore tours
        </Link>
      </Banner>
    </Hero>
    <About />
    <Services />
    <TourList tours={data.tours} heading="featured tours" as="h2" />
  </Layout>
)

export default IndexPage
