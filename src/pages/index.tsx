import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby'

import Banner from '../components/Banner'

import About from '../sections/About'
import Hero from '../components/Hero'
import Services from '../sections/Services'

export const query = graphql`
  {
    file(name: { eq: "defaultBcg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
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
        <Link className="btn btn--white" to="/tours">
          explore tours
        </Link>
      </Banner>
    </Hero>
    <About />
    <Services />
  </Layout>
)

export default IndexPage
