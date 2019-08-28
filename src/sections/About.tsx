import React from 'react'
import Heading from '../components/Heading'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const query = graphql`
  {
    file(name: { eq: "defaultBcg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)

  return (
    <section className="about">
      <Heading text="about us" />
      <div className="about__image-outer">
        <Img fluid={fluid} alt="about company" />
      </div>
      <article className="about__content">
        <h3 className="about__title">explore the difference</h3>
        <p className="about__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
          laboriosam, ut odio tempore culpa, sed rem quae nemo aperiam iure
          libero deleniti.
        </p>
        <p className="about__paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          placeat, exercitationem molestias minus aperiam quod quae autem vitae.
        </p>
        <button type="button" className="btn btn--primary">
          read more
        </button>
      </article>
    </section>
  )
}

export default About
