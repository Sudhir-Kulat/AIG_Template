import React from 'react'
import Header from './component/header/Header'
import BreadCrumb from "./component/breadcrumb/BreadCrumb";
import Home from './component/Home'
import Footer from './component/footer/Footer'

const App=()=> {
  return (
    <React.Fragment>
      <Header />
      <BreadCrumb heading="Warranty Component Administration" label="Plan" />
      <Home />
      <Footer />
    </React.Fragment>
  );
}

export default App;
