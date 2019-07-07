import React, {Component} from 'react';
import './App.css';
import Player from './Player';
import Podcasts from './Podcasts';
import Episodes from './Episodes';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <h1>Podcast Player</h1>
        </header>
        
        <Player />
        <Podcasts />
        <Episodes />
      </div>
    )
  }
}


export default App;
