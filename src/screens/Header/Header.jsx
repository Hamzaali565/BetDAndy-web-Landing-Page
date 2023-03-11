import React from "react";
import "./index.css";
const Header = () => {
  const Move = () => {
    window.open("https://www.slotocash.im/");
  };
  return (
    <div className="Container">
      {/* logo */}
      <div className="imagea">
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
          <p className="pagestext" onClick={Move}>
            PROMOTIONS
          </p>
          {/* <p className="pagestext">DOWNLOAD</p> */}
          <p className="pagestext" onClick={Move}>
            SLOTO WORLD
          </p>
          <p className="pagestext" onClick={Move}>
            BANKING
          </p>
        </div>
        {/* Button */}
        <div>
          <button className="Button1" onClick={Move}>
            PLAY NOW
          </button>
        </div>
        {/* log  */}
        <div className="logButtons">
          {/* login */}
          <div onClick={Move}>
            <img
              className="log"
              src={require("../../images/headerimage/login-btn.png")}
              alt=""
            />
          </div>
          {/* signup */}
          <div onClick={Move}>
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
