import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import Link from 'gatsby-plugin-transition-link/AniLink'
import { FaMap } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

export interface ICard {
  node: any
  id: string
  name: string
  country: String
  price: Number
  days: Number
  slug: string
  images: [
    {
      fluid: FluidObject
    }
  ]
}

const getImage = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Tour = ({ name, country, price, days, images, slug }: ICard) => {
  const defaultImage = useStaticQuery(getImage).file.childImageSharp.fluid
  const image = images ? images[0].fluid : defaultImage

  return (
    <article className="card">
      <div className="card__image-box">
        <Img className="card__image" fluid={image} alt="tour image" />
        <Link className="card__link" to={slug ? `/tours/${slug}` : '#'}>
          details
        </Link>
      </div>
      <div className="card__content">
        <h3 className="card__title">{name || 'unset'}</h3>
        <div className="card__info">
          <h4 className="card__country">
            <FaMap className="card__icon" /> {country || 'unset'}
          </h4>
          <div className="card__details">
            <div className="card__days">Days: {days || 'null'}</div>
            <div className="card__price">From ${price || 'null'}</div>
          </div>
        </div>
      </div>
    </article>
  )
}

Tour.propTypes = {
  // tour: PropTypes.shape({})
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  days: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Tour
