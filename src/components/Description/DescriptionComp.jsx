import React from "react";
import "./index.css";
const DescriptionComp = ({ heading, text }) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="DescriptionContainer">
        <div className="BoxAndDescription">
          <div className="Box" />
          <div className="DescriptionHeading">{heading}</div>
        </div>
        <div className="DescriptionText">{text}</div>
      </div>
    </div>
  );
};

export default DescriptionComp;
