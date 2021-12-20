import React, { useState } from "react";
import axios from "axios";

const Searchbar = ({SetDetails}) => {
  
  const [Data, SetData] = useState();

  const InputHandler = (event) => {
     axios
        .get(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            event.target.value +
            "&appid=fff7c83f41ced58422d5b40ec3c0c01a"
        )
        .then((Response) => {
          SetData({
            City: event.target.value ,
            Longitude: Response.data.coord.lon ,
            Latitude: Response.data.coord.lat 
          })
        });
        
    // SetData({ City: event.target.value });
  };
  const OnSubmitHandler = (event) => {
    event.preventDefault();
    console.log('now',event.target);
    SetDetails((old) => [...old, Data]);
    console.log('now',Data)
    document.getElementById("city").value = "";

    // if (Data) {
    //   console.log("error");
    //   console.log('now',event.target);
    // SetCity((old) => [...old, Data]);
    // console.log('now',Data)
    // } else {
      
    //   axios
    //     .get(
    //       "https://api.openweathermap.org/data/2.5/weather?q=" +
    //         Loc +
    //         "&appid=fff7c83f41ced58422d5b40ec3c0c01a"
    //     )
    //     .then((Response) => {
    //       console.log(Response.data.coord.lat);
    //       SetLon([{ Longitude: Response.data.coord.lon }]);
    //       SetLat([{ Latitude: Response.data.coord.lat }])
    //       SetLon((old)=>[...old,Lon])
    //       SetLat((old)=>[...old,Lat])
    //     });

    //   document.getElementById("city").value = "";
    // }
    
  };

  return (
    <div>
      <form onSubmit={OnSubmitHandler}>
        <div className="form-group mt-3 ml-5 mr-5">
          <input
            type="Text"
            onChange={InputHandler}
            className="form-control"
            id="city"
            name="city"
            // required
            placeholder="Enter City"
          />
          <button type="submit" className="btn btn-primary mt-3 mb-3 ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default Searchbar;
