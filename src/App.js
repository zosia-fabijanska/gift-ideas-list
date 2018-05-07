import React, { Component } from 'react'
import List from './List'
import Navbar from './components/Navbar'
import './globalStyle'
import GiftInput from './components/GiftInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        Gift list goes here...
        <GiftInput />
      </div>
    )
  }
}

export default App
