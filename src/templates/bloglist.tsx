import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Pagination from '../components/Pagination'
import Blog, { IBlog } from '../components/Blog'
import Heading from '../components/Heading'

const bloglist = ({ data, pageContext: { currentPage, numPages } }: any) => {
  return (
    <Layout title="Blog">
      <Hero small image={data.file.childImageSharp.fluid} />
      <section className="cardlist">
        <Heading text="our blog" as="h1" />

        <div className="cardlist__grid">
          {data.posts.edges.map(({ node }: IBlog) => (
            <Blog key={node.id} node={node} />
          ))}
        </div>

        <Pagination currentPage={currentPage} numPages={numPages} path="blog" />
      </section>
    </Layout>
  )
}

export default bloglist

export const query = graphql`
  query($skip: Int!, $limit: Int!) {
    file(name: { eq: "blogBcg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

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
