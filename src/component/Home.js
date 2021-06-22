import React,{useEffect} from 'react'
import PlanSearch from "./form/PlanSearch";
import PlanSearchResult from "./form/PlanSearchResult";
import {useSelector,useDispatch} from 'react-redux';
import {getUsers} from '../actions/PlanSearchAction'
import './home.css'

const Home = () => {
const users = useSelector(state=>state.users);
const dispatch = useDispatch();
useEffect(() => {
  dispatch(getUsers())
},[dispatch])

    return (
      <div className="home">
        <span className="home__greetings">Welcome Guest</span>
        <h4 className="home__plan">Search Plan</h4>
        <PlanSearch />
        {!users.isLoading?<PlanSearchResult users={users.plans} />:<h2>Loading....</h2>}
      </div>
    );
}

export default Home
