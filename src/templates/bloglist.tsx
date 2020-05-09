import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Link from 'gatsby-plugin-transition-link/AniLink'
import Blog, { IBlog } from '../components/Blog'
import Heading from '../components/Heading'

const bloglist = ({ data, pageContext: { currentPage, numPages } }: any) => {
  return (
    <Layout>
      <Hero small image={data.file.childImageSharp.fluid} />
      <section className="cardlist">
        <Heading text="our blog" as="h1" />
        <div className="cardlist__grid">
          {data.posts.edges.map(({ node }: IBlog) => (
            <Blog key={node.id} node={node} />
          ))}
        </div>
        <div className="cardlist__pagination">
          {Array.from({ length: numPages }, (_, i) => {
            return (
              <Link
                key={i}
                to={`/blogs/${i === 0 ? '' : i + 1}`}
                className={`btn ${
                  currentPage === i + 1 ? 'btn--active' : 'btn--primary'
                }`}
              >
                {i + 1}
              </Link>
            )
          })}
        </div>
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
