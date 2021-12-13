import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchMovieList = ({ Search }) => {
  
  const [Imdb, SetImdb] = useState ([]);
  let url = "https://image.tmdb.org/t/p/w1280";
  useEffect(() => {
    // console.log(url);
    axios
      .get(`https://api.themoviedb.org/3/search/movie?&api_key=8867ee32e88d72e6d21ef084a3df3e44&query=${Search}`)
      .then((res) => {
        // console.log(res);
        SetImdb(res.data.results);
      });
  }, [Search]);
  return (
    <div>
      <div className="title">
        <h4 style={{ color: "#E50914" }} className="ml-2">
          Search Results For {Search}
        </h4>
      </div>
      <div className="rowcard">
        <div className="fle">
          {Imdb.map((e, i) => (
            <div className="listcard" key={i}>
              <div className="card">
                <img
                  className="card-img-top cardimage"
                  src={url+e.poster_path}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h6 className="card-text cardtitle ">
                    {e.title ? e.title : e.name}
                  </h6>
                  <p className="card-text rating">
                    IMDB Rating:{e.vote_average}{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchMovieList;
