import React from 'react'
import Img, { FluidObject } from 'gatsby-image'

export interface ITourCard {
  node: any
  id: string
  name: string
  country: String
  price: Number
  days: Number
  images: [
    {
      fluid: FluidObject
    }
  ]
}

export default ({ name, country, price, days, images }: ITourCard) => {
  return (
    <div className="tour">
      <Img className="tour__picture" fluid={images[0].fluid} />
      <h3 className="tour__title">{name}</h3>
      <div className="tour__content">
        <h4 className="tour__country">{country}</h4>
        <div className="tour__data">
          <div className="tour__days">Days: {days}</div>
          <div className="tour__price">From ${price}</div>
        </div>
      </div>
    </div>
  )
}
