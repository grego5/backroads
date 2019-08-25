import React, { useState } from 'react'
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

interface navbarProps {
  isOpen: boolean
}

class NavMenu extends React.Component<navbarProps> {
  render() {
    return (
      <nav className={this.props.isOpen ? 'navbar' : 'navbar navbar--hide'}>
        {itemList}
      </nav>
    )
  }
}

export default NavMenu
