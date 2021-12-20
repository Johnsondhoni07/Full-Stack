import React, { useState } from "react";
import Header from './components/Header';
import Searchbar from "./components/Searchbar";
import Table from "./components/Table";


function App() {
  
  const[Details,SetDetails]=useState([]);

  return (
    <>
    <Header / >
    <div className="row">
      <div className="col-md-7 mb-5" >
        <Searchbar SetDetails={SetDetails} />
        <Table Details={Details}/>
      </div>
      <div className="col-md-5 bg-dark">
        <h1>Maps</h1>
      </div>
    </div>
    </>
  );
  
}

export default App;
