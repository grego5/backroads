import React from 'react'
import { FixedObject } from 'gatsby-image'

export interface ITour {
  id: String
  name: String
  country: String
  price: Number
  days: Number
  images: FixedObject
}

export default ({ name, country, price, days, images }: ITour) => {
  return (
    <li className="tour">
      <div className="tour__picture" />
      <h3 className="card__title">{name}</h3>
    </li>
  )
}
