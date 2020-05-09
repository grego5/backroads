import React, { Component } from 'react'
import Blog, { IBlog } from '../components/Blog'
import Heading from '../components/Heading'

interface IProps {
  data: {
    edges: Array<IBlog>
  }
}

export default class BlogList extends Component<IProps> {
  state = {
    posts: [],
    sortedPosts: [],
  }

  componentDidMount() {
    this.setState({
      posts: this.props.data.edges,
      sortedPosts: this.props.data.edges,
    })
  }

  render() {
    const { posts } = this.state
    return (
      <section className="cardlist">
        <Heading text="our blog" as="h1" />
        <div className="cardlist__grid">
          {posts.map(({ node }: IBlog) => (
            <Blog key={node.id} node={node} />
          ))}
        </div>
      </section>
    )
  }
}
