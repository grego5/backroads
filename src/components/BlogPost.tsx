import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import Link from 'gatsby-plugin-transition-link/AniLink'
import PropTypes from 'prop-types'

export interface IBlogPost {
  node: any
  id: string
  title: string
  published: string
  slug: string
  image: {
    fluid: FluidObject
  }
}

const Tour = ({ title, image, slug }: IBlogPost) => {
  return (
    <div className="post">
      <div className="post__image-box">
        <Img className="post__image" fluid={image.fluid} alt="post image" />
        <Link className="post__link" to={slug ? `/blog/${slug}` : '#'}>
          details
        </Link>
      </div>
      <div className="post__content">
        <h3 className="post__title">{title || 'unset'}</h3>
      </div>
    </div>
  )
}

Tour.propTypes = {
  // post: PropTypes.shape({
  // })
  title: PropTypes.string.isRequired,
  published: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  images: PropTypes.object.isRequired,
}

export default Tour
