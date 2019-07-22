'use strict'

import React from "react"
import Timer from "./timer";

class App extends React.Component {
  constructor () {
    console.log('constructor')
    super()
    this.state = {
     showTimer: true
    }
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  componentDidMount () {
    console.log('componentDidMount')
  }

  render() {
    console.log('render')
    return (
      <div>
        {this.state.showTimer && <Timer />}
        <button onClick={() => {
          this.setState({ showTimer: false})
        }}>Show/Hide Timer</button>
      </div>
    )
  }
}

export default App
