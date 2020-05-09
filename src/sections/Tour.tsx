import React from 'react'
import Img, { FluidObject } from 'gatsby-image'
import { FaMoneyBillWave, FaMap } from 'react-icons/fa'
import Day from '../components/Day'
import Link from 'gatsby-plugin-transition-link/AniLink'

export interface ITourProps {
  tour: {
    name: string
    price: number
    country: string
    start: string
    days: number
    description: { description: string }
    journey: Array<any>
    images: Array<{ fluid: FluidObject }>
  }
}

export const Tour = ({ tour }: ITourProps) => {
  const {
    price,
    country,
    start,
    days,
    description: { description },
    journey,
    images,
  } = tour

  return (
    <div className="post-layout">
      <article className="content">
        <div className="content__info">
          <h2 className="content__title">Info:</h2>
          <p className="content__text">
            <FaMoneyBillWave className="content__icon" /> Starting from ${price}
          </p>

          <p className="content__text">
            <FaMap className="content__icon" /> {country}
          </p>
        </div>
        <div className="content__title">Starts on: {start}</div>
        <div className="content__title">Duration: {days}</div>
        <p className="content__description">{description}</p>

        <h2 className="content__title">Daily Schedule:</h2>

        <div className="journey">
          {journey.map((item: any, i: number) => (
            <Day key={i} {...item} />
          ))}
        </div>

        <Link to="/tours" className="btn btn--primary">
          back to tours
        </Link>
      </article>

      <div className="images">
        {images.slice(1).map(({ fluid }: any, i: number) => (
          <div className="images__box" key={i}>
            <Img fluid={fluid} className="images__image" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tour
