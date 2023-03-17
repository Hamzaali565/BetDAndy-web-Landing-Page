import React, { useEffect } from "react";
import "./Index.css";
import AOS from "aos";
import "aos/dist/aos.css";
const MyGame = ({ heading, text, btntext, source, onClick }) => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="GameContainer" data-aos="fade-up">
      {/* image */}
      <div className="GameImage">
        <img src={source} alt="" />
      </div>
      {/* heading */}
      <div className="headindAndText">
        <h5 className="GameHeading">{heading}</h5>
        <div className="GameTextContainer">
          <p className="GameText">{text}</p>
        </div>
      </div>
      <div className="GameButtonContainer" onClick={onClick}>
        <button className="GameButton">{btntext}</button>
      </div>
    </div>
  );
};

export default MyGame;
