export const getPlans=(data)=>{
    console.log("Get pans for"+data)
    return async(dispatch)=>{
        try {
            const data= "Premium for one year would be $300USD"
            dispatch({type:'SEARCH_PLAN',payload:data})
        } catch (error) {
           console.log(error)
        }
    }
 }