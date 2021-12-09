import React from "react";
import './Header.css'
import icon from "./header.png"
const Header = () => {
    return(
        <div id="header" className="container-fluid p-4">
            <div >
                <img id="image"  src={icon} alt="weather" />
            </div>
            <h3 id='title'>Weather App</h3>
        </div>
    );
}
export default Header;