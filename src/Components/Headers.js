import React from "react";
import logo from "./images/Netflix.png";
import './Headers.css';

const Headers = () => {
  return (
    <div className='Header'>
      <div className="container-fluid">
        <div className="row p-3">
          <div className="col-sm">
            <img src={logo} className="p-2" style={{ width: "20%" }} alt="" />
          </div>

          <div className="col-sm ">
            <button className="btn btn-danger float-end mt-2 mx-3">login</button>
            <button className="btn btn-danger float-end mt-2 mx-3">Sign-up</button>
          </div>
        </div>
      </div>
      {/* <div className="row">
        <div className="container-fluid bg-dark p-3">
            <div className='col-sm-6'>
          <img src={logo} className="p-2" alt="" />
          </div>
            <div className='col-sm-6'>
          <button className="btn btn-danger">login</button>
          <button className="btn btn-danger">Sign-up</button>
          </div>
        </div>
  </div> */}
    </div>
  );
};

export default Headers;
