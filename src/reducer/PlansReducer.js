// const initialState={
//     plans: ""
// }
const PlanReducer=(plans="", action)=>{
    console.log("in reducer"+ action.payload)
    switch (action.type){
        case 'SEARCH_PLAN':
            return action.payload
        default:
            return plans;
    }
}

export default PlanReducer;