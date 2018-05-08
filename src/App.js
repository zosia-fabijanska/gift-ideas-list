import React, { Component } from 'react'
import Navbar from './components/Navbar'
import List from './components/List'
import './globalStyle'

class App extends Component {
  constructor () {
    super()
    this.state = {
      giftListItems: [
        {
          label: 'concert tickets',
          people: [ 'Mum', 'Dad', 'Bruce'],
        },
        {
          label: 'beach towel',
          people: [ 'Mum', 'Grandma', 'Ellen'],
        },
        {
          label: 'book',
          people: [ 'Bob', 'Alice', 'Lee'],
        },
      ]
    }
  }


  render () {
    return (
      <div className="App">
        <Navbar />
        <List giftListItems={this.state.giftListItems} />
      </div>
    )
  }
}

export default App
