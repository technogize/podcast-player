import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setPlayMode, setTrack} from './actions/action_play';
import './Player.scss';

class Player extends Component {
  constructor(props) {
    super(props);
    this.currPlaying = this.props.nowPlaying;
  }

  // TODO: move setPlayerTrack(), playTrack() and pauseTrack() to a global utility
  // file and import when needed. This will mean componentDidUpdate() will not be
  // needed in Player.js

  setPlayerTrack = () => {
    if (this.props.nowPlaying && this.currPlaying !== this.props.nowPlaying && this.props.nowPlaying.enclosure && this.props.nowPlaying.enclosure.link) {
      document.querySelector('#audio-player').src = this.props.nowPlaying.enclosure.link;
      document.querySelector('#audio-player').play();
      this.currPlaying = this.props.nowPlaying;
      return;
    } 
    
    return false;
  }

  playTrack = () => {
    document.querySelector('#audio-player').play();
  }

  pauseTrack = () => {
    document.querySelector('#audio-player').pause();
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


  render() {
    return (
      <div className="player">
        <p>Now Playing: {this.props.nowPlaying.title} - {this.props.nowPlaying.author}</p>
        
        <audio id="audio-player" controls>
          <source src={this.props.nowPlaying.enclosure.link} />
        </audio>
        <button onClick={this.playTrack} data-skip="next">Play</button>
        <button onClick={this.pauseTrack} data-skip="next">pause</button>
        <button onClick={this.nextPrevTrack} data-skip="next">NEXT</button>
        <button onClick={this.nextPrevTrack} data-skip="prev">PREV</button>
      </div>
    );
  }

  componentDidUpdate() {
    this.setPlayerTrack();
  }
}

const mapStateToProps = (state) => {
  return {
    nowPlaying: state.nowPlaying,
    playMode: state.playMode,
    getPlaylist: state.getPlaylist
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      setTrack: setTrack,
      setPlayMode: setPlayMode
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
