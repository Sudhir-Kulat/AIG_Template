import React from 'react'
import PlanSearch from "./form/PlanSearch";
import './home.css'

const Home = () => {
    return (
      <div className="home">
        <span className="home__greetings">Welcome Guest</span>
        <h4 className="home__plan">Search Plan</h4>
        <PlanSearch />
      </div>
    );
}

export default Home
