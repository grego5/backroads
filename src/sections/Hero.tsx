import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { FluidObject } from 'gatsby-image'

interface IHero {
  image: FluidObject
  home: boolean
  children?: JSX.Element
}

export default ({ image, home, children }: IHero) => {
  return (
    <BackgroundImage
      Tag="section"
      className={'hero' + (home && ' hero--home')}
      fluid={image}
    >
      {children}
    </BackgroundImage>
  )
}
