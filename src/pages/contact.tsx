import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'

import { graphql } from 'gatsby'

export const query = graphql`
  {
    file(name: { eq: "connectBcg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const contact = ({ data }: any) => (
  <Layout>
    <h1>Contact Page</h1>
    <Hero small image={data.file.childImageSharp.fluid} />
  </Layout>
)

export default contact
