import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Post, { IPostProps } from '../sections/Post'

interface IProps {
  data: IPostProps
}

const singlePost = ({ data: { post } }: IProps) => {
  return (
    <Layout>
      <Hero small image={post.image.fluid} />
      <Post post={post} />
    </Layout>
  )
}

export default singlePost

export const query = graphql`
  query($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
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
