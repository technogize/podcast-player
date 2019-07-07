import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setTrack} from './actions/action_play';
import './Episodes.css';

class Episodes extends Component {
  episodePlay = (e) => {
    let episodeDetails = this.props.episodes.items.filter((item) => {
      return item.guid === e.currentTarget.dataset.guid;
    });

    this.props.setTrack(episodeDetails[0]);
  }

  listEpisodes = () => {
    let episodes = this.props.episodes && this.props.episodes.hasOwnProperty('items') ? this.props.episodes.items : [];
    if (episodes.length) {
        return episodes.map((episode) => {
            //logic to ensure audio file exists for episode
            if(episode.enclosure && episode.enclosure.link && episode.enclosure.type === 'audio/mpeg') {
                return <div className="episode" onClick={this.episodePlay} key={episode.guid} data-guid={episode.guid} data-mp3={episode.enclosure.link}>
                    {episode.title}
                </div>
            }

            return false;
        });
    }
    
    return (
        <div className="no-episodes">No episodes were found for this podcast.</div>
    );
  }

  render() {
    return (
      <div className="episodes">
        {this.listEpisodes()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    episodes: state.feed
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setTrack: setTrack
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
