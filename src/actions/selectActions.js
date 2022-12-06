import { SELECT_CINEMA } from '../constants';

export const selectCinema = cinema => {
    return {
        type: SELECT_CINEMA,
        payload: { cinema }
    }
};