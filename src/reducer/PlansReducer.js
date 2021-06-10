// const initialState={
//     plans: ""
// }
const PlanReducer=(plans=[], action)=>{
    switch (action.type){
        case 'SEARCH_PLAN':
            return action.payload
        default:
            return plans;
    }
}

export default PlanReducer;