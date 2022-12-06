import { GET_TOKEN } from "../constants";
import dataService from "../services/dataServices";

export const getNewToken = () => async dispatch => {
    const newToken = await dataService.getToken();
    dispatch(getNewTokenSuccess(newToken))
};

const getNewTokenSuccess = newToken => ({
    type: GET_TOKEN,
    payload: newToken
});

