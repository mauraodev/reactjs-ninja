'use strict'

import React from "react"

class App extends React.Component {
  constructor () {
    super()
    this.state = {
      text: 'Mauro'
    }
  }

  render() {
    return (
      <div className="container" onClick={() => this.setState({
        text: 'Outro texto'
      })}>
        {this.state.text}
      </div>
    )
  }
}

export default App
