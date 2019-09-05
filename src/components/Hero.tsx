import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { FluidObject } from 'gatsby-image'

interface IHero {
  image: FluidObject
  small?: boolean
  children?: JSX.Element
}

export default ({ image, small, children }: IHero) => {
  return (
    <BackgroundImage
      Tag="section"
      className={'hero' + (small ? ' hero--small' : '')}
      fluid={image}
    >
      {children}
    </BackgroundImage>
  )
}
