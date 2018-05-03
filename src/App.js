import React, { Component } from 'react'
import List from './List'
import Navbar from './components/Navbar'
import './globalStyle'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        Gift list goes here...
      </div>
    )
  }
}

export default App
