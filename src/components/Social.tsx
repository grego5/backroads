import React from 'react'
import data from '../constants/social-icons'

const list = data.map((item, i) => (
  <li className="social__item" key={i}>
    <a className="social__link" href={item.url} target="_blank">
      {item.icon}
    </a>
  </li>
))

const Social = () => <ul className="social">{list}</ul>

export default Social
