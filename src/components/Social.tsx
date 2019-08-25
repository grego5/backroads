import React from 'react'
import data from '../constants/social-icons'

const list = data.map((item, i) => (
  <li className="social__item" key={i}>
    <a
      className="social__link"
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {item.icon}
    </a>
  </li>
))

interface socialProps {
  footer?: boolean
}

class Social extends React.Component<socialProps> {
  render() {
    let cssClass = 'social'
    if (this.props.footer) cssClass += ' social--footer'

    return <ul className={cssClass}>{list}</ul>
  }
}

export default Social
