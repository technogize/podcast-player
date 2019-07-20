import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addPlaylist} from './actions/action_set-playlist';
import {setTrack} from './actions/action_play';
import {setPlayMode} from './actions/action_play';
import './Episodes.scss';

class Episodes extends Component {
  episodePlay = (e) => {
    let episodeDetails = this.props.episodes.items.filter((item) => {
      return item.guid === e.currentTarget.dataset.guid;
    });

    this.props.setTrack(episodeDetails[0]);
    this.props.setPlayMode('one-off');
  }

  addToPlaylist = (e) => {

    //CREATE function for this::::
    let episodeDetails = this.props.episodes.items.filter((item) => {
      return item.guid === e.currentTarget.dataset.guid;
    });
    
    this.props.addPlaylist(episodeDetails[0]);
  }

  listEpisodes = () => {
    let episodes = this.props.episodes && this.props.episodes.hasOwnProperty('items') ? this.props.episodes.items : [];
    if (episodes.length) {
        return episodes.map((episode) => {
            //logic to ensure audio file exists for episode
            if(episode.enclosure && episode.enclosure.link && episode.enclosure.type === 'audio/mpeg') {
                return <div className="episode" key={episode.guid}>
                    {episode.title} 
                    <button onClick={this.episodePlay} data-guid={episode.guid} data-mp3={episode.enclosure.link}>Play</button>
                    <button onClick={this.addToPlaylist} data-guid={episode.guid} data-mp3={episode.enclosure.link}>Add to playlist</button>
                </div>
            }

            return false;
        });
    }
    
    return (
        <React.Fragment>
          <h3>Episodes</h3>
          <div className="no-episodes">No episodes were found for this podcast.</div>
        </React.Fragment>
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
    episodes: state.feed,
    getPlaylist: state.getPlaylist
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setTrack: setTrack,
    addPlaylist: addPlaylist,
    setPlayMode: setPlayMode
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Episodes);
