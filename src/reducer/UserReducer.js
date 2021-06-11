import {actionTypes} from '../actions/ActionTypes'

const initialState={
    plans: [],
    isLoading: false,
    error: null,
}
const UserReducer=(state=initialState, {type,payload})=>{
    switch (type){
        case actionTypes.FETCH_USERS_SUCCESS:
            return {
                ...state,
                plans: payload,
                isLoading: false,
                error:null
            }
            case actionTypes.FETCH_USERS_START:
                return {
                  ...state,
                  isLoading: true,
            };

            case actionTypes.FETCH_USERS_FAILED:
                return {
                  ...state,
                  error: payload,
            };
        default:
            return state;
    }
}

export default UserReducer;