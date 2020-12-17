import {UPDATE_USER_LIST} from "./actions";


export const rootReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_USER_LIST: {
            return {
                userList: action.payload,
            }
        }

        default:
            return state;
    }
}
