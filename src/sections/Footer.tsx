import React from 'react'
import Social from '../components/Social'
import NavLinks from '../components/NavLinks'

const Copyright = () => (
  <footer className="footer__copyright">
    © {new Date().getFullYear()}, Built with {` `}
    <a
      className="footer__link"
      href="https://www.gatsbyjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Gatsby
    </a>
    {` `} by {` `}
    <a
      className="footer__link"
      href="https://www.github/grego5"
      target="_blank"
      rel="noopener noreferrer"
    >
      Gregos
    </a>
  </footer>
)

const Footer = () => (
  <footer className="footer">
    <NavLinks prefix="footer" />
    <Social footer />
    <Copyright />
  </footer>
)

export default Footer
