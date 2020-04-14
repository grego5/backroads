import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import Link from 'gatsby-plugin-transition-link/AniLink'
import { FaMap } from 'react-icons/fa'

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

export default ({ name, country, price, days, images, slug }: ITourCard) => {
  return (
    <div className="tour">
      <div className="tour__image-box">
        <Img className="tour__image" fluid={images[0].fluid} alt="tour image" />
        <Link fade className="tour__link" to={`/tours/${slug}`}>
          details
        </Link>
      </div>
      <div className="tour__content">
        <h3 className="tour__title">{name}</h3>
        <div className="tour__info">
          <h4 className="tour__country">
            <FaMap className="tour__icon" /> {country}
          </h4>
          <div className="tour__details">
            <div className="tour__days">Days: {days}</div>
            <div className="tour__price">From ${price}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
