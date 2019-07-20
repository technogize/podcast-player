import {combineReducers} from 'redux';
import {feed} from './reducer_feed';
import {nowPlaying} from './reducer_now-playing';
import {getPlaylist} from './reducer_playlist';
import {playMode} from './reducer_play-mode';
import {podcastSelected} from './reducer_podcast-selected';
import {alertMsg} from './reducer_alert'

const rootReducer = combineReducers({
    feed: feed,
    nowPlaying: nowPlaying,
    getPlaylist: getPlaylist,
    playMode: playMode,
    podcastSelected: podcastSelected,
    alertMsg: alertMsg
});

export default rootReducer;