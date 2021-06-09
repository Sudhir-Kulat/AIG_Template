import React from 'react'
import PlanSearch from "./form/PlanSearch";
import './home.css'
import {useSelector} from 'react-redux'
import PlanSearchResult from "./PlanSearchResult";

const Home = () => {
  const result = useSelector(state=>state.plans)
    return (
      <div className="home">
        <span className="home__greetings">Welcome Guest</span>
        <h4 className="home__plan">Search Plan</h4>
        <PlanSearch />
        {result && <PlanSearchResult result={result}/>}
      </div>
    );
}

export default Home
