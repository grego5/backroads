import React from 'react'
import HeroImage from '../components/HeroImage'
import Banner from '../components/Banner'
import { Link } from 'gatsby'

const Hero = () => {
  return (
    <HeroImage>
      <Banner title="It's the home page" text="Welcome to it">
        <Link className="btn btn--white" to="/tours">
          explore tours
        </Link>
      </Banner>
    </HeroImage>
  )
}

export default Hero
