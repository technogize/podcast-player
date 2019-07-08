import {combineReducers} from 'redux';
import {feed} from './reducer_feed';
import {nowPlaying} from './reducer_now-playing';
import {getPlaylist} from './reducer_playlist';

const rootReducer = combineReducers({
    feed: feed,
    nowPlaying: nowPlaying,
    getPlaylist: getPlaylist
});

export default rootReducer;