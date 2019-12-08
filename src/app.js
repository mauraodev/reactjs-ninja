'use strict'

import React, {Component} from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      value: 'Valor inicial',
      checked: false,
    }
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" value={this.state.value} onChange={(e) => {
            console.log(e)
            this.setState({
              value: e.target.value
            })
          }}/>

          <label>
            <input type="checkbox"
              value="my-checkbox"
              checked={this.state.checked}
              onChange={(e) => {
                this.setState({
                  checked: !this.state.checked
                })
              }}
              />
            Checkbox
          </label>

          <input type="radio" name="rd" value="rd1" defaultChecked/> Radio 1
          <input type="radio" name="rd" value="rd2" /> Radio 2
        </form>
      </div>
    )
  }
}

export default App
