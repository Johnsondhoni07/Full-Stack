import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./MovieList.css";

const MovieList = ({ head, fetchurl }) => {
  const [Movie, SetMovie] = useState([]);
  let url = "https://image.tmdb.org/t/p/w1280";

  useEffect(() => {
    axios.get(fetchurl).then((res) => {
      SetMovie(res.data.results);
    });
  }, [fetchurl]);

  return (
    <div>
      <div className='title'>
      <h4 style={{ color: "#E50914" }} className="ml-2">
        {head}
      </h4>
      </div>
      <div className="rowcard">
        <div className="fle">
          {Movie.map((e, i) => (  
          <div className="listcard" key={i}>
            <div className="card">
              <img className="card-img-top cardimage" src={url+e.poster_path} alt="Card cap" />
              <div className="card-body">
                <h6 className="card-text cardtitle ">{e.title ? e.title : e.name}</h6>
                <p className="card-text rating">IMDB Rating:{e.vote_average} </p>
              </div>
            </div>
          </div>
           ))} 
        </div>
      </div>
    </div>
  );
};

export default MovieList;

  /* <h1 style={{color:'#E50914'}} className='ml-2'>2021</h1>
    <div className='rowcard'>
      <div className="fle">
      {Movie.map((e, i) => (
        <div className="listcard" key={i}>
          <div className="card">
            <img className="card-img-top cardimage" src={url+e.poster_path} alt="Card cap" />
            <div className="card-body">
              <h6 className="card-text cardtitle ">
                {e.title}
              </h6>
              <p className="card-text rating">IMDB Rating:  {e.vote_average}</p>
            </div>
          </div>
        </div>
        
      ))}
      </div>
    </div> */

