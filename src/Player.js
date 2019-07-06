import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Player.css';

class Player extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="player">
        <audio id="audio-player" controls>
          <source src={this.props.nowPlaying} />
        </audio>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    nowPlaying: state.nowPlaying
  }
}

export default connect(mapStateToProps)(Player);
