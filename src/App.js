import React, {Component} from 'react';
import { connect } from 'react-redux';
import Player from './Player';
import Playlist from './Playlist';
import Podcasts from './Podcasts';
import Episodes from './Episodes';
import Alerts from './Alerts';

class App extends Component {

  render() {
    let alertsComp = '';
    if(this.props.alertMsg) {
      alertsComp = <Alerts />;
    }

    return (
      <div className="App">
        <header>
          <h1>Horror Podcasts</h1>
        </header>

        {alertsComp}
        <Podcasts />
        <Episodes />
        <Playlist />
        <Player />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      alertMsg: state.alertMsg
  }
}

export default connect(mapStateToProps)(App);
