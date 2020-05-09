import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import Link from 'gatsby-plugin-transition-link/AniLink'

export interface IPost {
  node: {
    id: string
    title: string
    published: string
    slug: string
    image: {
      fluid: FluidObject
    }
  }
}

const Post = ({ node: { title, image, slug, published } }: IPost) => {
  return (
    <article className="card">
      <div className="card__image-box">
        <Img className="card__image" fluid={image.fluid} alt="post image" />
        <Link className="card__link" to={slug ? `/blog/${slug}` : '#'}>
          details
        </Link>
        <div className="card__date">{published}</div>
      </div>
      <div className="card__content">
        <h3 className="card__title">{title || 'unset'}</h3>
      </div>
    </article>
  )
}

export default Post
