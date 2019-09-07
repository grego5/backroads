import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Contact from '../sections/Contact'

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
    <Hero small image={data.file.childImageSharp.fluid} />
    <Contact />
  </Layout>
)

export default contact
