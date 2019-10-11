import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {removePlaylistItem} from './actions/action_set-playlist';
import {setPlayMode, setTrack} from './actions/action_play';

class Playlist extends Component {
    removeFromList = (e) => {
        this.props.removePlaylistItem(e.currentTarget.dataset.guid);
    }

    episodePlay = (e) => {
        let episodeDetails = this.props.getPlaylist.filter((item) => {
          return item.guid === e.currentTarget.dataset.guid;
        });
    
        this.props.setTrack(episodeDetails[0]);
        this.props.setPlayMode('from-playlist');
    }

    createPlaylistItems = () => {
        return this.props.getPlaylist.map((track) => {
            return  <div key={track.guid} className="playlist__item">
                        <div className="playlist__item-title">
                            {track.title}
                        </div>
                        <div className="playlist__item-controls">
                            <span onClick={this.removeFromList} data-guid={track.guid}>REMOVE</span>
                            <span onClick={this.episodePlay} data-guid={track.guid}>PLAY</span>
                        </div>
                    </div>
        });
    }

    render() {
        return(
            <div className="playlist c-list">
                <h2 className="c-list__title">Playlist</h2>
                <div className="playlist c-list__list">{this.createPlaylistItems()}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        getPlaylist: state.getPlaylist
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        removePlaylistItem: removePlaylistItem,
        setPlayMode: setPlayMode,
        setTrack: setTrack
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);