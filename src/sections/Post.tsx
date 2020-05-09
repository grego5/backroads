import React from 'react'
import { FluidObject } from 'gatsby-image'
import Link from 'gatsby-plugin-transition-link/AniLink'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { Document } from '@contentful/rich-text-types/'

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
      json: Document
    }
  }
}

export const Post = ({ post }: IPostProps) => {
  const {
    title,
    published,
    text: { json },
  } = post
  const options = {
    renderNode: {
      'embedded-asset-block': (node: any) => {
        const { url } = node.data.target.fields.file['en-US']
        return <img src={url} alt="tour image" title="Tour Image" />
      },
    },
  }

  return (
    <div className="tour-layout">
      <article className="content">
        <h2 className="content__title">{title}</h2>
        <div className="content__title">{published}</div>
        <div className="content__description">
          {documentToReactComponents(json, options)}
        </div>

        <Link to="/blog" className="btn btn--primary">
          back to blog
        </Link>
      </article>
    </div>
  )
}

export default Post
