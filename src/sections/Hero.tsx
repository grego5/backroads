import React from 'react'
import Banner from '../components/Banner'
import { Link } from 'gatsby'

const Hero = () => {
  return (
    <section className="hero">
      <Banner title="It's the home page" text="Welcome to it">
        <Link className="btn btn--white" to="/tours">
          explore tours
        </Link>
      </Banner>
    </section>
  )
}

export default Hero
