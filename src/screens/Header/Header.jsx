import React from "react";
import "./index.css";
const Header = () => {
  return (
    <div className="Container">
      {/* logo */}
      <div>
        <img
          className="image"
          src={require("../../images/headerimage/header.png")}
          alt=""
        />
      </div>
      <div
        className="secondContainer"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
          alignItems: "center",
        }}
      >
        {/* Pages */}
        <div className="pages">
          <p className="pagestext">PROMOTIONS</p>
          <p className="pagestext">DOWNLOAD</p>
          <p className="pagestext">SLOTO WORLD</p>
          <p className="pagestext">BANKING</p>
        </div>
        {/* Button */}
        <div>
          <button className="Button1">PLAY NOW</button>
        </div>
        {/* log  */}
        <div className="logButtons">
          {/* login */}
          <div>
            <img
              className="log"
              src={require("../../images/headerimage/login-btn.png")}
              alt=""
            />
          </div>
          {/* signup */}
          <div>
            <img
              className="log"
              src={require("../../images/headerimage/signup-btn.png")}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
