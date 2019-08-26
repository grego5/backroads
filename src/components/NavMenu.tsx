import React, { useState } from 'react'
import NavLinks from './NavLinks'

interface navbarProps {
  isOpen: Boolean
}

class NavMenu extends React.Component<navbarProps> {
  render() {
    let cssClass = this.props.isOpen ? 'navbar--show' : ' navbar'

    return (
      <nav className={cssClass}>
        <NavLinks prefix="navbar" />
      </nav>
    )
  }
}

export default NavMenu
