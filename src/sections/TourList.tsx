import React from 'react'
import Tour, { ITourCard } from '../components/TourCard'

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
    <ul className={'tour-list'}>
      {tours.edges.map(({ node }: ITourCard) => {
        return <Tour key={node.id} {...node} />
      })}
    </ul>
  )
}
