import React from "react";
import "./TabButton.css";
const Tabbutton = ({ title, source, onclick, id }) => {
  return (
    <div className="mainContainer6" onClick={onclick}>
      <img className="buttonIcon" id={id} src={source} alt="" />
      <div className="buttonTitle">{title}</div>
    </div>
  );
};

export default Tabbutton;
