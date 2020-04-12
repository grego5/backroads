import React from 'react'
import Tour, { ITourCard } from '../components/TourCard'
import Heading from '../components/Heading'

export interface ITourData {
  tours: {
    edges: Array<ITourCard>
  }
}

interface IProps {
  tours: {
    edges: Array<ITourCard>
  }
}

export default ({ tours }: IProps) => {
  return (
    <section className={'tour-list'}>
      <Heading text="our tours" />

      {tours.edges.map(({ node }: ITourCard) => {
        return <Tour key={node.id} {...node} />
      })}
    </section>
  )
}
