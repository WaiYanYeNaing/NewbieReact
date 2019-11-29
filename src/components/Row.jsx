import React, { PureComponent } from 'react'
import './Main.css'

class Row extends PureComponent {
  render() {
    return <div className="row">{this.props.children}</div>
  }
}

export default Row
