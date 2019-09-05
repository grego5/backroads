import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'

import { graphql } from 'gatsby'

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

const tours = ({ data }: any) => (
  <Layout>
    <h1>Tours Page</h1>
    <Hero small image={data.file.childImageSharp.fluid} />
  </Layout>
)

export default tours
