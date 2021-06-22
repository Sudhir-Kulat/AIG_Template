import checkPropTypes from 'check-prop-types'
import MockAdapter from 'axios-mock-adapter'
import ConfigureMockStore from 'redux-mock-store'
import axios from 'axios'
import thunk from 'redux-thunk'

export const findByTestAttr=(comp, attr)=>{
    const wrapper = comp.find(`[data-test='${attr}']`);
    return wrapper;
}

export const checkProps = (component, expectedProps)=>{
     const propsError = checkPropTypes(component.propType, expectedProps,'props',component.name)
     return propsError;
    }


export const mock = new MockAdapter(axios)
const middleWareThunk = [thunk]

const mockStore = ConfigureMockStore(middleWareThunk)
export const store = mockStore({})