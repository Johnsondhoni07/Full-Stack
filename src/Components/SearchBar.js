import React, { useState } from "react";


const SearchBar = ({SetSearch , SetActive}) => {
  const[Data,SetData]=useState([])
  const OnChangeHandler = (e) =>{
    SetData(e.target.value)
  }

  const OnSubmitHandler = (e) =>{
    e.preventDefault();
    SetSearch(Data)
    SetActive(true)
    SetData('')
  }
  return (
    <div>
      <form  onSubmit={OnSubmitHandler} className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 form-group">
            <input
              type="text"
              onChange={OnChangeHandler}
              className="form-control"
              placeholder="Movie"
              value={Data}
            />
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <button type="submit" className="btn btn-danger">
                Search
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default SearchBar;



// useEffect (() => {
  //   axios
  //     .get(
  //       "https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2019&api_key=8867ee32e88d72e6d21ef084a3df3e44"
  //     ).then((res) => {
  //       // console.log(res.data.results);
  //       SetMovie(res.data.results);
      // });
// let one = "https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2020&api_key=8867ee32e88d72e6d21ef084a3df3e44 "
// let two = "https://api.themoviedb.org/3/discover/movie?with_genres=18&primary_release_year=2019&api_key=8867ee32e88d72e6d21ef084a3df3e44"
 
// const requestOne = axios.get(one);
// const requestTwo = axios.get(two);
 
// axios.all([requestOne, requestTwo,]).then(axios.spread((...responses) => {
//   const responseOne = responses[0]
//   console.log(responses[0].data.results)  
//   SetMovie(responses[1].data.results)
//   SetMovie((old)=>[...old,responses[0].data.results]) 
//   const responseTwo = responses[1]
//   // use/access the results 
// }))
  // }, []);
