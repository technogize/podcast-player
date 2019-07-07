import React, {Component} from 'react';
import {connect} from 'react-redux';
import './Episodes.css';

class Episodes extends Component {
  listEpisodes = () => {
    let episodes = this.props.episodes && this.props.episodes.hasOwnProperty('items') ? this.props.episodes.items : [];
    if (episodes.length) {
        return episodes.map((episode) => {
            //logic to ensure audio file exists for episode
            if(episode.enclosure && episode.enclosure.link && episode.enclosure.type === 'audio/mpeg') {
                return <div className="episode" key={episode.guid} data-mp3={episode.enclosure.link}>
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

export default connect(mapStateToProps)(Episodes);
