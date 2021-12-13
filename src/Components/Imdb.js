import axios from "axios";
import React, { useEffect, useState } from "react";

import './MovieList.css'
const Imdb = () => {
  const [Imdb, SetImdb] = useState([]);
  useEffect(() => {
    axios
      .get("https://imdb-api.com/en/API/Top250Movies/k_kvrkpo4m")
      .then((res) => {
        // console.log(res.data.items);
        SetImdb(res.data.items);
      });
  }, []);
  return (
    <div>
      <div className="title">
        <h4 style={{ color: "#E50914" }} className="ml-2">
          IMBD
        </h4>
      </div>
      <div className="rowcard">
        <div className="fle">
          {Imdb.map((e, i) => (
            <div className="listcard" key={i}>
              <div className="card">
                <img
                  className="card-img-top cardimage"
                  src={ e.image}
                  alt="Card cap"
                />
                <div className="card-body">
                  <h6 className="card-text cardtitle ">
                    {e.title ? e.title : e.name}
                  </h6>
                  <p className="card-text rating">
                    IMDB Rating:{e.imDbRating}{" "}
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

export default Imdb;
