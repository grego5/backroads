import React from 'react'
import Img, { FixedObject } from 'gatsby-image'

export interface ITourCard {
  node: any
  id: string
  name: string
  country: String
  price: Number
  days: Number
  images: [
    {
      fixed: FixedObject
    }
  ]
}

export default ({ name, country, price, days, images }: ITourCard) => {
  return (
    <li className="tour">
      <Img className="tour__picture" fixed={images[0].fixed} />
      <h3 className="card__title">{name}</h3>
      <div className="card__content">
        <h4 className="card__country">{country}</h4>
        <div className="card__data">
          <div className="card__days">Days: {days}</div>
          <div className="card__price">From ${price}</div>
        </div>
      </div>
    </li>
  )
}
