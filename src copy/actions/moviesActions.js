import { GET_MOVIES } from "../constants";
import dataService from "../services/dataServices";

export const getMovies = () => async dispatch => {
    const movies = await dataService.getMovies();
    dispatch(getMoviesSuccess(movies));
};

const getMoviesSuccess = movies => ({
    type: GET_MOVIES,
    payload: movies,
});