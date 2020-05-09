import React, { Component } from 'react'
import Post, { IPost } from '../components/Post'
import Heading from '../components/Heading'

interface IProps {
  data: {
    edges: Array<IPost>
  }
}

export default class PostList extends Component<IProps> {
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
      <section className={'tours'}>
        <Heading text="our blog" as="h1" />
        <div className="tours__grid">
          {posts.map(({ node }: IPost) => (
            <Post key={node.id} node={node} />
          ))}
        </div>
      </section>
    )
  }
}
