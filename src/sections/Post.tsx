import React from 'react'
import { FluidObject } from 'gatsby-image'
import Link from 'gatsby-plugin-transition-link/AniLink'

export interface IPostProps {
  post: {
    id: string
    title: string
    published: string
    slug: string
    image: {
      fluid: FluidObject
    }
    text: {
      text: string
    }
  }
}

export const Post = ({ post }: IPostProps) => {
  const { title, published, text } = post

  return (
    <div className="tour-layout">
      <article className="content">
        <h2 className="content__title">{title}</h2>
        <div className="content__title">{published}</div>
        <p className="content__description">{text.text}</p>

        <Link to="/blog" className="btn btn--primary">
          back to blog
        </Link>
      </article>
    </div>
  )
}

export default Post
