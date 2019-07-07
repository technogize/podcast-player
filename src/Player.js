import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Player.css';

class Player extends Component {

  setPlayerTrack = () => {
    if (this.props.nowPlaying && this.props.nowPlaying.enclosure && this.props.nowPlaying.enclosure.link) {
      document.querySelector('#audio-player').src = this.props.nowPlaying.enclosure.link;
      document.querySelector('#audio-player').play();
      return;
    } 
    
    return false;
  }

  render() {
    return (
      <div className="player">
        <audio id="audio-player" controls>
          <source src={this.props.nowPlaying.enclosure.link} />
        </audio>
      </div>
    );
  }

  componentDidUpdate() {
    this.setPlayerTrack();
  }
}

const mapStateToProps = (state) => {
  return {
    nowPlaying: state.nowPlaying
  }
}

export default connect(mapStateToProps)(Player);
