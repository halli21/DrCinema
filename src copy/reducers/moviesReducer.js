import { GET_MOVIES } from "../constants";

export default function (state = {}, action) {
    switch (action.type) {
        case GET_MOVIES: return action.payload
        default: return state;
    }

}