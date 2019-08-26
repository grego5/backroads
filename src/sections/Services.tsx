import React from 'react'
import Heading from '../components/Heading'
import services from '../constants/services'

const Services = () => {
  return (
    <section className="services">
      <Heading text="Our Services" />
      <div className="services__outer">
        {services.map((item, i) => (
          <article className="services__card" key={i}>
            <span className="services__icon">{item.icon}</span>
            <h4 className="services__title">{item.title}</h4>
            <p className="services__text">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
