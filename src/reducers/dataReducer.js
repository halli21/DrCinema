import { GET_TOKEN } from "../constants";

export default function (state = {}, action) {
    switch (action.type) {
        case GET_TOKEN: return action.payload
        default: return state;
    }

}