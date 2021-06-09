import {combineReducers} from 'redux';
import PlansReducer from './PlansReducer'

export const rootReducer = combineReducers({
    plans: PlansReducer
})