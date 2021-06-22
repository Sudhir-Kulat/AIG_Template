import userReducer from '../../reducer/UserReducer'
import {actionTypes} from '../../actions/ActionTypes'

    const initialState = {
        error:null, isLoading:false, plans:[]
    }
    const usersPost = [{id:1, name:'sudhir',email:'sk@gmail.com',gender:'Male'},{id:2, name:'sudhir2',email:'sk2@gmail.com',gender:'Male'},{id:3, name:'sudhir3',email:'sk3@gmail.com',gender:'Male'}]

    describe('User reducer',()=>{
      it("should return default state", () => {
        const newState = userReducer(undefined, {});
        expect(newState).toEqual(initialState);
      });

      it('should return new state if received type isLoading received',()=>{
          const loading= {isLoading:true}
          const newState = userReducer(undefined, {type:actionTypes.FETCH_USERS_START,payload:loading});
          expect(newState).toEqual({error:null, isLoading:true, plans:[]})
      })
      it('should return new state if received type fail received',()=>{
        const error= {error:true}
        const newState = userReducer(undefined, {type:actionTypes.FETCH_USERS_FAILED, payload:error});
        expect(newState).toEqual({error:error, isLoading:false, plans:[]})
    })

      it("should return new state if type success received", () => {
        const newState = userReducer(undefined, {
          type: actionTypes.FETCH_USERS_SUCCESS,
          payload: usersPost,
        });
        expect(newState).toEqual({
          error: null,
          isLoading: false,
          plans: usersPost,
        });
      });
    })

