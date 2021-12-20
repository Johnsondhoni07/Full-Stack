// import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Posts from './Components/Posts';
import Registration from './Components/Registration';
import Login from './Components/Login';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Registration />} />
      </Routes>
      <Header/>
      <Posts/>
      <Posts/>
      <Posts/>
      <Posts/>  
      <Posts/>  
      <Posts/>  
      <Posts/>    
    </div>
  );
}

export default App;
