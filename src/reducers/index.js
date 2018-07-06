import { LOGIN } from '../actions';
import { USERSIGNUP } from '../actions';

export const theReducer = (state = [], action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                token: action.token
            }
        case USERSIGNUP:
            return {
                ...state,
                events: {

                }
            }
        default:
            // console.log("wow");
    }
}