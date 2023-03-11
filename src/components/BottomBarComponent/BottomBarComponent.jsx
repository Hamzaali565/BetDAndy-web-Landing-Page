import React from "react";
import "./index.css";
import {
  YouTube,
  Instagram,
  Twitter,
  LinkedIn,
  Facebook,
} from "@mui/icons-material";
import { fontSize } from "@mui/system";
const BottomBarComponent = () => {
  const Move = () => {
    window.open("https://www.slotocash.im/");
  };
  return (
    <div className="BBarContainer">
      <div className="newLineContainer">
        <div className="newMainLine" />
      </div>
      <div className="BBarContainer1">
        <div className="BBarContainer2">
          <div onClick={Move}>
            <img
              className="paymentMethod"
              src={require("../../images/bottom images/1.png")}
              alt=""
            />
          </div>
          <div onClick={Move}>
            <img
              className="paymentMethod"
              src={require("../../images/bottom images/2.png")}
              alt=""
            />
          </div>
          <div onClick={Move}>
            <img
              className="paymentMethod"
              src={require("../../images/bottom images/3.png")}
              alt=""
            />
          </div>
          <div onClick={Move}>
            <img
              className="paymentMethod"
              src={require("../../images/bottom images/4.png")}
              alt=""
            />
          </div>
          <div onClick={Move}>
            <img
              className="paymentMethod"
              src={require("../../images/bottom images/5.png")}
              alt=""
            />
          </div>
          <div onClick={Move}>
            <img
              className="paymentMethod"
              src={require("../../images/bottom images/6.png")}
              alt=""
            />
          </div>
          <div onClick={Move}>
            <img
              className="paymentMethod"
              src={require("../../images/bottom images/7.png")}
              alt=""
            />
          </div>
          <div onClick={Move}>
            <img
              className="paymentMethod"
              src={require("../../images/bottom images/8.png")}
              alt=""
            />
          </div>
          <div onClick={Move}>
            <img
              className="paymentMethod"
              src={require("../../images/bottom images/9.png")}
              alt=""
            />
          </div>
        </div>
        <div className="iconMainContainer">
          <div className="iconContainer">
            <Instagram
              className="icon"
              style={{ color: "#C33E71", fontSize: "30px", cursor: "pointer" }}
            />
            <YouTube
              className="icon"
              style={{
                color: "#E40000",
                // transition: "0.3s",
                fontSize: "30px",
                cursor: "pointer",
              }}
            />
            <Twitter
              className="icon"
              style={{ color: "#1C9CEA", fontSize: "30px", cursor: "pointer" }}
            />
            <LinkedIn
              className="icon"
              style={{ color: "#2566AC", fontSize: "30px", cursor: "pointer" }}
            />
            <Facebook
              className="icon"
              style={{ color: "#1773EA", fontSize: "30px", cursor: "pointer" }}
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
