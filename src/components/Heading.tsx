import React from 'react'

interface headingProps {
  as?: string
  text: string
}

class Heading extends React.Component<headingProps> {
  render() {
    const { as = 'div', text } = this.props
    const ex = text.split(' ')
    return (
      <>
        <h2 className="heading">
          <span className="heading--prime">{ex.shift()}</span>
          <span className="heading--sub">
            {ex.length > 0 && ' ' + ex.join(' ')}
          </span>
        </h2>
      </>
    )
  }
}

export default Heading
