import React, { useState } from 'react'
import NavMenu from '../components/NavMenu'
import logo from '../images/logo.svg'
import Social from '../components/Social'
import { FaAlignRight } from 'react-icons/fa'

const NavBar = () => {
  const [isOpen, setNav] = useState(false)

  function toggleNav() {
    setNav(isOpen => !isOpen)
  }

  return (
    <header className="header">
      <img className="logo" src={logo} alt="Backroads logo" />
      <button type="button" className="navbar__toggle" onClick={toggleNav}>
        <FaAlignRight className="navbar__icon" />
      </button>
      <NavMenu isOpen={isOpen} />
      <Social />
    </header>
  )
}

export default NavBar
