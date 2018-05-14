import React, { Component } from 'react'
import { createStore } from 'redux'
//
import Navbar from './components/Navbar'
import List from './components/List'
import './globalStyle'
import gifts from './reducers/reducers'
import { addGift } from './actions/actions'

const store = createStore(gifts)

class App extends Component {
  constructor() {
    super()
    store.subscribe(() => (
      console.log(store.getState())
    ))
    store.dispatch(addGift('first gift'))

    this.state = {
      giftList: store.getState()
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <List giftList={this.state.giftList} />
      </div>
    )
  }
}

export default App
