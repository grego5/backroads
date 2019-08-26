import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'

import About from '../sections/About'
import Hero from '../sections/Hero'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <About />
  </Layout>
)

export default IndexPage
