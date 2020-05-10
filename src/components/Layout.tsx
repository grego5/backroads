/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import SEO from '../components/seo'

const Layout = (props: any) => {
  return (
    <>
      <SEO title={props.title} keywords={[`gatsby`, `application`, `react`]} />

      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default Layout
