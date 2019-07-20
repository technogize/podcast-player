import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setPlayMode, setTrack} from './actions/action_play';
import {setAlertMsg} from './actions/action_alert-msg';
import './Player.scss';

class Player extends Component {
  constructor(props) {
    super(props);
    this.currPlaying = this.props.nowPlaying;
    this.skipSeconds = 15;
    this.playerElementSelector = '#audio-player';
  }

  // TODO: move setPlayerTrack(), playTrack() and pauseTrack() to a global utility
  // file and import when needed. This will mean componentDidUpdate() will not be
  // needed in Player.js

  setPlayerTrack = () => {
    if (this.props.nowPlaying && this.currPlaying !== this.props.nowPlaying && this.props.nowPlaying.enclosure && this.props.nowPlaying.enclosure.link) {
      this.playerElement.src = this.props.nowPlaying.enclosure.link;
      this.playerElement.play();
      this.currPlaying = this.props.nowPlaying;
      return;
    } 
    
    return false;
  }

  playTrack = () => {
    this.playerElement.play();
  }

  pauseTrack = () => {
    this.playerElement.pause();
    this.props.setAlertMsg('Paused');
  }

  seekForward = () => {
    this.playerElement.currentTime += this.skipSeconds;
  }

  seekRewind = () => {
    this.playerElement.currentTime -= this.skipSeconds;
  }

  /**
   * Skip to next or previous track in playlist.
   * 
   * @param  {string} nextPrev 'next' or 'prev'
   */
  nextPrevTrack = (e) => {
    let nextPrev = e.currentTarget.dataset.skip;
    let currentPlaylistTrackPosition = this.props.getPlaylist.indexOf(this.props.nowPlaying);
    let goToTrackNo = (nextPrev === 'next') ? currentPlaylistTrackPosition + 1 : currentPlaylistTrackPosition - 1;

    if(this.props.playMode === 'from-playlist' && this.props.getPlaylist[goToTrackNo]) {
      this.props.setTrack(this.props.getPlaylist[goToTrackNo]);
    }
  }

  playModeText = () => {
    let text = '';
    switch (this.props.playMode) {
      case 'from-playlist':
        text = 'Playing from your playlist';
        break; 
      case 'one-off':
        text = (this.props.podcastSelect) ? `Playing from ${this.props.podcastSelect}` : '';
        break; 
      default: 
        text = '';
    }

    return <p>{text}</p>;
  }

  render() {
    return (
      <div className="player">
        <p>Now Playing: {this.props.nowPlaying.title} - {this.props.nowPlaying.author}</p>
        {this.playModeText()}
        <audio id="audio-player" controls>
          <source src={this.props.nowPlaying.enclosure.link} />
        </audio>
        <div>
          <button onClick={this.seekForward} data-skip="prev">0:15+</button>
          <button onClick={this.seekRewind} data-skip="prev">0:15-</button>
          <button onClick={this.playTrack} data-skip="next">Play</button>
          <button onClick={this.pauseTrack} data-skip="next">pause</button>
          <button onClick={this.nextPrevTrack} data-skip="next">NEXT</button>
          <button onClick={this.nextPrevTrack} data-skip="prev">PREV</button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.playerElement = document.querySelector(this.playerElementSelector);
  }

  componentDidUpdate() {
    this.setPlayerTrack();
  }
}

const mapStateToProps = (state) => {
  return {
    nowPlaying: state.nowPlaying,
    playMode: state.playMode,
    getPlaylist: state.getPlaylist,
    podcastSelected: state.podcastSelected
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      setTrack: setTrack,
      setPlayMode: setPlayMode,
      setAlertMsg: setAlertMsg
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
