import React, {Component} from 'react';
import './App.scss';
import Player from './Player';
import Playlist from './Playlist';
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
        <Playlist />
        <Podcasts />
        <Episodes />
      </div>
    )
  }
}


export default App;
