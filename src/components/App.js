import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigPileCard from './PigPileCard'
import HOGwartsContainer from './HOGwartsContainer'

class App extends Component {
  constructor(){
    super()
    this.state = {
      piggies: hogs,

    }
  }
  render() {
    return (
      <div className="App">
          < Nav />
        < HOGwartsContainer pickledPorkProps={this.state.piggies} />
      </div>
    )
  }
}

export default App;
