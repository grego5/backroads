import React from 'react'

interface bannerProps {
  title: string
  text: string
  children?: JSX.ElementAttributesProperty
}

const Banner = ({ title, text, children }: bannerProps) => {
  return (
    <div className="banner">
      <h1 className="banner__title">{title}</h1>
      <p className="banner__text">{text}</p>
      {children}
    </div>
  )
}

export default Banner
