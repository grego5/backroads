import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import Link from 'gatsby-plugin-transition-link/AniLink'
import { FaMap } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

export interface ITourCard {
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

const Tour = ({ name, country, price, days, images, slug }: ITourCard) => {
  const defaultImage = useStaticQuery(getImage).file.childImageSharp.fluid
  const image = images ? images[0].fluid : defaultImage

  return (
    <div className="tour">
      <div className="tour__image-box">
        <Img className="tour__image" fluid={image} alt="tour image" />
        <Link fade className="tour__link" to={slug ? `/tours/${slug}` : '#'}>
          details
        </Link>
      </div>
      <div className="tour__content">
        <h3 className="tour__title">{name || 'unset'}</h3>
        <div className="tour__info">
          <h4 className="tour__country">
            <FaMap className="tour__icon" /> {country || 'unset'}
          </h4>
          <div className="tour__details">
            <div className="tour__days">Days: {days || 'null'}</div>
            <div className="tour__price">From ${price || 'null'}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

Tour.propTypes = {
  // tour: PropTypes.shape({
  // })
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  days: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Tour
