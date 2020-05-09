import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import Link from 'gatsby-plugin-transition-link/AniLink'
import Blog, { IBlog } from '../components/Blog'
import Heading from '../components/Heading'

const bloglist = (props: any) => {
  const posts = props.data.posts.edges
  return (
    <section className="cardlist">
      <Heading text="our blog" as="h1" />
      <div className="cardlist__grid">
        {posts.map(({ node }: IBlog) => (
          <Blog key={node.id} node={node} />
        ))}
      </div>
    </section>
  )
}

export default bloglist

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(
      limit: $limit
      skip: $skip
      sort: { fields: published, order: DESC }
    ) {
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
