'use strict'

import React from "react"
import Button from "./button"

class App extends React.Component {
  render() {
    return (
      <div>
        <Button handleClick={() => console.log('clicou')}>
          Cliquem em mim
        </Button>
      </div>
    )
  }
}

export default App
