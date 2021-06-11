import * as api from '../api/RestAPI'
import { actionTypes } from "./ActionTypes";

export const getPlans=()=>{
    console.log("action is " + actionTypes.FETCH_USERS_SUCCESS )
    return async(dispatch)=>{
        dispatch(fetchUsersStarted())
        try {
            const {data} = await api.fetch_users()
            dispatch({type:actionTypes.FETCH_USERS_SUCCESS, payload:data.data})
        } catch (error) {
            dispatch(fetchUsersFailed(error))
        }
    }
 }

const fetchUsersStarted=()=>{
    return{
        type: actionTypes.FETCH_USERS_START,
        payload:{
            isLoading: true
        }
    }
}

const fetchUsersFailed=(error)=>{
    return{
        type: actionTypes.FETCH_USERS_FAILED,
        payload:{
            error:error
        }
    }
}