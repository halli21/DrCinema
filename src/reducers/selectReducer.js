import { SELECT_CINEMA } from "../constants";

export default function (state = {}, action) {
    switch (action.type) {
        case SELECT_CINEMA: return action.payload
        default: return state;
    }

}