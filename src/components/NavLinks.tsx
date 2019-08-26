import React, { useState } from 'react'
import { Link } from 'gatsby'
import links from '../constants/links'

interface menuProps {
  prefix: string
}

export default class extends React.Component<menuProps> {
  render() {
    const { prefix } = this.props
    return (
      <ul className={`${prefix}__list`}>
        {links.map((item, i) => (
          <li key={i} className={`${prefix}__item`}>
            <Link to={item.path} className={`${prefix}__link`}>
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    )
  }
}
