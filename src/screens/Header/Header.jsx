import React from "react";
import "./index.css";
const Header = ({ headerId1, headerId2 }) => {
  return (
    <div className="Container1">
      <div className="Container">
        {/* logo */}
        <div className="imagea">
          <img
            className="image"
            src={require("../../images/headerimage/Newlogo.png")}
            alt=""
          />
        </div>
        {/* <div
        className="secondContainer"
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "50%",
          alignItems: "center",
        }}
      > */}
        {/* Pages */}
        {/* <div className="pages">
          <p className="pagestext" id={headerId1} onClick={Move}>
            PROMOTIONS
          </p>
          <p className="pagestext" id={headerId2} onClick={Move}>
            SLOTO WORLD
          </p>
          <p className="pagestext" onClick={Move}>
            BANKING
          </p>
        </div> */}
        {/* Button */}
        <div>
          <button className="Button1">PLAY NOW</button>
        </div>
        {/* log  */}
        {/* <div className="logButtons">
          <div onClick={Move}>
            <img
              className="log"
              src={require("../../images/headerimage/login-btn.png")}
              alt=""
            />
          </div>
          <div onClick={Move}>
            <img
              className="log"
              src={require("../../images/headerimage/signup-btn.png")}
              alt=""
            />
          </div>
        </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Header;
