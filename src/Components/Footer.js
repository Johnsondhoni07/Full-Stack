import React from "react";
// import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid" style={{color:'White'}}>
      <div id="Footer">
        <div className="d-flex justify-content-around">
          <div className="d-flex flex-row bd-highlight mb-3">
            <div className="d-flex flex-column bd-highlight mb-3">
              <div className="p-2 bd-highlight">Contact</div>
              <div className="p-2 bd-highlight">FAQ</div>
            </div>
          </div>
          <div className="d-flex flex-row bd-highlight">
            <div className="d-flex flex-column bd-highlight mb-3">
              <div className="p-2 bd-highlight">Privacy</div>
              <div className="p-2 bd-highlight">Contact us</div>
            </div>
          </div>
          <div className="d-flex flex-row bd-highlight">
            <div className="d-flex flex-column bd-highlight mb-3">
              <div className="p-2 bd-highlight">Terms of Use</div>

              <div className="p-2 bd-highlight">Question?</div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="d-flex flex-row bd-highlight mb-3">
            <div>All CopyRight received @2021</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

