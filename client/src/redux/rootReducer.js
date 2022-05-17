import { combineReducers } from 'redux';
import counterReducer from './Counter/counter.reducer';
import spotifyReducer from './Spotify/spotify.reducer';

const rootReducer = combineReducers({
    counter: counterReducer,
    spotify: spotifyReducer
});

export default rootReducer;