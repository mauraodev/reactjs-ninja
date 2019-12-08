'use strict'

import React, {Component} from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      select: 3,
    }
  }

  render() {
    return (
      <div>
        <form>
          <select multiple value={this.state.select}
            onChange={(e) => {
              this.setState({ select: e.target.value })
            }}
            >
            <option value="1">Opção 1</option>
            <option value="2">Opção 2</option>
            <option value="3">Opção 3</option>
          </select>
        </form>
      </div>
    )
  }
}

export default App
