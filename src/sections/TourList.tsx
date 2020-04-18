import React, { Component } from 'react'
import Tour, { ITourCard } from '../components/TourCard'
import Heading from '../components/Heading'

interface IProps {
  heading: string
  as?: string
  tours: {
    edges: Array<ITourCard>
  }
}

export default class TourList extends Component<IProps> {
  state = {
    tours: [],
    sortedTours: [],
  }

  componentDidMount() {
    this.setState({
      tours: this.props.tours.edges,
      sortedTours: this.props.tours.edges,
    })
  }

  render() {
    const { heading, as } = this.props
    const { tours } = this.state
    return (
      <section className={'tours'}>
        <Heading text={heading} as={as} />
        <div className="tours__grid">
          {tours.map(({ node }: ITourCard) => {
            return <Tour key={node.id} {...node} />
          })}
        </div>
      </section>
    )
  }
}
