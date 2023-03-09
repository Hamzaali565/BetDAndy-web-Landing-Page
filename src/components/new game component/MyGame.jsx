import React from "react";
import "./Index.css";
const MyGame = ({ heading, text, btntext, source }) => {
  return (
    <div className="GameContainer">
      {/* image */}
      <div className="GameImage">
        <img src={source} alt="" />
      </div>
      {/* heading */}
      <h5 className="GameHeading">{heading}</h5>
      <div className="GameTextContainer">
        <p className="GameText">{text}</p>
      </div>
      <div className="GameButtonContainer">
        <button className="GameButton">{btntext}</button>
      </div>
    </div>
  );
};

export default MyGame;
