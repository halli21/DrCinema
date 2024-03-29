import { GET_CINEMAS } from "../constants";
import dataService from "../services/dataServices";

export const getCinemas = () => async dispatch => {
    const cinemas = await dataService.getCinemas();
    dispatch(getCinemasSuccess(cinemas));
};

const getCinemasSuccess = cinemas => ({
    type: GET_CINEMAS,
    payload: cinemas
});