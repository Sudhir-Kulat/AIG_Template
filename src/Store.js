import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './reducer/index'
export const middleWare = [thunk]
export const createStoreWithMiddleWare = applyMiddleware(...middleWare)(createStore)

export const store = createStoreWithMiddleWare(rootReducer)