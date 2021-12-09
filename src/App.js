import "./App.css";
import Header from "./Components/Header";
import AddCity from "./Components/AddCity";
import { Fragment, useState } from "react";
import ListGrid from "./Components/ListGrid";

function App() {
  const[Refresh,SetRefresh]=useState([])
  const[Active,SetActive]=useState(true)
  return (
    <Fragment>
      <Header />
      <AddCity SetRefresh={SetRefresh} SetActive={SetActive}/>
      <ListGrid Refresh={Refresh} Active={Active}/>
    </Fragment>
  );
}

export default App;
