import React from "react";
import Logo from "./Images/insta.jpeg";
import { Link } from "react-router-dom";

const Login = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <div className="container-fluid p-3 Registration__app">
        <div className="row">
          <div className="col-md-3 b-3">
            <img className="col-8 Registration__image" src={Logo} alt="" />
          </div>
          <div className="col-md-9 m-auto Registration__button__div">
            <div className="row">
              <p className="col-md-9"></p>
              <Link to="/signup" className="col-md-1">
                <button className="Registration__button">Signup</button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row Login__bg">
        {/* <div className="col-md-8 ">
          <img
            className="Login__bgimg"
            src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW5zdGFncmFtJTIwcmVlbHN8ZW58MHx8MHx8&w=1000&q=80"
            alt="Bg"
          />
        </div> */}
        <div className="container-fluid  col-md-5">
          <div className="p-4">
            <form onSubmit={onSubmitHandler}>
              <div className="container-fluid col-md-12 p-5 mt-5 ml-3 rounded">
                <div className="form-group">
                  <label>User Name</label>
                  <input
                    name="Username"
                    className="form-control"
                    placeholder="Enter Username"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    name="Password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="row">
                  <div className="col-12 ml-1 mt-2">
                    <button
                      type="submit"
                      className="Login__button__login  col-12 "
                    >
                      Log in
                    </button>

                    <div className="container col-6">
                      <a href="" style={{ color: "black" }}>
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
