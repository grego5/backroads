import React from 'react'
import Banner from '../components/Banner'
import Link from 'gatsby-plugin-transition-link/AniLink'
import Layout from '../components/Layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <header className="error">
      <Banner title="Error 404" text="Page does not exit">
        <Link fade className="btn btn--white" to="/">
          Back to home page
        </Link>
      </Banner>
    </header>
  </Layout>
)

export default NotFoundPage
