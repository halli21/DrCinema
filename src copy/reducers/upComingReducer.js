import { GET_UP_COMING } from "../constants";

export default function (state = {}, action) {
    switch (action.type) {
        case GET_UP_COMING: return action.payload
        default: return state;
    }

}