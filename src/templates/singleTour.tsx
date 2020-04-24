import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { FaMoneyBillWave, FaMap } from 'react-icons/fa'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Banner from '../components/Banner'

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTour(slug: { eq: $slug }) {
      name
      price
      country
      days
      start(formatString: "dddd MMMM Do, YYYY")
      description {
        description
      }
      journey {
        day
        info
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

const singleTour = ({ data }: any) => {
  const {
    name,
    price,
    country,
    start,
    days,
    description: { description },
    journey,
    images,
  } = data.tour

  const [mainImage, ...tourImages] = images

  return (
    <Layout>
      <Hero image={mainImage.fluid}>
        <Banner title={name} text={start} />
      </Hero>
      <div className="tour-layout">
        <article className="content">
          <div className="content__info">
            <p className="content__text">
              <FaMoneyBillWave className="content__icon" /> Starting from $
              {price}
            </p>

            <p className="content__text">
              <FaMap className="content__icon" /> {country}
            </p>
          </div>
          <div className="content__title">Starts on: {start}</div>
          <div className="content__title">Duration: {days}</div>
          <p className="content__description">{description}</p>
        </article>

        <aside className="images">
          {tourImages.map(({ fluid }: any, id: number) => (
            <div className="images__box" key={id}>
              <Img fluid={fluid} className="images__image" />
            </div>
          ))}
        </aside>
      </div>
    </Layout>
  )
}

export default singleTour
