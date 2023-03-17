import React from "react";
import "./index.css";
import {
  YouTube,
  Instagram,
  Twitter,
  LinkedIn,
  Facebook,
} from "@mui/icons-material";
const Banner = () => {
  return (
    <div>
      <div className="container">
        <div className="fieldInput">
          <div id="google_translate_element" class="DDown1"></div>
        </div>
        <div className="Icons">
          <Instagram
            className="icon"
            style={{
              color: "#C33E71",
              fontSize: "50px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          />
          <YouTube
            className="icon"
            style={{
              color: "#E40000",
              transition: "0.3s",
              fontSize: "50px",
              cursor: "pointer",
            }}
          />
          <Twitter
            className="icon"
            style={{
              color: "#1C9CEA",
              fontSize: "50px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          />
          <LinkedIn
            className="icon"
            style={{
              color: "#2566AC",
              fontSize: "50px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          />
          <Facebook
            className="icon"
            style={{
              color: "#1773EA",
              fontSize: "50px",
              cursor: "pointer",
              transition: "0.3s",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
