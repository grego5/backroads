import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import HeroImage from '../components/HeroImage'
import Banner from '../components/Banner'
import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HeroImage>
      <Banner title="It's the home page" text="Welcome to it">
        <Link className="btn btn--white" to="/tours">
          explore tours
        </Link>
      </Banner>
    </HeroImage>
  </Layout>
)

export default IndexPage
