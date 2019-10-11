import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setPlayMode, setTrack, setPlayerState} from './actions/action_play';


class Player extends Component {
  constructor(props) {
    super(props);
    this.currPlaying = this.props.nowPlaying;
    this.skipSeconds = 15;
    this.audioPlayer = React.createRef();
    this.audioPlayerSelector = '#audio-player';
    this.seekbarSelector = '#seekbar';
    this.trackTime = '';
  }

  // TODO: move setPlayerTrack(), playTrack() and pauseTrack() to a global utility
  // file and import when needed. This will mean componentDidUpdate() will not be
  // needed in Player.js

  setPlayerTrack = () => {
    if (this.props.nowPlaying && this.currPlaying !== this.props.nowPlaying && this.props.nowPlaying.enclosure && this.props.nowPlaying.enclosure.link) {
      this.audioPlayer.current.src = this.props.nowPlaying.enclosure.link;
      this.audioPlayer.current.play();
      this.currPlaying = this.props.nowPlaying;
      return;
    } 
    
    return false;
  }

  playTrack = () => {
    this.audioPlayer.current.play();
  }

  pauseTrack = () => {
    this.audioPlayer.current.pause();
  }

  seekForward = () => {
    this.audioPlayer.current.currentTime += this.skipSeconds;
  }

  seekRewind = () => {
    this.audioPlayer.current.currentTime -= this.skipSeconds;
  }

  audioEnded = () => {
    if(this.props.playMode !== 'from-playlist') {
      return;
    }
    let nextTrackNo = this.props.getPlaylist.indexOf(this.props.nowPlaying) + 1;
    this.props.setTrack(this.props.getPlaylist[nextTrackNo]);    
  }

  setSeekbarDuration = () => {
    document.querySelector(this.seekbarSelector).max = document.querySelector(this.audioPlayerSelector).duration;
  }

  setSeekbarPosition = () => {
    document.querySelector(this.seekbarSelector).value = document.querySelector(this.audioPlayerSelector).currentTime;
  }

  setAudioPlayerTime = () => {
    document.querySelector(this.audioPlayerSelector).currentTime = document.querySelector(this.seekbarSelector).value;
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
        text = (this.props.podcastSelect) ? `Playing from ${this.props.podcastSelect} episode list` : '';
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
        <audio id="audio-player" className="player__player" onTimeUpdate={this.setSeekbarPosition} onLoadedMetadata={this.setSeekbarDuration} onEnded={this.audioEnded} ref={this.audioPlayer} controls>
          <source src={this.props.nowPlaying.enclosure.link} />
        </audio>
        <input id="seekbar" type="range" name="rng" min="0" step="0.25" value="0" onChange={this.setAudioPlayerTime} className="player__seekbar" />
        <div className="player__controls">
          <span className="oi" onClick={this.nextPrevTrack} data-skip="prev" data-glyph="media-step-backward" ></span>
          <span className="oi" onClick={this.seekRewind} data-glyph="media-skip-backward"></span>
          <span className="oi" onClick={this.playTrack} data-glyph="media-play"></span>
          <span className="oi" onClick={this.pauseTrack} data-glyph="media-pause"></span>
          <span className="oi" onClick={this.seekForward} data-glyph="media-skip-forward"></span>
          <span className="oi" onClick={this.nextPrevTrack} data-skip="next" data-glyph="media-step-forward"></span>          
        </div>
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
    getPlaylist: state.getPlaylist,
    podcastSelected: state.podcastSelected,
    setPlayerState: state.setPlayerState
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
      setTrack: setTrack,
      setPlayMode: setPlayMode
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
