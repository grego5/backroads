import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'

import { graphql } from 'gatsby'

export const query = graphql`
  {
    file(name: { eq: "blogBcg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
const blog = ({ data }: any) => {
  return (
    <Layout>
      <h1>Blog Page</h1>
      <Hero small image={data.file.childImageSharp.fluid} />
    </Layout>
  )
}

export default blog
