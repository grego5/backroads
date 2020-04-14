import React from 'react'
import Tour, { ITourCard } from '../components/TourCard'
import Heading from '../components/Heading'

export interface ITourData {
  tours: {
    edges: Array<ITourCard>
  }
}

interface IProps {
  heading: string
  as?: string
  tours: {
    edges: Array<ITourCard>
  }
}

export default ({ tours, heading, as }: IProps) => {
  return (
    <section className={'tour-list'}>
      <Heading text={heading} as={as} />

      {tours.edges.map(({ node }: ITourCard) => {
        return <Tour key={node.id} {...node} />
      })}
    </section>
  )
}
