import React from "react";
import "./index.css";
const BottomBarComponent = () => {
  return (
    <div className="BBarContainer">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          height: "10px",
          backgroundColor: "red",
        }}
      />
      <div className="BBarContainer1">
        <div className="BBarContainer2">
          <div>
            <img src={require("../../images/bottom images/1.png")} alt="" />
          </div>
          <div>
            <img src={require("../../images/bottom images/2.png")} alt="" />
          </div>
          <div>
            <img src={require("../../images/bottom images/3.png")} alt="" />
          </div>
          <div>
            <img src={require("../../images/bottom images/4.png")} alt="" />
          </div>
          <div>
            <img src={require("../../images/bottom images/5.png")} alt="" />
          </div>
          <div>
            <img src={require("../../images/bottom images/6.png")} alt="" />
          </div>
          <div>
            <img src={require("../../images/bottom images/7.png")} alt="" />
          </div>
          <div>
            <img src={require("../../images/bottom images/8.png")} alt="" />
          </div>
          <div>
            <img src={require("../../images/bottom images/9.png")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBarComponent;
