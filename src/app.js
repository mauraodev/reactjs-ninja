'use strict'

import React, {Component} from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      value: 'texto\nquebra de linha',
    }
  }

  render() {
    return (
      <div>
        <form>
          <textarea value={ this.state.value }/>
        </form>
      </div>
    )
  }
}

export default App
