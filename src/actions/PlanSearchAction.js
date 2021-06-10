import * as api from '../api/RestAPI'
export const getPlans=(data)=>{
    return async(dispatch)=>{
        try {
            const {data} = await api.fetch_users()
            dispatch({type:'SEARCH_PLAN',payload:data.data})
        } catch (error) {
            console.log(error)
        }
    }
 }