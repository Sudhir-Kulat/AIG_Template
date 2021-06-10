import React from 'react'
import PlanSearch from "./form/PlanSearch";
import './home.css'
import {useSelector} from 'react-redux'
import PlanSearchResult from "./PlanSearchResult";

const Home = () => {
  const [loading, setLoading] = React.useState(false)
  const users = useSelector(state=>state.plans);
  console.log("home")
  console.log(users)
    return (
      <div className="home">
        <span className="home__greetings">Welcome Guest</span>
        <h4 className="home__plan">Search Plan</h4>
        <PlanSearch />
        {users.length ?<PlanSearchResult users={users}/>:null}
      </div>
    );
}

export default Home
