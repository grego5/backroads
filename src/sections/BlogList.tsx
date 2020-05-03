import React, { Component } from 'react'
import BlogPost, { IBlogPost } from '../components/BlogPost'
import Heading from '../components/Heading'

interface IProps {
  posts: {
    edges: Array<IBlogPost>
  }
}

export default class BlogList extends Component<IProps> {
  state = {
    posts: [],
    sortedPosts: [],
  }

  componentDidMount() {
    this.setState({
      posts: this.props.posts.edges,
      sortedTours: this.props.posts.edges,
    })
  }

  render() {
    const { posts } = this.state
    return (
      <section className={'blog'}>
        <Heading text="our blog" as="h1" />
        <div className="blog__grid">
          {posts.map(({ node }: IBlogPost) => {
            return <BlogPost key={node.id} {...node} />
          })}
        </div>
      </section>
    )
  }
}
