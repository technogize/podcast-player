import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {removePlaylistItem} from './actions/action_set-playlist';
import './Playlist.css';

class Playlist extends Component {
    removeFromList = (e) => {
          
        this.props.removePlaylistItem(e.currentTarget.dataset.guid);
        
    }

    createPlaylistItems = () => {
        return this.props.getPlaylist.map((track) => {
            return <div key={track.guid}>{track.title} <span onClick={this.removeFromList} data-guid={track.guid}>REMOVE</span></div>
        });
    }

    render() {
        return(
            <React.Fragment>
                <h3>Playlist</h3>
                <div>{this.createPlaylistItems()}</div>
            </React.Fragment>
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
        removePlaylistItem: removePlaylistItem
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Playlist);