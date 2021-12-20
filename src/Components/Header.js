import React from "react";
import Logo from "./Images/insta.jpeg";

const Header = () => {
  
  return (
    <div className="container-fluid p-3 Header__app">
      <div className="row">
        <div className="col-md-3 b-3">
          <img className="col-8 Header__image" src={Logo} alt="" />
        </div>
        <div className="col-md-9 m-auto">
          <input className="col-md-3 mt-1 Header__search" placeholder="Search" type="text" />
          <button className='col-md-1 m-3  Header__button'> Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
