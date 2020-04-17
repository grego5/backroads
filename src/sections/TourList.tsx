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
    <section className={'tours'}>
      <Heading text={heading} as={as} />
      <div className="tours__grid">
        {tours.edges.map(({ node }: ITourCard) => {
          return <Tour key={node.id} {...node} />
        })}
      </div>
    </section>
  )
}
