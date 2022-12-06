import { GET_UP_COMING } from "../constants";
import dataService from "../services/dataServices";

export const getUpComing = () => async dispatch => {
    const upComingMovies = await dataService.getUpComing();
    dispatch(getUpComingSuccess(upComingMovies));
};

const getUpComingSuccess = upComingMovies => ({
    type: GET_UP_COMING,
    payload: upComingMovies,
});