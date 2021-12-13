// import { useState } from 'react';
import './App.css';
import Headers from './Components/Headers';
import MovieList from './Components/MovieList';
import SearchBar from './Components/SearchBar';
import requests from './requests'
// import Imdb from './Components/Imdb';
import Footer from './Components/Footer';
import { useState } from 'react';
import SearchMovieList from './Components/SearchMovieList';
function App() {
  const[Search,SetSearch]=useState([])
  const[Active,SetActive]=useState(false)
  
  return (
    <div className="root">
      <Headers/>
      <SearchBar SetSearch={SetSearch} SetActive={SetActive} />
      {Active && <SearchMovieList Search={Search}/>}
      {/* <Imdb/> */}
      <MovieList head={'Weekly Trending'} fetchurl={requests.Trending}/>
      <MovieList head={'Featured today'} fetchurl={requests.day}/>
      <MovieList head={'2020 Trending'} fetchurl={requests.Fetching2020}/>
      <MovieList head={'2019 Trending'} fetchurl={requests.Fetching2019}/>
      <Footer/>
    </div>
  );
}

export default App;
