import React from "react";
import "./index.css";
import "animate.css";
import {
  YouTube,
  Instagram,
  Twitter,
  LinkedIn,
  Facebook,
} from "@mui/icons-material";
const BottomBarComponent = () => {
  return (
    <div className="BBarContainer">
      <div className="newLineContainer">
        <div className="newMainLine" />
      </div>
      <div className="BBarContainer1">
        <div className="BBarContainer2">
          <div>
            <img
              className="paymentMethod"
              src={require("../../images/bottom images/1.png")}
              alt=""
            />
          </div>
          <div>
            <img
              className="paymentMethod"
              src={require("../../images/bottom images/2.png")}
              alt=""
            />
          </div>
          <div>
            <img
              className="paymentMethod"
              src={require("../../images/bottom images/3.png")}
              alt=""
            />
          </div>
          <div>
            <img
              className="paymentMethod"
              src={require("../../images/bottom images/4.png")}
              alt=""
            />
          </div>
          <div>
            <img
              className="paymentMethod"
              src={require("../../images/bottom images/5.png")}
              alt=""
            />
          </div>
          <div>
            <img
              className="paymentMethod"
              src={require("../../images/bottom images/6.png")}
              alt=""
            />
          </div>
          <div>
            <img
              className="paymentMethod"
              src={require("../../images/bottom images/7.png")}
              alt=""
            />
          </div>
          <div>
            <img
              className="paymentMethod"
              src={require("../../images/bottom images/8.png")}
              alt=""
            />
          </div>
          <div>
            <img
              className="paymentMethod"
              src={require("../../images/bottom images/9.png")}
              alt=""
            />
          </div>
        </div>
        <div className="iconMainContainer" style={{ display: "none" }}>
          <div className="iconContainer">
            <Instagram
              className="icon"
              style={{
                color: "#C33E71",
                fontSize: "30px",
                cursor: "pointer",
                transition: "0.3s",
              }}
            />
            <YouTube
              className="icon"
              style={{
                color: "#E40000",
                transition: "0.3s",
                fontSize: "30px",
                cursor: "pointer",
              }}
            />
            <Twitter
              className="icon"
              style={{
                color: "#1C9CEA",
                fontSize: "30px",
                cursor: "pointer",
                transition: "0.3s",
              }}
            />
            <LinkedIn
              className="icon"
              style={{
                color: "#2566AC",
                fontSize: "30px",
                cursor: "pointer",
                transition: "0.3s",
              }}
            />
            <Facebook
              className="icon"
              style={{
                color: "#1773EA",
                fontSize: "30px",
                cursor: "pointer",
                transition: "0.3s",
              }}
            />
          </div>
        </div>
      </div>
      <div className="newLineContainer">
        <div className="newMainLine" />
      </div>
    </div>
  );
};

export default BottomBarComponent;
