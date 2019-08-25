import React from 'react'
import { Link } from 'gatsby'
import links from '../constants/links'

const MenuItem = ({ to, children }: any) => {
  return (
    <li className="navbar__item">
      <Link to={to} className="navbar__link">
        {children}
      </Link>
    </li>
  )
}

const itemList = (
  <ul className="navbar__list">
    {links.map((l, i) => (
      <MenuItem to={l.path} key={i}>
        {l.text}
      </MenuItem>
    ))}
  </ul>
)

const Navbar = () => {
  return <nav className="navbar">{itemList}</nav>
}

export default Navbar
