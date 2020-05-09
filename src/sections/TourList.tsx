import React, { Component } from 'react'
import Tour, { ITour } from '../components/Tour'
import Heading from '../components/Heading'

interface IProps {
  heading: string
  as?: string
  data: {
    edges: Array<ITour>
  }
}

export default class TourList extends Component<IProps> {
  state = {
    tours: [],
    sortedTours: [],
  }

  componentDidMount() {
    this.setState({
      tours: this.props.data.edges,
      sortedTours: this.props.data.edges,
    })
  }

  render() {
    const { tours } = this.state
    const { heading, as } = this.props
    return (
      <section className={'cardlist'}>
        <Heading text={heading} as={as} />
        <div className="cardlist__grid">
          {tours.map(({ node }: ITour) => (
            <Tour key={node.id} node={node} />
          ))}
        </div>
      </section>
    )
  }
}
