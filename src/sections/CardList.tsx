import React, { Component } from 'react'
import Card, { ICard } from '../components/Card'
import Post, { IPost } from '../components/Post'
import Heading from '../components/Heading'

interface IProps {
  type: 'tours' | 'blog'
  heading: string
  as?: string
  data: {
    edges: Array<ICard | IPost>
  }
}

export default class CardList extends Component<IProps> {
  state = {
    cards: [],
    sortedCards: [],
  }

  componentDidMount() {
    this.setState({
      cards: this.props.data.edges,
      sortedCards: this.props.data.edges,
    })
  }

  render() {
    const { cards } = this.state
    const { type, heading, as } = this.props
    return (
      <section className={'tours'}>
        <Heading text={heading} as={as} />
        <div className="tours__grid">
          {cards.map(({ node }: ICard | IPost) => {
            if (this.props.type === 'tours') {
              return <Card key={node.id} {...node} />
            } else if (type === 'blog') {
              return <Post key={node.id} {...node} />
            }
          })}
        </div>
      </section>
    )
  }
}
