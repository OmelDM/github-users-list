import {UPDATE_CURRENT_USER, UPDATE_USER_LIST, CLEAR_CURRENT_USER} from "./actions";

const initialState = {
    userList: [],
    currentUser: null,
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_USER_LIST: {
            return {
                ...state,
                userList: {
                    ...state.userList,
                    ...action.payload,
                }
            }
        }

        case UPDATE_CURRENT_USER: {
            return {
                ...state,
                currentUser: action.payload,
            }
        }

        case CLEAR_CURRENT_USER: {
            return {
                ...state,
                currentUser: initialState.currentUser,
            }
        }

        default:
            return state;
    }
}
