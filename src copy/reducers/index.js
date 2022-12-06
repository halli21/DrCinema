import { combineReducers } from 'redux';
import data from './dataReducer';
import cinemas from './cinemasReducer';
import movies from './moviesReducer';
import upComing from './upComingReducer';


export default combineReducers({
    data,
    cinemas,
    movies,
    upComing,
});