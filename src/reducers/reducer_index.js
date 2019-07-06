import {combineReducers} from 'redux';
import {feed} from './reducer_feed';
import {nowPlaying} from './reducer_now-playing';

const rootReducer = combineReducers({
    feed: feed,
    nowPlaying: nowPlaying
});

export default rootReducer;