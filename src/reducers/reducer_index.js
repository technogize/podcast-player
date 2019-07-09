import {combineReducers} from 'redux';
import {feed} from './reducer_feed';
import {nowPlaying} from './reducer_now-playing';
import {getPlaylist} from './reducer_playlist';
import {playMode} from './reducer_play-mode';

const rootReducer = combineReducers({
    feed: feed,
    nowPlaying: nowPlaying,
    getPlaylist: getPlaylist,
    playMode: playMode
});

export default rootReducer;