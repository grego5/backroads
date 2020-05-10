import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Blog, { IBlog } from '../sections/Blog'

interface IProps {
  data: IBlog
}

const blog = ({ data: { blog } }: IProps) => {
  return (
    <Layout title={blog.title}>
      <Hero small image={blog.image.fluid} />
      <Blog blog={blog} />
    </Layout>
  )
}

export default blog

export const query = graphql`
  query($slug: String!) {
    blog: contentfulPost(slug: { eq: $slug }) {
      id: contentful_id
      title
      slug
      text {
        json
      }
      published(formatString: "DD/MM/YY")
      image {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
