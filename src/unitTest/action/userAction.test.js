import {mock, store} from '../../Utility/index'
import {getUsers} from '../../actions/PlanSearchAction'
import {actionTypes} from '../../actions/ActionTypes'

describe('Get users Action',()=>{

    beforeEach(()=>{
        mock.reset();
        store.clearActions()
    })

    it('fetches the users', ()=>{
        const response = [{id:1, name:'sudhir'}]
        mock.onGet('https://gorest.co.in/public-api/users').reply(200, {data: response})

        return store.dispatch(getUsers()).then(()=>{
            const expecedAction = {
              type: actionTypes.FETCH_USERS_SUCCESS,
              payload: response,
            };
            expect(store.getActions()[1]).toEqual(expecedAction)
        })
    })

})