import React from "react";
import "./TabButton.css";
const Tabbutton = ({ title, source, onclick, id, Mycolor }) => {
  return (
    // <div>
    <div
      className={["mainContainer6"]}
      style={{ backgroundColor: Mycolor }}
      onClick={onclick}
    >
      <img className="buttonIcon" id={id} src={source} alt="" />
      <div className="buttonTitle">{title}</div>
    </div>
    // {/* </div> */}
  );
};

export default Tabbutton;
