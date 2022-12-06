import { SELECT_CINEMA } from '../constants';

export const selectCinema = cinemaId => {
    return {
        type: SELECT_CINEMA,
        payload: { cinemaId }
    }
};