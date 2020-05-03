import React from 'react'

interface headingProps {
  as?: string
  text: string
}

class Heading extends React.Component<headingProps> {
  render() {
    const { as = 'div', text = 'untitled title' } = this.props
    const ex = text.split(' ')
    const inner = (
      <>
        <span className="heading--prime">{ex.shift()}</span>
        <span className="heading--sub">
          {ex.length > 0 && ' ' + ex.join(' ')}
        </span>
      </>
    )

    return React.createElement(as, { className: 'heading' }, inner)
  }
}

export default Heading
