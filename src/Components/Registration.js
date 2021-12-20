import React, { useState } from "react";
import Logo from "./Images/insta.jpeg";
import { Link } from "react-router-dom";

const Registration = ({ SetUser }) => {
  const [EnteredData, SetEnteredData] = useState({});

  const inputHandler = (e) => {
    SetEnteredData({ ...EnteredData, [e.target.name]: e.target.value });
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    // let name = EnteredData.Name;
    let pass1 = EnteredData.Password;
    let email = EnteredData.Mail;
    let pass2 = EnteredData.Confirm_Pass;
    const validEmail = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );
    // if (name === '') {
    //     document.getElementById("msgname").innerHTML =
    //       "UserName is Required";
    //   }
    //   if (!name === '') {
    //     document.getElementById("msgname").innerHTML =
    //       "";
    //   }
    if (!validEmail.test(email)) {
      document.getElementById("msgemail").innerHTML =
        "Enter a valid Email Address";
      document.getElementById("Mail").style.borderColor = "red";
    }
    if (pass1.length <= 7) {
      document.getElementById("pass1").innerHTML =
        "Password Length must greather Than 7";
    }
    if (pass1 !== pass2) {
      document.getElementById("pass").innerHTML = "Password must Be Same";
      document.getElementById("Confirm_Pass").style.borderColor = "red";
    }
    if (validEmail.test(email)) {
      document.getElementById("msgemail").innerHTML = "";
      document.getElementById("Mail").style.borderColor = "#CCC";
    }
    if (pass1.length >= 8) {
      document.getElementById("pass1").innerHTML = "";
    }

    if (pass1 === pass2) {
      document.getElementById("pass").innerHTML = "";
      document.getElementById("Confirm_Pass").style.borderColor = "#ccc";
    }

    if (validEmail.test(email) && pass1 === pass2 && pass1.length >= 8) {
      // SetUser(EnteredData);

      console.log(EnteredData);
      document.getElementById("Mail").value = "";
      document.getElementById("Name").value = "";
      document.getElementById("Pass").value = "";
      document.getElementById("Confirm_Pass").value = "";
    }
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

              <Link to="/" className="col-md-1">
                <button className="Registration__button">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row Registration__bg">
        <div className="container-fluid col-md-5 mt-5 p-2">
          <form onSubmit={SubmitHandler}>
            <div
              className="container col-8  font-weight-bold p-2 "
              style={{ backgroundColor: "trans" }}
            >
              <div className="row font-weight-bold p-2">
                <div className="">
                  <h2>SignUp </h2>
                </div>
              </div>
              <div className="form-group p-1 ">
                <label id="container-form">UserName</label>
                <input
                  type="text"
                  className="form-control"
                  name="Name"
                  id="Name"
                  required
                  placeholder="Enter your Name"
                  onChange={inputHandler}
                />
                <small id="msgname" style={{ color: "white" }}></small>
              </div>
              <div className="form-group">
                <label>Email address</label>
                <input
                  type="text"
                  id="Mail"
                  className="form-control"
                  name="Mail"
                  placeholder="Enter email"
                  onChange={inputHandler}
                />
                <small id="msgemail" style={{ color: "white" }}></small>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  id="Pass"
                  required
                  className="form-control"
                  name="Password"
                  placeholder="Password"
                  onChange={inputHandler}
                />
                <small id="pass1" style={{ color: "white" }}></small>
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="Confirm_Pass"
                  name="Confirm_Pass"
                  placeholder="Password"
                  onChange={inputHandler}
                />
                <small id="pass" style={{ color: "white" }}></small>
              </div>

              <div className="ml-5">
                <button
                  type="submit"
                  className="Registration__button__sign-up mb-3 mt-3 col-5"
                >
                  Sign-Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
