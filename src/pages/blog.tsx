import React from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import PostList from '../sections/PostList'

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

    posts: allContentfulPost(sort: { fields: published, order: DESC }) {
      edges {
        node {
          id: contentful_id
          title
          slug
          published(formatString: "DD/MM/YY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`
const blog = ({ data }: any) => {
  return (
    <Layout>
      <Hero small image={data.file.childImageSharp.fluid} />
      <PostList data={data.posts} />
    </Layout>
  )
}

export default blog
