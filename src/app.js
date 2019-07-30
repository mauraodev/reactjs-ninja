'use strict'

import React from "react"
import Timer from "./timer";

class App extends React.Component {
  constructor () {
    console.log('constructor')
    super()
    this.state = {
     showTimer: true,
     time: 0
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
        <Timer time={this.state.time}/>

        <button onClick={() => {
          this.setState({ time: this.state.time + 10 })
        }}>Change Props</button>
      </div>
    )
  }
}

export default App
